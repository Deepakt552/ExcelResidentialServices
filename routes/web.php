<?php

// use App\Http\Controllers\AuthController;

use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/admin', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/blog', function () {
    return Inertia::render('Blogs');
});
Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});

Route::get('/terms-policy', function () {
    return Inertia::render('TermsPolicy');
});
Route::post('/contact-property', [ContactController::class, 'sendPropertyContact'])
    ->middleware(['throttle:3,1']) // 3 attempts per minute
    ->name('contact.property');
Route::post('/contact-send', [ContactController::class, 'sendGeneralContact'])->name('contact.send');

Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{blog:slug}', [BlogController::class, 'show'])->name('blogs.show');
Route::get('/blogs1', [BlogController::class, 'index1'])->name('blogs.index');
Route::get('/services/apartment-management', function () {
    return Inertia::render('ApartmentManagementPage');
});
// Add this route
Route::get('/services/financial-management', function () {
    return Inertia::render('FinancialManagement');
});
Route::get('/services/maintenance-management', function () {
    return Inertia::render('MaintenanceManagement');
});
Route::get('/services/general-management', function () {
    return Inertia::render('GeneralManagement');
});
Route::get('/services/property-turn-around', function () {
    return Inertia::render('PropertyTurnAround');
});

Route::get('/services/rehab-projects', function () {
    return Inertia::render('RehabProjects');
});



Route::get('/public/Properties', [PropertyController::class, 'publicindex'])
    ->name('public.properties.publicindex');


Route::middleware(['auth'])->group(function () {
    Route::post('/blogs/{blog}/like', [BlogController::class, 'toggleLike'])->name('likes.toggle');
    Route::post('/blogs/{blog}/comments', [BlogController::class, 'storeComment'])->name('comments.store');
    Route::delete('/comments/{comment}', [BlogController::class, 'deleteComment'])->name('comments.destroy');
});
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    Route::get('/admin/blogs', [BlogController::class, 'adminIndex'])->name('admin.blogs.index');
    Route::get('/admin/blogs/create', [BlogController::class, 'create'])->name('admin.blogs.create');
    Route::post('/admin/blogs', [BlogController::class, 'store'])->name('admin.blogs.store');
    Route::get('/admin/blogs/{blog}/edit', [BlogController::class, 'edit'])->name('admin.blogs.edit');
    Route::put('/admin/blogs/{blog}', [BlogController::class, 'update'])->name('admin.blogs.update');
    Route::delete('/admin/blogs/{blog}', [BlogController::class, 'destroy'])->name('admin.blogs.destroy');
    Route::delete('/admin/blogs/{blog}/status', [BlogController::class, 'updateStatus'])->name('admin.blogs.updateStatus');
    Route::get('/admin/properties', [PropertyController::class, 'index'])
        ->name('admin.properties.index');

    Route::get('/admin/properties/create', [PropertyController::class, 'create'])
        ->name('admin.properties.create');

    Route::post('/admin/properties', [PropertyController::class, 'store'])
        ->name('admin.properties.store');

    Route::get('/admin/properties/{property}/edit', [PropertyController::class, 'edit'])
        ->name('admin.properties.edit');

    Route::put('/admin/properties/{property}', [PropertyController::class, 'update'])
        ->name('admin.properties.update');

    Route::delete('/admin/properties/{property}', [PropertyController::class, 'destroy'])
        ->name('admin.properties.destroy');

    Route::get('/admin/contacts', [ContactController::class, 'index'])
        ->name('admin.contact.index');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
