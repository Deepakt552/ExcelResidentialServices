import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { AlignRightIcon } from '@/Components/AlignRightIcon';
import { XIcon } from '@/Components/XIcon';

export default function Header() { // Accept auth prop
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth } = usePage().props;

    const user = auth?.user;
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);


    const menuItems = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/about-us" },
        { name: "SERVICES", href: "/services" },
        { name: "PROPERTIES", href: "/public/Properties" },
        { name: "BLOG", href: route('blogs.index') },
        { name: "CONTACT", href: "/contact" },
        ...(user?.role === 'admin'
            ? [{ name: "DASHBOARD", href: route('admin.blogs.index') }]
            : []
        ),
    ];

    const propertyImages = [
        "/melrose.png",

    ];

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Logo on Top Left Corner - Responsive positioning */}
            {/* <div className=" top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-[5rem] z-50">
                <Link href="/">
                    <div className=" w-
                        flex items-center
                        bg-[#fff]/90
                        backdrop-blur-md
                        rounded-lg sm:rounded-xl
                        px-3 sm:px-4 lg:px-5
                        py-2 sm:py-3
                        border border-[#0F1E3A]/10
                        shadow-lg shadow-[#0F1E3A]/10
                        hover:border-[#E6ECF3]/40
                        hover:shadow-xl
                        hover:scale-[1.03]
                        transition-all duration-300
                        w-max
                    ">
                        <img
                            src="https://excelresidential.com/wp-content/uploads/2025/01/cropped-Excel-Residential-Icon-1-145x48.png"
                            alt="Excel Residential Logo"
                            className="h-6 sm:h-7 lg:h-8 w-auto"
                        />
                    </div>
                </Link>
            </div> */}


            {/* Menu Button - Moved left to accommodate auth section */}
            <div className="fixed top-6 sm:top-8 lg:top-10 right-6 sm:right-28 lg:right-[14rem] z-50">
                <button
                    className="flex items-center justify-center bg-white backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-white/90 transition-all duration-300 group shadow-md"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <XIcon
                            size={24}
                            className="text-[#f1424b] transition-colors duration-300"
                        />
                    ) : (
                        <AlignRightIcon
                            size={24}
                            className="text-[#22346e] transition-colors duration-300"
                        />
                    )}
                </button>
            </div>

            {/* Additional Horizontal Lines for Visual Design - Responsive */}
            {/* <div className="fixed top-12 sm:top-16 left-0 w-full z-30 pointer-events-none">
                <div className="container mx-auto px-4">
                    <hr className="border-t border-white/20" />
                </div>
            </div> */}

            {/* Decorative Horizontal Lines in Corners - Hide on mobile */}
            {/* <div className="hidden sm:block fixed top-4 left-20 z-40 pointer-events-none">
                <div className="w-16 h-0.5 bg-white/40"></div>
            </div>
            <div className="hidden sm:block fixed top-4 right-20 z-40 pointer-events-none">
                <div className="w-16 h-0.5 bg-white/40"></div>
            </div> */}

            {/* Menu Page - Slides from top to bottom */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-700 ease-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
            >
                {/* Main Background with Gradient */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0d1a3d] transition-transform duration-700 ease-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                ></div>

                {/* Menu Content - Split Layout */}
                <div className="relative z-10 h-full w-full overflow-y-auto">
                    {/* Close Button (Mobile) - Top Right */}
                    {/* <div className="absolute top-4 right-4 sm:hidden z-20">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white p-2"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> */}

                    {/* Split Layout Container */}
                    <div className="h-full w-full flex flex-col lg:flex-row">
                        {/* Left Side - Menu Items */}
                        <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-0 order-2 lg:order-1">
                            <div className="w-full max-w-lg">
                                <h2 className="font-montserrat text-white/70 text-sm font-semibold tracking-widest uppercase mb-6 sm:mb-8 text-center lg:text-left">
                                    Navigation
                                </h2>

                                <div className="space-y-0 sm:space-y-1">
                                    {menuItems.map((item, index) => (
                                        <div
                                            key={item.name}
                                            className="overflow-hidden"
                                        >
                                            <Link
                                                href={item.href}
                                                className={`block font-playfair text-1xl sm:text-2xl lg:text-4xl xl:text-3xl font-bold text-white hover:text-[#f1424b] transition-all duration-500 transform hover:translate-x-2 lg:hover:translate-x-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                style={{
                                                    transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms'
                                                }}
                                            >
                                                <span className="inline-block relative group mb-2">
                                                    {item.name}
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-[#f1424b] group-hover:w-full transition-all duration-500"></span>
                                                </span>
                                            </Link>
                                        </div>
                                    ))}

                                    {/* Authentication in Menu */}
                                    <div className="mt-6 sm:mt-8 overflow-hidden">
                                        {user ? (
                                            <div className={`${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500`}
                                                style={{ transitionDelay: isMenuOpen ? `${menuItems.length * 80 + 100}ms` : '0ms' }}>
                                                <div className="flex items-center space-x-4 mt-5">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-[#22346e] to-[#f1424b] rounded-full flex items-center justify-center">
                                                        <span className="text-white font-semibold text-lg">
                                                            {user.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        <p className="font-inter text-white text-lg">
                                                            {user.name}
                                                        </p>

                                                        {user.isAdmin && (
                                                            <Link
                                                                href={route('admin.blogs.index')}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="font-montserrat text-sm text-white/80 hover:text-[#f1424b] transition-colors"
                                                            >
                                                                Admin
                                                            </Link>
                                                        )}

                                                        <Link
                                                            href={route('logout')}
                                                            method="post"
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="font-montserrat text-sm text-red-400 hover:text-red-300 transition-colors"
                                                        >
                                                            Logout
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`flex space-x-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500`}
                                                style={{ transitionDelay: isMenuOpen ? `${menuItems.length * 80 + 100}ms` : '0ms' }}>
                                                <Link
                                                    href={route('login')}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-montserrat text-lg font-semibold text-white hover:text-[#f1424b] transition-colors"
                                                >
                                                    Login
                                                </Link>
                                                <span className="text-white/40">|</span>
                                                <Link
                                                    href={route('register')}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-montserrat text-lg font-semibold text-[#f1424b] hover:text-white transition-colors"
                                                >
                                                    Register
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div
                                    className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 font-inter ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-500`}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${menuItems.length * 80 + 200}ms` : '0ms'
                                    }}
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-center text-white/80 space-y-4 sm:space-y-0">
                                        <div className="text-center sm:text-left">
                                            <p className="font-medium text-sm sm:text-base">info@excelresidential.com</p>
                                            <p className="text-xs sm:text-sm mt-1">213 525 4444</p>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="bg-[#f1424b] hover:bg-white text-white hover:text-[#22346e] font-montserrat font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Property Images */}
                        <div className="w-full lg:w-1/2 h-40 sm:h-48 md:h-64 lg:h-full relative overflow-hidden order-1 lg:order-2">
                            {/* Image Gallery */}
                            <div className="absolute inset-0">
                                {/* Main Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={propertyImages[0]}
                                        alt="Luxury Property"
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#22346e]/70 via-[#22346e]/30 to-transparent lg:from-transparent lg:via-[#22346e]/20 lg:to-[#22346e]/50"></div>
                                </div>

                                {/* Small Thumbnails - Hide on mobile, show on sm and above */}
                                <div className="hidden sm:flex absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 space-x-2 sm:space-x-3 lg:space-x-4">
                                    {propertyImages.slice(1).map((img, index) => (
                                        <div
                                            key={index}
                                            className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 border-white/30 hover:border-white transition-all duration-300 transform hover:scale-110 cursor-pointer ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? `${index * 150 + 300}ms` : '0ms'
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Property ${index + 2}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Styles */}
            <style jsx global>{`
                /* Custom Font Classes */
                .font-playfair {
                    font-family: 'Playfair Display', serif;
                }
                
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                
                .font-montserrat {
                    font-family: 'Montserrat', sans-serif;
                }

                /* Prevent horizontal overflow on mobile */
                html, body {
                    overflow-x: hidden;
                    width: 100%;
                }
            `}</style>
        </>
    );
}