// resources/js/Pages/Properties/Index.jsx
import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
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
    Heart
} from 'lucide-react';

export default function Properties1({ properties }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [wishlist, setWishlist] = useState([]);

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

    // Filter properties based on search
    const filteredProperties = properties.data.filter(property => {
        return property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
               property.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Property categories for badges
    const getPropertyCategory = (index) => {
        const categories = ['Luxury', 'Premium', 'Featured', 'Exclusive'];
        return categories[index % categories.length];
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Luxury': 'from-purple-600 to-purple-700',
            'Premium': 'from-blue-600 to-blue-700',
            'Featured': 'from-green-600 to-green-700',
            'Exclusive': 'from-red-600 to-red-700'
        };
        return colors[category] || 'from-[#22346e] to-[#1a2a5a]';
    };

    return (
        <>
            <Head title="Properties | ExcelResidential" />
            
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                            <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase">
                                Premium Properties
                            </span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Discover Your Dream Property
                        </h1>
                        <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                            Explore our curated collection of premium properties with exceptional locations and unmatched quality
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">{properties.total}</div>
                                <div className="text-white/70 text-sm uppercase tracking-wider">Properties</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-white/70 text-sm uppercase tracking-wider">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                <div className="text-white/70 text-sm uppercase tracking-wider">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <div className="sticky top-0  bg-white shadow-lg">
                <div className="container mx-auto px-6 lg:px-12 py-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search properties by name, location, or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
                {/* Results Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Our Premium Collection
                        </h2>
                        <p className="text-gray-600">
                            {filteredProperties.length} properties available
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                            <Filter className="w-4 h-4" />
                            Sort by: Featured
                        </button>
                    </div>
                </div>

                {/* Properties Grid */}
                {filteredProperties.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <Home className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No properties found</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Try adjusting your search terms or browse all our properties
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="px-6 py-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((property, index) => {
                            const category = getPropertyCategory(index);
                            const categoryColor = getCategoryColor(category);
                            
                            return (
                                <div key={property.id} className="group bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Property Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        {property.image ? (
                                            <img
                                                src={`/storage/${property.image}`}
                                                alt={property.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br flex items-center justify-center`}>
                                                <Home className="w-16 h-16 text-white/80" />
                                            </div>
                                        )}
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-4 py-1.5 bg-gradient-to-r text-white text-xs font-semibold rounded-full shadow-lg`}>
                                                {category}
                                            </span>
                                        </div>
                                        
                                        {/* Wishlist Button */}
                                        <button
                                            onClick={() => handleWishlistToggle(property.id)}
                                            className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                                        >
                                            <Heart 
                                                className={`w-5 h-5 ${wishlist.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                                            />
                                        </button>
                                        
                                        {/* Overlay Gradient */}
                                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    </div>

                                    {/* Property Details */}
                                    <div className="p-8">
                                        {/* Property Name */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {property.name}
                                        </h3>

                                        {/* Description */}
                                        <div className="mb-6">
                                            <p className="text-gray-600 leading-relaxed line-clamp-3">
                                                {property.description}
                                            </p>
                                        </div>

                                        {/* Address */}
                                        <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                                            <MapPin className="w-5 h-5 text-[#22346e] mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-900 mb-1">Location</p>
                                                <p className="text-gray-600">{property.address}</p>
                                            </div>
                                        </div>

                                        {/* Contact */}
                                        <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl">
                                            <Phone className="w-5 h-5 text-[#22346e] flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-900 mb-1">Contact Number</p>
                                                <p className="text-gray-600 font-medium">{property.contact}</p>
                                            </div>
                                        </div>

                                        {/* Contact Button */}
                                        <button
                                            onClick={() => handleContactClick(property)}
                                            className="w-full bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
                                        >
                                            <Mail className="w-5 h-5" />
                                            <span>Contact About This Property</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-20 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Need Help Finding Your Perfect Property?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Our property experts are ready to help you find exactly what you're looking for
                    </p>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="inline-flex items-center gap-3 bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                        <Phone className="w-5 h-5" />
                        Schedule a Consultation
                    </button>
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

