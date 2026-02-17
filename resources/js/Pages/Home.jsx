import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Link, useForm } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import Seo from '@/Components/Seo';

import {
    Building2,
    TrendingUp,
    Settings,
    FileText,
    RefreshCw,
    Megaphone,
    Hammer,
    Lightbulb
} from 'lucide-react';
import Header1 from '@/Components/Header1';
import Header2 from '@/Components/Header2';

export default function Home() {
    // ... existing code ...
    const seoData = {
        title: "Excel Residential Services | Property Management Los Angeles & California",
        description: "Premier property management company in Los Angeles, managing over 17,000 units. Specialists in multifamily and affordable housing across California.",
        keywords: "Property Management Los Angeles, Multifamily Management, Affordable Housing Management, Excel Residential Services, Real Estate Management",
        image: '/images/hero-home.jpg', // Assuming a default or I can use one of the slide images if static
        schema: {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Excel Residential Services",
            "url": "https://excelresidential.com",
            "logo": "https://excelresidential.com/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-213-252-4444",
                "contactType": "customer service"
            }
        }
    };

    const heroImages = [
        {
            id: 1,
            src: '/melrose.mp4',
            alt: 'Luxury modern home exterior',
            title: 'Excellence in Residential Living',
            subtitle: 'Discover premium properties that redefine luxury living standards',
            badge: 'Premium'
        },
        // {
        //     id: 2,
        //     src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
        //     alt: 'Elegant living room interior',
        //     title: 'Timeless Architecture',
        //     subtitle: 'Properties designed for generational living and legacy',
        //     badge: 'Heritage'
        // },
        // {
        //     id: 3,
        //     src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        //     alt: 'Modern apartment interior',
        //     title: 'Your Dream Home Awaits',
        //     subtitle: 'Find perfection in exclusive, handpicked locations',
        //     badge: 'Exclusive'
        // }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const slideRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);
    // Enhanced auto-advance slider with smooth transitions
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % heroImages.length);
                setIsTransitioning(false);
            }, 800);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
            setIsTransitioning(false);
        }, 800);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
            setIsTransitioning(false);
        }, 800);
    };

    // Featured properties data
    const featuredProperties = [
        {
            id: 1,
            title: "Villa Serenity",
            location: "Beverly Hills, CA",
            price: "$4.2M",
            beds: 5,
            baths: 6,
            sqft: "5,200",
            image: "/melrose",
            type: "Luxury Villa"
        },
        {
            id: 2,
            title: "Skyline Penthouse",
            location: "Manhattan, NY",
            price: "$8.7M",
            beds: 4,
            baths: 5,
            sqft: "4,800",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            type: "Penthouse"
        },
        {
            id: 3,
            title: "Coastal Retreat",
            location: "Malibu, CA",
            price: "$6.5M",
            beds: 6,
            baths: 7,
            sqft: "6,500",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            type: "Beach House"
        }
    ];

    // Services data
    const services = [
        {
            title: "APARTMENT MANAGEMENT",
            description: "Full-service management ensuring optimal occupancy, tenant satisfaction, and operational efficiency.",
            icon: <Building2 className="w-8 h-8" />
        },
        {
            title: "FINANCIAL MANAGEMENT",
            description: "Comprehensive financial oversight including budgeting, reporting, and revenue optimization.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "MAINTENANCE MANAGEMENT",
            description: "Proactive maintenance programs and rapid response systems to preserve property value.",
            icon: <Settings className="w-8 h-8" />
        },
        {
            title: "GENERAL ADMINISTRATION",
            description: "Streamlined administrative processes ensuring compliance and operational excellence.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            title: "PROPERTY TURN AROUND",
            description: "Strategic repositioning and value-add initiatives for underperforming properties.",
            icon: <RefreshCw className="w-8 h-8" />
        },
        {
            title: "MARKETING",
            description: "Targeted marketing strategies to maximize visibility and attract premium tenants.",
            icon: <Megaphone className="w-8 h-8" />
        },
        {
            title: "REHAB PROJECTS",
            description: "Complete renovation and modernization services to enhance property value and appeal.",
            icon: <Hammer className="w-8 h-8" />
        },
        {
            title: "CONSULTATION SERVICES",
            description: "Expert advisory for investment strategies and portfolio optimization.",
            icon: <Lightbulb className="w-8 h-8" />
        }
    ];


    const faqs = [
        {
            id: 1,
            question: "What services does Excel Residential offer?",
            answer: "Excel Residential Services is a premier Rental Property Management Company in Los Angeles, where we manage approximately 200 properties that we provide for rent. Our comprehensive services include apartment management, financial oversight, maintenance coordination, and much more."
        },
        {
            id: 2,
            question: "What is the process for renting a conventional apartment through your company?",
            answer: "First, you need to connect with our Leasing Team. They will help you schedule an appointment to visit the property. During your visit, you'll need to fill out an application form for further proceedings.",
            extra: "Quick Process: Typically takes 3-5 business days"
        },
        {
            id: 3,
            question: "How do you handle maintenance requests for the properties you manage?",
            answer: "We have a dedicated maintenance team that handles all property-related issues. You can connect directly with them to report any maintenance concerns, and they will promptly address and resolve your queries."
        },
        {
            id: 4,
            question: "Can I renew my lease?",
            answer: "Yes, absolutely. To renew your lease, simply contact the respective Property Manager available at your property. They will guide you through the renewal process and provide all necessary documentation."
        },
        {
            id: 5,
            question: "Are pets allowed in your conventional apartments for rent in Los Angeles?",
            answer: "We only allow Emotional Support Animals and Service Animals after verifying all required documentation. All necessary paperwork must be submitted and approved prior to move-in.",
            warning: "Note: Regular pets are not permitted in our conventional apartments"
        },
        {
            id: 6,
            question: "How do you screen potential tenants?",
            answer: "We follow a thorough screening process to ensure we select responsible tenants who will take good care of the property and meet their financial obligations.",
            points: [
                "Credit history check",
                "Employment verification",
                "Previous rental history",
                "Criminal background check"
            ]
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.send'), {
            onSuccess: () => reset(),
            preserveScroll: true
        });
    };
    return (
        <>
            <Seo {...seoData} />
            <div className="font-sans">

                <Header />

                {/* Classic Hero Slider */}

                <section className="relative h-[calc(100vh-2rem)] overflow-hidden w-[98%] mx-auto rounded-tl-[2.5rem] shadow-xl my-4">
                    {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fff] via-[#f1424b] to-[#fff] z-40"></div> */}
                    <div className="absolute top-4 left-8 z-30 flex items-center w-56 h-10 px-9 ">
                        {/* Background Cover Image */}
                        <div className="absolute -inset-10 -z-0  ">
                            <img
                                src="/logo_cover.svg"
                                alt=""
                                className="w-full h-full object-contain opacity 0 "
                            />
                        </div>

                        {/* Main Logo */}
                        <img
                            src="/logo.png"
                            alt="Excel Residential Logo"
                            className="h-10 w-auto relative z-10 mx-auto"
                        />
                    </div>
                    {/* Main Slider */}
                    {heroImages.map((image, index) => (
                        <div
                            key={image.id}
                            ref={slideRef}
                            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)] ${index === currentSlide
                                ? 'opacity-100 translate-x-0'
                                : index < currentSlide
                                    ? 'opacity-0 -translate-x-full'
                                    : 'opacity-0 translate-x-full'
                                } ${isTransitioning ? 'scale-105' : 'scale-100'}`}
                            style={{
                                transition: isTransitioning ? 'all 0.8s cubic-bezier(0.77,0,0.18,1)' : 'none'
                            }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#22346e]/90 via-[#22346e]/70 to-transparent z-10"></div>


                            {image.src && image.src.toLowerCase().endsWith('.mp4') ? (
                                <video
                                    src={image.src}
                                    aria-label={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000"
                                />
                            )}

                            {/* Classic Content Panel */}
                            <div className="absolute inset-0 z-20 flex items-center">
                                <div className="container mx-auto px-6 lg:px-12">
                                    <div className="max-w-2xl">
                                        {/* Badge */}
                                        <div className="inline-flex items-center mb-8">
                                            <span className="bg-[#f1424b] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
                                                {image.badge}
                                            </span>
                                            <div className="h-px w-16 bg-white/30 ml-4"></div>
                                        </div>

                                        {/* Main Title */}
                                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-snug ${isTransitioning ? 'animate-fadeInUp' : ''}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {image.title}
                                        </h1>

                                        {/* Subtitle with line */}
                                        <div className="relative mb-10">
                                            <div className="h-px w-24 bg-[#f1424b] mb-6"></div>
                                            <p className="text-xl md:text-2xl text-white/90 font-light max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {image.subtitle}
                                            </p>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-5">
                                            <Link className="group relative bg-[#f2454f] hover:bg-[#22346e] text-white font-medium py-4 px-12 rounded-none transition-all duration-300 overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                href={route('public.properties.publicindex')}>
                                                <span className="relative z-10">Explore Properties</span>
                                                <div className="absolute inset-0 bg-[#f1424b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                            </Link>

                                        </div>

                                        {/* Slide Counter */}
                                        <div className="mt-16 flex items-center">
                                            <span className="text-white/70 text-sm tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                <span className="text-white text-2xl font-bold">0{currentSlide + 1}</span>
                                                <span className="mx-2">/</span>
                                                0{heroImages.length}
                                            </span>
                                            <div className="h-px w-20 bg-white/30 ml-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    {/* <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 p-4 transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6 text-white transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button> */}
                    {/* <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 p-4 transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button> */}

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
                        <div
                            className="h-full bg-[#f1424b] transition-all duration-1000 ease-linear"
                            style={{ width: `${((currentSlide + 1) / heroImages.length) * 100}%` }}
                        ></div>
                    </div>
                </section>

                {/* Premium Services Section */}
                <section className="py-32 bg-gradient-to-b from-gray-200 to-white relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#22346e]/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#f1424b]/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3"></div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        {/* Section Header */}
                        <div className="max-w-3xl mx-auto text-center mb-20">
                            <div className="inline-flex items-center gap-4 mb-6">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                                <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Our Expertise
                                </span>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#22346e] mb-6 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Excellence in Property<br />Management
                            </h2>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Comprehensive solutions backed by 100+ years of combined experience, delivering exceptional results for property owners nationwide.
                            </p>
                        </div>

                        {/* Premium Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#f1424b] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#f1424b] transform rotate-45 translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="p-10 relative z-10">
                                        {/* Icon Container */}
                                        <div className="mb-8">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                                <div className="text-3xl text-[#22346e] group-hover:text-[#f1424b] transition-colors duration-300">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px w-8 bg-[#f1424b] group-hover:w-12 transition-all duration-300"></div>
                                                <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>

                                                </span>
                                            </div>
                                        </div>

                                        {/* Service Content */}
                                        <h3 className="text-2xl font-bold text-[#22346e] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        {/* <a href="#" className="inline-flex items-center text-[#22346e] font-medium group-hover:text-[#f1424b] transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            <span>Explore Service</span>
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a> */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Stats Bar */}
                        <div className="bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-2xl p-10 relative overflow-hidden">
                            {/* Stats Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                                    backgroundSize: '30px 30px'
                                }}></div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        23+
                                    </div>
                                    <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        Years Experience
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        17K+
                                    </div>
                                    <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        Units Managed
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        200+
                                    </div>
                                    <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        Properties
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        100+
                                    </div>
                                    <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        Team Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #22346e 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    About Us
                                </h2>
                                <div className="w-24 h-1 bg-[#22346e] mx-auto"></div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Column - Main Content */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Excel Residential Services, Inc.
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Founded in 2001, Excel Residential Services, Inc. is a full-service company specializing in LA property management services for multifamily real estate. We have managed 112 properties with over 6,500 units and, through affiliates, have overseen 200+ properties totaling 17,000+ units nationwide.
                                        </p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 border-l-4 border-[#22346e]">
                                            <div className="text-3xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                23+
                                            </div>
                                            <div className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                Years of Excellence
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-6 border-l-4 border-[#22346e]">
                                            <div className="text-3xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                17,000+
                                            </div>
                                            <div className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                Units Nationwide
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Additional Info */}
                                <div className="space-y-8">
                                    <div className="bg-[#f8f9fa] p-8 border border-gray-200">
                                        <h4 className="text-xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            Affordable Housing Expertise
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Since 2015, Excel Residential Services, Inc. has expanded to manage affordable housing residential apartments totaling 2,323 units across major California cities including Los Angeles, San Diego, San Jose, Fresno, and Sacramento.
                                        </p>
                                    </div>

                                    <div className="bg-[#f0f2f7] p-8">
                                        <h4 className="text-xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            Our Commitment
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Backed by a highly skilled team with 100+ years of combined experience, Excel provides market-specific expertise and customizes services to maximize property value and deliver exceptional results.
                                        </p>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-[#22346e] rounded-full"></div>
                                            <span className="text-[#22346e] font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Market-Specific Expertise
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <div className="w-2 h-2 bg-[#22346e] rounded-full"></div>
                                            <span className="text-[#22346e] font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Customized Property Solutions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            {/* <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                                <p className="text-gray-700 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Ready to experience excellence in property management?
                                </p>
                                <button className="bg-[#22346e] text-white hover:bg-[#1a2a57] font-medium py-3 px-8 transition-all duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Learn More About Our Services
                                </button>
                            </div> */}
                        </div>
                    </div>
                </section>


                {/* Compact Premium Contact Section */}
                <section className="py-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, #22346e 2px, transparent 0)`,
                            backgroundSize: '60px 60px'
                        }}></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#f1424b]/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-[#22346e]/10 to-transparent rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                                    <span className="text-[#f1424b] tracking-widest text-xs font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        Contact Us
                                    </span>
                                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Let's Transform Your Property Vision
                                </h2>
                                <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Connect with our expert team for personalized consultation.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Contact Information Card */}
                                <div className="bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-2xl p-8 relative overflow-hidden">
                                    {/* Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                                            backgroundSize: '40px 40px'
                                        }}></div>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Contact Information
                                        </h3>

                                        <div className="space-y-8">
                                            {/* Phone */}
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-white/80 text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        Phone
                                                    </h4>
                                                    <a href="tel:+12132524444" className="text-xl font-bold text-white hover:text-[#f1424b] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                        213 252 4444
                                                    </a>
                                                    <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>

                                                    </p>
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-white/80 text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        Email
                                                    </h4>
                                                    <a href="mailto:info@excelresidential.com" className="text-lg font-bold text-white hover:text-[#f1424b] transition-colors duration-300 block truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                        Info@excelresidential.com
                                                    </a>
                                                    {/* <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        Response within 24 hours
                                                    </p> */}
                                                </div>
                                            </div>

                                            {/* Office */}
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-white/80 text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        Office
                                                    </h4>
                                                    <p className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                        631 S Olive St
                                                        <br />#660, Los Angeles, CA 90014, USA
                                                    </p>
                                                    {/* <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        Mon - Fri: 08:30am - 04:30pm
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quick Response */}
                                        <div className="bg-white/5 rounded-xl p-4 mt-8">
                                            <h4 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Office Hours
                                                </h4>
                                                <p className="text-white/70 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    Mon - Fri: 08:30am - 04:30pm
                                                </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50">
                                    <h3 className="text-2xl font-bold text-[#22346e] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Send a Message
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Fill out the form and our specialist will contact you shortly.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    value={data.first_name}
                                                    onChange={e => setData('first_name', e.target.value)}

                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                    placeholder="John"
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    value={data.last_name}
                                                    onChange={e => setData('last_name', e.target.value)}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                    placeholder="Doe"
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                placeholder="john@example.com"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                                required
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={data.phone}
                                                    onChange={e => setData('phone', e.target.value)}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm"
                                                    placeholder="+1 (234) 567-890"
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    Inquiry Type
                                                </label>
                                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                    {/* <Building2 className="w-5 h-5 text-gray-400" /> */}
                                                </div>
                                                <input
                                                    type="text"
                                                    name="inquiry_type"
                                                    value={data.inquiry_type}
                                                    onChange={e => setData('inquiry_type', e.target.value)}
                                                    className="w-full  pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                    placeholder="Property Management, Leasing, Maintenance, etc."
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-gray-700 text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Message *
                                            </label>
                                            <textarea
                                                rows="3"
                                                name="message"
                                                value={data.message}
                                                onChange={e => setData('message', e.target.value)}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm resize-none"
                                                placeholder="Tell us about your property needs..."
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-500 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Send Message
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
                <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322346e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-bl from-[#f1424b]/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-[#22346e]/10 to-transparent rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <div className="inline-block mb-4">
                                    <span className="text-[#f1424b] text-sm font-semibold tracking-widest uppercase px-4 py-2 border border-[#f1424b]/20 rounded-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        FAQ
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Your Questions Answered
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Get clarity on our services and processes with these common questions
                                </p>
                            </div>

                            {/* FAQ Accordion */}
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={faq.id}
                                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        {/* Question Row - Always Visible */}
                                        <div
                                            className="p-6 cursor-pointer"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <span className={`text-lg font-bold ${index >= 3 ? 'text-[#f1424b]' : 'text-[#22346e]'}`}>
                                                            Q{index + 1}
                                                        </span>
                                                    </div>
                                                    <h3
                                                        className="text-lg font-bold text-[#22346e] pr-4"
                                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                                    >
                                                        {faq.question}
                                                    </h3>
                                                </div>

                                                {/* Plus/Minus Icon */}
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index
                                                    ? 'bg-[#f1424b]/10'
                                                    : 'bg-gray-50 hover:bg-gray-100'
                                                    }`}>
                                                    {openIndex === index ? (
                                                        <svg className="w-6 h-6 text-[#f1424b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-6 h-6 text-[#22346e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Answer - Only visible when expanded */}
                                        {openIndex === index && (
                                            <div className="px-6 pb-6 animate-fadeIn">
                                                <div className="pl-14 border-t border-gray-100 pt-6">
                                                    <p className="text-gray-600 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {faq.answer}
                                                    </p>

                                                    {/* Extra Content */}
                                                    {faq.extra && (
                                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                                            <div className="flex items-center gap-2 text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                {faq.extra}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Warning Content */}
                                                    {faq.warning && (
                                                        <div className="bg-red-50 rounded-lg p-4 mb-4 border border-red-100">
                                                            <div className="flex items-center gap-2 text-sm text-red-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                                </svg>
                                                                {faq.warning}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Points List */}
                                                    {faq.points && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {faq.points.map((point, i) => (
                                                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                                    <div className="w-2 h-2 bg-[#22346e] rounded-full"></div>
                                                                    <span style={{ fontFamily: "'Inter', sans-serif" }}>{point}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>

                    <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
                </section>
                <Footer />


            </div>
        </>
    );
}