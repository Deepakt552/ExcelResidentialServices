// resources/js/Pages/Blogs/Index.jsx
import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import Layout from '@/Layouts/Layout';
import {
    Calendar,
    Eye,
    Heart,
    MessageCircle,
    User,
    ChevronRight,
    Plus,
    TrendingUp,
    Clock,
    BookOpen,
    ArrowRight,
    Search,
    Filter
} from 'lucide-react';

export default function BlogIndex({ blogs }) {
    const { auth } = usePage().props;

    const seoData = {
        title: "Real Estate Property Management Blog | Excel Residential Services",
        description: "Stay informed with the latest insights, market trends, and expert advice on property management and real estate investing.",
        keywords: "Property Management Blog, Real Estate Insights, Market Trends, Investment Tips, Property Maintenance Advice"
    };

    return (
        <Layout>
            <Seo {...seoData} />

            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                            <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Insights & Updates
                            </span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Property<br />Management Insights
                        </h1>

                        <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Expert perspectives, market trends, and valuable insights for property owners and investors.
                        </p>

                        {auth.user?.isAdmin && (
                            <div className="flex justify-center">
                                <Link
                                    href={route('admin.blogs.index')}
                                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 group"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <Plus className="w-5 h-5" />
                                    Manage Blog Posts
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    {blogs.data.length === 0 ? (
                        <div className="max-w-2xl mx-auto text-center py-20">
                            <BookOpen className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-gray-700 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                No Blog Posts Yet
                            </h2>
                            <p className="text-gray-600 text-lg mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                                We're working on bringing you valuable insights and updates. Check back soon!
                            </p>
                            {auth.user?.isAdmin && (
                                <Link
                                    href={route('admin.blogs.create')}
                                    className="inline-flex items-center gap-2 text-[#22346e] hover:text-[#f1424b] font-semibold text-lg transition-colors duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <Plus className="w-5 h-5" />
                                    Create your first blog post
                                </Link>
                            )}
                        </div>
                    ) : (
                        <>
                            {/* Search & Filter Bar */}
                            {/* <div className="max-w-4xl mx-auto mb-16">
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Search className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Search blog posts..."
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Filter className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <select
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 appearance-none"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                <option>All Categories</option>
                                                <option>Property Management</option>
                                                <option>Market Trends</option>
                                                <option>Investment Tips</option>
                                                <option>Maintenance Advice</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> */}





                            {/* Featured Post (First Post) */}
                            {/* {blogs.data.length > 0 && (
                                <div className="max-w-6xl mx-auto mb-20">
                                    <div className="bg-gradient-to-r from-[#22346e]/5 to-[#f1424b]/5 rounded-3xl overflow-hidden shadow-2xl">
                                        {blogs.data[0].featured_image_url && (
                                            <div className="h-96 relative">
                                                <img
                                                    src={blogs.data[0].featured_image_url}
                                                    alt={blogs.data[0].title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                <div className="absolute top-6 left-6">
                                                    <span className="bg-[#f1424b] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        Featured
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="p-8 lg:p-12">
                                            <div className="flex flex-wrap items-center gap-6 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <User className="w-4 h-4 text-[#22346e]" />
                                                    <span className="text-[#22346e] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {blogs.data[0].user?.name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-[#22346e]" />
                                                    <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {new Date(blogs.data[0].created_at).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>

                                            <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                {blogs.data[0].title}
                                            </h2>

                                            <p className="text-gray-700 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {blogs.data[0].excerpt || blogs.data[0].content.substring(0, 250)}...
                                            </p>

                                            <div className="flex flex-wrap items-center justify-between gap-6">
                                                <div className="flex items-center gap-6">
                                                    <div className="flex items-center gap-2">
                                                        <Eye className="w-5 h-5 text-gray-500" />
                                                        <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {blogs.data[0].views}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Heart className="w-5 h-5 text-gray-500" />
                                                        <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {blogs.data[0].likes.length || 0}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MessageCircle className="w-5 h-5 text-gray-500" />
                                                        <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {blogs.data[0].comments.length || 0}
                                                        </span>
                                                    </div>
                                                </div>

                                                <Link
                                                    href={route('blogs.show', blogs.data[0].slug)}
                                                    className="inline-flex items-center gap-3 text-[#22346e] hover:text-[#f1424b] font-semibold group"
                                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                >
                                                    Read Full Article
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} */}

                            {/* Blog Grid */}
                            <div className="max-w-6xl mx-auto">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {blogs.data.slice().map((blog) => (
                                        <div key={blog.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                            {/* Trending Badge */}
                                            {blog.views > 1000 && (
                                                <div className="absolute top-4 right-4 z-10">
                                                    <div className="bg-gradient-to-r from-[#f1424b] to-[#d4333b] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        <TrendingUp className="w-3 h-3" />
                                                        Trending
                                                    </div>
                                                </div>
                                            )}

                                            {/* Image */}
                                            {blog.featured_image_url && (
                                                <div className="h-56 overflow-hidden">
                                                    <img
                                                        src={blog.featured_image_url}
                                                        alt={blog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className=" inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                            )}

                                            <div className="p-6">
                                                {/* Meta Info */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <User className="w-4 h-4 text-gray-500" />
                                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {blog.user?.name}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-gray-500" />
                                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-[#22346e] mb-3 line-clamp-2 group-hover:text-[#f1424b] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {blog.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    {blog.excerpt || blog.content.substring(0, 120)}...
                                                </p>

                                                {/* Stats & Read More */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1">
                                                            <Eye className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                                {blog.views}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Heart className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                                {blog.likes.length || 0}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        href={route('blogs.show', blog.slug)}
                                                        className="inline-flex items-center gap-2 text-[#22346e] hover:text-[#f1424b] font-semibold text-sm group/readmore"
                                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                    >
                                                        Read
                                                        <ArrowRight className="w-4 h-4 group-hover/readmore:translate-x-2 transition-transform duration-300" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Pagination */}
            {blogs.links && blogs.links.length > 3 && (
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto">
                            <nav className="flex items-center justify-center space-x-2">
                                {blogs.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`
                                            min-w-[40px] h-10 flex items-center justify-center rounded-xl font-medium transition-all duration-300
                                            ${link.active
                                                ? 'bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white shadow-lg'
                                                : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-[#22346e] hover:shadow-md border border-gray-200'
                                            }
                                            ${!link.url ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                                        `}
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        disabled={!link.url}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </section>
            )}


        </Layout>
    );
}