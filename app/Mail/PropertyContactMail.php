<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PropertyContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contactData;

    /**
     * Create a new message instance.
     */
    public function __construct(array $contactData)
    {
        $this->contactData = $contactData;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        $fromAddress = config('mail.from.address') ?: 'noreply@excelresidential.com';
        $fromName = config('mail.from.name') ?: 'Excel Residential System';

        return $this->from($fromAddress, $fromName)
            ->replyTo($this->contactData['email'], $this->contactData['name'])
            ->subject('New Property Inquiry: ' . ($this->contactData['property_name'] ?? 'General Inquiry'))
            ->markdown('emails.property-contact')
            ->with(['data' => $this->contactData]);
    }
}