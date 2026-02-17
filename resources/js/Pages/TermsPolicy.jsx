import React from 'react';
import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import Layout from '@/Layouts/Layout';
import {
    Shield,
    Lock,
    Eye,
    Mail,
    Home,
    Phone,
    Calendar,
    Users,
    FileText,
    CheckCircle,
    AlertCircle,
    ChevronRight,
    BookOpen
} from 'lucide-react';

export default function TermsPolicy() {
    const seoData = {
        title: "Privacy Policy & Terms | Excel Residential Services",
        description: "Read our Privacy Policy and Terms of Service. Learn how Excel Residential Services protects your data and your rights.",
        keywords: "Privacy Policy, Terms of Service, Legal, Data Protection, User Rights, Excel Residential Services"
    };

    return (
        <Layout>
            <Seo {...seoData} />

            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                            <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Privacy & Legal
                            </span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                        </div>

                        <div className="flex justify-center mb-8">
                            <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm">
                                <Shield className="w-20 h-20 text-white" />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Privacy Policy<br />& Terms of Service
                        </h1>

                        <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Your trust and privacy are our top priorities. Learn how we protect your information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#22346e] mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Quick Navigation
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <a href="#privacy-commitment" className="group">
                                <div className="bg-gray-50 hover:bg-gradient-to-r hover:from-[#22346e]/5 hover:to-[#f1424b]/5 border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#22346e] rounded-xl">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-[#22346e] transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Privacy Commitment
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                Our promise to protect your data
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#information-collection" className="group">
                                <div className="bg-gray-50 hover:bg-gradient-to-r hover:from-[#22346e]/5 hover:to-[#f1424b]/5 border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#22346e] rounded-xl">
                                            <Eye className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-[#22346e] transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Information Collection
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                What & when we collect
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#rights-protection" className="group">
                                <div className="bg-gray-50 hover:bg-gradient-to-r hover:from-[#22346e]/5 hover:to-[#f1424b]/5 border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#22346e] rounded-xl">
                                            <Lock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-[#22346e] transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Your Rights
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                Control over your information
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Privacy Commitment */}
                        <div id="privacy-commitment" className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-xl">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Our Privacy Commitment
                                </h2>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <div className="prose prose-lg max-w-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                        <strong className="text-[#22346e]">Excel Residential Services</strong> believes in the Privacy of our users and consumers. It is also committed to its data protection and its data privacy.
                                    </p>

                                    <div className="bg-gradient-to-r from-[#22346e]/5 to-[#f1424b]/5 rounded-xl p-6 mb-8">
                                        <div className="flex items-start gap-4">
                                            <FileText className="w-6 h-6 text-[#22346e] flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#22346e] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    About This Policy
                                                </h3>
                                                <p className="text-gray-700">
                                                    This Privacy Policy describes how Excel Residential Services collects and uses the information of its users and/or consumers. The policy will be updated from time to time in accordance with the State and Federal Laws.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6 mb-8">
                                        <div className="flex items-start gap-4">
                                            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Important Notice
                                                </h3>
                                                <p className="text-gray-700">
                                                    Please read the Privacy Policy and CCPA together as it also applies to the Personal Information that is collected pursuant to CCPA.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information Collection */}
                        <div id="information-collection" className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-xl">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Information Collection & Use
                                </h2>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                {/* When Information is Collected */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        <Calendar className="w-6 h-6" />
                                        When is Information Collected?
                                    </h3>
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            Excel Residential Services collects any/all information only when it is <strong className="text-[#22346e]">voluntarily submitted</strong> by its users in order to obtain certain information or details.
                                        </p>
                                    </div>
                                    <div className="mt-6 bg-gradient-to-r from-[#22346e]/10 to-[#f1424b]/10 rounded-xl p-6 border border-[#22346e]/20">
                                        <p className="text-gray-700 leading-relaxed">
                                            By clicking on the <strong className="text-[#22346e]">'Send Message'</strong> button provided on the website, users agree to have their information shared with us and allow us to contact them via Personal Information that is submitted to us.
                                        </p>
                                    </div>
                                </div>

                                {/* Why & How Information is Used */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        <CheckCircle className="w-6 h-6" />
                                        Why and How is Collected Information Used?
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-blue-100 rounded-lg">
                                                    <Mail className="w-5 h-5 text-[#22346e]" />
                                                </div>
                                                <h4 className="font-semibold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Primary Uses
                                                </h4>
                                            </div>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-[#f1424b] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">Provide requested property information</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-[#f1424b] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">Respond to customer service requests</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-[#f1424b] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">Communicate marketing information</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-green-100 rounded-lg">
                                                    <BookOpen className="w-5 h-5 text-[#22346e]" />
                                                </div>
                                                <h4 className="font-semibold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Improvement Efforts
                                                </h4>
                                            </div>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-[#f1424b] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">Improve website experience</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-[#f1424b] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">Enhance marketing efforts</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-[#f1424b] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">Legal compliance requirements</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-red-700">Important:</strong> Information may be disclosed when legally compelled to do so, and the law requires it for the protection of legal rights.
                                        </p>
                                    </div>
                                </div>

                                {/* Minors Section */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        <Users className="w-6 h-6" />
                                        What if You are a Minor?
                                    </h3>

                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                                <AlertCircle className="w-8 h-8 text-[#22346e]" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-[#22346e] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Protection of Minors
                                                </h4>
                                                <p className="text-gray-700 leading-relaxed">
                                                    Excel Residential Services does not collect any information from minors under the age of <strong className="text-[#22346e]">16 years</strong> or the equivalent age as specified by law. If anyone requires such website access under equal housing opportunity, it can only be in conjunction with permission and guidance from the parents or guardians.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Parties */}
                                <div>
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        <Lock className="w-6 h-6" />
                                        Third Party Access to Information
                                    </h3>

                                    <div className="bg-white border-2 border-[#22346e]/20 rounded-xl p-8">
                                        <div className="flex items-center justify-center mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#22346e] to-[#f1424b] rounded-full blur opacity-20"></div>
                                                <div className="relative p-4 bg-white rounded-full border-2 border-[#22346e]/20">
                                                    <Shield className="w-12 h-12 text-[#22346e]" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-center text-gray-700 text-lg leading-relaxed mb-6">
                                            <strong className="text-[#22346e]">Personally Identifiable Information</strong> is <span className="text-[#f1424b] font-semibold">never</span> used for any kind of sale, trade, or otherwise transferred to third parties unless users are provided with advance notice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rights Protection */}
                        <div id="rights-protection" className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-xl">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Your Rights & Protection
                                </h2>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                {/* Privacy Protection */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Your Right to Privacy
                                    </h3>

                                    <div className="bg-gradient-to-r from-[#22346e]/5 to-[#f1424b]/5 rounded-xl p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-[#22346e] rounded-xl">
                                                <Shield className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Our Commitment
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Excel Residential Services safeguards the <strong className="text-[#22346e]">fundamental Right of Privacy</strong> of all of its users and will always take all reasonable efforts to protect it.
                                        </p>
                                    </div>
                                </div>

                                {/* Amendments */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Policy Amendments
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                            <p className="text-gray-700 leading-relaxed">
                                                <strong className="text-[#22346e]">All rights are reserved</strong> with Excel Residential Services, for the amendments to this Privacy Policy to cope up with the legal requirements, technological advancements and growing business operations.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                            <p className="text-gray-700 leading-relaxed">
                                                However, <strong className="text-[#22346e]">any changes and amendments in the future will not affect</strong> the information that is submitted to us in a manner detrimental or materially inconsistent with this Privacy Policy, without prior consent.
                                            </p>
                                        </div>

                                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                            <p className="text-gray-700 leading-relaxed font-semibold">
                                                <strong className="text-red-700">IMPORTANT:</strong> ALL users are requested to read the policies carefully and review them periodically for updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-6 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        <Mail className="w-6 h-6" />
                                        Contact Us
                                    </h3>

                                    <div className="bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-2xl p-8 md:p-10 text-white">
                                        <div className="max-w-2xl mx-auto text-center">
                                            <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                                All Users and Consumers are requested hereby for any questions or concerns regarding Excel Residential Services PRIVACY POLICY, to write to us at:
                                            </p>

                                            <div className="space-y-6">
                                                <div>
                                                    <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                                                        <Mail className="w-5 h-5" />
                                                        <a
                                                            href="mailto:info@Excelresidential.com"
                                                            className="text-white hover:text-white/90 font-semibold text-lg transition-colors duration-300"
                                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                        >
                                                            info@Excelresidential.com
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-white/80 mb-4">or by postal mail at:</p>
                                                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                                                        <div className="flex items-center justify-center gap-4 mb-4">
                                                            <Home className="w-8 h-8 text-white" />
                                                            <h4 className="text-xl font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                                Excel Residential Services
                                                            </h4>
                                                        </div>
                                                        <p className="text-white/90 text-lg leading-relaxed">
                                                            631 S Olive St
                                                            <br />#660, Los Angeles, CA 90014, USA
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Closing Section */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200">
                                <div className="max-w-2xl mx-auto">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-4">
                                            <div className="h-px w-12 bg-gradient-to-r from-[#22346e] to-transparent"></div>
                                            <Shield className="w-12 h-12 text-[#22346e]" />
                                            <div className="h-px w-12 bg-gradient-to-l from-[#22346e] to-transparent"></div>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Thank You for Trusting Us
                                    </h3>

                                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                        Your privacy and trust are the foundation of our relationship. We are committed to maintaining the highest standards of data protection and privacy.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <Phone className="w-5 h-5" />
                                            Contact Us
                                        </Link>

                                        <Link
                                            href="/"
                                            className="inline-flex items-center justify-center gap-3 bg-white text-[#22346e] hover:text-[#f1424b] font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-[#22346e] transition-all duration-300 transform hover:-translate-y-1"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <Home className="w-5 h-5" />
                                            Return Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Last Updated */}
            <div className="bg-gray-50 border-t border-gray-200 py-8">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Last Updated: {new Date().toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        <p className="text-gray-500 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            © {new Date().getFullYear()} Excel Residential Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}