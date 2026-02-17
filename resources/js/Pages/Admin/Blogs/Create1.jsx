// resources/js/Pages/Admin/Blogs/Create.jsx
import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CreateBlog() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        excerpt: '',
        featured_image: null,
        status: 'draft',
    });

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('featured_image', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.blogs.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Blog" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Create New Blog</h2>
                            <Link
                                href={route('admin.blogs.index')}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                ← Back to Blogs
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                                    )}
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Status
                                    </label>
                                    <div className="flex space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                value="draft"
                                                checked={data.status === 'draft'}
                                                onChange={e => setData('status', e.target.value)}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Draft</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                value="published"
                                                checked={data.status === 'published'}
                                                onChange={e => setData('status', e.target.value)}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Published</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Featured Image */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Featured Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full"
                                    />
                                    {preview && (
                                        <div className="mt-2">
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="w-48 h-48 object-cover rounded"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Excerpt (Optional)
                                    </label>
                                    <textarea
                                        value={data.excerpt}
                                        onChange={e => setData('excerpt', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        rows="3"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Content *
                                    </label>
                                    <textarea
                                        value={data.content}
                                        onChange={e => setData('content', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        rows="10"
                                        required
                                    />
                                    {errors.content && (
                                        <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end space-x-4">
                                    <Link
                                        href={route('admin.blogs.index')}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
                                    >
                                        {processing ? 'Creating...' : 'Create Blog'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}