import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Logopage from '@/Components/logopage';

export default function Layout({ children, auth }) {
    // Menu items for blog navigation
    const blogMenuItems = [
        { name: "All Posts", href: route('blogs.index') },

    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#EDEDED] via-white to-[#E6ECF3]">
            <Head title="Welcome" />

            {/* Navigation */}
            <Header auth={auth} blogMenuItems={blogMenuItems} />
            <Logopage />
            <main className="font-inter">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}