// resources/js/Pages/Admin/Blogs/CreateEdit.jsx
import React, { useState, useEffect } from 'react';
import { Head, useForm, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import QuillRichTextEditor from '@/Components/QuillRichTextEditor';
import { 
    Save, 
    Eye, 
    Upload, 
    X, 
    Plus, 
    Image as ImageIcon,
    Trash2,
    Edit2,
    Layout,
    FileText,
    Hash,
    Type,
    ChevronDown,
    Calendar,
    Tag,
    Clock,
    Settings,
    Globe,
    Lock,
    Check
} from 'lucide-react';

export default function CreateEditBlog({ blog = null, categories = [] }) {
    const isEdit = !!blog;
    
    // Separate state for content images from Quill editor
    const [contentImages, setContentImages] = useState([]);
    
    const { data, setData, post, put, processing, errors } = useForm({
        title: blog?.title || '',
        slug: blog?.slug || '',
        content: blog?.content || '',
        excerpt: blog?.excerpt || '',
        featured_image: null,
        featured_image_url: blog?.featured_image_url || '',
        status: blog?.status || 'draft',
        category_id: blog?.category_id || '',
        tags: blog?.tags?.map(t => t.name).join(', ') || '',
        meta_title: blog?.meta_title || '',
        meta_description: blog?.meta_description || '',
        sections: blog?.sections || [],
        images: blog?.images?.filter(img => img.type === 'gallery') || [], // Gallery images only
        new_images: [], // New gallery images
        published_at: blog?.published_at || new Date().toISOString().split('T')[0],
    });

    const [previewImage, setPreviewImage] = useState(blog?.featured_image_url || null);
    const [activeTab, setActiveTab] = useState('content');
    const [showPreview, setShowPreview] = useState(false);

    // Auto-generate slug from title
    useEffect(() => {
        if (!isEdit && data.title) {
            const generatedSlug = data.title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .substring(0, 100);
            setData('slug', generatedSlug);
        }
    }, [data.title, isEdit]);

    // Handle featured image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be less than 5MB');
                return;
            }
            setData('featured_image', file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Handle multiple gallery images upload
    const handleMultipleImages = (e) => {
        const files = Array.from(e.target.files).slice(0, 10);
        
        files.forEach(file => {
            if (file && file.size <= 5 * 1024 * 1024) {
                const newImage = {
                    file: file,
                    caption: '',
                    type: 'gallery',
                    previewUrl: URL.createObjectURL(file)
                };
                setData('new_images', [...data.new_images, newImage]);
            }
        });
    };

    // Add new section
    const addSection = () => {
        const newSection = {
            title: '',
            content: '',
            order: data.sections.length,
        };
        setData('sections', [...data.sections, newSection]);
    };

    // Update section
    const updateSection = (index, field, value) => {
        const updatedSections = [...data.sections];
        updatedSections[index][field] = value;
        setData('sections', updatedSections);
    };

    // Remove section
    const removeSection = (index) => {
        const updatedSections = data.sections.filter((_, i) => i !== index);
        setData('sections', updatedSections);
    };

    // Handle content images from Quill editor
    const handleContentImagesChange = (images) => {
        setContentImages(images);
    };

    // Remove gallery image
    const removeGalleryImage = (index, isNew = false) => {
        if (isNew) {
            // Remove from new_images
            const updatedImages = data.new_images.filter((_, i) => i !== index);
            setData('new_images', updatedImages);
        } else {
            // Remove from existing gallery images
            const updatedImages = data.images.filter((_, i) => i !== index);
            setData('images', updatedImages);
        }
    };

    // Update gallery image caption
    const updateGalleryImageCaption = (index, caption, isNew = false) => {
        if (isNew) {
            const updatedImages = [...data.new_images];
            updatedImages[index].caption = caption;
            setData('new_images', updatedImages);
        } else {
            const updatedImages = [...data.images];
            updatedImages[index].caption = caption;
            setData('images', updatedImages);
        }
    };

    // Preview blog
    const handlePreview = () => {
        if (isEdit) {
            window.open(route('blogs.preview', blog.id), '_blank');
        } else {
            // Show preview modal or alert for new posts
            alert('Preview is only available for saved posts. Please save as draft first.');
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create FormData object for file uploads
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('excerpt', data.excerpt);
        formData.append('status', data.status);
        formData.append('slug', data.slug);
        formData.append('category_id', data.category_id || '');
        formData.append('tags', data.tags);
        formData.append('meta_title', data.meta_title);
        formData.append('meta_description', data.meta_description);
        formData.append('published_at', data.published_at);
        
        // Add sections as JSON
        if (data.sections.length > 0) {
            formData.append('sections', JSON.stringify(data.sections));
        }
        
        // Add featured image if exists
        if (data.featured_image) {
            formData.append('featured_image', data.featured_image);
        }
        
        // Add gallery images (new_images array)
        data.new_images.forEach((image, index) => {
            if (image.file) {
                formData.append(`gallery_images[${index}][image]`, image.file);
                formData.append(`gallery_images[${index}][caption]`, image.caption || '');
            }
        });
        
        // Add existing gallery images info
        data.images.forEach((image, index) => {
            if (image.id) { // Only for existing images
                formData.append(`existing_images[${index}][id]`, image.id);
                formData.append(`existing_images[${index}][caption]`, image.caption || '');
            }
        });
        
        // Add content images from Quill editor
        contentImages.forEach((image, index) => {
            if (image.file) {
                formData.append(`content_images[${index}][file]`, image.file);
                formData.append(`content_images[${index}][caption]`, image.caption || '');
                formData.append(`content_images[${index}][placeholder]`, image.placeholder || '');
            }
        });
        
        // Calculate reading time
        const words = data.content.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200);
        formData.append('reading_time', readingTime);
        
        if (isEdit) {
            formData.append('_method', 'PUT');
            try {
                await router.post(route('admin.blogs.update', blog.id), formData, {
                    preserveScroll: true,
                    preserveState: false,
                    forceFormData: true,
                    onSuccess: () => {
                        router.visit(route('admin.blogs.index'));
                    },
                    onError: (errors) => {
                        console.error('Update errors:', errors);
                    }
                });
            } catch (error) {
                console.error('Update error:', error);
            }
        } else {
            try {
                await router.post(route('admin.blogs.store'), formData, {
                    preserveScroll: true,
                    preserveState: false,
                    forceFormData: true,
                    onSuccess: () => {
                        router.visit(route('admin.blogs.index'));
                    },
                    onError: (errors) => {
                        console.error('Create errors:', errors);
                    }
                });
            } catch (error) {
                console.error('Create error:', error);
            }
        }
    };

    // Save as draft
    const handleSaveDraft = async () => {
        setData('status', 'draft');
        // Use setTimeout to ensure status is updated before submitting
        setTimeout(() => {
            const formData = new FormData();
            formData.append('title', data.title || 'Untitled');
            formData.append('content', data.content || '');
            formData.append('status', 'draft');
            formData.append('_method', isEdit ? 'PUT' : 'POST');
            
            // For new posts, we need to create first
            if (!isEdit) {
                router.post(route('admin.blogs.store'), formData, {
                    preserveScroll: true,
                    forceFormData: true,
                    onSuccess: () => {
                        alert('Draft saved successfully!');
                    }
                });
            } else {
                router.post(route('admin.blogs.update', blog.id), formData, {
                    preserveScroll: true,
                    forceFormData: true,
                    onSuccess: () => {
                        alert('Draft updated successfully!');
                    }
                });
            }
        }, 100);
    };

    const tabs = [
        { id: 'content', label: 'Content', icon: FileText },
        { id: 'media', label: 'Media', icon: ImageIcon },
        // { id: 'seo', label: 'SEO', icon: Globe },
        // { id: 'settings', label: 'Settings', icon: Settings },
    ];

    // Get all gallery images (existing + new)
    const allGalleryImages = [
        ...data.images.map(img => ({ ...img, isNew: false })),
        ...data.new_images.map(img => ({ ...img, isNew: true }))
    ];

    return (
        <AdminLayout>
            <Head title={isEdit ? `Edit: ${blog.title}` : 'Create New Blog'} />
            
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="py-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {isEdit ? 'Edit Blog Post' : 'Create New Blog'}
                                </h1>
                                <p className="text-gray-600 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {isEdit ? 'Update your existing blog post' : 'Create a new blog post for your website'}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={handlePreview}
                                    className="flex items-center gap-2 px-4 py-2.5 border border-[#22346e] text-[#22346e] hover:bg-[#22346e] hover:text-white rounded-xl transition-all duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <Eye className="w-4 h-4" />
                                    Preview
                                </button>
                                
                                <Link
                                    href={route('admin.blogs.index')}
                                    className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-[#22346e] transition-colors duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    ← Back to All Posts
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Left Sidebar - Settings */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
                                {/* Publish Card */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-[#22346e] mb-4 flex items-center gap-2">
                                        <Settings className="w-5 h-5" />
                                        Publish
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        {/* Status */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Status
                                            </label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setData('status', 'draft')}
                                                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-300 ${data.status === 'draft' ? 'bg-gray-100 text-[#22346e] border-2 border-[#22346e]' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                                                >
                                                    <Lock className="w-4 h-4" />
                                                    Draft
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setData('status', 'published')}
                                                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-300 ${data.status === 'published' ? 'bg-green-100 text-green-700 border-2 border-green-600' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                                                >
                                                    <Globe className="w-4 h-4" />
                                                    Published
                                                </button>
                                            </div>
                                        </div>

                                        {/* Published Date */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                Publish Date
                                            </label>
                                            <input
                                                type="date"
                                                value={data.published_at}
                                                onChange={e => setData('published_at', e.target.value)}
                                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                            />
                                        </div>

                                        {/* Category */}
                                        {categories.length > 0 && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                                    <Tag className="w-4 h-4" />
                                                    Category
                                                </label>
                                                <select
                                                    value={data.category_id}
                                                    onChange={e => setData('category_id', e.target.value)}
                                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                >
                                                    <option value="">Select a category</option>
                                                    {categories.map(category => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        {/* Tags */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Tags (comma separated)
                                            </label>
                                            <input
                                                type="text"
                                                value={data.tags}
                                                onChange={e => setData('tags', e.target.value)}
                                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                placeholder="property, investment, tips"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Card */}
                                <div className="pt-6 border-t border-gray-200">
                                    <div className="space-y-3">
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={processing}
                                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#f1424b] to-[#ff6b6b] text-white py-3.5 px-4 rounded-xl hover:shadow-lg hover:shadow-[#f1424b]/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <Save className="w-5 h-5" />
                                            {processing ? (
                                                isEdit ? 'Updating...' : 'Creating...'
                                            ) : (
                                                isEdit ? 'Update Blog Post' : 'Publish Blog Post'
                                            )}
                                        </button>
                                        
                                        <button
                                            type="button"
                                            onClick={handleSaveDraft}
                                            disabled={processing}
                                            className="w-full flex items-center justify-center gap-3 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            <Check className="w-5 h-5" />
                                            Save as Draft
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                                {/* Tabs */}
                                <div className="border-b border-gray-200">
                                    <div className="flex overflow-x-auto">
                                        {tabs.map(tab => {
                                            const Icon = tab.icon;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setActiveTab(tab.id)}
                                                    className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium whitespace-nowrap transition-colors duration-300 ${activeTab === tab.id ? 'border-[#f1424b] text-[#f1424b]' : 'border-transparent text-gray-600 hover:text-[#22346e]'}`}
                                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                >
                                                    <Icon className="w-4 h-4" />
                                                    {tab.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    {/* Tab Content */}
                                    <div className="p-6">
                                        {/* Content Tab */}
                                        {activeTab === 'content' && (
                                            <div className="space-y-6">
                                                {/* Title */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                                                        <Type className="w-4 h-4" />
                                                        Title *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={data.title}
                                                        onChange={e => setData('title', e.target.value)}
                                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300 text-lg"
                                                        placeholder="Enter a compelling blog post title"
                                                        required
                                                    />
                                                    {errors.title && (
                                                        <p className="mt-2 text-sm text-red-600">{errors.title}</p>
                                                    )}
                                                </div>

                                                {/* Slug */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                                                        <Hash className="w-4 h-4" />
                                                        URL Slug
                                                    </label>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-gray-500">excelresidential.com/blog/</span>
                                                        <input
                                                            type="text"
                                                            value={data.slug}
                                                            onChange={e => setData('slug', e.target.value)}
                                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                            placeholder="url-slug"
                                                        />
                                                    </div>
                                                    {errors.slug && (
                                                        <p className="mt-2 text-sm text-red-600">{errors.slug}</p>
                                                    )}
                                                </div>

                                                {/* Excerpt */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        Excerpt
                                                    </label>
                                                    <textarea
                                                        value={data.excerpt}
                                                        onChange={e => setData('excerpt', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                        rows="3"
                                                        placeholder="A brief summary of your blog post (used in listings and meta descriptions)"
                                                        maxLength="300"
                                                    />
                                                    <div className="flex justify-between mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            {data.excerpt.length}/300 characters
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {300 - data.excerpt.length} characters remaining
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Main Content */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                                                        <Edit2 className="w-4 h-4" />
                                                        Content *
                                                    </label>
                                                    <div className="rounded-xl overflow-hidden border border-gray-300">
                                                        <QuillRichTextEditor
                                                            value={data.content}
                                                            onChange={(content) => setData('content', content)}
                                                            onImagesChange={handleContentImagesChange}
                                                            existingImages={[]} // Don't pass gallery images here
                                                            error={errors.content}
                                                            placeholder="Start writing your blog post..."
                                                        />
                                                    </div>
                                                    {errors.content && (
                                                        <p className="mt-2 text-sm text-red-600">{errors.content}</p>
                                                    )}
                                                </div>

                                                {/* Additional Sections */}
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                                                            <Layout className="w-4 h-4" />
                                                            Additional Sections
                                                        </label>
                                                        {/* <button
                                                            type="button"
                                                            onClick={addSection}
                                                            className="flex items-center gap-2 px-3 py-2 bg-[#22346e] text-white rounded-lg hover:bg-[#1a2a5a] transition-colors duration-300"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                            Add Section
                                                        </button> */}
                                                    </div>
                                                    
                                                    {data.sections.map((section, index) => (
                                                        <div key={index} className="mb-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                            <div className="flex justify-between items-center mb-4">
                                                                <h4 className="font-semibold text-[#22346e] flex items-center gap-2">
                                                                    Section {index + 1}
                                                                </h4>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeSection(index)}
                                                                    className="p-1.5 text-gray-400 hover:text-red-600 transition-colors duration-300"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                            
                                                            <div className="space-y-4">
                                                                <input
                                                                    type="text"
                                                                    value={section.title || ''}
                                                                    onChange={e => updateSection(index, 'title', e.target.value)}
                                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                                                    placeholder="Section Title (Optional)"
                                                                />
                                                                
                                                                <textarea
                                                                    value={section.content}
                                                                    onChange={e => updateSection(index, 'content', e.target.value)}
                                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e]"
                                                                    rows="4"
                                                                    placeholder="Section content..."
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Media Tab */}
                                        {activeTab === 'media' && (
                                            <div className="space-y-6">
                                                {/* Featured Image */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-4">
                                                        Featured Image *
                                                    </label>
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#f1424b] transition-colors duration-300 cursor-pointer">
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={handleImageChange}
                                                                    className="hidden"
                                                                    id="featured-image"
                                                                />
                                                                <label htmlFor="featured-image" className="cursor-pointer">
                                                                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                                                    <p className="text-gray-600 font-medium mb-2">
                                                                        Click to upload featured image
                                                                    </p>
                                                                    <p className="text-sm text-gray-500">
                                                                        Recommended: 1200x630px, max 5MB
                                                                    </p>
                                                                </label>
                                                            </div>
                                                            {errors.featured_image && (
                                                                <p className="mt-2 text-sm text-red-600">{errors.featured_image}</p>
                                                            )}
                                                        </div>
                                                        
                                                        {previewImage && (
                                                            <div className="relative rounded-xl overflow-hidden">
                                                                <img
                                                                    src={previewImage}
                                                                    alt="Featured preview"
                                                                    className="w-full h-48 object-cover"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setPreviewImage(null);
                                                                        setData('featured_image', null);
                                                                    }}
                                                                    className="absolute top-3 right-3 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition-colors duration-300"
                                                                >
                                                                    <X className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Gallery Images */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-4">
                                                        Gallery Images
                                                    </label>
                                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#f1424b] transition-colors duration-300">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            multiple
                                                            onChange={handleMultipleImages}
                                                            className="hidden"
                                                            id="gallery-images"
                                                        />
                                                        <label htmlFor="gallery-images" className="cursor-pointer">
                                                            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                                            <p className="text-gray-600 font-medium mb-2">
                                                                Click to upload multiple images
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                Upload up to 10 images, max 5MB each
                                                            </p>
                                                        </label>
                                                    </div>
                                                    
                                                    {/* Gallery Images Previews */}
                                                    {allGalleryImages.length > 0 && (
                                                        <div className="mt-6">
                                                            <h4 className="text-sm font-medium text-gray-700 mb-4">
                                                                Gallery Images ({allGalleryImages.length})
                                                            </h4>
                                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                                {allGalleryImages.map((image, index) => (
                                                                    <div key={index} className="relative group rounded-xl overflow-hidden border border-gray-200">
                                                                        <img
                                                                            src={image.previewUrl || image.image_url}
                                                                            alt={`Gallery ${index + 1}`}
                                                                            className="w-full h-32 object-cover"
                                                                        />
                                                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => removeGalleryImage(index, image.isNew)}
                                                                                className="self-end bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition-colors duration-300"
                                                                            >
                                                                                <X className="w-4 h-4" />
                                                                            </button>
                                                                            <input
                                                                                type="text"
                                                                                value={image.caption || ''}
                                                                                onChange={(e) => updateGalleryImageCaption(index, e.target.value, image.isNew)}
                                                                                className="w-full px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded text-sm"
                                                                                placeholder="Add caption..."
                                                                            />
                                                                        </div>
                                                                        {image.isNew && (
                                                                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                                                                New
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* SEO Tab */}


                                        
                                        {activeTab === 'seo' && (
                                            <div className="space-y-6">
                                                <div className="p-4 bg-blue-50 rounded-xl">
                                                    <p className="text-blue-800 text-sm">
                                                        Optimize your blog post for search engines. These fields will help improve your visibility in search results.
                                                    </p>
                                                </div>
                                                
                                                {/* Meta Title */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        Meta Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={data.meta_title}
                                                        onChange={e => setData('meta_title', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                        placeholder="Title for search engines (recommended: 50-60 characters)"
                                                        maxLength="60"
                                                    />
                                                    <div className="flex justify-between mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            {data.meta_title.length}/60 characters
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {60 - data.meta_title.length} characters remaining
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Meta Description */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        Meta Description
                                                    </label>
                                                    <textarea
                                                        value={data.meta_description}
                                                        onChange={e => setData('meta_description', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                                        rows="4"
                                                        placeholder="Description for search engines (recommended: 150-160 characters)"
                                                        maxLength="160"
                                                    />
                                                    <div className="flex justify-between mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            {data.meta_description.length}/160 characters
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {160 - data.meta_description.length} characters remaining
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* SEO Preview */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        Search Engine Preview
                                                    </label>
                                                    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                                                        <p className="text-blue-600 font-medium text-lg truncate">
                                                            {data.meta_title || data.title || 'Your Blog Title'}
                                                        </p>
                                                        <p className="text-green-700 text-sm mt-1">
                                                            excelresidential.com/blog/{data.slug || 'your-blog-slug'}
                                                        </p>
                                                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                                            {data.meta_description || data.excerpt || 'Your blog description will appear here...'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Settings Tab */}
                                        {activeTab === 'settings' && (
                                            <div className="space-y-6">
                                                <div className="p-4 bg-gray-50 rounded-xl">
                                                    <p className="text-gray-700 text-sm">
                                                        Advanced settings for your blog post.
                                                    </p>
                                                </div>

                                                {/* Reading Time */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        Reading Time (minutes)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={Math.ceil(data.content.split(/\s+/).length / 200) || 5}
                                                        readOnly
                                                        className="w-32 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50"
                                                    />
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Estimated reading time based on content length (200 words per minute)
                                                    </p>
                                                </div>

                                                {/* Advanced Options */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        Advanced Options
                                                    </label>
                                                    <div className="space-y-3">
                                                        <label className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                defaultChecked={true}
                                                                className="rounded border-gray-300 text-[#22346e] focus:ring-[#22346e]"
                                                            />
                                                            <span className="ml-2 text-gray-700">
                                                                Allow comments on this post
                                                            </span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                className="rounded border-gray-300 text-[#22346e] focus:ring-[#22346e]"
                                                            />
                                                            <span className="ml-2 text-gray-700">
                                                                Feature this post on homepage
                                                            </span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                className="rounded border-gray-300 text-[#22346e] focus:ring-[#22346e]"
                                                            />
                                                            <span className="ml-2 text-gray-700">
                                                                Send email notification to subscribers
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Form Actions */}
                                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-gray-600">
                                                {isEdit ? (
                                                    <span>Last updated: {new Date(blog.updated_at).toLocaleDateString()}</span>
                                                ) : (
                                                    <span>All fields marked with * are required</span>
                                                )}
                                            </div>
                                            
                                            <div className="flex gap-3">
                                                <Link
                                                    href={route('admin.blogs.index')}
                                                    className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                >
                                                    Cancel
                                                </Link>
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] text-white rounded-lg hover:shadow-lg hover:shadow-[#22346e]/20 transition-all duration-300 disabled:opacity-50"
                                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                >
                                                    <Save className="w-4 h-4" />
                                                    {processing 
                                                        ? (isEdit ? 'Updating...' : 'Creating...') 
                                                        : (isEdit ? 'Update Changes' : 'Publish Now')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}