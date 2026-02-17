import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, User, Home, MessageSquare } from 'lucide-react';
import { useForm, usePage } from '@inertiajs/react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactModal({ isOpen, onClose, property }) {
    const { flash } = usePage().props;

    // Initialize form with empty values
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        property_name: '',
        property_id: ''
    });

    useEffect(() => {
        if (property && isOpen) {
            setData({
                ...data,
                property_name: property.name || '',
                property_id: property.id || ''
            });
        }
    }, [property, isOpen]);

    // Show flash messages
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                duration: 4000,
                position: 'top-right',
            });
        }
        if (flash?.error) {
            toast.error(flash.error, {
                duration: 4000,
                position: 'top-right',
            });
        }
    }, [flash]);

    const submit = (e) => {
        e.preventDefault();

        console.log('=== Property Contact Modal Submission Started ===');
        console.log('Form Data:', data);

        // Show loading toast
        const loadingToast = toast.loading('Sending your inquiry...');

        post(route('contact.property'), {
            onSuccess: (page) => {
                console.log('=== Response Received ===');

                toast.dismiss(loadingToast);

                if (page.props.flash?.success) {
                    console.log('✅ Success:', page.props.flash.success);
                    reset();
                    onClose();
                } else if (page.props.flash?.error) {
                    console.error('❌ Server Error:', page.props.flash.error);
                }
            },
            onError: (errors) => {
                console.error('❌ Validation Errors:', errors);
                toast.dismiss(loadingToast);

                // Show validation errors
                if (errors && Object.keys(errors).length > 0) {
                    const firstError = Object.values(errors)[0];
                    toast.error(firstError, {
                        duration: 4000,
                        position: 'top-right',
                    });
                }
            },
            onFinish: () => {
                console.log('=== Property Contact Modal Submission Finished ===');
            }
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <Toaster />
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                {/* Overlay */}
                <div
                    className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-3xl">
                    {/* Header */}
                    <div className="px-8 py-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Contact About Property
                                </h3>
                                {property && (
                                    <p className="text-gray-600 mt-1">
                                        {property.name} • {property.address}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={submit} className="p-8">
                        {/* Hidden inputs to ensure property data is submitted */}
                        <input
                            type="hidden"
                            name="property_name"
                            value={data.property_name || ''}
                        />
                        <input
                            type="hidden"
                            name="property_id"
                            value={data.property_id || ''}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Property Interested In
                                </label>
                                <div className="relative">
                                    <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="display_property_name"
                                        value={data.property_name || (property?.name || '')}
                                        readOnly
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Message *
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                <textarea
                                    name="message"
                                    required
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    rows="4"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                    placeholder="Please provide details about your interest in this property..."
                                />
                            </div>
                        </div>


                        {/* Submit Buttons */}
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="flex-1 px-6 py-4 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}