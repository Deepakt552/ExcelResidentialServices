import React, { useEffect } from 'react';
import { Link } from "@inertiajs/react";
import Seo from '@/Components/Seo';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ChevronRight,
    MessageSquare,
    Calendar,
    CheckCircle,
    User,
    Building2,
    Shield,
    Star,
    ArrowRight,
    Send
} from 'lucide-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { useForm, usePage } from '@inertiajs/react';
import Logopage from '@/Components/logopage';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        message: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('=== Contact Form Submission Started ===');
        console.log('Form Data:', data);

        // Show loading toast
        const loadingToast = toast.loading('Sending your message...');

        post(route('contact.send'), {
            onSuccess: (page) => {
                console.log('=== Response Received ===');
                console.log(page);

                toast.dismiss(loadingToast);

                if (page.props.flash?.success) {
                    console.log('✅ Success:', page.props.flash.success);
                    // Toast is handled by useEffect
                    reset();
                } else if (page.props.flash?.error) {
                    console.error('❌ Server Error:', page.props.flash.error);
                    // Error toast is handled by useEffect
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
                console.log('=== Contact Form Submission Finished ===');
            },
            preserveScroll: true
        });
    };

    const seoData = {
        title: "Contact Us | Excel Residential Services",
        description: "Get in touch with Excel Residential Services for professional property management in Los Angeles and California. Call 213 252 4444.",
        keywords: "Contact Excel Residential, Property Management Contact, Los Angeles Real Estate Contact"
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Toaster />
            <Seo {...seoData} />
            <Header />
            <Logopage />

            {/* Hero Section - No changes */}
            <section className="relative py-32 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#f1424b]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                            <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Get In Touch
                            </span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Let's Start<br />Your Property Journey
                        </h1>

                        <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Connect with our expert team for personalized property management solutions tailored to your needs.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                                <div className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>213 252 4444</div>
                                <div className="text-white/70 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Mon - Fri: 08:30am - 04:30pm</div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                                <div className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>info@excelresidential.com</div>
                                {/* <div className="text-white/70 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Response within 2 days</div> */}
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Clock className="w-8 h-8 text-white mx-auto mb-4" />
                                <div className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Mon - Fri: 08:30am - 04:30pm</div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section - UPDATED */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column: Contact Info - Now in a card */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="h-px w-8 bg-[#f1424b]"></div>
                                        <span className="text-[#22346e] font-medium tracking-wider uppercase text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            Contact Info
                                        </span>
                                        <div className="h-px w-8 bg-[#f1424b]"></div>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-[#22346e] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Get in Touch Today
                                    </h2>

                                    <div className="space-y-6">
                                        {/* Phone */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-5 h-5 text-[#22346e]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#22346e] mb-1 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Call Us</h3>
                                                <a href="tel:+12132524444" className="text-gray-700 hover:text-[#f1424b] font-medium transition-colors duration-300 block text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    213 252 4444
                                                </a>

                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#f1424b]/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-5 h-5 text-[#f1424b]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#22346e] mb-1 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email Us</h3>
                                                <a href="mailto:info@excelresidential.com" className="text-gray-700 hover:text-[#f1424b] font-medium transition-colors duration-300 block text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    info@excelresidential.com
                                                </a>
                                                {/* <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Response within 2 business hours</p> */}
                                            </div>
                                        </div>

                                        {/* Office */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#22346e] mb-1 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Visit Us</h3>
                                                <p className="text-gray-700 font-medium mb-1 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    631 S Olive St
                                                    <br />#660, Los Angeles, CA 90014, USA
                                                </p>
                                                {/* <p className="text-gray-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Mon - Fri: 08:30am - 04:30pm</p> */}
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Clock className="w-5 h-5 text-amber-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#22346e] mb-1 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Business Hours</h3>
                                                <div className="space-y-1">
                                                    <p className="text-gray-700 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        <span className="font-medium">Mon-Fri:</span>Mon - Fri: 08:30am - 04:30pm
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trust Badge - Made smaller */}
                                    <div className="mt-8 bg-gradient-to-r from-[#22346e]/5 to-[#f1424b]/5 rounded-xl p-4 border border-gray-200">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Shield className="w-6 h-6 text-[#22346e]" />
                                            <div>
                                                <h3 className="font-bold text-[#22346e] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Quick Response </h3>

                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="w-3 h-3 text-yellow-500" />
                                            <span className="text-xs text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>23+ years of trusted property management</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form - Also in matching card */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
                                    <div className="text-center mb-8">
                                        <MessageSquare className="w-10 h-10 text-[#22346e] mx-auto mb-4" />
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#22346e] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Send Us a Message
                                        </h2>
                                        <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Fill out the form below and our specialist will contact you within 2 hours
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Fields - Compact */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    First Name *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                        <User className="w-4 h-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        value={data.first_name}
                                                        onChange={e => setData('first_name', e.target.value)}
                                                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                        placeholder="John"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Last Name *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                        <User className="w-4 h-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        value={data.last_name}
                                                        onChange={e => setData('last_name', e.target.value)}
                                                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                        placeholder="Doe"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Fields - Compact */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                        <Mail className="w-4 h-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={data.email}
                                                        onChange={e => setData('email', e.target.value)}
                                                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                        placeholder="john@example.com"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                        <Phone className="w-4 h-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={data.phone}
                                                        onChange={e => setData('phone', e.target.value)}
                                                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                        placeholder="213 525 4444"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Inquiry Type - Compact */}
                                        <div className="space-y-2">
                                            <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Inquiry Type
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <Building2 className="w-4 h-4 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="inquiry_type"
                                                    value={data.inquiry_type}
                                                    onChange={e => setData('inquiry_type', e.target.value)}
                                                    className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                    placeholder="Property Management, Leasing, Maintenance, etc."
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Message - Compact */}
                                        <div className="space-y-2">
                                            <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Your Message *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-3 top-3">
                                                    <MessageSquare className="w-4 h-4 text-gray-400" />
                                                </div>
                                                <textarea
                                                    rows="4"
                                                    name="message"
                                                    value={data.message}
                                                    onChange={e => setData('message', e.target.value)}
                                                    className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 resize-none text-sm"
                                                    placeholder="Tell us about your property management needs..."
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <span>{processing ? 'Sending...' : 'Send Message'}</span>
                                            {!processing && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
                                        </button>

                                        <p className="text-center text-gray-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            By submitting this form, you agree to our Privacy Policy and consent to be contacted by Excel Residential Services.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Section - Made more compact */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                                <span className="text-[#f1424b] tracking-widest text-xs font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Quick Actions
                                </span>
                                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Need Immediate Assistance?
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Connect with our team through your preferred method
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Call */}
                            <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Call Now
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Speak directly with our property management specialists
                                </p>
                                <a href="tel:+18881234567" className="inline-flex items-center gap-1 text-[#22346e] hover:text-[#f1424b] font-medium transition-colors duration-300 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    <span>213 525 4444</span>
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>

                            {/* Schedule */}
                            <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Schedule Consultation
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Book a personalized consultation at your convenience
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-1 text-[#22346e] hover:text-[#f1424b] font-medium transition-colors duration-300 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    <span>Book Online</span>
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* Emergency */}
                            <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <div className="w-full text-center text-red-600 font-bold text-[0.85rem]">24/7</div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Emergency Service
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Immediate assistance for urgent property matters
                                </p>
                                <a href="tel:+18881234567" className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium transition-colors duration-300 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    <span>Emergency Line</span>
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;