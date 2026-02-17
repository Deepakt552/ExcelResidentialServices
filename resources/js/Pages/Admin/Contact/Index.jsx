import React, { useState } from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { 
    Search,
    Filter,
    Mail,
    Phone,
    User,
    Home,
    Calendar,
    Eye,
    MessageSquare,
    ChevronRight,
    ChevronLeft,
    MoreVertical,
    CheckCircle,
    Clock,
    XCircle,
    Download,
    RefreshCw,
    Trash2,
    ArrowUpDown,
    MailOpen,
    Star,
    Shield,
    ChevronDown,
    ChevronUp,
    Menu,
    X
} from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function ContactIndex({ contacts = {}, filters = null }) {
    const { auth } = usePage().props;
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActionsOpen, setMobileActionsOpen] = useState(null);
    
    // Safely get filter values with defaults
    const safeFilters = filters || {};
    const initialSearch = safeFilters.search || '';
    const initialStatus = safeFilters.status || '';
    const initialSort = safeFilters.sort || 'created_at';
    const initialOrder = safeFilters.order || 'desc';
    
    const [search, setSearch] = useState(initialSearch);
    const [statusFilter, setStatusFilter] = useState(initialStatus);
    const [sortBy, setSortBy] = useState(initialSort);
    const [sortOrder, setSortOrder] = useState(initialOrder);

    // Status options
    const statusOptions = [
        { value: '', label: 'All Status' },
        { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
        { value: 'contacted', label: 'Contacted', color: 'bg-blue-100 text-blue-800' },
        { value: 'closed', label: 'Closed', color: 'bg-green-100 text-green-800' },
        { value: 'spam', label: 'Spam', color: 'bg-red-100 text-red-800' }
    ];

    // Sort options
    const sortOptions = [
        { value: 'created_at', label: 'Date' },
        { value: 'name', label: 'Name' },
        { value: 'property_name', label: 'Property' }
    ];

    // Handle search with debounce
    const handleSearch = (value) => {
        setSearch(value);
        router.get(route('admin.contacts.index'), 
            { search: value, status: statusFilter, sort: sortBy, order: sortOrder },
            { preserveState: true, replace: true }
        );
    };

    // Handle filter change
    const handleFilterChange = (filterType, value) => {
        const params = { search, status: statusFilter, sort: sortBy, order: sortOrder };
        
        if (filterType === 'status') {
            setStatusFilter(value);
            params.status = value;
        } else if (filterType === 'sort') {
            setSortBy(value);
            params.sort = value;
        } else if (filterType === 'order') {
            const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            setSortOrder(newOrder);
            params.order = newOrder;
        }
        
        router.get(route('admin.contacts.index'), params, 
            { preserveState: true, replace: true }
        );
    };

    // Handle contact selection
    const toggleContactSelection = (id) => {
        setSelectedContacts(prev => 
            prev.includes(id) 
                ? prev.filter(contactId => contactId !== id)
                : [...prev, id]
        );
    };

    // Handle select all
    const toggleSelectAll = () => {
        const contactData = contacts?.data || [];
        if (contactData.length === 0) return;
        
        if (selectedContacts.length === contactData.length) {
            setSelectedContacts([]);
        } else {
            setSelectedContacts(contactData.map(contact => contact.id));
        }
    };

    // Handle status update
    const updateStatus = (id, status) => {
        router.put(route('admin.contacts.update', id), { status }, {
            preserveScroll: true,
            onSuccess: () => {
                setSelectedContacts([]);
                setMobileActionsOpen(null);
            }
        });
    };

    // Handle bulk actions
    const handleBulkAction = (action) => {
        if (selectedContacts.length === 0) return;

        if (action === 'delete') {
            if (confirm(`Are you sure you want to delete ${selectedContacts.length} contact(s)?`)) {
                router.post(route('admin.contacts.bulk-delete'), { ids: selectedContacts }, {
                    preserveScroll: true,
                    onSuccess: () => setSelectedContacts([])
                });
            }
        } else {
            router.post(route('admin.contacts.bulk-update'), { 
                ids: selectedContacts, 
                status: action 
            }, {
                preserveScroll: true,
                onSuccess: () => setSelectedContacts([])
            });
        }
    };

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return 'Invalid Date';
        }
    };

    // Get status icon
    const getStatusIcon = (status) => {
        switch(status) {
            case 'pending': return <Clock className="w-4 h-4" />;
            case 'contacted': return <MailOpen className="w-4 h-4" />;
            case 'closed': return <CheckCircle className="w-4 h-4" />;
            case 'spam': return <XCircle className="w-4 h-4" />;
            default: return <Clock className="w-4 h-4" />;
        }
    };

    // Get status badge component
    const getStatusBadge = (status) => {
        const option = statusOptions.find(opt => opt.value === status) || statusOptions[1];
        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${option.color}`}>
                {getStatusIcon(status)}
                {option.label}
            </span>
        );
    };

    // Safely get contacts data with defaults
    const contactData = Array.isArray(contacts?.data) ? contacts.data : [];
    const contactStats = contacts?.stats || {
        pending: 0,
        contacted: 0,
        closed: 0,
        spam: 0
    };
    const contactLinks = Array.isArray(contacts?.links) ? contacts.links : [];
    const contactTotal = Number(contacts?.total) || 0;
    const contactFrom = Number(contacts?.from) || 0;
    const contactTo = Number(contacts?.to) || 0;

    return (
        <AdminLayout>
            <Head title="Contact Inquiries | Admin Dashboard" />
            
            {/* Mobile Header */}
            <div className="md:hidden bg-gradient-to-r from-[#22346e] to-[#1a2a5a] sticky top-0 z-40">
                <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-white"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                            <div>
                                <h1 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Contacts
                                </h1>
                                <p className="text-white/80 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {contactTotal} inquiries
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hidden md:block">
                <div className="container mx-auto px-4 md:px-6 lg:px-12 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                        <div>
                            <div className="flex items-center gap-3 md:gap-4 mb-2">
                                <div className="p-2 md:p-3 bg-white/10 rounded-lg md:rounded-xl">
                                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Contact Inquiries
                                    </h1>
                                    <p className="text-white/80 text-sm md:text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Manage and respond to property inquiries
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <div className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {contactTotal}
                                </div>
                                <div className="text-white/70 text-xs md:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Total Inquiries
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-8">
                {/* Stats Cards - Mobile Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl md:rounded-2xl p-4 md:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-lg md:text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {contactStats.pending}
                                </div>
                                <div className="text-gray-600 text-xs md:text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Pending
                                </div>
                            </div>
                            <div className="p-2 md:p-3 bg-blue-100 rounded-lg md:rounded-xl">
                                <Clock className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-lg md:text-2xl font-bold text-green-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {contactStats.contacted}
                                </div>
                                <div className="text-gray-600 text-xs md:text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Contacted
                                </div>
                            </div>
                            <div className="p-2 md:p-3 bg-green-100 rounded-lg md:rounded-xl">
                                <MailOpen className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl md:rounded-2xl p-4 md:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-lg md:text-2xl font-bold text-purple-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {contactStats.closed}
                                </div>
                                <div className="text-gray-600 text-xs md:text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Closed
                                </div>
                            </div>
                            <div className="p-2 md:p-3 bg-purple-100 rounded-lg md:rounded-xl">
                                <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl md:rounded-2xl p-4 md:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-lg md:text-2xl font-bold text-red-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {contactStats.spam}
                                </div>
                                <div className="text-gray-600 text-xs md:text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Spam
                                </div>
                            </div>
                            <div className="p-2 md:p-3 bg-red-100 rounded-lg md:rounded-xl">
                                <Shield className="w-4 h-4 md:w-6 md:h-6 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search Bar */}
                <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 mb-6 md:mb-8 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Search */}
                        <div className="relative md:col-span-2 lg:col-span-1">
                            <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                                <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search contacts..."
                                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm md:text-base"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                        </div>
                        
                        {/* Status Filter */}
                        <div className="relative">
                            <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                                <Filter className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            </div>
                            <select
                                value={statusFilter}
                                onChange={(e) => handleFilterChange('status', e.target.value)}
                                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm md:text-base appearance-none"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {statusOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Sort By */}
                        <div className="relative">
                            <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                                <ArrowUpDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            </div>
                            <select
                                value={sortBy}
                                onChange={(e) => handleFilterChange('sort', e.target.value)}
                                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-sm md:text-base appearance-none"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        Sort by {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Sort Order */}
                        <button
                            onClick={() => handleFilterChange('order')}
                            className="flex items-center justify-center gap-2 px-3 md:px-6 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm md:text-base"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                            {sortOrder === 'desc' ? <ChevronDown className="w-3 h-3 md:w-4 md:h-4" /> : <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />}
                        </button>
                    </div>
                    
                    {/* Bulk Actions */}
                    {selectedContacts.length > 0 && (
                        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
                                <div className="text-xs md:text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {selectedContacts.length} contact(s) selected
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <button
                                        onClick={() => handleBulkAction('pending')}
                                        className="px-3 py-1.5 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 rounded-lg text-xs font-medium transition-colors duration-300"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        Mark Pending
                                    </button>
                                    <button
                                        onClick={() => handleBulkAction('contacted')}
                                        className="px-3 py-1.5 bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-lg text-xs font-medium transition-colors duration-300"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        Mark Contacted
                                    </button>
                                    <button
                                        onClick={() => handleBulkAction('closed')}
                                        className="px-3 py-1.5 bg-green-100 text-green-800 hover:bg-green-200 rounded-lg text-xs font-medium transition-colors duration-300"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        Mark Closed
                                    </button>
                                    <button
                                        onClick={() => handleBulkAction('delete')}
                                        className="px-3 py-1.5 bg-red-100 text-red-800 hover:bg-red-200 rounded-lg text-xs font-medium transition-colors duration-300"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Desktop Table (hidden on mobile) */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hidden md:block">
                    {/* Table Header */}
                    <div className="border-b border-gray-200">
                        <div className="grid grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-gray-50">
                            <div className="col-span-1">
                                <input
                                    type="checkbox"
                                    checked={selectedContacts.length === contactData.length && contactData.length > 0}
                                    onChange={toggleSelectAll}
                                    className="h-4 w-4 text-[#22346e] border-gray-300 rounded focus:ring-[#22346e]"
                                />
                            </div>
                            <div className="col-span-3 font-semibold text-gray-700 text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Contact
                            </div>
                            <div className="col-span-3 font-semibold text-gray-700 text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Property
                            </div>
                            <div className="col-span-2 font-semibold text-gray-700 text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Date & Message
                            </div>
                            <div className="col-span-2 font-semibold text-gray-700 text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Status
                            </div>
                            <div className="col-span-1 font-semibold text-gray-700 text-right text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Actions
                            </div>
                        </div>
                    </div>

                    {/* Table Body */}
                    {contactData.length === 0 ? (
                        <div className="py-8 md:py-16 text-center">
                            <Mail className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                No contact inquiries found
                            </h3>
                            <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {search || statusFilter 
                                    ? 'Try adjusting your search or filter criteria.' 
                                    : 'All contact inquiries will appear here.'}
                            </p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {contactData.map((contact) => (
                                <div key={contact.id} className="grid grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors duration-200">
                                    {/* Checkbox */}
                                    <div className="col-span-1 flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedContacts.includes(contact.id)}
                                            onChange={() => toggleContactSelection(contact.id)}
                                            className="h-4 w-4 text-[#22346e] border-gray-300 rounded focus:ring-[#22346e]"
                                        />
                                    </div>

                                    {/* Contact Info */}
                                    <div className="col-span-3">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-full flex items-center justify-center flex-shrink-0">
                                                <User className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-medium text-gray-900 text-sm md:text-base truncate" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                    {contact.name || 'N/A'}
                                                </div>
                                                <div className="flex items-center gap-1 md:gap-2 mt-1">
                                                    <Mail className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                                                    <a 
                                                        href={`mailto:${contact.email}`}
                                                        className="text-xs md:text-sm text-[#22346e] hover:text-[#f1424b] transition-colors duration-300 truncate"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {contact.email || 'N/A'}
                                                    </a>
                                                </div>
                                                <div className="flex items-center gap-1 md:gap-2 mt-1">
                                                    <Phone className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                                                    <span className="text-xs md:text-sm text-gray-600 truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {contact.phone || 'N/A'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Property Info */}
                                    <div className="col-span-3">
                                        {contact.property ? (
                                            <div>
                                                <div className="flex items-center gap-1 md:gap-2 mb-1">
                                                    <Home className="w-3 h-3 md:w-4 md:h-4 text-[#22346e]" />
                                                    <span className="font-medium text-gray-700 text-sm md:text-base truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {contact.property.title || 'Property'}
                                                    </span>
                                                </div>
                                                {contact.property.address && (
                                                    <div className="text-xs md:text-sm text-gray-600 line-clamp-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {contact.property.address}
                                                    </div>
                                                )}
                                            </div>
                                        ) : contact.property_name ? (
                                            <div>
                                                <div className="flex items-center gap-1 md:gap-2">
                                                    <Home className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                                                    <span className="font-medium text-gray-700 text-sm md:text-base truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {contact.property_name}
                                                    </span>
                                                </div>
                                                <div className="text-xs md:text-sm text-gray-500 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    Property not in database
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 italic text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                No property specified
                                            </span>
                                        )}
                                    </div>

                                    {/* Date & Message */}
                                    <div className="col-span-2">
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                                            <span className="text-xs md:text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {formatDate(contact.created_at)}
                                            </span>
                                        </div>
                                        {contact.message && (
                                            <div className="mt-1 md:mt-2">
                                                <div className="flex items-start gap-1">
                                                    <MessageSquare className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-xs text-gray-500 line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {contact.message}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Status */}
                                    <div className="col-span-2">
                                        <div className="flex items-center gap-2">
                                            {getStatusBadge(contact.status)}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="col-span-1 flex items-center justify-end gap-1 md:gap-2">
                                        <a
                                            href={`mailto:${contact.email}?subject=Re: Inquiry about ${contact.property_name || 'Property'}`}
                                            className="p-1.5 md:p-2 text-gray-500 hover:text-[#22346e] hover:bg-gray-100 rounded-lg transition-colors duration-300"
                                            title="Reply via Email"
                                        >
                                            <MailOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                        </a>
                                        <button
                                            onClick={() => updateStatus(contact.id, 'contacted')}
                                            className="p-1.5 md:p-2 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                                            title="Mark as Contacted"
                                        >
                                            <MailOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                        </button>
                                        <button
                                            onClick={() => updateStatus(contact.id, 'closed')}
                                            className="p-1.5 md:p-2 text-gray-500 hover:text-purple-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                                            title="Mark as Closed"
                                        >
                                            <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                        </button>
                                        <button
                                            onClick={() => updateStatus(contact.id, 'spam')}
                                            className="p-1.5 md:p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                                            title="Mark as Spam"
                                        >
                                            <Shield className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Cards (hidden on desktop) */}
                <div className="md:hidden space-y-3">
                    {contactData.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                            <Mail className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                No contact inquiries found
                            </h3>
                            <p className="text-gray-500 text-sm px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {search || statusFilter 
                                    ? 'Try adjusting your search or filter criteria.' 
                                    : 'All contact inquiries will appear here.'}
                            </p>
                        </div>
                    ) : (
                        contactData.map((contact) => (
                            <div key={contact.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                                {/* Header with checkbox and actions */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3 flex-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedContacts.includes(contact.id)}
                                            onChange={() => toggleContactSelection(contact.id)}
                                            className="h-4 w-4 text-[#22346e] border-gray-300 rounded focus:ring-[#22346e] mt-1"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-full flex items-center justify-center flex-shrink-0">
                                                    <User className="w-3.5 h-3.5 text-white" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="font-medium text-gray-900 text-sm truncate" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        {contact.name || 'N/A'}
                                                    </h3>
                                                    <div className="text-xs text-gray-500 truncate">{contact.email}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {getStatusBadge(contact.status)}
                                        <button
                                            onClick={() => setMobileActionsOpen(mobileActionsOpen === contact.id ? null : contact.id)}
                                            className="p-1.5 text-gray-400 hover:text-gray-600"
                                        >
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Property Info */}
                                {contact.property_name && (
                                    <div className="mb-3">
                                        <div className="flex items-center gap-2 text-sm text-gray-700">
                                            <Home className="w-3.5 h-3.5 text-gray-400" />
                                            <span className="font-medium">{contact.property_name}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Message Preview */}
                                {contact.message && (
                                    <div className="mb-3">
                                        <div className="flex items-start gap-2">
                                            <MessageSquare className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-gray-600 line-clamp-2">{contact.message}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Contact Details */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-sm text-gray-600">{contact.phone || 'N/A'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-sm text-gray-600">
                                            {new Date(contact.created_at).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                                    <a
                                        href={`mailto:${contact.email}?subject=Re: Inquiry about ${contact.property_name || 'Property'}`}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                                    >
                                        <MailOpen className="w-3.5 h-3.5" />
                                        Reply
                                    </a>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateStatus(contact.id, 'contacted')}
                                            className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-lg"
                                            title="Mark as Contacted"
                                        >
                                            <MailOpen className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => updateStatus(contact.id, 'closed')}
                                            className="p-1.5 text-gray-500 hover:text-purple-600 hover:bg-gray-100 rounded-lg"
                                            title="Mark as Closed"
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => updateStatus(contact.id, 'spam')}
                                            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg"
                                            title="Mark as Spam"
                                        >
                                            <Shield className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile Actions Dropdown */}
                                {mobileActionsOpen === contact.id && (
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => updateStatus(contact.id, 'pending')}
                                                className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium"
                                            >
                                                Mark Pending
                                            </button>
                                            <button
                                                onClick={() => updateStatus(contact.id, 'contacted')}
                                                className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                                            >
                                                Mark Contacted
                                            </button>
                                            <button
                                                onClick={() => updateStatus(contact.id, 'closed')}
                                                className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                                            >
                                                Mark Closed
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (confirm('Are you sure you want to mark this as spam?')) {
                                                        updateStatus(contact.id, 'spam');
                                                    }
                                                }}
                                                className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium"
                                            >
                                                Mark Spam
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination */}
                {contactLinks.length > 3 && (
                    <div className="mt-6 md:mt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                            <div className="text-xs md:text-sm text-gray-600 text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Showing {contactFrom} to {contactTo} of {contactTotal} contacts
                            </div>
                            <nav className="flex items-center space-x-1 md:space-x-2">
                                {/* Previous Button */}
                                <Link
                                    href={contactLinks[0]?.url || '#'}
                                    className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl transition-all duration-300 ${
                                        !contactLinks[0]?.url
                                            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                                            : 'text-gray-700 hover:text-[#22346e] hover:bg-gray-100 border border-gray-200'
                                    }`}
                                    disabled={!contactLinks[0]?.url}
                                >
                                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                                </Link>

                                {/* Page Numbers - Show limited on mobile */}
                                {contactLinks.slice(1, -1).map((link, index) => {
                                    // Show only first, last, and current page on mobile
                                    const totalPages = contactLinks.length - 2;
                                    const isFirstPage = index === 0;
                                    const isLastPage = index === totalPages - 1;
                                    const isCurrentPage = link?.active;
                                    const isNearCurrent = Math.abs(index - (contactFrom / (contactTo - contactFrom + 1))) <= 1;
                                    
                                    // Show on mobile only if it's first, last, or current/near current
                                    const shouldShowOnMobile = isFirstPage || isLastPage || isCurrentPage || isNearCurrent;
                                    
                                    // Show ellipsis for hidden pages
                                    const showEllipsisBefore = index === 1 && !shouldShowOnMobile;
                                    const showEllipsisAfter = index === totalPages - 2 && !shouldShowOnMobile;

                                    return (
                                        <React.Fragment key={index}>
                                            {showEllipsisBefore && (
                                                <span className="min-w-[40px] h-10 flex items-center justify-center text-gray-500">
                                                    ...
                                                </span>
                                            )}
                                            {(shouldShowOnMobile || window.innerWidth >= 768) && (
                                                <Link
                                                    href={link?.url || '#'}
                                                    className={`
                                                        min-w-[32px] md:min-w-[40px] h-8 md:h-10 flex items-center justify-center rounded-lg md:rounded-xl font-medium transition-all duration-300 text-sm md:text-base
                                                        ${link?.active
                                                            ? 'bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white shadow-lg'
                                                            : 'text-gray-700 hover:text-[#22346e] hover:bg-gray-100 border border-gray-200'
                                                        }
                                                        ${!link?.url ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                                                    `}
                                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                    disabled={!link?.url}
                                                >
                                                    <span dangerouslySetInnerHTML={{ __html: link?.label || index + 1 }} />
                                                </Link>
                                            )}
                                            {showEllipsisAfter && (
                                                <span className="min-w-[40px] h-10 flex items-center justify-center text-gray-500">
                                                    ...
                                                </span>
                                            )}
                                        </React.Fragment>
                                    );
                                })}

                                {/* Next Button */}
                                <Link
                                    href={contactLinks[contactLinks.length - 1]?.url || '#'}
                                    className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl transition-all duration-300 ${
                                        !contactLinks[contactLinks.length - 1]?.url
                                            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                                            : 'text-gray-700 hover:text-[#22346e] hover:bg-gray-100 border border-gray-200'
                                    }`}
                                    disabled={!contactLinks[contactLinks.length - 1]?.url}
                                >
                                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                                </Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}