import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            {/* Premium Footer */}
            <footer className="bg-gradient-to-b from-[#0f1a3d] to-[#080f24] text-white pt-20 pb-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f1424b] to-transparent"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-4">
                        {/* Logo & Company Info */}
                        <div className="space-y-6">
                            <div className="mb-6">
                                <img
                                    src="/logo.png"
                                    alt="Excel Residential Services"
                                    className="h-12 w-auto brightness-0 invert"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTQ1IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNDUiIGhlaWdodD0iNDgiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=";
                                    }}
                                />
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Excel Residential Services, Inc. sets the standard for excellence in property management with 23+ years of expertise and 17,000+ units managed nationwide.
                            </p>
                            <div className="flex items-center space-x-4 pt-4">
                                <a href="https://x.com/ExcelResident" className="text-white/60 hover:text-[#f1424b] transition-colors duration-300">
                                    <FaXTwitter className="w-5 h-5" />
                                </a>
                                <a href="https://www.facebook.com/people/Excel-Residential-Services/61572906533127/" className="text-white/60 hover:text-[#f1424b] transition-colors duration-300">
                                    <FaFacebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/excel_residential/"
                                    className="text-white/60 hover:text-[#E4405F] transition-colors duration-300"
                                >
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-8 pb-4 border-b border-white/10 relative inline-block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Quick Links
                                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#f1424b]"></div>
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'About Us', href: '/about-us' },
                                    { name: 'Our Services', href: '/services' },
                                    { name: 'Properties', href: 'public/properties' },
                                    { name: 'Blogs', href: '/blogs' },
                                    { name: 'Contact', href: '/contact' },
                                    { name: 'Privacy Policy', href: '/terms-policy' }
                                ].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            <svg className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services - Empty div kept for layout consistency */}
                        <div></div>

                        {/* Contact & Newsletter */}
                        <div>
                            <h4 className="text-lg font-bold mb-8 pb-4 border-b border-white/10 relative inline-block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Stay Updated
                                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#f1424b]"></div>
                            </h4>
                            <div className="mb-8">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="w-10 h-10 bg-[#22346e]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#f1424b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/90 text-sm font-medium mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            631 S Olive St
                                            <br />#660, Los Angeles, CA 90014, USA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-[#22346e]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#f1424b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="mailto:info@excelresidential.com" className="text-white/90 hover:text-[#f1424b] text-sm font-medium transition-colors duration-300 block" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            info@excelresidential.com
                                        </a>
                                        <p className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Phone: <a href="tel:+12132524444" className="hover:text-[#f1424b]">213 252 4444</a>
                                        </p>
                                        <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Mon - Fri: 08:30am - 04:30pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW: Below Footer Section (Added from your HTML) */}
                    <div className="py-1 border-t border-white/10 mb-[-44px]">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                            {/* Copyright Text */}
                            <div className="text-center md:text-left">
                                <p className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Copyright © 2026 Excel Residential Services
                                </p>
                            </div>

                            {/* Badges/Logos */}
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    className="alignright"
                                    src="https://excelresidential.com/wp-content/uploads/2025/01/Untitled-1-01-300x300.png"
                                    alt="Badge 1"
                                    width="30"
                                    height="30"
                                    style={{ objectFit: 'contain' }}
                                />
                                <img
                                    className="alignright"
                                    src="https://excelresidential.com/wp-content/uploads/2025/01/Untitled-1-02-300x300.png"
                                    alt="Badge 2"
                                    width="30"
                                    height="30"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Original Bottom Bar */}
                    {/* <div className="pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-white/50 text-sm mb-4 md:mb-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                                © {new Date().getFullYear()} Excel Residential Services, Inc. All rights reserved.
                            </div>
                            <div className="flex items-center space-x-6">
                                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Terms of Service
                                </a>
                                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Cookies
                                </a>
                                <div className="text-white/30 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Founded 2001
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </footer>
        </>
    );
}