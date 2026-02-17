// resources/js/Pages/Admin/Properties/Index.jsx
import React, { useState, useEffect } from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Search,
    Filter,
    Plus,
    Eye,
    Edit,
    Trash2,
    MapPin,
    Phone,
    Building2,
    Home,
    DollarSign,
    Users,
    Calendar,
    MoreVertical,
    CheckCircle,
    XCircle,
    Image as ImageIcon,
    Download,
    Upload,
    Grid,
    List,
    Heart,
    Star
} from 'lucide-react';

export default function AdminPropertiesIndex({ properties, filters = {} }) {
    const { flash, auth } = usePage().props;
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState('all');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [selectedProperties, setSelectedProperties] = useState([]);

    const handleDelete = (propertyId) => {
        if (confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
            router.delete(route('admin.properties.destroy', propertyId));
        }
    };

    const handleBulkDelete = () => {
        if (selectedProperties.length === 0) return;
        if (confirm(`Are you sure you want to delete ${selectedProperties.length} selected properties?`)) {
            router.delete(route('admin.properties.bulk-delete'), {
                data: { ids: selectedProperties }
            });
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedProperties(properties.data.map(prop => prop.id));
        } else {
            setSelectedProperties([]);
        }
    };

    const handleSelectProperty = (propertyId) => {
        if (selectedProperties.includes(propertyId)) {
            setSelectedProperties(selectedProperties.filter(id => id !== propertyId));
        } else {
            setSelectedProperties([...selectedProperties, propertyId]);
        }
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            active: {
                label: 'Active',
                className: 'bg-green-100 text-green-800',
                icon: <CheckCircle className="w-3 h-3" />
            },
            inactive: {
                label: 'Inactive',
                className: 'bg-red-100 text-red-800',
                icon: <XCircle className="w-3 h-3" />
            },
            maintenance: {
                label: 'Maintenance',
                className: 'bg-yellow-100 text-yellow-800',
                icon: <Building2 className="w-3 h-3" />
            },
            sold: {
                label: 'Sold',
                className: 'bg-blue-100 text-blue-800',
                icon: <DollarSign className="w-3 h-3" />
            }
        };

        const config = statusConfig[status] || statusConfig.active;

        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${config.className}`}>
                {config.icon}
                {config.label}
            </span>
        );
    };

    const getPropertyTypeBadge = (type) => {
        const typeConfig = {
            apartment: { color: '#22346e', label: 'Apartment' },
            house: { color: '#f1424b', label: 'House' },
            commercial: { color: '#1a2a5a', label: 'Commercial' },
            villa: { color: '#d4333b', label: 'Villa' }
        };

        const config = typeConfig[type] || { color: '#6b7280', label: type || 'Property' };

        return (
            <span
                className="px-2 py-1 text-xs font-medium rounded"
                style={{ backgroundColor: `${config.color}15`, color: config.color }}
            >
                {config.label}
            </span>
        );
    };

    // Real-time search with debouncing
    useEffect(() => {
        // Only run search if searchTerm has been initialized and changed
        if (searchTerm !== (filters.search || '')) {
            const timeoutId = setTimeout(() => {
                router.get(route('admin.properties.index'),
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

    // No client-side filtering - use server data directly
    const filteredProperties = properties.data;

    const stats = [
        { label: 'Total Properties', value: properties.total, icon: <Building2 className="w-5 h-5" />, color: 'from-[#22346e] to-[#1a2a5a]' },
        { label: 'Active Listings', value: properties.data.filter(p => p.status === 'active').length, icon: <CheckCircle className="w-5 h-5" />, color: 'from-green-500 to-green-600' },
        { label: 'Total Value', value: `$${properties.data.reduce((sum, prop) => sum + (prop.price || 0), 0).toLocaleString()}`, icon: <DollarSign className="w-5 h-5" />, color: 'from-blue-500 to-blue-600' },
        { label: 'Avg. Occupancy', value: '94%', icon: <Users className="w-5 h-5" />, color: 'from-purple-500 to-purple-600' },
    ];

    return (
        <AdminLayout>
            <Head title="Property Management | ExcelResidential" />

            <div className="space-y-6 bg-white">
                {/* Header with Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                                    <div className="text-white">
                                        {stat.icon}
                                    </div>
                                </div>
                                <span className="text-2xl font-bold text-gray-900">
                                    {stat.value}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Action Bar */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Property Management
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Manage all properties in your portfolio
                            </p>
                        </div>

                        <div className="flex items-center gap-3">

                            <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'} transition-colors`}
                                >
                                    <Grid className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'} transition-colors`}
                                >
                                    <List className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                            <Link
                                href={route('admin.properties.create')}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Plus className="w-5 h-5" />
                                Add New Property
                            </Link>
                        </div>
                    </div>

                    {/* Filters and Search */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search properties..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900"
                            />
                        </div>

                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900 appearance-none"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="sold">Sold</option>
                            </select>
                        </div>

                        <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] text-gray-900 appearance-none">
                                <option value="">All Types</option>
                                <option value="apartment">Apartments</option>
                                <option value="house">Houses</option>
                                <option value="commercial">Commercial</option>
                                <option value="villa">Villas</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleBulkDelete}
                                disabled={selectedProperties.length === 0}
                                className="flex-1 px-4 py-3 bg-red-100 text-red-700 font-medium rounded-xl hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Delete Selected ({selectedProperties.length})
                            </button>
                        </div>
                    </div>
                </div>

                {/* Properties Grid/List View */}
                {filteredProperties.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <Building2 className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No properties found</h3>
                        <p className="text-gray-600 mb-6">
                            {searchTerm
                                ? 'No properties match your search criteria'
                                : 'Add your first property to get started'}
                        </p>
                        <Link
                            href={route('admin.properties.create')}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <Plus className="w-5 h-5" />
                            Add First Property
                        </Link>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                {/* Property Image */}
                                <div className="relative h-48 overflow-hidden">
                                    {property.image ? (
                                        <img
                                            src={`/storage/${property.image}`}
                                            alt={property.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            <Home className="w-12 h-12 text-gray-400" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        {getStatusBadge(property.status)}
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedProperties.includes(property.id)}
                                            onChange={() => handleSelectProperty(property.id)}
                                            className="w-5 h-5 text-[#22346e] bg-white rounded border-gray-300 focus:ring-[#22346e]"
                                        />
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        {getPropertyTypeBadge(property.type)}
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1 truncate">
                                                {property.name}
                                            </h3>
                                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span className="truncate">{property.address}</span>
                                            </div>
                                        </div>
                                        {property.price && (
                                            <div className="text-right">
                                                <div className="text-xl font-bold text-[#22346e]">
                                                    ${property.price.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-gray-500">Price</div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Phone className="w-4 h-4" />
                                            <span>{property.contact}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span>Added {new Date(property.created_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href="#"
                                            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-center"
                                        >
                                            <Eye className="w-4 h-4 inline mr-1" />
                                            View
                                        </Link>
                                        <Link
                                            href={route('admin.properties.edit', property.id)}
                                            className="flex-1 px-4 py-2 bg-[#22346e]/10 text-[#22346e] font-medium rounded-lg hover:bg-[#22346e]/20 transition-colors text-center"
                                        >
                                            <Edit className="w-4 h-4 inline mr-1" />
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(property.id)}
                                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-4 text-left">
                                            <input
                                                type="checkbox"
                                                checked={selectedProperties.length === properties.data.length}
                                                onChange={handleSelectAll}
                                                className="w-4 h-4 text-[#22346e] bg-gray-100 border-gray-300 rounded focus:ring-[#22346e]"
                                            />
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Property
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Address
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredProperties.map((property) => (
                                        <tr key={property.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedProperties.includes(property.id)}
                                                    onChange={() => handleSelectProperty(property.id)}
                                                    className="w-4 h-4 text-[#22346e] bg-gray-100 border-gray-300 rounded focus:ring-[#22346e]"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative flex-shrink-0">
                                                        {property.image ? (
                                                            <img
                                                                src={`/storage/${property.image}`}
                                                                alt={property.name}
                                                                className="w-20 h-16 object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <div className="w-20 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                                                <Home className="w-6 h-6 text-gray-400" />
                                                            </div>
                                                        )}
                                                        <div className="absolute -top-1 -right-1">
                                                            {getPropertyTypeBadge(property.type)}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">
                                                            {property.name}
                                                        </h4>
                                                        {property.price && (
                                                            <p className="text-sm font-bold text-[#22346e] mt-1">
                                                                ${property.price.toLocaleString()}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm line-clamp-2">
                                                        {property.address}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    <span className="text-gray-700">
                                                        {property.contact}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {getStatusBadge(property.status)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href="#"
                                                        className="p-2 text-gray-600 hover:text-[#22346e] hover:bg-gray-100 rounded-lg transition-colors"
                                                        title="View"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </Link>
                                                    <Link
                                                        href={route('admin.properties.edit', property.id)}
                                                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(property.id)}
                                                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Pagination */}
                {properties.links && properties.links.length > 3 && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                                Showing <span className="font-semibold">{properties.from}</span> to <span className="font-semibold">{properties.to}</span> of{' '}
                                <span className="font-semibold">{properties.total}</span> properties
                            </div>
                            <div className="flex items-center gap-2">
                                {properties.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => link.url && router.get(link.url)}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${link.active
                                            ? 'bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white shadow-lg'
                                            : link.url
                                                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                            }`}
                                        disabled={!link.url}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}