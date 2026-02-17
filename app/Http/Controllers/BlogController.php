<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Comment;
use App\Models\Like;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of published blogs for public.
     */
    public function index()
    {
        $blogs = Blog::published()
            ->with(['user', 'likes', 'comments',])
            ->latest('published_at')
            ->paginate(12);

        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs
        ]);
    }
    public function index1()
    {
        return Inertia::render('Blogs1');
    }

    public function show(Request $request, Blog $blog)
    {
        $user = $request->user();
        $isAdmin = $user && $user->isAdmin();

        // Check if blog is accessible
        if (!$blog->isPublished() && !$isAdmin) {
            abort(404);
        }

        // If it's draft/scheduled and admin is viewing, show preview mode
        $isPreview = !$blog->isPublished() && $isAdmin;

        // Increment views only for published blogs and non-admin users
        if ($blog->isPublished() && !$isAdmin) {
            $blog->increment('views');
        }

        // Load blog with ALL relationships including images and sections
        $blog->load([
            'user',
            'images', // This loads all images (featured, gallery, content)
            'sections',
            'comments' => function ($query) {
                $query->where('is_approved', true)
                    ->with(['user', 'replies' => function ($q) {
                        $q->where('is_approved', true)
                            ->with('user')
                            ->latest();
                    }])
                    ->whereNull('parent_id')
                    ->latest();
            },
            'likes',
        ]);

        // Add image URLs to each image
        $blog->images->each(function ($image) {
            $image->image_url = $image->image_path ? asset('storage/' . $image->image_path) : null;
        });

        // Add featured image URL if exists
        if ($blog->featured_image) {
            $blog->featured_image_url = asset('storage/' . $blog->featured_image);
        } else {
            $blog->featured_image_url = asset('images/default-blog.jpg');
        }

        // Get related blogs (excluding current one)
        $relatedBlogs = Blog::published()
            ->where('id', '!=', $blog->id)
            ->when($blog->category_id, function ($query) use ($blog) {
                // First try to get blogs from same category
                return $query->where('category_id', $blog->category_id);
            })
            ->with(['user', 'images' => function ($query) {
                // Only load featured images for related blogs
                $query->where('type', 'featured')->orWhereNull('type');
            }])
            ->latest('published_at')
            ->take(6)
            ->get();

        // If we don't have enough related blogs from same category, get more
        if ($relatedBlogs->count() < 3) {
            $additionalBlogs = Blog::published()
                ->where('id', '!=', $blog->id)
                ->whereNotIn('id', $relatedBlogs->pluck('id'))
                ->with(['user', 'images' => function ($query) {
                    $query->where('type', 'featured')->orWhereNull('type');
                }])
                ->latest('published_at')
                ->take(6 - $relatedBlogs->count())
                ->get();

            $relatedBlogs = $relatedBlogs->merge($additionalBlogs);
        }

        return Inertia::render('Blogs/Show', [
            'blog' => $blog,
            'blogs' => $relatedBlogs,
            'comments' => $blog->comments,
            'likesCount' => $blog->likes()->count(),
            'isLiked' => $user ? $blog->likes()->where('user_id', $user->id)->exists() : false,
            'isPreview' => $isPreview,
            'canEdit' => $user && ($user->isAdmin() || $blog->user_id === $user->id),
        ]);
    }
    /**
     * Display admin listing of all blogs.
     */
    public function adminIndex(Request $request)
    {
        $status = $request->get('status', 'all');

        $query = Blog::with(['user']);

        // Filter by status
        if ($status === 'published') {
            $query->published();
        } elseif ($status === 'draft') {
            $query->draft();
        }

        $blogs = $query->latest()->paginate(15);

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'filters' => ['status' => $status],
            'stats' => [
                'total' => Blog::count(),
                'published' => Blog::published()->count(),
                'draft' => Blog::draft()->count(),
            ]
        ]);
    }

    /**
     * Show the form for creating a new blog.
     */
    public function create()
    {
        return Inertia::render('Admin/Blogs/CreateEdit');
    }

    /**
     * Store a newly created blog in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'featured_image' => 'nullable|image|max:5120', // 5MB
            'status' => 'required|in:draft,published',
            'slug' => 'nullable|string|max:255|unique:blogs,slug',
            'category_id' => 'nullable|exists:categories,id',
            'tags' => 'nullable|string|max:255',
            'meta_title' => 'nullable|string|max:60',
            'meta_description' => 'nullable|string|max:160',
            'published_at' => 'nullable|date',
            'sections' => 'nullable|json',
        ]);

        // Generate unique slug if not provided
        $slug = $validated['slug'] ?? Str::slug($validated['title']);
        $count = Blog::where('slug', 'like', $slug . '%')->count();
        $slug = $count > 0 ? $slug . '-' . ($count + 1) : $slug;

        // Upload featured image
        $featuredImagePath = null;
        if ($request->hasFile('featured_image')) {
            $featuredImagePath = $request->file('featured_image')->store('blogs/featured', 'public');
        }

        // Create blog
        $blog = Blog::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'content' => $validated['content'], // Store original content with placeholders
            'excerpt' => $validated['excerpt'] ?? null,
            'featured_image' => $featuredImagePath,
            'user_id' => $request->user()->id,
            'status' => $validated['status'],
            'category_id' => $validated['category_id'] ?? null,
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
            'published_at' => $validated['status'] === 'published'
                ? ($validated['published_at'] ?? now())
                : null,
        ]);

        // Process tags if provided
        if (!empty($validated['tags'])) {
            $tags = array_map('trim', explode(',', $validated['tags']));
            $blog->syncTags($tags);
        }

        // Process sections if provided
        if (!empty($validated['sections'])) {
            $sections = json_decode($validated['sections'], true);
            $blog->sections()->createMany($sections);
        }

        // Process gallery images
        if ($request->has('gallery_images')) {
            $galleryImages = $request->input('gallery_images', []);
            foreach ($galleryImages as $index => $imageData) {
                if (isset($imageData['image']) && $imageData['image'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $imageData['image']->store('blogs/gallery', 'public');
                    $blog->images()->create([
                        'image_path' => $path,
                        'caption' => $imageData['caption'] ?? null,
                        'type' => 'gallery',
                        'order' => $index
                    ]);
                }
            }
        }

        // Process content images
        if ($request->hasFile('content_images.*.file')) {

            foreach ($request->file('content_images') as $index => $imageData) {

                if (!isset($imageData['file'])) {
                    continue;
                }

                $path = $imageData['file']->store('blogs/content', 'public');

                $blog->images()->create([
                    'image_path' => $path,
                    'caption' => $request->input("content_images.$index.caption"),
                    'placeholder' => $request->input("content_images.$index.placeholder"),
                    'type' => 'content',
                    'order' => $index,
                ]);
            }
        }

        $message = 'Blog ' . ($validated['status'] === 'published' ? 'published' : 'saved as draft') . ' successfully!';

        return redirect()->route('admin.blogs.index')
            ->with('success', $message);
    }
    /**
     * Show the form for editing the specified blog.
     */
    public function edit(Request $request, Blog $blog)
    {
        $user = $request->user();
        // if (!$user->isAdmin() && $blog->user_id !== $user->id) {
        //     abort(403);
        // }

        return Inertia::render('Admin/Blogs/CreateEdit', [
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified blog in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $user = $request->user();

        /* -------------------------
     | 1. VALIDATION
     |--------------------------*/
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'featured_image' => 'nullable|image|max:5120',
            'status' => 'required|in:draft,published',
            'slug' => 'nullable|string|max:255|unique:blogs,slug,' . $blog->id,
            'category_id' => 'nullable|exists:categories,id',
            'tags' => 'nullable|string|max:255',
            'meta_title' => 'nullable|string|max:60',
            'meta_description' => 'nullable|string|max:160',
            'published_at' => 'nullable|date',
            'sections' => 'nullable',
            'reading_time' => 'nullable|integer',
        ]);

        /* -------------------------
     | 2. FEATURED IMAGE
     |--------------------------*/
        if ($request->hasFile('featured_image')) {

            if ($blog->featured_image) {
                Storage::disk('public')->delete($blog->featured_image);
            }

            $validated['featured_image'] = $request
                ->file('featured_image')
                ->store('blogs/featured', 'public');
        }

        /* -------------------------
     | 3. PUBLISHED DATE LOGIC
     |--------------------------*/
        if ($validated['status'] === 'published' && $blog->status !== 'published') {
            $validated['published_at'] = $validated['published_at'] ?? now();
        }

        /* -------------------------
     | 4. UPDATE BLOG CORE DATA
     |--------------------------*/
        $blog->update($validated);

        /* -------------------------
     | 5. TAGS
     |--------------------------*/
        if (!empty($validated['tags']) && method_exists($blog, 'syncTags')) {
            $tags = array_map('trim', explode(',', $validated['tags']));
            $blog->syncTags($tags);
        }

        /* -------------------------
     | 6. SECTIONS
     |--------------------------*/
        if ($request->filled('sections')) {

            $blog->sections()->delete();

            $sections = $request->input('sections');

            if (is_string($sections)) {
                $sections = json_decode($sections, true);
            }

            if (is_array($sections)) {
                foreach ($sections as $section) {
                    $blog->sections()->create([
                        'title' => $section['title'] ?? null,
                        'content' => $section['content'] ?? '',
                        'order' => $section['order'] ?? 0,
                    ]);
                }
            }
        }

        /* -------------------------
     | 7. EXISTING IMAGES (CAPTION UPDATE)
     |--------------------------*/
        if ($request->filled('existing_images')) {

            foreach ($request->input('existing_images') as $imageData) {

                if (!empty($imageData['id'])) {
                    $image = $blog->images()->find($imageData['id']);

                    if ($image) {
                        $image->update([
                            'caption' => $imageData['caption'] ?? null,
                        ]);
                    }
                }
            }
        }

        /* -------------------------
     | 8. NEW GALLERY IMAGES
     |--------------------------*/
        if ($request->hasFile('gallery_images.*.image')) {

            foreach ($request->file('gallery_images') as $imageData) {

                if (!isset($imageData['image'])) continue;

                $path = $imageData['image']->store('blogs/gallery', 'public');

                $blog->images()->create([
                    'image_path' => $path,
                    'caption' => $request->input('gallery_images.' . array_key_first($imageData) . '.caption'),
                    'type' => 'gallery',
                ]);
            }
        }

        /* -------------------------
     | 9. CONTENT IMAGES (IMPORTANT FIX)
     |--------------------------*/
        if ($request->hasFile('content_images.*.file')) {

            $content = $blog->content;

            foreach ($request->file('content_images') as $index => $imageData) {

                if (!isset($imageData['file'])) continue;

                $path = $imageData['file']->store('blogs/content', 'public');
                $imageUrl = asset('storage/' . $path);

                $placeholder = $request->input("content_images.$index.placeholder");
                $caption = $request->input("content_images.$index.caption");

                $imageHtml = '<img src="' . $imageUrl . '" class="blog-content-image"';

                if (!empty($caption)) {
                    $imageHtml .= ' alt="' . e($caption) . '" title="' . e($caption) . '"';
                }

                $imageHtml .= '>';

                if ($placeholder && str_contains($content, $placeholder)) {
                    $content = str_replace($placeholder, $imageHtml, $content);
                } else {
                    $content .= "\n\n" . $imageHtml;
                }

                $blog->images()->create([
                    'image_path' => $path,
                    'caption' => $caption,
                    'placeholder' => $placeholder,
                    'type' => 'content',
                    'order' => $index,
                ]);
            }

            $blog->update(['content' => $content]);
        }

        /* -------------------------
     | 10. DONE
     |--------------------------*/
        return redirect()
            ->route('admin.blogs.index')
            ->with('success', 'Blog updated successfully!');
    }
    /**
     * Update blog status (quick publish/unpublish).
     */
    public function updateStatus(Request $request, Blog $blog)
    {
        $request->validate([
            'status' => 'required|in:draft,published'
        ]);

        if ($request->status === 'published') {
            $blog->publish();
            $message = 'Blog published successfully!';
        } else {
            $blog->unpublish();
            $message = 'Blog moved to draft!';
        }

        return back()->with('success', $message);
    }

    /**
     * Toggle like for a blog.
     */
    public function toggleLike(Request $request, Blog $blog)
    {
        $user = $request->user();

        if (!$user) {

            return redirect()->route('login');
        }

        $like = $blog->likes()->where('user_id', $user->id)->first();

        if ($like) {
            $like->delete();
            $liked = false;
        } else {
            $blog->likes()->create(['user_id' => $user->id]);
            $liked = true;
        }

        // For Inertia, you need to return a redirect or a page
        // You can redirect back with flashed data
        return back()->with([
            'liked' => $liked,
            'likesCount' => $blog->likes()->count()
        ]);
    }

    /**
     * Store a new comment.
     */
    public function storeComment(Request $request, Blog $blog)
    {
        // Check if user is authenticated
        if (!$request->user()) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Please login to comment'], 401);
            }
            return redirect()->route('login');
        }

        // Validate comment
        $request->validate([
            'content' => 'required|string|min:3|max:1000',
            'parent_id' => 'nullable|exists:comments,id' // For reply comments
        ]);

        // Create the comment
        $comment = Comment::create([
            'blog_id' => $blog->id,
            'user_id' => $request->user()->id,
            'content' => $request->content,
            'parent_id' => $request->parent_id,
            'is_approved' => true // Auto-approve comments
        ]);

        // Load user relationship for response
        $comment->load('user');

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'comment' => $comment,
                'message' => 'Comment added successfully'
            ]);
        }

        // For regular form submission, redirect back
        return redirect()->route('blogs.show', $blog->slug)
            ->with('success', 'Comment added successfully');
    }
    /**
     * Delete a comment.
     */
    public function deleteComment(Request $request, Comment $comment)
    {
        // Check if user is authenticated
        if (!$request->user()) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            return redirect()->route('login');
        }

        // Check if user owns the comment or is admin
        $user = $request->user();
        if ($comment->user_id !== $user->id && !$user->isAdmin()) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'You are not authorized to delete this comment'], 403);
            }
            return back()->with('error', 'You are not authorized to delete this comment');
        }

        // Store blog slug for redirect
        $blogSlug = $comment->blog->slug;

        // Delete the comment (replies will be deleted via cascade if set up)
        $comment->delete();

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Comment deleted successfully'
            ]);
        }

        // For regular form submission, redirect back
        return redirect()->route('blogs.show', $blogSlug)
            ->with('success', 'Comment deleted successfully');
    }

    /**
     * Remove the specified blog from storage.
     */
    public function destroy(Request $request, Blog $blog)
    {
        $user = $request->user();
        if (!$user->isAdmin() && $blog->user_id !== $user->id) {
            abort(403);
        }

        // Delete featured image
        if ($blog->featured_image) {
            Storage::disk('public')->delete($blog->featured_image);
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog deleted successfully!');
    }
}
