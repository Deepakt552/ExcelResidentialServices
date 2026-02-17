// resources/js/Layouts/AdminLayout.jsx
import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    FileText,
    Home,
    Users,
    Settings,
    Bell,
    Search,
    ChevronDown,
    Menu,
    X,
    LogOut,
    ExternalLink,
    User,
    BarChart3,
    Shield,
    Building2,
    Calendar,
    DollarSign,
    ChevronRight,
    Moon,
    Sun
} from 'lucide-react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const menuItems = [
        {
            name: 'Blog Management',
            href: route('admin.blogs.index'),
            icon: <FileText className="w-5 h-5" />,
        },
        {
            name: 'Properties',
            href: route('admin.properties.index'),
            icon: <Building2 className="w-5 h-5" />,
        },
        {
            name: 'Contacts',
            href: route('admin.contact.index'),
            icon: <Users className="w-5 h-5" />,
        },
    ];

    const stats = [
        // Example stats that you can uncomment when needed
        // { label: 'Total Properties', value: '45', change: '+12%', icon: <Building2 className="w-4 h-4" /> },
        // { label: 'Occupancy Rate', value: '96%', change: '+5%', icon: <BarChart3 className="w-4 h-4" /> },
        // { label: 'Monthly Revenue', value: '$124,580', change: '+18%', icon: <DollarSign className="w-4 h-4" /> },
        // { label: 'Active Tenants', value: '287', change: '+8%', icon: <Users className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Head title="Admin Dashboard | ExcelResidential" />

            {/* Mobile sidebar toggle */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-40 w-80 transform 
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 transition-transform duration-300
                bg-white text-gray-900
                border-r border-gray-200 shadow-lg
            `}>
                {/* Sidebar Header */}
                <div className="p-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src="https://excelresidential.com/wp-content/uploads/2025/01/cropped-Excel-Residential-Icon-1-145x48.png"
                                alt="Excel Residential Logo"
                                className="h-6 sm:h-7 lg:h-8 w-auto"
                            />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Admin Panel</p>
                        </div>
                    </div>
                </div>

                {/* User Profile */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-full flex items-center justify-center text-white text-lg font-bold">
                                {auth.user?.name?.charAt(0) || 'A'}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-gray-900 font-semibold">{auth.user?.name}</h3>
                            <p className="text-gray-600 text-sm">{auth.user?.email}</p>
                            <p className="text-xs text-[#f1424b] mt-1">Administrator</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="p-4 flex-1 overflow-y-auto">
                    <div className="space-y-2">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`
                                        flex items-center justify-between px-4 py-3 rounded-xl 
                                        transition-all duration-300 group
                                        ${route().current('admin.*') && route().current(item.href.replace(/^\//, ''))
                                            ? 'bg-gradient-to-r from-[#22346e]/10 to-[#1a2a5a]/10 text-gray-900 border-l-4 border-[#f1424b]'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }
                                    `}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`
                                            ${route().current('admin.*') && route().current(item.href.replace(/^\//, ''))
                                                ? 'text-[#f1424b]'
                                                : 'text-gray-500 group-hover:text-gray-700'
                                            }
                                        `}>
                                            {item.icon}
                                        </div>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    {item.children && (
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    )}
                                </Link>

                                {/* Submenu */}
                                {item.children && (
                                    <div className="ml-12 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                            >
                                                <ChevronRight className="w-3 h-3 mr-2" />
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-gray-200">
                    <div className="space-y-4">
                        <Link
                            href={route('logout')}
                            method="post"
                            className="flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors group"
                        >
                            <LogOut className="w-5 h-5 group-hover:text-[#f1424b] transition-colors" />
                            <span>Logout</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:ml-80">
                {/* Top Bar */}
                <header className="sticky top-0 z-30 bg-white shadow-sm">
                    <div className="px-8 py-4">
                        <div className="flex justify-between items-center">
                            {/* Search */}
                            <div className="flex-1 max-w-2xl">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="search"
                                        placeholder="Search properties, tenants, reports..."
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                    />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex items-center space-x-6">
                                {/* User Menu */}
                                <div className="relative">
                                    <button
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-full flex items-center justify-center text-white">
                                            {auth.user?.name?.charAt(0) || 'A'}
                                        </div>
                                        <div className="text-left hidden lg:block">
                                            <p className="font-medium text-gray-800">{auth.user?.name}</p>
                                            <p className="text-sm text-gray-600">Administrator</p>
                                        </div>
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {userMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                                            <div className="px-4 py-3 border-b border-gray-200">
                                                <p className="font-medium text-gray-900">{auth.user?.name}</p>
                                                <p className="text-sm text-gray-600">{auth.user?.email}</p>
                                            </div>
                                            <Link
                                                href="/"
                                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                            >
                                                <User className="w-4 h-4 mr-3" />
                                                Home Page
                                            </Link>
                                            <Link
                                                href={route('blogs.index')}
                                                target="_blank"
                                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-3" />
                                                Blog Page
                                            </Link>
                                            <div className="border-t border-gray-200 mt-2 pt-2">
                                                <Link
                                                    href={route('logout')}
                                                    method="post"
                                                    className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                                                >
                                                    <LogOut className="w-4 h-4 mr-3" />
                                                    Sign Out
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Stats Overview */}
                <div className="px-8 pt-8 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-gray-50">
                                        <div className="text-[#22346e]">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                        {stat.change}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Page Content */}
                <main className="px-8 pb-8">
                    <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                        <div className="px-8 py-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {route().current('admin.dashboard') ? 'Dashboard Overview' :
                                    route().current('admin.blogs.*') ? 'Blog Management' :
                                        route().current('admin.properties.*') ? 'Property Management' : 'Admin Panel'}
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Manage your properties, content, and analytics from one centralized dashboard
                            </p>
                        </div>
                        <div className="p-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}