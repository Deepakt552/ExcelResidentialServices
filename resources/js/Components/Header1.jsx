import { Link } from "@inertiajs/react";
import {
    Home,
    Box,
    CreditCard,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

export default function Header1() {
    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-30rem)] max-w-9xl">
            <div className="
                flex items-center justify-between 
                px-4 sm:px-6 md:px-8 
                py-3 sm:py-4
                bg-white 
                rounded-2xl
                shadow-lg
                border border-gray-100
            ">
                {/* Logo */}
                <Link href="/">
                    <div className="
                        flex items-center
                        rounded-lg
                        px-3 sm:px-6
                        py-2
                        transition-all duration-300
                        hover:bg-gray-50
                        w-max
                    ">
                        <img
                            src="https://excelresidential.com/wp-content/uploads/2025/01/cropped-Excel-Residential-Icon-1-145x48.png"
                            alt="Excel Residential Logo"
                            className="h-6 sm:h-7 lg:h-12 w-auto"
                        />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-1 bg-gray-100 p-1 rounded-full">
                    <NavItem icon={<Home size={16} />} label="Home" active />
                    <NavItem icon={<Box size={16} />} label="Services" />
                    <NavItem icon={<CreditCard size={16} />} label="Pricing" />
                    <NavItem icon={<Sparkles size={16} />} label="Features" />
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button className="
                        bg-[#22346e] 
                        hover:bg-[#1a2a5a] 
                        transition-all duration-300
                        text-sm font-semibold 
                        px-4 sm:px-5 
                        py-2 
                        rounded-full 
                        text-white
                        hover:shadow-lg
                    ">
                        Login
                    </button>

                    <button className="
                        w-9 h-9 
                        flex items-center justify-center 
                        rounded-full 
                        bg-black 
                        text-white 
                        hover:bg-gray-800 
                        transition-all duration-300
                        hover:shadow-lg
                    ">
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
}

/* Nav Item Component */
function NavItem({ icon, label, active }) {
    return (
        <a
            href="#"
            className={`
                flex items-center gap-2 
                px-3 sm:px-4 
                py-2 
                rounded-full 
                text-sm font-medium 
                transition-all duration-300
                ${active
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }
            `}
        >
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}