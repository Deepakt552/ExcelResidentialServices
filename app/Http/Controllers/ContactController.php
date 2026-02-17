<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PropertyContactMail;

use App\Models\ContactInquiry;
use App\Models\Property;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

use App\Models\Blog;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ContactController extends Controller
{
    public function sendPropertyContact(Request $request)
    {
        Log::info('=== Property Contact Form Submission Started ===');
        Log::info('Request Data:', $request->all());
        
        // Validation rules
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'required|string|max:2000',
            'property_id' => 'nullable|exists:properties,id',
            'property_name' => 'nullable|string|max:255'
        ]);

        if ($validator->fails()) {
            Log::warning('Validation failed:', $validator->errors()->toArray());
            return back()
                ->withErrors($validator)
                ->withInput()
                ->with('error', 'Please check your form inputs.');
        }

        try {
            // Get property details if property_id is provided
            $property = null;
            if ($request->property_id) {
                $property = Property::find($request->property_id);
                Log::info('Property found:', ['property' => $property]);
            }

            // Prepare data for email
            $contactData = [
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'message' => $request->message,
                'property_name' => $property ? $property->name : $request->property_name,
                'property_address' => $property ? $property->address : null,
                'property_price' => $property ? $property->price : null,
                'property_id' => $property ? $property->id : null,
                'contact_date' => now()->format('F j, Y \a\t g:i A')
            ];
            
            Log::info('Contact data prepared:', $contactData);

            // Optional: Save to database FIRST (so we have record if mail fails)
            try {
                $this->saveContactToDatabase($contactData);
                Log::info('Property Contact saved to database.');
            } catch (\Exception $dbException) {
                Log::error('Database save failed: ' . $dbException->getMessage());
                // Continue
            }

            // Send email to admin/agent
            try {
                $toEmail = config('mail.contact.to_address', 'blog.calispaceflty@gmail.com');
                Log::info('Attempting to send email to: ' . $toEmail);
                
                Mail::to($toEmail)->send(new PropertyContactMail($contactData));
                
                Log::info('✅ Email sent successfully!');
            } catch (\Exception $mailException) {
                Log::error('❌ Email sending failed: ' . $mailException->getMessage());
                Log::error('Mail Exception Stack Trace: ' . $mailException->getTraceAsString());
                
                $errorMessage = 'Failed to send email.';
                if (str_contains($mailException->getMessage(), 'Authentication Required') || str_contains($mailException->getMessage(), '530')) {
                    $errorMessage .= ' Server authentication failed. Please check SMTP credentials.';
                } else {
                    $errorMessage .= ' Please try again or contact us directly.';
                }

                throw new \Exception($errorMessage);
            }

            Log::info('=== Property Contact Form Submission Completed Successfully ===');
            
            return redirect()->back()
                ->with('success', 'Your message has been sent successfully! We will get back to you soon.');
                
        } catch (\Exception $e) {
            Log::error('❌ Property contact form error: ' . $e->getMessage());
            Log::error('Stack trace: ' . $e->getTraceAsString());

            return redirect()->back()
                ->with('error', $e->getMessage() ?: 'Something went wrong. Please try again later.')
                ->withInput();
        }
    }

  public function index(Request $request)
{
    $contacts = ContactInquiry::with(['property'])
        ->latest()
        ->paginate(15);

    $stats = [
        'pending' => ContactInquiry::where('status', 'pending')->count(),
        'contacted' => ContactInquiry::where('status', 'contacted')->count(),
        'closed' => ContactInquiry::where('status', 'closed')->count(),
        'spam' => ContactInquiry::where('status', 'spam')->count(),
    ];

    return Inertia::render('Admin/Contact/Index', [
        'contacts' => [
            'data' => $contacts->items(),
            'links' => $contacts->links() ? $contacts->links()->elements : [],
            'from' => $contacts->firstItem(),
            'to' => $contacts->lastItem(),
            'total' => $contacts->total(),
            'stats' => $stats,
        ],
        'filters' => (object)[
            'search' => $request->input('search', ''),
            'status' => $request->input('status', ''),
            'sort' => $request->input('sort', 'created_at'),
            'order' => $request->input('order', 'desc'),
        ],
    ]);
}
    /**
     * Optional method to save contact inquiry to database
     */
    private function saveContactToDatabase(array $data)
    {
        try {
            // Check if ContactInquiry class exists
            if (class_exists('App\Models\ContactInquiry')) {
                \App\Models\ContactInquiry::create([
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'phone' => $data['phone'],
                    'message' => $data['message'],
                    'property_id' => $data['property_id'],
                    'property_name' => $data['property_name'],
                    'status' => 'pending'
                ]);
            } else {

                return;
            }
        } catch (\Exception $e) {
            return;
        }
    }


/////////////////////////////////////////////////////////////////////////

    // Add this new method to your existing ContactController class

    public function sendGeneralContact(Request $request)
    {
        Log::info('=== General Contact Form Submission Started ===');
        
        // Validation rules for general contact form
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'inquiry_type' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            Log::warning('General Contact Validation Failed:', $validator->errors()->toArray());
            return redirect()->back()
                ->withErrors($validator)
                ->withInput()
                ->with('error', 'Please check your form inputs.');
        }

        try {
            // Combine first and last name
            $fullName = $request->first_name . ' ' . $request->last_name;
            
            // Prepare data for email
            $contactData = [
                'name' => $fullName,
                'email' => $request->email,
                'phone' => $request->phone,
                'property_name' => $request->inquiry_type,
                'message' => $request->message,
                'contact_date' => now()->format('F j, Y \a\t g:i A'),
                'source' => 'general_contact_form'
            ];

            Log::info('Preparing to send General Contact Email to admin.', ['data' => $contactData]);

            // data DB save attempt first (as backup)
            try {
                $this->saveGeneralContactToDatabase($contactData);
                Log::info('General Contact saved to database.');
            } catch (\Exception $dbException) {
                Log::error('Database save failed (non-critical): ' . $dbException->getMessage());
            }

            // Send email to admin
            try {
                $toEmail = config('mail.contact.to_address', 'blog.calispaceflty@gmail.com');
                Log::info("Sending email to: {$toEmail}");

                Mail::to($toEmail)->send(new PropertyContactMail($contactData));
                Log::info('✅ General Contact Email sent successfully!');
                } catch (\Exception $mailException) {
                Log::error('❌ General Contact Email sending failed: ' . $mailException->getMessage());
                Log::error($mailException->getTraceAsString());
                
                $errorMessage = 'Failed to send email notification.';
                if (str_contains($mailException->getMessage(), 'Authentication Required') || str_contains($mailException->getMessage(), '530')) {
                    $errorMessage .= ' Server authentication failed. Please check SMTP credentials.';
                } else {
                    $errorMessage .= ' Please try again or contact us directly.';
                }
                
                throw new \Exception($errorMessage);
            }

            return redirect()->back()
                ->with('success', 'Your Request has been sent successfully! We will get back to you soon.');

        } catch (\Exception $e) {
            Log::error('❌ General contact form critical error: ' . $e->getMessage());
            
            return redirect()->back()
                ->with('error', $e->getMessage() ?: 'Something went wrong. Please try again later.')
                ->withInput();
        }
    }

/**
 * Save general contact inquiry to database
 */
private function saveGeneralContactToDatabase(array $data)
{
    try {
        ContactInquiry::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'] ?? null,
            'message' => $data['message'],
            'property_name' => $data['inquiry_type'] ?? 'General Inquiry',
            'status' => 'pending'
        ]);
    } catch (\Exception $e) {
        Log::error('Failed to save contact inquiry: ' . $e->getMessage());
    }
}




}
