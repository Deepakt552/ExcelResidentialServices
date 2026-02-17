import { Link } from "@inertiajs/react";
import {
    Menu,
    X,
    Home,
    Box,
    CreditCard,
    Sparkles,
    Phone,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function MinimalistClassicHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#22346e] to-[#1a2a5a] rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">ER</span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1424b] rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Excel Residential
                                </h1>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <NavLink href="#" active>
                            <Home size={16} className="mr-2" />
                            Home
                        </NavLink>
                        <NavLink href="#">
                            <Box size={16} className="mr-2" />
                            Services
                            <ChevronDown size={14} className="ml-1" />
                        </NavLink>
                        <NavLink href="#">
                            <CreditCard size={16} className="mr-2" />
                            Pricing
                        </NavLink>
                        <NavLink href="#">
                            <Sparkles size={16} className="mr-2" />
                            Features
                        </NavLink>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <div className="flex items-center text-gray-600 hover:text-[#22346e] transition-colors cursor-pointer">
                            <Phone size={16} className="mr-2" />
                            <span className="text-sm font-medium">Call Us</span>
                        </div>
                        
                        <button className="
                            px-6 py-2 
                            bg-white
                            border border-gray-300
                            text-gray-700
                            text-sm font-medium
                            rounded-md
                            hover:bg-gray-50
                            hover:border-gray-400
                            transition-colors
                        ">
                            Login
                        </button>
                        
                        <button className="
                            px-6 py-2 
                            bg-[#22346e]
                            text-white
                            text-sm font-medium
                            rounded-md
                            hover:bg-[#1a2a5a]
                            transition-colors
                        ">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-3">
                            <MobileNavLink href="#" active>
                                <Home size={18} />
                                Home
                            </MobileNavLink>
                            <MobileNavLink href="#">
                                <Box size={18} />
                                Services
                            </MobileNavLink>
                            <MobileNavLink href="#">
                                <CreditCard size={18} />
                                Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#">
                                <Sparkles size={18} />
                                Features
                            </MobileNavLink>
                            
                            <div className="pt-4 border-t border-gray-100">
                                <button className="w-full py-3 bg-[#22346e] text-white rounded-md font-medium">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

function NavLink({ href, children, active = false }) {
    return (
        <a
            href={href}
            className={`
                flex items-center 
                text-sm font-medium 
                transition-colors
                ${active 
                    ? "text-[#22346e]" 
                    : "text-gray-600 hover:text-[#22346e]"
                }
            `}
        >
            {children}
        </a>
    );
}

function MobileNavLink({ href, children, active = false }) {
    return (
        <a
            href={href}
            className={`
                flex items-center space-x-3 
                py-3 px-4 
                text-base font-medium 
                rounded-md
                transition-colors
                ${active 
                    ? "text-[#22346e] bg-blue-50" 
                    : "text-gray-700 hover:bg-gray-50"
                }
            `}
        >
            {children}
        </a>
    );
}