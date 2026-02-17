import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
// import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import {
    Building2,
    TrendingUp,
    Settings,
    FileText,
    RefreshCw,
    Megaphone,
    Hammer,
    Lightbulb,
    CheckCircle,
    MapPin,
    Monitor,
    Users,
    Shield,
    Package,
    ChevronRight,
    ArrowRight,
    Calendar,
    Phone,
    BarChart3,
    Target,
    Clock,
    DollarSign
} from 'lucide-react';
import Logopage from '@/Components/logopage';
// import ServicesPage from '@/Components/Services';

export default function Services() {
    // Services data with images

    const seoData = {
        title: "Property Management Services | Excel Residential Services",
        description: "Comprehensive property management solutions: Apartment Management, Financial Management, Maintenance, and more. Backed by 23+ years of experience.",
        keywords: "Apartment Management, Financial Management, Property Maintenance, Real Estate Services, Los Angeles Property Management"
    };

    const servicesData = [
        {
            title: "APARTMENT MANAGEMENT",
            description: "Full-service management ensuring optimal occupancy, tenant satisfaction, and operational efficiency.",
            slug: "apartment-management",
            link: "/services/apartment-management",
            icon: <Building2 />,
            features: [
                "Tenant screening & placement",
                "Rent collection & financial reporting",
                "Lease administration",
                "Property inspections",
                "24/7 emergency response"
            ]
        },
        {
            title: "FINANCIAL MANAGEMENT",
            description: "Comprehensive financial oversight including budgeting, reporting, and revenue optimization.",
            slug: "financial-management", // Add this
            link: "/services/financial-management", // Add this
            icon: <TrendingUp />,
            features: [
                "Budget development & management",
                "Financial reporting & analysis",
                "Tax planning & preparation",
                "Cash flow optimization",
                "Expense tracking & control"
            ]
        },
        {
            title: "MAINTENANCE MANAGEMENT",
            description: "Proactive maintenance programs and rapid response systems to preserve property value.",
            icon: <Settings />,
            slug: "maintenance-management",
            link: "/services/maintenance-management",
            features: [
                "Preventive maintenance scheduling",
                "Vendor management & coordination",
                "Emergency repair services",
                "Capital improvement planning",
                "Quality control inspections"
            ]
        },
        {
            title: "GENERAL ADMINISTRATION",
            description: "Streamlined administrative processes ensuring compliance and operational excellence.",
            slug: "general-administration",
            link: "/services/general-management",
            icon: <FileText />,
            features: [
                "Document management & storage",
                "Regulatory compliance monitoring",
                "Insurance coordination",
                "Contract administration",
                "Record keeping & reporting"
            ]
        },
        {
            title: "PROPERTY TURN AROUND",
            description: "Strategic repositioning and value-add initiatives for underperforming properties.",
            slug: "property-turn-around",
            link: "/services/property-turn-around",
            icon: <RefreshCw />,
            features: [
                "Property assessment & valuation",
                "Strategic repositioning plans",
                "Occupancy improvement strategies",
                "Value-add implementation",
                "Performance monitoring"
            ]
        },
        {
            title: "REHAB PROJECTS",
            description: "Complete renovation and modernization services to enhance property value and appeal.",
            slug: "rehab-projects",
            link: "/services/rehab-projects",
            icon: <Hammer />,
            features: [
                "Project planning & design",
                "Contractor selection & management",
                "Budget & timeline control",
                "Quality assurance",
                "Post-project evaluation"
            ]
        },

    ];
    const processSteps = [
        {
            number: "01",
            title: "Property Assessment",
            description: "Comprehensive evaluation of your property's current state, market position, and potential value."
        },
        {
            number: "02",
            title: "Strategy Development",
            description: "Customized management plan tailored to your specific goals and property requirements."
        },
        {
            number: "03",
            title: "Implementation",
            description: "Execution of management strategies with our experienced team handling all operations."
        },
        {
            number: "04",
            title: "Monitoring & Optimization",
            description: "Continuous performance tracking and strategy adjustments for maximum ROI."
        }
    ];

    const advantages = [
        {
            title: "Proven Track Record",
            description: "23+ years managing 17,000+ units with consistently high tenant satisfaction rates.",
            icon: <BarChart3 />
        },
        {
            title: "Local Market Expertise",
            description: "Deep understanding of Los Angeles real estate market dynamics and regulations.",
            icon: <MapPin />
        },
        {
            title: "Technology-Driven Solutions",
            description: "Advanced property management software for real-time reporting and communication.",
            icon: <Monitor />
        },
        {
            title: "Dedicated Support Team",
            description: "24/7 support with dedicated property managers and maintenance coordinators.",
            icon: <Users />
        },
        {
            title: "Financial Transparency",
            description: "Detailed monthly reports and transparent accounting with no hidden fees.",
            icon: <Shield />
        },
        {
            title: "Customized Solutions",
            description: "Tailored management approaches based on your specific property type and goals.",
            icon: <Package />
        }
    ];

    return (
        <>
            <Seo {...seoData} />


            {/* Header */}
            <Header />
            <Logopage />
            {/* Premium Services Page */}
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

                {/* Hero Section */}
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
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-4 mb-8">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                                <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Our Services
                                </span>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Comprehensive Property<br />Management Solutions
                            </h1>
                            <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                                With 23+ years of expertise and 17,000+ units managed, we deliver exceptional results through tailored property management services.
                            </p>

                            {/* Stats Bar */}
                            <div className="flex flex-wrap justify-center gap-8 mb-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>23+</div>
                                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>17K+</div>
                                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Units</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>200+</div>
                                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100+</div>
                                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Team Experience</div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-24">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl mx-auto text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                End-to-End Property Management
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                From acquisition to daily operations, our comprehensive services ensure maximum ROI and tenant satisfaction.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesData.map((service, index) => (
                                <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Corner Decoration */}
                                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#22346e]/10 to-transparent transform rotate-45 translate-x-6 -translate-y-6"></div>
                                    </div>

                                    {/* Service Number */}
                                    <div className="absolute top-6 left-6">
                                        <span className="text-4xl font-bold text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <div className="text-[#22346e] group-hover:text-[#f1424b] transition-colors duration-300">
                                                {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <CheckCircle className="w-4 h-4 text-[#f1424b] flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Link
                                            href={service.link} // Now dynamic for each service
                                            className="w-full bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group block"
                                        >
                                            <span className="flex items-center justify-center gap-3">
                                                Learn More
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Why Property Owners Choose Us
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                The Excel Residential advantage: Experience, expertise, and excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                        <div className="text-white">
                                            {React.cloneElement(advantage.icon, { className: "w-7 h-7" })}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        {advantage.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {advantage.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}