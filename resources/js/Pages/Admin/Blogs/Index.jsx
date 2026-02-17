// resources/js/Pages/Admin/Blogs/Index.jsx
import React, { useState } from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Search,
    Filter,
    Plus,
    Eye,
    Edit,
    Trash2,
    Calendar,
    Eye as EyeIcon,
    FileText,
    TrendingUp,
    MoreVertical,
    CheckCircle,
    Clock,
    AlertCircle,
    Download,
    Upload,
    Users,
    BarChart
} from 'lucide-react';

export default function AdminBlogIndex({ blogs }) {
    const { flash, auth } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedBlogs, setSelectedBlogs] = useState([]);

    const handleDelete = (blogId) => {
        if (confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
            router.delete(route('admin.blogs.destroy', blogId));
        }
    };

    const handleBulkDelete = () => {
        if (selectedBlogs.length === 0) return;
        if (confirm(`Are you sure you want to delete ${selectedBlogs.length} selected blog(s)?`)) {
            router.delete(route('admin.blogs.bulk-delete'), {
                data: { ids: selectedBlogs }
            });
        }
    };

    const handleBulkPublish = () => {
        if (selectedBlogs.length === 0) return;
        if (confirm(`Publish ${selectedBlogs.length} selected blog(s)?`)) {
            router.patch(route('admin.blogs.bulk-publish'), {
                ids: selectedBlogs,
                status: 'published'
            });
        }
    };

    const handleBulkDraft = () => {
        if (selectedBlogs.length === 0) return;
        if (confirm(`Move ${selectedBlogs.length} selected blog(s) to draft?`)) {
            router.patch(route('admin.blogs.bulk-publish'), {
                ids: selectedBlogs,
                status: 'draft'
            });
        }
    };

    const handlePublishToggle = (blog) => {
        const action = blog.status === 'draft' ? 'Publish' : 'Move to Draft';
        if (confirm(`Are you sure you want to ${action.toLowerCase()} this blog?`)) {
            router.patch(route('admin.blogs.status', blog.id), {
                status: blog.status === 'draft' ? 'published' : 'draft'
            });
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedBlogs(blogs.data.map(blog => blog.id));
        } else {
            setSelectedBlogs([]);
        }
    };

    const handleSelectBlog = (blogId) => {
        if (selectedBlogs.includes(blogId)) {
            setSelectedBlogs(selectedBlogs.filter(id => id !== blogId));
        } else {
            setSelectedBlogs([...selectedBlogs, blogId]);
        }
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            published: {
                label: 'Published',
                className: 'bg-green-100 text-green-800',
                icon: <CheckCircle className="w-3 h-3" />
            },
            draft: {
                label: 'Draft',
                className: 'bg-yellow-100 text-yellow-800',
                icon: <FileText className="w-3 h-3" />
            },
            scheduled: {
                label: 'Scheduled',
                className: 'bg-blue-100 text-blue-800',
                icon: <Clock className="w-3 h-3" />
            },
            archived: {
                label: 'Archived',
                className: 'bg-gray-100 text-gray-800',
                icon: <AlertCircle className="w-3 h-3" />
            }
        };

        const config = statusConfig[status] || statusConfig.draft;

        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${config.className}`}>
                {config.icon}
                {config.label}
            </span>
        );
    };

    const getCategoryBadge = (category) => {
        const colors = ['#22346e', '#1a2a5a', '#f1424b', '#d4333b'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
            <span
                className="px-2 py-1 text-xs font-medium rounded"
                style={{ backgroundColor: `${color}15`, color: color }}
            >
                {category || 'Uncategorized'}
            </span>
        );
    };

    // Filter blogs based on search and status
    const filteredBlogs = blogs.data.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const stats = [
        { label: 'Total Posts', value: blogs.total, icon: <FileText className="w-5 h-5" />, color: 'from-[#22346e] to-[#1a2a5a]' },
        { label: 'Published', value: blogs.data.filter(b => b.status === 'published').length, icon: <CheckCircle className="w-5 h-5" />, color: 'from-green-500 to-green-600' },
        { label: 'Total Views', value: blogs.data.reduce((sum, blog) => sum + blog.views, 0), icon: <EyeIcon className="w-5 h-5" />, color: 'from-blue-500 to-blue-600' },
        { label: 'Avg. Engagement', value: '4.8%', icon: <TrendingUp className="w-5 h-5" />, color: 'from-purple-500 to-purple-600' },
    ];

    return (
        <AdminLayout>
            <Head title="Blog Management | ExcelResidential" />

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
                            <p className="text-lg text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Action Bar */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Blog Management
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Create, edit, and manage your blog content
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href={route('admin.blogs.create')}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Plus className="w-5 h-5" />
                                Create New Post
                            </Link>
                        </div>
                    </div>

                    {/* Filters and Search */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search blog posts..."
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
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Blogs Grid/Table */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    {filteredBlogs.length === 0 ? (
                        <div className="p-6 md:p-12 text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                                <FileText className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">No blog posts found</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 px-4">
                                {searchTerm || statusFilter !== 'all'
                                    ? 'Try adjusting your search or filters'
                                    : 'Create your first blog post to get started'}
                            </p>
                            <Link
                                href={route('admin.blogs.create')}
                                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                            >
                                <Plus className="w-4 h-4 md:w-5 md:h-5" />
                                Create First Post
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Desktop Table (hidden on mobile) */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="px-4 md:px-6 py-3 md:py-4 text-left">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedBlogs.length === blogs.data.length}
                                                    onChange={handleSelectAll}
                                                    className="w-4 h-4 text-[#22346e] bg-gray-100 border-gray-300 rounded focus:ring-[#22346e]"
                                                />
                                            </th>
                                            <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Blog Post
                                            </th>
                                            <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Views
                                            </th>
                                            <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {filteredBlogs.map((blog) => (
                                            <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-4 md:px-6 py-3 md:py-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedBlogs.includes(blog.id)}
                                                        onChange={() => handleSelectBlog(blog.id)}
                                                        className="w-4 h-4 text-[#22346e] bg-gray-100 border-gray-300 rounded focus:ring-[#22346e]"
                                                    />
                                                </td>
                                                <td className="px-4 md:px-6 py-3 md:py-4">
                                                    <div className="flex items-center gap-3 md:gap-4">
                                                        {blog.featured_image_url ? (
                                                            <img
                                                                src={blog.featured_image_url}
                                                                alt={blog.title}
                                                                className="w-12 h-9 md:w-16 md:h-12 object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <div className="w-12 h-9 md:w-16 md:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                                                <FileText className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                                                            </div>
                                                        )}
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-medium text-gray-900 truncate text-sm md:text-base">
                                                                {blog.title}
                                                            </h4>
                                                            <p className="text-xs md:text-sm text-gray-500 truncate mt-1">
                                                                {blog.excerpt || 'No excerpt available'}
                                                            </p>
                                                            <div className="flex items-center gap-2 mt-1 md:mt-2">
                                                                <span className="text-xs text-gray-500">
                                                                    By {blog.user?.name || auth.user.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 md:px-6 py-3 md:py-4">
                                                    {getStatusBadge(blog.status)}
                                                </td>
                                                <td className="px-4 md:px-6 py-3 md:py-4">
                                                    <div className="flex items-center gap-2">
                                                        <EyeIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                                                        <span className="font-medium text-gray-900 text-sm md:text-base">
                                                            {blog.views.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-4 md:px-6 py-3 md:py-4">
                                                    <div className="text-xs md:text-sm">
                                                        <div className="text-gray-900">
                                                            {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </div>
                                                        <div className="text-gray-500 text-xs">
                                                            {new Date(blog.created_at).toLocaleTimeString('en-US', {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 md:px-6 py-3 md:py-4">
                                                    <div className="flex items-center gap-1 md:gap-2">
                                                        <Link
                                                            href={route('blogs.show', blog.slug)}
                                                            target="_blank"
                                                            className="p-1.5 md:p-2 text-gray-600 hover:text-[#22346e] hover:bg-gray-100 rounded-lg transition-colors"
                                                            title="View"
                                                        >
                                                            <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                        </Link>
                                                        <Link
                                                            href={route('admin.blogs.edit', blog.id)}
                                                            className="p-1.5 md:p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                            title="Edit"
                                                        >
                                                            <Edit className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handlePublishToggle(blog)}
                                                            className={`p-1.5 md:p-2 rounded-lg transition-colors text-xs md:text-sm ${blog.status === 'draft'
                                                                    ? 'text-yellow-600 hover:bg-yellow-50'
                                                                    : 'text-blue-600 hover:bg-blue-50'
                                                                }`}
                                                            title={blog.status === 'draft' ? 'Publish' : 'Move to Draft'}
                                                        >
                                                            {blog.status === 'draft' ? 'Publish' : 'Draft'}
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(blog.id)}
                                                            className="p-1.5 md:p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards (hidden on desktop) */}
                            <div className="md:hidden space-y-3 p-3">
                                {filteredBlogs.map((blog) => (
                                    <div key={blog.id} className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3 flex-1">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedBlogs.includes(blog.id)}
                                                    onChange={() => handleSelectBlog(blog.id)}
                                                    className="w-4 h-4 text-[#22346e] bg-gray-100 border-gray-300 rounded focus:ring-[#22346e] mt-1"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-gray-900 line-clamp-2 text-sm">
                                                        {blog.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-xs text-gray-500">
                                                            By {blog.user?.name || auth.user.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                {getStatusBadge(blog.status)}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-3">
                                            {blog.featured_image_url ? (
                                                <img
                                                    src={blog.featured_image_url}
                                                    alt={blog.title}
                                                    className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                                                />
                                            ) : (
                                                <div className="w-16 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <FileText className="w-5 h-5 text-gray-400" />
                                                </div>
                                            )}
                                            <p className="text-xs text-gray-600 line-clamp-2 flex-1">
                                                {blog.excerpt || 'No excerpt available'}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                                            <div className="flex items-center gap-4 text-xs">
                                                <div className="flex items-center gap-1">
                                                    <EyeIcon className="w-3.5 h-3.5 text-gray-400" />
                                                    <span className="font-medium text-gray-900">
                                                        {blog.views.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="text-gray-500">
                                                    {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Link
                                                    href={route('blogs.show', blog.slug)}
                                                    target="_blank"
                                                    className="p-1.5 text-gray-600 hover:text-[#22346e] hover:bg-gray-100 rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-3.5 h-3.5" />
                                                </Link>
                                                <Link
                                                    href={route('admin.blogs.edit', blog.id)}
                                                    className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit className="w-3.5 h-3.5" />
                                                </Link>
                                                <button
                                                    onClick={() => handlePublishToggle(blog)}
                                                    className={`p-1.5 rounded-lg transition-colors text-xs ${blog.status === 'draft'
                                                            ? 'text-yellow-600 hover:bg-yellow-50'
                                                            : 'text-blue-600 hover:bg-blue-50'
                                                        }`}
                                                    title={blog.status === 'draft' ? 'Publish' : 'Move to Draft'}
                                                >
                                                    {blog.status === 'draft' ? 'Publish' : 'Draft'}
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                    className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Pagination */}
                {blogs.links && blogs.links.length > 3 && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                            <div className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                                Showing <span className="font-semibold">{blogs.from}</span> to <span className="font-semibold">{blogs.to}</span> of{' '}
                                <span className="font-semibold">{blogs.total}</span> posts
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 flex-wrap justify-center">
                                {blogs.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => link.url && router.get(link.url)}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-2 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${link.active
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