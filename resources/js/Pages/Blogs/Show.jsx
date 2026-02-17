// resources/js/Pages/Blogs/Show.jsx
import React, { useState, useEffect } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import Layout from '@/Layouts/Layout';
import {
    Heart,
    MessageCircle,
    Eye,
    Calendar,
    User,
    Clock,
    ChevronLeft,
    Share2,
    Bookmark,
    Send,
    Trash2,
    Edit,
    Image as ImageIcon,
    TrendingUp,
    Tag,
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin,
    Copy,
    CheckCircle,
    Loader2
} from 'lucide-react';

export default function BlogShow({ blogs, blog, isLiked, isPreview = false, canEdit = false }) {
    const { auth } = usePage().props;
    const [comment, setComment] = useState('');
    const [showShare, setShowShare] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [processedContent, setProcessedContent] = useState('');

    console.log('Complete Blog Object:', blog);
    console.log('Blog Images:', blog.images);
    console.log('Blog Images Type:', typeof blog.images);

    // Process content to replace image placeholders with actual image URLs
    useEffect(() => {
        if (blog.content && blog.images) { // Ensure blog.images is checked
            let content = blog.content;

            // Get all content images
            const contentImages = blog.images.filter(img => img.type === 'content');

            contentImages.forEach(image => {
                if (image.placeholder && image.image_url) {
                    const imageHtml = `
    <div class="blog-image-container my-8">
        <img 
            src="${image.image_url}" 
            alt="${image.caption || 'Blog image'}"
            class="w-full h-auto rounded-xl shadow-lg"
            loading="lazy"
        />
        ${image.caption ? `
            <div class="mt-3 text-center text-gray-600 text-sm italic">
                ${image.caption}
            </div>
        ` : ''}
    </div>
`;

                    // Replace the placeholder with the image HTML
                    content = content.replace(image.placeholder, imageHtml);
                }
            });

            setProcessedContent(content);
        } else {
            setProcessedContent(blog.content || '');
        }
    }, [blog.content, blog.images]); // Add blog.images to dependencies
    const handleLike = () => {
        if (!auth.user) {
            router.visit(route('login'));
            return;
        }
        router.post(route('likes.toggle', blog.id));
    };

    const handleComment = (e) => {
        e.preventDefault();
        if (!auth.user) {
            router.visit(route('login'));
            return;
        }

        if (comment.trim()) {
            router.post(route('comments.store', blog.id), {
                content: comment,
            }, {
                onSuccess: () => setComment(''),
                preserveScroll: true
            });
        }
    };

    const deleteComment = (commentId) => {
        if (confirm('Are you sure you want to delete this comment?')) {
            setIsDeleting(true);
            router.delete(route('comments.destroy', commentId), {
                preserveScroll: true,
                onFinish: () => setIsDeleting(false)
            });
        }
    };

    const shareOnSocial = (platform) => {
        const url = window.location.href;
        const title = blog.title;
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
                break;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const readingTime = (content) => {
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    };

    // Get gallery images
    const galleryImages = blog.images?.filter(img => img.type === 'gallery') || [];

    return (
        <Layout auth={auth}>
            <Seo
                title={`${blog.title} | Excel Residential`}
                description={blog.excerpt || (blog.content ? blog.content.substring(0, 160).replace(/<[^>]+>/g, '') : '')}
                image={blog.featured_image_url}
                type="article"
                author={blog.user?.name}
                publishedTime={blog.created_at}
                modifiedTime={blog.updated_at}
            />

            {/* Preview Banner */}
            {isPreview && (
                <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 shadow-lg">
                    <div className="container mx-auto px-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <div className="animate-pulse bg-white/20 p-1 rounded-full">
                                <Eye className="w-4 h-4" />
                            </div>
                            <p className="font-bold text-sm sm:text-base">PREVIEW MODE - This blog post is not published yet</p>
                            {canEdit && (
                                <Link
                                    href={route('admin.blogs.edit', blog.id)}
                                    className="ml-4 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300 flex items-center gap-2"
                                >
                                    <Edit className="w-3 h-3" />
                                    Edit Post
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Breadcrumb */}
                        <div className="mb-8">
                            <Link
                                href={route('blogs.index')}
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                                Back to Blogs
                            </Link>
                        </div>

                        {/* Header Content */}
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                {/* Category */}
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                    <Tag className="w-4 h-4 text-[#f1424b]" />
                                    <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        {blog.category?.name || 'Property Insights'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {blog.title}
                                </h1>

                                {/* Excerpt */}
                                {blog.excerpt && (
                                    <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {blog.excerpt}
                                    </p>
                                )}

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#f1424b] to-[#ff6b6b] rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {blog.user?.name?.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {blog.user?.name}
                                            </p>
                                            <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {blog.user?.role || 'Property Expert'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-white/60" />
                                            <span className="text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-white/60" />
                                            <span className="text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {readingTime(blog.content)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Sidebar */}
                            <div className="space-y-6">
                                {/* Views */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <Eye className="w-6 h-6 text-[#f1424b]" />
                                        <TrendingUp className="w-5 h-5 text-green-400" />
                                    </div>
                                    <p className="text-white/60 text-sm mb-1">Total Views</p>
                                    <p className="text-3xl font-bold text-white">{blog.views?.toLocaleString() || '0'}</p>
                                </div>

                                {/* Likes */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <Heart className="w-6 h-6 text-[#f1424b]" />
                                        <button
                                            onClick={handleLike}
                                            className={`p-2 rounded-full transition-all duration-300 ${isLiked ? 'bg-[#f1424b]/20 text-[#f1424b]' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                                        >
                                            {isLiked ? (
                                                <Heart className="w-5 h-5 fill-current" />
                                            ) : (
                                                <Heart className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-white/60 text-sm mb-1">Total Likes</p>
                                    <p className="text-3xl font-bold text-white">{blog.likes?.length?.toLocaleString() || '0'}</p>
                                </div>

                                {/* Comments */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <MessageCircle className="w-6 h-6 text-[#f1424b] mb-4" />
                                    <p className="text-white/60 text-sm mb-1">Total Comments</p>
                                    <p className="text-3xl font-bold text-white">{blog.comments?.length?.toLocaleString() || '0'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Featured Image */}
                        {blog.featured_image_url && (
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
                                <img
                                    src={blog.featured_image_url}
                                    alt={blog.title}
                                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        )}

                        {/* Blog Content */}
                        <article className="prose prose-lg max-w-none mb-16">
                            <div
                                className="text-gray-700 leading-relaxed text-lg blog-content"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                                dangerouslySetInnerHTML={{ __html: processedContent }}
                            />
                        </article>

                        {/* Additional Sections */}
                        {blog.sections && blog.sections.length > 0 && (
                            <div className="space-y-12 mb-16">
                                {blog.sections.map((section, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200"
                                    >
                                        {section.title && (
                                            <h3 className="text-3xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                {section.title}
                                            </h3>
                                        )}
                                        <div
                                            className="text-gray-600 leading-relaxed"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Gallery Images */}
                        {galleryImages.length > 0 && (
                            <div className="mb-16">
                                <div className="flex items-center gap-3 mb-8">
                                    <ImageIcon className="w-6 h-6 text-[#22346e]" />
                                    <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Photo Gallery
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {galleryImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                                        >
                                            <img
                                                src={image.image_url}
                                                alt={`Gallery ${index + 1}`}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {image.caption && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                    <p className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {image.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Share Section */}

                    </div>
                </div>
            </section>

            {/* Comments Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Comments
                                </h2>
                                <div className="flex items-center gap-4">
                                    <MessageCircle className="w-5 h-5 text-[#f1424b]" />
                                    <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {blog.comments?.length || 0} comments
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById('comment-form').scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-2 text-[#22346e] hover:text-[#f1424b] transition-colors duration-300"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                <ArrowRight className="w-4 h-4" />
                                Leave a comment
                            </button>
                        </div>

                        {/* Add Comment Form */}
                        <div id="comment-form" className="bg-gradient-to-r from-[#f8f9fa] to-white rounded-2xl shadow-lg p-8 mb-16">
                            {auth.user ? (
                                <form onSubmit={handleComment}>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#22346e] to-[#f1424b] rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-lg">
                                                {auth.user.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-[#22346e] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                {auth.user.name}
                                            </p>
                                            <textarea
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-transparent transition-all duration-300"
                                                rows="4"
                                                placeholder="Share your thoughts..."
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-[#f1424b] to-[#ff6b6b] text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-[#f1424b]/30 transition-all duration-300 flex items-center gap-2 group"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            Post Comment
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center p-8">
                                    <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Join the conversation</h4>
                                    <p className="text-gray-600 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Please sign in or register to leave a comment
                                    </p>
                                    <div className="flex gap-4 justify-center">
                                        <Link
                                            href={route('login')}
                                            className="bg-[#22346e] text-white px-6 py-3 rounded-xl hover:bg-[#1a2a5a] transition-colors duration-300"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            Sign In
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="border border-[#22346e] text-[#22346e] px-6 py-3 rounded-xl hover:bg-[#22346e]/5 transition-colors duration-300"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Comments List */}
                        <div className="space-y-8">
                            {blog.comments && blog.comments.length > 0 ? (
                                blog.comments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-[#22346e]/20 to-[#f1424b]/20 rounded-full flex items-center justify-center">
                                                    <span className="text-[#22346e] font-bold text-lg">
                                                        {comment.user?.name?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#22346e]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {comment.user?.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {new Date(comment.created_at).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>

                                            {(auth.user?.id === comment.user_id || auth.user?.isAdmin) && (
                                                <button
                                                    onClick={() => deleteComment(comment.id)}
                                                    disabled={isDeleting}
                                                    className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-300 disabled:opacity-50"
                                                    title="Delete comment"
                                                >
                                                    {isDeleting ? (
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                    ) : (
                                                        <Trash2 className="w-4 h-4" />
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                        <p
                                            className="text-gray-700 leading-relaxed pl-16"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {comment.content}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-16">
                                    <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-gray-700 mb-2">No comments yet</h4>
                                    <p className="text-gray-600 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Be the first to share your thoughts on this article
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts Section */}
            {blogs && blogs.data && blogs.data.length > 0 && (
                <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    You Might Also Like
                                </h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Explore more valuable insights from our property experts
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogs.data.slice(0, 3).map((relatedBlog) => (
                                    relatedBlog.id !== blog.id && (
                                        <div key={relatedBlog.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                            {/* Trending Badge */}
                                            {relatedBlog.views > 1000 && (
                                                <div className="absolute top-4 right-4 z-10">
                                                    <div className="bg-gradient-to-r from-[#f1424b] to-[#d4333b] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        <TrendingUp className="w-3 h-3" />
                                                        Trending
                                                    </div>
                                                </div>
                                            )}

                                            {/* Image */}
                                            {relatedBlog.featured_image_url && (
                                                <div className="h-56 overflow-hidden">
                                                    <img
                                                        src={relatedBlog.featured_image_url}
                                                        alt={relatedBlog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                            )}

                                            <div className="p-6">
                                                {/* Meta Info */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <User className="w-4 h-4 text-gray-500" />
                                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {relatedBlog.user?.name}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-gray-500" />
                                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                            {new Date(relatedBlog.created_at).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-[#22346e] mb-3 line-clamp-2 group-hover:text-[#f1424b] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {relatedBlog.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                    {relatedBlog.excerpt || relatedBlog.content.substring(0, 120)}...
                                                </p>

                                                {/* Stats & Read More */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1">
                                                            <Eye className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                                {relatedBlog.views}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Heart className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                                {relatedBlog.likes?.length || 0}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        href={route('blogs.show', relatedBlog.slug)}
                                                        className="inline-flex items-center gap-2 text-[#22346e] hover:text-[#f1424b] font-semibold text-sm group/readmore"
                                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                    >
                                                        Read
                                                        <ArrowRight className="w-4 h-4 group-hover/readmore:translate-x-2 transition-transform duration-300" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Add custom CSS for blog content */}
            <style jsx global>{`
                .blog-content {
                    line-height: 1.8;
                }
                
                .blog-content h1 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin: 2rem 0 1rem;
                    color: #22346e;
                }
                
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: bold;
                    margin: 1.5rem 0 1rem;
                    color: #22346e;
                }
                
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 1.25rem 0 1rem;
                    color: #22346e;
                }
                
                .blog-content p {
                    margin: 1rem 0;
                    font-size: 1.125rem;
                }
                
                .blog-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 1rem;
                    margin: 2rem 0;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .blog-content blockquote {
                    border-left: 4px solid #f1424b;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: #4a5568;
                }
                
                .blog-content ul, 
                .blog-content ol {
                    margin: 1rem 0;
                    padding-left: 2rem;
                }
                
                .blog-content li {
                    margin: 0.5rem 0;
                }
                
                .blog-content a {
                    color: #22346e;
                    text-decoration: underline;
                }
                
                .blog-content a:hover {
                    color: #f1424b;
                }
                
                .blog-image-container {
                    text-align: center;
                }
                
                .blog-image-container img {
                    display: inline-block;
                }
            `}</style>
        </Layout>
    );
}