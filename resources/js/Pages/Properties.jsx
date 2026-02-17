// resources/js/Pages/Properties/Index.jsx
import React, { useState, useEffect } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ContactModal from '@/Components/ContactModal';
import {
    Search,
    MapPin,
    Phone,
    Home,
    Building2,
    ArrowRight,
    Mail,
    Calendar,
    CheckCircle,
    Star,
    ChevronRight,
    Filter,
    Heart,
    Grid,
    List,
    ChevronLeft,
    ChevronDown,
    Maximize2,
    Bath,
    Bed,
    Square,
    Eye,
    Users,
    Clock,
    Award,
    Shield,
    Sparkles,
    TrendingUp
} from 'lucide-react';
import Logopage from '@/Components/logopage';

export default function Properties({ properties, filters = {} }) {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState({
        propertyType: filters.type || '',
        minPrice: filters.min_price || '',
        maxPrice: filters.max_price || '',
        bedrooms: filters.bedrooms || '',
        sortBy: filters.sort_by || 'featured'
    });

    const propertyTypes = ['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Commercial'];
    const bedroomOptions = ['1', '2', '3', '4', '5+'];
    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'price_low', label: 'Price: Low to High' },
        { value: 'price_high', label: 'Price: High to Low' },
        { value: 'newest', label: 'Newest First' },
        { value: 'popular', label: 'Most Popular' }
    ];

    const { flash } = usePage().props;

    const handleContactClick = (property) => {
        setSelectedProperty(property);
        setIsContactModalOpen(true);
    };

    const handleWishlistToggle = (propertyId) => {
        if (wishlist.includes(propertyId)) {
            setWishlist(wishlist.filter(id => id !== propertyId));
        } else {
            setWishlist([...wishlist, propertyId]);
        }
    };

    const handleFilterChange = (key, value) => {
        setActiveFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const applyFilters = () => {
        router.get(route('properties.index'), {
            search: searchTerm,
            type: activeFilters.propertyType,
            min_price: activeFilters.minPrice,
            max_price: activeFilters.maxPrice,
            bedrooms: activeFilters.bedrooms,
            sort_by: activeFilters.sortBy
        });
    };

    const clearFilters = () => {
        setSearchTerm('');
        setActiveFilters({
            propertyType: '',
            minPrice: '',
            maxPrice: '',
            bedrooms: '',
            sortBy: 'featured'
        });
        router.get(route('properties.index'));
    };

    // Real-time search with debouncing
    useEffect(() => {
        // Only run search if searchTerm has been initialized and changed
        if (searchTerm !== (filters.search || '')) {
            const timeoutId = setTimeout(() => {
                router.get(route('public.properties.publicindex'),
                    { search: searchTerm },
                    {
                        preserveState: true,
                        preserveScroll: true,
                        replace: true
                    }
                );
            }, 300); // 300ms debounce

            return () => clearTimeout(timeoutId);
        }
    }, [searchTerm]);


    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const getPropertyFeatures = (property) => {
        return [
            { icon: Bed, label: `${property.bedrooms || 3} Beds` },
            { icon: Bath, label: `${property.bathrooms || 2} Baths` },
            { icon: Square, label: `${property.area || 1800} sqft` },
            { icon: Users, label: 'Ready to Move' }
        ];
    };

    // SVG pattern as a separate variable to avoid escaping issues
    const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

    const seoData = {
        title: "Premium Properties for Rent & Sale | Excel Residential Services",
        description: "Browse our exclusive collection of premium properties in Los Angeles and California. Find your dream home or investment property today.",
        keywords: "Luxury Properties, Apartments for Rent, Houses for Sale, Real Estate Listings, Los Angeles Real Estate"
    };

    return (
        <>
            <Seo {...seoData} />

            <Header />
            <Logopage />

            {/* Hero Section with Parallax */}
            <section className="relative py-24 bg-gradient-to-br from-[#0f1a3d] via-[#1a2a5a] to-[#22346e] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{ backgroundImage: `url("${svgPattern}")` }}></div>
                    </div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#f1424b] to-transparent"></div>
                            <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Exclusive Collection
                                <Sparkles className="w-4 h-4" />
                            </span>
                            <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#f1424b] to-transparent"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Discover <span className="text-[#f1424b]">Extraordinary</span><br />Properties
                        </h1>

                        <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            Where luxury meets lifestyle. Explore our handpicked selection of premium properties designed for the discerning few.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            {[
                                { value: `${properties.total}+`, label: 'Properties', icon: Building2 },
                                { value: '100%', label: 'Satisfaction', icon: Award },
                                { value: '24/7', label: 'Support', icon: Shield },
                                { value: 'Premium', label: 'Quality', icon: Star }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <stat.icon className="w-6 h-6 text-[#f1424b]" />
                                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                                    </div>
                                    <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Main Content */}
            <div className="container mx-auto px-6 lg:px-12 py-12">
                {/* Results Header */}
                {flash.success && (
                    <div className="text-green-600">{flash.success}</div>
                )}

                {/* Search Bar and View Controls */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search Box */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search properties by name, address, or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900 placeholder:text-gray-400"
                            />
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-6 py-3 flex items-center gap-2 ${viewMode === 'grid' ? 'bg-[#22346e] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} transition-colors`}
                            >
                                <Grid className="w-5 h-5" />
                                <span className="hidden sm:inline">Grid</span>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-6 py-3 flex items-center gap-2 ${viewMode === 'list' ? 'bg-[#22346e] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} transition-colors border-l border-gray-300`}
                            >
                                <List className="w-5 h-5" />
                                <span className="hidden sm:inline">List</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Premium Properties
                            <span className="block text-lg text-[#f1424b] font-normal mt-2">
                                {properties.total} exquisite properties found
                            </span>
                        </h2>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {properties.from || 1}-{properties.to || properties.data.length} of {properties.total} properties
                    </div>
                </div>

                {/* Properties Grid/List */}
                {properties.data.length === 0 ? (
                    <div className="text-center py-24">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <Home className="w-16 h-16 text-gray-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">No properties match your criteria</h3>
                        <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
                            Try adjusting your filters or browse our complete collection
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-8 py-4 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            View All Properties
                        </button>
                    </div>
                ) : viewMode === 'grid' ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.data.map((property) => {
                                const features = getPropertyFeatures(property);

                                return (
                                    <div key={property.id} className="group bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        {/* Property Image with Overlay */}
                                        <div className="relative h-64 overflow-hidden">
                                            {property.image ? (
                                                <div className="relative h-full">
                                                    <img
                                                        src={`/storage/${property.image}`}
                                                        alt={property.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                </div>
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-[#22346e] to-[#1a2a5a] flex items-center justify-center">
                                                    <Building2 className="w-20 h-20 text-white/80" />
                                                </div>
                                            )}

                                            {/* Property Badges */}

                                        </div>

                                        {/* Property Details */}
                                        <div className="p-8">
                                            {/* Property Title */}
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#22346e] transition-colors cursor-pointer">
                                                    {property.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{property.address}</span>
                                                </div>
                                            </div>

                                            {/* Features Grid */}
                                            {/* <div className="grid grid-cols-2 gap-4 mb-8">
                                                {features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="p-2 bg-gray-50 rounded-lg">
                                                            <feature.icon className="w-4 h-4 text-[#22346e]" />
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                                                    </div>
                                                ))}
                                            </div> */}

                                            {/* Description */}
                                            <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">
                                                {property.description}
                                            </p>

                                            {/* Contact Button */}
                                            <button
                                                onClick={() => handleContactClick(property)}
                                                className="w-full bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
                                            >
                                                <Mail className="w-5 h-5" />
                                                <span>Contact</span>
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    // List View
                    <div className="space-y-6">
                        {properties.data.map((property) => (
                            <div key={property.id} className="group bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Section */}
                                    <div className="lg:w-1/3 relative h-64 lg:h-48 flex-shrink-0">
                                        {property.image ? (
                                            <img
                                                src={`/storage/${property.image}`}
                                                alt={property.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-[#22346e] to-[#1a2a5a] flex items-center justify-center">
                                                <Building2 className="w-16 h-16 text-white/80" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Details Section */}
                                    <div className="lg:w-2/3 p-8">
                                        <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{property.name}</h3>
                                                <div className="flex items-center gap-2 text-gray-600 mb-4">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{property.address}</span>
                                                </div>
                                                <p className="text-gray-600 mb-6 line-clamp-2">{property.description}</p>

                                                {/* <div className="flex flex-wrap gap-4 mb-6">
                                                    {getPropertyFeatures(property).map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                            <feature.icon className="w-4 h-4 text-[#22346e]" />
                                                            <span>{feature.label}</span>
                                                        </div>
                                                    ))}
                                                </div> */}
                                            </div>

                                            <div className="lg:text-right">

                                                <button
                                                    onClick={() => handleContactClick(property)}
                                                    className="px-6 py-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                                                >
                                                    Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {properties.data.length > 0 && (
                    <div className="mt-16">
                        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                            <div className="text-sm text-gray-700">
                                Showing <span className="font-semibold">{properties.from || 1}</span> to{' '}
                                <span className="font-semibold">{properties.to || properties.data.length}</span> of{' '}
                                <span className="font-semibold">{properties.total}</span> results
                            </div>

                            <div className="flex items-center space-x-2">
                                {/* Previous Button */}
                                {properties.links.map((link, index) => {
                                    if (index === 0) {
                                        return (
                                            <button
                                                key="prev"
                                                onClick={() => link.url && router.get(link.url)}
                                                disabled={!link.url}
                                                className={`px-4 py-2 rounded-lg border ${link.url
                                                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                        );
                                    }

                                    if (index === properties.links.length - 1) {
                                        return (
                                            <button
                                                key="next"
                                                onClick={() => link.url && router.get(link.url)}
                                                disabled={!link.url}
                                                className={`px-4 py-2 rounded-lg border ${link.url
                                                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        );
                                    }

                                    if (link.label === '...') {
                                        return (
                                            <span key={index} className="px-3 py-2 text-gray-500">
                                                ...
                                            </span>
                                        );
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => router.get(link.url)}
                                            className={`px-4 py-2 rounded-lg border ${link.active
                                                ? 'border-[#22346e] bg-[#22346e] text-white'
                                                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {link.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Premium CTA */}
                <div className="mt-20 relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a3d] to-[#22346e]"></div>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative z-10 p-12 lg:p-16 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-3 mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <Award className="w-8 h-8 text-[#f1424b]" />
                                <span className="text-white text-xl font-semibold">Premium Real Estate Partner</span>
                            </div>

                            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Ready to Find Your Dream Property?
                            </h2>
                            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                                Our dedicated team of property experts is ready to provide personalized guidance and exclusive access to premium listings.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="px-8 py-4 bg-white text-[#22346e] hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5" />
                                        Schedule Consultation
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => {
                    setIsContactModalOpen(false);
                    setSelectedProperty(null);
                }}
                property={selectedProperty}
            />

            <Footer />
        </>
    );
}