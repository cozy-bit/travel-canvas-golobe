import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Bed, Heart, User, BookOpen, X, ChevronRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import logoImg from '../../assets/images/landing/logo.png';
import whiteLogoImg from '../../assets/images/landing/whiteLogo.png';

export default function Header({ transparent = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isFlightActive = location.pathname.startsWith('/flights');
  const isHotelActive = location.pathname.startsWith('/hotels');
  const isAccountActive = location.pathname.startsWith('/account');

  const textColor = transparent ? 'text-white' : 'text-[#112211]';
  const logo = transparent ? whiteLogoImg : logoImg;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className={`w-full z-40 transition-all duration-200 ${
      transparent
        ? 'absolute top-0 left-0 bg-transparent text-white pt-4 pb-2'
        : 'bg-white/95 backdrop-blur-md text-[#112211] shadow-xs sticky top-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Navigation: Find Flight & Find Stays */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/flights"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors pb-1 border-b-2 ${
                isFlightActive
                  ? 'border-[#8DD3BB] text-[#8DD3BB]'
                  : 'border-transparent hover:text-[#8DD3BB]'
              }`}
            >
              <Plane className="w-4 h-4 transform -rotate-45" />
              <span>Find Flight</span>
            </Link>

            <Link
              to="/hotels"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors pb-1 border-b-2 ${
                isHotelActive
                  ? 'border-[#8DD3BB] text-[#8DD3BB]'
                  : 'border-transparent hover:text-[#8DD3BB]'
              }`}
            >
              <Bed className="w-4 h-4" />
              <span>Find Stays</span>
            </Link>
          </nav>

          {/* Center: Brand Logo */}
          <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Golobe"
                className="h-8 sm:h-9 object-contain"
              />
            </Link>
          </div>

          {/* Right Navigation: Auth & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/team-guide.html"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-all ${
                transparent
                  ? 'border-white/40 text-white/90 hover:bg-white/10'
                  : 'border-[#8DD3BB] text-[#00845B] bg-[#8DD3BB]/10 hover:bg-[#8DD3BB]/20'
              }`}
              title="Team Onboarding & Documentation"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Team Guide (RU/TJ)</span>
            </a>

            <Link
              to="/account"
              className={`flex items-center gap-2 text-sm font-semibold hover:text-[#8DD3BB] transition-colors ${textColor}`}
              title="Favourites / Saved"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden lg:inline">Favourites</span>
            </Link>

            <span className={`h-4 w-px ${transparent ? 'bg-white/30' : 'bg-gray-300'}`} />

            <Link
              to="/login"
              className={`text-sm font-semibold hover:text-[#8DD3BB] transition-colors ${textColor}`}
            >
              Login
            </Link>

            <Link to="/signup">
              <Button
                variant={transparent ? 'white' : 'dark'}
                size="sm"
                className="rounded-lg px-5 py-2"
              >
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Actions & Smooth Animated Hamburger Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href="/team-guide.html"
              target="_blank"
              rel="noreferrer"
              className="text-xs px-2.5 py-1.5 bg-[#8DD3BB] text-[#112211] font-bold rounded-lg shadow-xs hover:bg-[#7BC6AE] transition-colors flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" />
              <span>Guide</span>
            </a>

            {/* Smooth Morphing Burger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-colors cursor-pointer select-none ${
                transparent
                  ? 'text-white hover:bg-white/15 active:bg-white/20'
                  : 'text-[#112211] hover:bg-gray-100 active:bg-gray-200'
              }`}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* ================= SMOOTH MOBILE DRAWER & BACKDROP ================= */}
      
      {/* Backdrop overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white text-[#112211] z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
            <img src={logoImg} alt="Golobe" className="h-7 object-contain" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          
          {/* Team Guide Card */}
          <a
            href="/team-guide.html"
            target="_blank"
            rel="noreferrer"
            className="block p-3.5 rounded-2xl bg-gradient-to-br from-[#8DD3BB]/20 to-[#8DD3BB]/40 border border-[#8DD3BB]/50 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#8DD3BB] text-[#112211]">
                <Sparkles className="w-3 h-3" /> Team Workspace
              </span>
              <span className="text-[10px] font-semibold text-gray-600">RU / TJ</span>
            </div>
            <h4 className="text-sm font-extrabold text-[#112211]">Team Onboarding Guide</h4>
            <p className="text-xs text-gray-600 mt-0.5">
              Инструкция, правила Git и распределение ролей →
            </p>
          </a>

          {/* Main Navigation Links */}
          <div>
            <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block mb-2 px-1">
              Navigation
            </span>
            <div className="space-y-1.5">
              <Link
                to="/flights"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
                  isFlightActive
                    ? 'bg-[#8DD3BB]/20 text-[#00845B]'
                    : 'text-[#112211] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isFlightActive ? 'bg-[#8DD3BB] text-[#112211]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Plane className="w-4 h-4 transform -rotate-45" />
                  </div>
                  <span>Find Flight</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              <Link
                to="/hotels"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
                  isHotelActive
                    ? 'bg-[#8DD3BB]/20 text-[#00845B]'
                    : 'text-[#112211] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isHotelActive ? 'bg-[#8DD3BB] text-[#112211]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Bed className="w-4 h-4" />
                  </div>
                  <div>
                    <span>Find Stays</span>
                    <span className="text-[10px] text-gray-400 font-medium block">Кибриё</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Account Section */}
          <div>
            <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block mb-2 px-1">
              Account & Profile
            </span>
            <div className="space-y-1.5">
              <Link
                to="/account"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
                  isAccountActive
                    ? 'bg-[#8DD3BB]/20 text-[#00845B]'
                    : 'text-[#112211] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isAccountActive ? 'bg-[#8DD3BB] text-[#112211]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span>My Account</span>
                    <span className="text-[10px] text-gray-400 font-medium block">Толибов (CSS)</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              <Link
                to="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-[#112211] hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span>Favourites</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions (Login / Sign Up) */}
        <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-2.5">
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full block text-center py-2.5 border border-gray-300 rounded-xl font-bold text-sm text-[#112211] hover:bg-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full block text-center py-2.5 bg-[#8DD3BB] text-[#112211] rounded-xl font-bold text-sm hover:bg-[#7BC6AE] transition-colors shadow-xs"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
