// resources/js/Pages/Admin/Properties/Edit.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Upload,
    Image as ImageIcon,
    X,
    Camera,
    MapPin,
    Phone,
    DollarSign,
    Home,
    Building2,
    Users,
    Bed,
    Bath,
    Square,
    Calendar,
    Globe,
    Wifi,
    Car,
    Dog,
    CheckCircle,
    ArrowLeft,
    Plus,
    Minus,
    Save,
    RefreshCw,
    Eye
} from 'lucide-react';

export default function Edit({ property }) {
    const [previewImage, setPreviewImage] = useState(property.image ? `/storage/${property.image}` : null);
    const [amenities, setAmenities] = useState(property.amenities || []);
    const [removeImageFlag, setRemoveImageFlag] = useState(false);
    const fileInputRef = useRef(null);

    const { data, setData, put, processing, errors } = useForm({
        name: property.name || '',
        description: property.description || '',
        address: property.address || '',
        city: property.city || '',
        state: property.state || '',
        zip_code: property.zip_code || '',
        country: property.country || 'United States',
        contact: property.contact || '',
        email: property.email || '',
        price: property.price || '',
        property_type: property.property_type || 'apartment',
        status: property.status || 'active',
        bedrooms: property.bedrooms || 1,
        bathrooms: property.bathrooms || 1,
        square_feet: property.square_feet || '',
        year_built: property.year_built || new Date().getFullYear(),
        image: null,
        gallery: [],
        amenities: property.amenities || [],
        features: property.features || []
    });

    useEffect(() => {
        setAmenities(property.amenities || []);
    }, [property.amenities]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setRemoveImageFlag(false);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setData('image', null);
        setRemoveImageFlag(true);
        setPreviewImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleAddAmenity = () => {
        const newAmenity = prompt('Enter amenity name:');
        if (newAmenity && newAmenity.trim()) {
            const updatedAmenities = [...amenities, newAmenity.trim()];
            setAmenities(updatedAmenities);
            setData('amenities', updatedAmenities);
        }
    };

    const handleRemoveAmenity = (index) => {
        const newAmenities = amenities.filter((_, i) => i !== index);
        setAmenities(newAmenities);
        setData('amenities', newAmenities);
    };

    const propertyFeatures = [
        { id: 'pool', label: 'Swimming Pool', icon: '🏊' },
        { id: 'gym', label: 'Gym/Fitness Center', icon: '💪' },
        { id: 'parking', label: 'Parking', icon: <Car className="w-4 h-4" /> },
        { id: 'security', label: 'Security System', icon: '🔒' },
        { id: 'wifi', label: 'High-Speed WiFi', icon: <Wifi className="w-4 h-4" /> },
        { id: 'pets', label: 'Pet Friendly', icon: <Dog className="w-4 h-4" /> },
        { id: 'laundry', label: 'Laundry Facilities', icon: '🧺' },
        { id: 'elevator', label: 'Elevator', icon: '🔼' },
        { id: 'balcony', label: 'Balcony/Patio', icon: '🌅' },
        { id: 'furnished', label: 'Furnished', icon: '🛋️' }
    ];

    const handleFeatureToggle = (featureId) => {
        const currentFeatures = data.features || [];
        const newFeatures = currentFeatures.includes(featureId)
            ? currentFeatures.filter(id => id !== featureId)
            : [...currentFeatures, featureId];
        
        setData('features', newFeatures);
    };

    const submit = (e) => {
        e.preventDefault();
        
        // Prepare form data
        const formData = new FormData();
        
        // Add all form fields
        Object.keys(data).forEach(key => {
            if (key === 'image') {
                // Only add image if it's a file (new image selected)
                if (data[key] instanceof File) {
                    formData.append(key, data[key]);
                } else if (removeImageFlag) {
                    // Add remove_image flag if image was removed
                    formData.append('remove_image', '1');
                }
            } else if (key === 'amenities' || key === 'features') {
                // Handle arrays
                if (Array.isArray(data[key])) {
                    data[key].forEach((item, index) => {
                        formData.append(`${key}[${index}]`, item);
                    });
                }
            } else if (key === 'gallery') {
                // Handle gallery files
                if (Array.isArray(data[key]) && data[key].length > 0) {
                    data[key].forEach((file, index) => {
                        if (file instanceof File) {
                            formData.append(`gallery[${index}]`, file);
                        }
                    });
                }
            } else {
                // Handle regular fields
                formData.append(key, data[key] || '');
            }
        });

        // Submit using Inertia with form data
        router.put(route('admin.properties.update', property.id), formData, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                // Reset remove image flag on successful update
                setRemoveImageFlag(false);
            }
        });
    };

    const handleReset = () => {
        setData({
            name: property.name || '',
            description: property.description || '',
            address: property.address || '',
            city: property.city || '',
            state: property.state || '',
            zip_code: property.zip_code || '',
            country: property.country || 'United States',
            contact: property.contact || '',
            email: property.email || '',
            price: property.price || '',
            property_type: property.property_type || 'apartment',
            status: property.status || 'active',
            bedrooms: property.bedrooms || 1,
            bathrooms: property.bathrooms || 1,
            square_feet: property.square_feet || '',
            year_built: property.year_built || new Date().getFullYear(),
            image: null,
            gallery: [],
            amenities: property.amenities || [],
            features: property.features || []
        });
        setPreviewImage(property.image ? `/storage/${property.image}` : null);
        setAmenities(property.amenities || []);
        setRemoveImageFlag(false);
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${property.name} | ExcelResidential`} />
            
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <Link
                                href={route('admin.properties.index')}
                                className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-600" />
                            </Link>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Edit Property
                                </h1>
                                <p className="text-gray-600 mt-1">
                                    Update property details for {property.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={submit} className="space-y-8">
                    {/* Property Overview Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-xl">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Property Overview</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Property Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Property Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="e.g., Luxury Downtown Apartments"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                )}
                            </div>

                            {/* Property Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Property Type *
                                </label>
                                <select
                                    value={data.property_type}
                                    onChange={e => setData('property_type', e.target.value)}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900 appearance-none"
                                >
                                    <option value="apartment">Apartment Building</option>
                                    <option value="condo">Condominium</option>
                                    <option value="house">Single Family House</option>
                                    <option value="townhouse">Townhouse</option>
                                    <option value="commercial">Commercial Property</option>
                                    <option value="villa">Villa</option>
                                    <option value="duplex">Duplex</option>
                                    <option value="triplex">Triplex</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    required
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    placeholder="Describe the property, its features, and unique selling points..."
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900"
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-xl">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Location Information</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Address *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                    placeholder="123 Main Street"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-xl">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Contact Number *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        required
                                        value={data.contact}
                                        onChange={e => setData('contact', e.target.value)}
                                        placeholder="(555) 123-4567"
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900"
                                    />
                                </div>
                                {errors.contact && (
                                    <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="contact@examplerealty.com"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Images & Media */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-xl">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Images & Media</h2>
                        </div>

                        {/* Featured Image Upload */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                                Featured Image {property.image && <span className="text-gray-500">(Current image shown)</span>}
                            </label>
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Current Image Preview */}
                                <div className="w-full md:w-1/3">
                                    {previewImage ? (
                                        <div className="relative">
                                            <img
                                                src={previewImage}
                                                alt={property.name}
                                                className="w-full h-64 object-cover rounded-2xl"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleRemoveImage}
                                                className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                                                    Current Image
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-gray-50">
                                            <ImageIcon className="w-12 h-12 text-gray-400 mb-4" />
                                            <p className="text-gray-500 text-center">
                                                No image selected
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Upload Area */}
                                <div className="flex-1">
                                    <div 
                                        onClick={() => fileInputRef.current?.click()}
                                        className="h-64 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                                    >
                                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                        <p className="text-gray-700 font-medium mb-2">
                                            {previewImage ? 'Change Image' : 'Upload Featured Image'}
                                        </p>
                                        <p className="text-gray-500 text-sm text-center px-4">
                                            Click to upload or drag and drop<br />
                                            PNG, JPG, GIF up to 5MB
                                        </p>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    {errors.image && (
                                        <p className="mt-2 text-sm text-red-600">{errors.image}</p>
                                    )}
                                    {property.image && !data.image && !removeImageFlag && (
                                        <p className="mt-2 text-sm text-gray-500">
                                            Current image will be kept if no new image is selected
                                        </p>
                                    )}
                                    {removeImageFlag && (
                                        <p className="mt-2 text-sm text-amber-600">
                                            Current image will be removed on save
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Gallery Images */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                                Gallery Images (Optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={e => setData('gallery', Array.from(e.target.files))}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#22346e] file:text-white hover:file:bg-[#1a2a5a]"
                            />
                        </div>
                    </div>

                    {/* Submit Section */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    Save Changes
                                </h3>
                                <p className="text-gray-600">
                                    Review all updates before saving. Changes will be reflected immediately.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Reset
                                </button>
                                <Link
                                    href={route('admin.properties.index')}
                                    className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-8 py-4 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {processing ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="w-5 h-5" />
                                            Update Property
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}