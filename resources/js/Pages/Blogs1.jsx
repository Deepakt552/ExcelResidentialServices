import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';

export default function Blog() {
    // Blog articles data
    const blogArticles = [
        {
            id: 1,
            title: 'The Future of Luxury Residential Properties',
            excerpt: 'Exploring the latest trends in high-end residential real estate and what buyers are looking for in 2024.',
            content: 'Luxury residential properties are evolving with new technologies and sustainability features. Smart home automation, energy-efficient designs, and wellness-focused amenities are becoming standard expectations among discerning buyers.',
            category: 'Market Trends',
            date: 'March 15, 2024',
            readTime: '5 min read',
            author: 'Michael Anderson',
            authorRole: 'Senior Property Consultant',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            id: 2,
            title: 'Maximizing Property Investment Returns',
            excerpt: 'Strategic approaches to ensure your real estate investments deliver optimal financial returns.',
            content: 'Successful property investment requires careful market analysis, strategic renovations, and effective property management. We explore the key factors that influence ROI in today\'s real estate market.',
            category: 'Investment',
            date: 'March 10, 2024',
            readTime: '7 min read',
            author: 'Sarah Johnson',
            authorRole: 'Investment Strategist',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
            authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80'
        },
        {
            id: 3,
            title: 'Sustainable Architecture in Modern Homes',
            excerpt: 'How eco-friendly design is reshaping residential construction and property values.',
            content: 'Sustainable architecture is no longer a niche trend but a fundamental expectation. From solar panels to green roofs, discover how eco-friendly features are enhancing property values and attracting environmentally conscious buyers.',
            category: 'Architecture',
            date: 'March 5, 2024',
            readTime: '6 min read',
            author: 'Robert Chen',
            authorRole: 'Architecture Specialist',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        },
        {
            id: 4,
            title: 'Effective Property Management Strategies',
            excerpt: 'Best practices for maintaining and enhancing residential property value through professional management.',
            content: 'Property management goes beyond rent collection. We discuss comprehensive strategies for tenant retention, preventive maintenance, and value enhancement that every property owner should implement.',
            category: 'Management',
            date: 'February 28, 2024',
            readTime: '8 min read',
            author: 'Jennifer Lee',
            authorRole: 'Property Management Director',
            image: 'https://images.unsplash.com/photo-1558449028-b53a39d10009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        },
        {
            id: 5,
            title: 'Neighborhood Revitalization Impact on Property Values',
            excerpt: 'How community development initiatives can significantly increase residential property prices.',
            content: 'Neighborhood revitalization projects, from infrastructure improvements to commercial development, can dramatically impact residential property values. We analyze case studies and success factors.',
            category: 'Market Analysis',
            date: 'February 20, 2024',
            readTime: '9 min read',
            author: 'David Miller',
            authorRole: 'Market Analyst',
            image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        },
        {
            id: 6,
            title: 'Technology Transforming Real Estate Transactions',
            excerpt: 'The digital revolution in property buying, selling, and management processes.',
            content: 'From virtual tours to blockchain transactions, technology is revolutionizing how real estate operates. We explore the most impactful technological advancements and their implications for property professionals.',
            category: 'Technology',
            date: 'February 15, 2024',
            readTime: '6 min read',
            author: 'Amanda Rodriguez',
            authorRole: 'Tech Innovation Lead',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            authorImage: 'https://images.unsplash.com/photo-1551836026-d5c2c26e64c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        }
    ];

    // Popular articles
    const popularArticles = [
        { id: 1, title: '2024 Real Estate Market Predictions', views: '1.2K' },
        { id: 2, title: 'Tax Benefits for Property Investors', views: '980' },
        { id: 3, title: 'Home Staging Secrets for Quick Sales', views: '850' },
        { id: 4, title: 'Commercial vs Residential Investments', views: '720' }
    ];

    // Categories
    const categories = [
        { name: 'Market Trends', count: 12 },
        { name: 'Investment', count: 8 },
        { name: 'Management', count: 15 },
        { name: 'Architecture', count: 7 },
        { name: 'Technology', count: 9 },
        { name: 'Legal', count: 5 }
    ];

    const seoData = {
        title: "Blog | ExcelResidential Insights",
        description: "Expert real estate insights, market analysis, and property management tips from Excel Residential Services.",
        keywords: "Real Estate Blog, Property Insights, Market Trends, Investment Tips, Property Management"
    };

    return (
        <>
            <Seo {...seoData} />

            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-r from-amber-50 via-white to-amber-50/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-amber-900/10 rounded-full mb-6">
                            <span className="text-amber-900 font-semibold">INSIGHTS & ANALYSIS</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            ExcelResidential <span className="text-amber-900">Blog</span>
                        </h1>
                        <div className="w-32 h-1.5 bg-amber-900 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                            Expert insights, market analysis, and industry trends from our team of
                            real estate professionals.
                        </p>
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search articles, topics, or keywords..."
                                className="w-full px-6 py-4 pl-14 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-900/30 focus:border-amber-900 shadow-sm"
                            />
                            <svg className="w-6 h-6 text-gray-400 absolute left-6 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Main Articles Column */}
                        <div className="lg:w-2/3">
                            <div className="mb-10">
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Latest Articles</h2>
                                <div className="w-20 h-1 bg-amber-900 mb-8"></div>
                            </div>

                            {/* Featured Article */}
                            <div className="mb-16 group">
                                <div className="overflow-hidden rounded-2xl mb-8">
                                    <img
                                        src={blogArticles[0].image}
                                        alt={blogArticles[0].title}
                                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <span className="px-4 py-1 bg-amber-900/10 text-amber-900 rounded-full text-sm font-medium">
                                            {blogArticles[0].category}
                                        </span>
                                        <span className="text-gray-500">{blogArticles[0].date}</span>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-gray-500">{blogArticles[0].readTime}</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-amber-800 transition-colors duration-300">
                                        {blogArticles[0].title}
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-6">
                                        {blogArticles[0].excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={blogArticles[0].authorImage}
                                                alt={blogArticles[0].author}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-900">{blogArticles[0].author}</p>
                                                <p className="text-sm text-gray-500">{blogArticles[0].authorRole}</p>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/blog/${blogArticles[0].id}`}
                                            className="text-amber-900 hover:text-amber-800 font-medium inline-flex items-center group"
                                        >
                                            Read Full Article
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Articles Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {blogArticles.slice(1).map(article => (
                                    <article
                                        key={article.id}
                                        className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <span className="px-3 py-1 bg-amber-900/10 text-amber-900 rounded-full text-xs font-medium">
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-500 text-sm">{article.date}</span>
                                            </div>
                                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-5 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={article.authorImage}
                                                        alt={article.author}
                                                        className="w-8 h-8 rounded-full object-cover"
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">{article.author}</span>
                                                </div>
                                                <span className="text-gray-500 text-sm">{article.readTime}</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center">
                                <nav className="flex items-center space-x-2">
                                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-amber-900 hover:text-white hover:border-amber-900 transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-900 text-white font-medium">1</button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-amber-50 transition-colors duration-300">2</button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-amber-50 transition-colors duration-300">3</button>
                                    <span className="text-gray-500 px-2">...</span>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-amber-50 transition-colors duration-300">8</button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-amber-900 hover:text-white hover:border-amber-900 transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            {/* Newsletter */}
                            <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h3>
                                <p className="text-amber-100 mb-6">
                                    Get the latest real estate insights and market updates delivered to your inbox.
                                </p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                                    />
                                    <button className="w-full bg-white text-amber-900 hover:bg-amber-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>

                            {/* Popular Articles */}
                            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-5 h-5 text-amber-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                    </svg>
                                    Popular Articles
                                </h3>
                                <div className="space-y-6">
                                    {popularArticles.map(article => (
                                        <div key={article.id} className="flex items-start space-x-4 group cursor-pointer">
                                            <div className="w-10 h-10 bg-amber-900/10 rounded-lg flex items-center justify-center text-amber-900 font-bold text-lg group-hover:bg-amber-900 group-hover:text-white transition-colors duration-300">
                                                {article.id}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                                                    {article.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 mt-1">{article.views} views</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Categories</h3>
                                <div className="space-y-4">
                                    {categories.map(category => (
                                        <div
                                            key={category.name}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors duration-300 group cursor-pointer"
                                        >
                                            <span className="text-gray-700 group-hover:text-amber-900 transition-colors duration-300">
                                                {category.name}
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm group-hover:bg-amber-900 group-hover:text-white transition-colors duration-300">
                                                {category.count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Comments */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-8">
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Recent Comments</h3>
                                <div className="space-y-6">
                                    {[
                                        { user: 'John D.', comment: 'Great insights on sustainable architecture!', article: 'Sustainable Architecture...', time: '2 hours ago' },
                                        { user: 'Maria S.', comment: 'The investment strategies were very helpful.', article: 'Maximizing Property...', time: '1 day ago' },
                                        { user: 'Alex T.', comment: 'Looking forward to more tech articles!', article: 'Technology Transforming...', time: '2 days ago' }
                                    ].map((comment, idx) => (
                                        <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-10 h-10 bg-amber-900/10 rounded-full flex items-center justify-center text-amber-900 font-bold">
                                                    {comment.user.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{comment.user}</p>
                                                    <p className="text-gray-600 text-sm mt-1">"{comment.comment}"</p>
                                                    <p className="text-gray-500 text-xs mt-2">on <span className="text-amber-900 font-medium">{comment.article}</span> • {comment.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Become a Contributor</h2>
                        <div className="w-20 h-1 bg-amber-900 mx-auto mb-8"></div>
                        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                            Have expertise in real estate, architecture, or property investment?
                            Share your insights with our professional community.
                        </p>
                        <button className="bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 px-10 rounded-lg transition-colors duration-300 inline-flex items-center">
                            Submit Your Article
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="h-10 w-10 bg-amber-900 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">ER</span>
                                </div>
                                <h2 className="text-2xl font-serif font-bold tracking-wide">
                                    Excel<span className="text-amber-900">Residential</span>
                                </h2>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Premium real estate insights and expert analysis for property professionals
                                and investors.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-serif font-bold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/blog" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                        All Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/categories" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/authors" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                        Our Authors
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/submit" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                        Write for Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-serif font-bold mb-6">Top Categories</h3>
                            <ul className="space-y-3">
                                {categories.slice(0, 4).map(category => (
                                    <li key={category.name}>
                                        <Link href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                                            {category.name} ({category.count})
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-serif font-bold mb-6">Stay Connected</h3>
                            <div className="flex space-x-4 mb-6">
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.904.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Subscribe to our newsletter for weekly updates.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} ExcelResidential Blog. All rights reserved. | Expert Real Estate Insights</p>
                    </div>
                </div>
            </footer>
        </>
    );
}