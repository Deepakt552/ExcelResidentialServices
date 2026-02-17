// components/Logo.js
import { Head, Link } from '@inertiajs/react';
export default function Logopage() {
  return (
    <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-[5rem] z-50">
      <Link href="/">
        <div className="
        
          flex items-center
          bg-gradient-to-br from-white/90 to-white/80
          backdrop-blur-md
          rounded-lg sm:rounded-xl
          px-3 sm:px-4 lg:px-5
          py-2 sm:py-3
          border border-white/20
          shadow-lg shadow-black/20   

          hover:border-white/40
          hover:shadow-xl hover:shadow-black/30
          hover:scale-[1.03]
          transition-all duration-300
          w-max
          group
        " style={{ position: "fixed" }}>
          <img
            src="https://excelresidential.com/wp-content/uploads/2025/01/cropped-Excel-Residential-Icon-1-145x48.png"
            alt="Excel Residential Logo"
            className="h-6 sm:h-7 lg:h-8 w-auto transition-transform duration-300 group-hover:brightness-110"
          />
        </div>
      </Link>
    </div>
  );
}