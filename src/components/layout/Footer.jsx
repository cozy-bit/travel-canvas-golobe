import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/landing/logo.png';
import whiteLogoImg from '../../assets/images/landing/whiteLogo.png';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="bg-[#8DD3BB] dark:bg-[#0E1712] dark:border-t dark:border-[#24362D] pt-32 sm:pt-36 pb-16 mt-20 relative text-[#112211] dark:text-[#F3F4F6] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-[#112211]/20 dark:border-white/10">
          
          {/* Logo & Social Links */}
          <div className="col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <img src={isDark ? whiteLogoImg : logoImg} alt="Golobe Logo" className="h-9 object-contain" />
            </Link>
            <p className="text-sm text-[#112211]/80 dark:text-gray-300 max-w-sm">
              Your trusted partner for flights, hotels, and extraordinary travel memories around the globe.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#112211]/10 dark:bg-white/10 flex items-center justify-center hover:bg-[#112211] hover:text-white dark:hover:bg-[#8DD3BB] dark:hover:text-[#112211] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#112211]/10 dark:bg-white/10 flex items-center justify-center hover:bg-[#112211] hover:text-white dark:hover:bg-[#8DD3BB] dark:hover:text-[#112211] transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#112211]/10 dark:bg-white/10 flex items-center justify-center hover:bg-[#112211] hover:text-white dark:hover:bg-[#8DD3BB] dark:hover:text-[#112211] transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#112211]/10 dark:bg-white/10 flex items-center justify-center hover:bg-[#112211] hover:text-white dark:hover:bg-[#8DD3BB] dark:hover:text-[#112211] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-base mb-4 text-[#112211] dark:text-white">Our Destinations</h4>
            <ul className="space-y-2.5 text-sm text-[#112211]/80 dark:text-gray-300">
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Canada</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Alaska</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">France</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Iceland</a></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-bold text-base mb-4 text-[#112211] dark:text-white">Our Activities</h4>
            <ul className="space-y-2.5 text-sm text-[#112211]/80 dark:text-gray-300">
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Northern Lights</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Cruising & sailing</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Multi-activities</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Kayaking</a></li>
            </ul>
          </div>

          {/* Travel Blogs */}
          <div>
            <h4 className="font-bold text-base mb-4 text-[#112211] dark:text-white">Travel Blogs</h4>
            <ul className="space-y-2.5 text-sm text-[#112211]/80 dark:text-gray-300">
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Bali Travel Guide</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Sri Lanka Guide</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Peru Travel Guide</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Tokyo Experience</a></li>
            </ul>
          </div>

          {/* About Us & Contact */}
          <div>
            <h4 className="font-bold text-base mb-4 text-[#112211] dark:text-white">About Us</h4>
            <ul className="space-y-2.5 text-sm text-[#112211]/80 dark:text-gray-300">
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Work with us</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white hover:underline">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Team Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#112211]/70 dark:text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Golobe Travel Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-medium">Designed with Figma • Built with React & Tailwind CSS</span>
            <a href="/team-guide.html" target="_blank" rel="noreferrer" className="underline font-bold text-[#112211] dark:text-[#8DD3BB] hover:text-black dark:hover:text-white">
              Team Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
