<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\HttpCache\Store;

class PropertyController extends Controller
{

    public function index(Request $request)
    {
        $query = Property::query();

        // Server-side search
        if ($request->has('search') && $request->search) {
            $searchTerm = $request->search;
            $query->where(function($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                  ->orWhere('address', 'like', "%{$searchTerm}%")
                  ->orWhere('contact', 'like', "%{$searchTerm}%")
                  ->orWhere('description', 'like', "%{$searchTerm}%");
            });
        }

        return Inertia::render('Admin/Property/Index', [
            'properties' => $query->latest()->paginate(10)->withQueryString(),
            'filters' => $request->only(['search'])
        ]);
    }

    public function publicindex(Request $request){
        $query = Property::query();

        // Server-side search
        if ($request->has('search') && $request->search) {
            $searchTerm = $request->search;
            $query->where(function($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                  ->orWhere('address', 'like', "%{$searchTerm}%")
                  ->orWhere('contact', 'like', "%{$searchTerm}%")
                  ->orWhere('description', 'like', "%{$searchTerm}%");
            });
        }

        return Inertia::render('Properties', [
            'properties' => $query->latest()->paginate(10)->withQueryString(),
            'filters' => $request->only(['search'])
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Property/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'address' => 'required',
            'contact' => 'required',
            'image' => 'nullable|image|max:2048', // 2MB
        ]);

        if ($request->hasFile('image')) {
            // This returns: properties/filename.png
            $validated['image'] = $request->file('image')->store('properties', 'public');
        }

        Property::create($validated);

        return redirect()->route('admin.properties.index')->with('success', 'Property created successfully.');
    }
    public function edit(Property $property)
    {
        return Inertia::render('Admin/Property/Edit', [
            'property' => $property
        ]);
    }

    public function update(Request $request, Property $property)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'address' => 'required',
            'contact' => 'required',
            'image' => 'nullable|image|max:2048',
        ]);
        if ($request->hasFile('image')) {
            // optional: old image delete
            if ($property->image) {
                Storage::disk('public')->delete($property->image);
            }

            $validated['image'] =
                $request->file('image')->store('properties', 'public');
        }

        $property->update($validated);

        return redirect()->route('admin.properties.index')->with('success', 'Property updated successfully.');
    }

    public function destroy(Property $property)
    {
        $property->delete();

        return redirect()->back()
            ->with('success', 'Property deleted successfully');
    }

    public function SendMail()
    {
        
    }
}
