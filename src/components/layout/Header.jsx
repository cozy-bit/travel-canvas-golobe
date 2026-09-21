import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Bed, Heart, User, X, ChevronRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import logoImg from '../../assets/images/landing/logo.png';
import whiteLogoImg from '../../assets/images/landing/whiteLogo.png';
import monkeyAvatarImg from '../../assets/images/account/monkey-1.png';
import { useTheme } from '../../context/ThemeContext';
import { useFavorites } from '../../context/FavoritesContext';
import ThemeToggle from '../ui/ThemeToggle';

const getAvatarSrc = (user) => {
  if (!user) return monkeyAvatarImg;
  if (user.avatar && !user.avatar.includes('photo-1535713875002')) return user.avatar;
  return monkeyAvatarImg;
};

export default function Header({ transparent = false }) {
  const { isDark } = useTheme();
  const { totalFavoritesCount } = useFavorites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isFlightActive = location.pathname.startsWith('/flights');
  const isHotelActive = location.pathname.startsWith('/hotels');
  const isAccountActive = location.pathname.startsWith('/account');

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

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const loggedIn = localStorage.getItem('globeLoggedIn');
      if (loggedIn === 'true') {
        const u = localStorage.getItem('globeCurrentUser');
        return u ? JSON.parse(u) : { name: 'Cozy Bit', email: 'cozybit@gmail.com' };
      }
      return null;
    } catch {
      return null;
    }
  });

  // Listen for auth changes across app
  useEffect(() => {
    const handleAuthChange = () => {
      try {
        const loggedIn = localStorage.getItem('globeLoggedIn');
        if (loggedIn === 'true') {
          const u = localStorage.getItem('globeCurrentUser');
          setCurrentUser(u ? JSON.parse(u) : { name: 'Cozy Bit', email: 'cozybit@gmail.com' });
        } else {
          setCurrentUser(null);
        }
      } catch {
        setCurrentUser(null);
      }
    };

    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('authChange', handleAuthChange);
    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('globeLoggedIn');
    localStorage.removeItem('globeCurrentUser');
    setCurrentUser(null);
    window.dispatchEvent(new Event('authChange'));
  };

  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 50);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled((prev) => {
            if (!prev && y > 50) return true;
            if (prev && y < 15) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textColor = transparent ? 'text-white' : (isDark ? 'text-white' : 'text-[#112211]');
  const logo = (transparent || isDark || scrolled) ? whiteLogoImg : logoImg;

  return (
    <>
      {/* Permanent static spacer for non-transparent pages to completely prevent layout shifts */}
      {!transparent && <div className="h-20 w-full shrink-0" aria-hidden="true" />}

      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Full-width background for non-transparent pages that smoothly dissolves on scroll */}
        {!transparent && (
          <div
            className={`absolute top-0 left-0 right-0 h-20 bg-white/95 dark:bg-[#0B130E]/95 backdrop-blur-md shadow-xs border-b border-gray-100/70 dark:border-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none transform-gpu ${
              scrolled ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          />
        )}

        <div
          className={`relative mx-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform-gpu pointer-events-auto flex items-center justify-between ${
            scrolled
              ? 'w-[94%] sm:w-[90%] max-w-4xl h-14 rounded-full bg-[#112211]/92 backdrop-blur-2xl text-white shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5),0_0_20px_rgba(141,211,187,0.15)] px-4 sm:px-6 translate-y-2.5 sm:translate-y-3.5'
              : (transparent
                  ? 'max-w-7xl px-4 sm:px-6 lg:px-8 h-20 text-white bg-transparent translate-y-0'
                  : 'max-w-7xl px-4 sm:px-6 lg:px-8 h-20 text-[#112211] bg-transparent translate-y-0')
          }`}
          style={{
            willChange: 'transform, max-width, height, border-radius, background-color, box-shadow'
          }}
        >
          
          {/* Left Navigation: Find Flight & Find Stays */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 z-10">
            <Link
              to="/flights"
              className={`flex items-center gap-1.5 transition-all ${
                scrolled
                  ? (isFlightActive
                      ? 'bg-[#8DD3BB] text-[#112211] font-bold px-3.5 py-1.5 rounded-full text-xs shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold')
                  : (isFlightActive
                      ? 'border-b-2 border-[#8DD3BB] text-[#8DD3BB] pb-1 text-sm font-semibold'
                      : 'border-b-2 border-transparent hover:text-[#8DD3BB] pb-1 text-sm font-semibold')
              }`}
            >
              <Plane className="w-3.5 h-3.5 transform -rotate-45" />
              <span>Find Flight</span>
            </Link>

            <Link
              to="/hotels"
              className={`flex items-center gap-1.5 transition-all ${
                scrolled
                  ? (isHotelActive
                      ? 'bg-[#8DD3BB] text-[#112211] font-bold px-3.5 py-1.5 rounded-full text-xs shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold')
                  : (isHotelActive
                      ? 'border-b-2 border-[#8DD3BB] text-[#8DD3BB] pb-1 text-sm font-semibold'
                      : 'border-b-2 border-transparent hover:text-[#8DD3BB] pb-1 text-sm font-semibold')
              }`}
            >
              <Bed className="w-3.5 h-3.5" />
              <span>Find Stays</span>
            </Link>
          </nav>

          {/* Center: Brand Logo - Always perfectly centered in header */}
          <div className="flex-1 md:flex-initial flex justify-start md:justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 pointer-events-auto">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={scrolled ? whiteLogoImg : logo}
                alt="Golobe"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-6 sm:h-7' : 'h-8 sm:h-9'
                }`}
              />
            </Link>
          </div>

          {/* Right Navigation: Auth & Actions */}
          <div className="hidden md:flex items-center gap-3 z-10 ml-auto">
            {/* Favourites Icon Button with dynamic count badge */}
            <Link
              to="/account?tab=favourites"
              className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 select-none cursor-pointer ${
                scrolled
                  ? 'w-8 h-8 text-white/80 hover:text-[#8DD3BB] hover:bg-white/10 active:bg-white/15'
                  : (transparent
                      ? 'w-9 h-9 text-white hover:text-[#8DD3BB] hover:bg-white/15 active:bg-white/20'
                      : 'w-9 h-9 text-[#112211] dark:text-gray-300 hover:text-[#8DD3BB] hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200')
              }`}
              title={totalFavoritesCount > 0 ? `Favourites (${totalFavoritesCount} saved)` : 'Favourites'}
              aria-label="Favourites"
            >
              <Heart
                className={`${scrolled ? "w-4 h-4" : "w-[18px] h-[18px]"} transition-all ${
                  totalFavoritesCount > 0 ? "text-[#FF8682] fill-[#FF8682]" : ""
                }`}
              />
              {totalFavoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-[#FF8682] text-white text-[10px] font-black flex items-center justify-center shadow-xs border-2 border-white dark:border-[#112211] leading-none animate-in zoom-in-75 duration-200">
                  {totalFavoritesCount}
                </span>
              )}
            </Link>

            {/* Theme Toggle Button (Icon only: Sun / Moon) */}
            <ThemeToggle scrolled={scrolled} transparent={transparent} />

            <span className={`h-4 w-px ${scrolled ? 'bg-white/20' : (transparent ? 'bg-white/30' : 'bg-gray-300 dark:bg-white/20')}`} />

            {currentUser ? (
              <div className="flex items-center gap-2.5">
                <Link
                  to="/account"
                  className={`flex items-center gap-2 py-1 px-2.5 rounded-full transition-all ${
                    scrolled ? 'hover:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                  title="My Account"
                >
                  <div className="w-7 h-7 rounded-full bg-[#8DD3BB] text-[#112211] font-bold text-xs flex items-center justify-center overflow-hidden border border-[#8DD3BB] shadow-xs">
                    <img src={getAvatarSrc(currentUser)} alt={currentUser.name || 'User'} className="w-full h-full object-cover" />
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold max-w-[120px] truncate ${scrolled ? 'text-white' : textColor}`}>
                    {currentUser.name || 'Account'}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    scrolled
                      ? 'border-white/20 text-white/80 hover:bg-white/15 hover:text-white'
                      : (transparent
                          ? 'border-white/30 text-white/90 hover:bg-white/15'
                          : 'border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:border-red-400 hover:bg-red-500/10')
                  }`}
                  title="Log out"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`text-xs sm:text-sm font-semibold hover:text-[#8DD3BB] transition-colors ${
                    scrolled ? 'text-white/90 px-2' : textColor
                  }`}
                >
                  Login
                </Link>

                <Link to="/signup">
                  <Button
                    variant={scrolled ? 'primary' : (transparent ? 'white' : 'dark')}
                    size="sm"
                    className={`rounded-full transition-all ${
                      scrolled ? 'px-4 py-1.5 text-xs font-bold' : 'rounded-lg px-5 py-2'
                    }`}
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Actions & Smooth Animated Hamburger Button */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            {/* Quick theme toggle */}
            <ThemeToggle size="sm" scrolled={scrolled} transparent={transparent} />

            {/* Quick avatar in island mode if logged in */}
            {scrolled && currentUser && (
              <Link to="/account" className="w-7 h-7 rounded-full bg-[#8DD3BB] text-[#112211] font-bold text-xs flex items-center justify-center overflow-hidden border border-[#8DD3BB] shadow-xs">
                <img src={getAvatarSrc(currentUser)} alt={currentUser.name || 'User'} className="w-full h-full object-cover" />
              </Link>
            )}

            {/* Smooth Morphing Burger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors cursor-pointer select-none ${
                scrolled
                  ? 'text-white hover:bg-white/15 active:bg-white/20'
                  : (transparent
                      ? 'text-white hover:bg-white/15 active:bg-white/20'
                      : 'text-[#112211] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 dark:active:bg-white/15')
              }`}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`h-0.5 w-4 sm:w-5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 w-4 sm:w-5 bg-current rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`h-0.5 w-4 sm:w-5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </header>

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
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white dark:bg-[#0E1712] text-[#112211] dark:text-[#F3F4F6] z-50 shadow-2xl border-l dark:border-[#24362D] flex flex-col transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 dark:border-[#24362D] flex items-center justify-between bg-gray-50/70 dark:bg-[#0B130E]">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
            <img src={isDark ? whiteLogoImg : logoImg} alt="Golobe" className="h-7 object-contain" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle size="sm" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          
          {/* Team Guide Card */}
          <a
            href="/team-guide.html"
            target="_blank"
            rel="noreferrer"
            className="block p-3.5 rounded-2xl bg-gradient-to-br from-[#8DD3BB]/20 to-[#8DD3BB]/40 dark:from-[#8DD3BB]/10 dark:to-[#8DD3BB]/20 border border-[#8DD3BB]/50 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#8DD3BB] text-[#112211]">
                <Sparkles className="w-3 h-3" /> Team Workspace
              </span>
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300">RU / TJ</span>
            </div>
            <h4 className="text-sm font-extrabold text-[#112211] dark:text-white">Team Onboarding Guide</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
              Инструкция, правила Git и распределение ролей →
            </p>
          </a>

          {/* Main Navigation Links */}
          <div>
            <span className="text-[11px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-2 px-1">
              Navigation
            </span>
            <div className="space-y-1.5">
              <Link
                to="/flights"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
                  isFlightActive
                    ? 'bg-[#8DD3BB]/20 text-[#00845B] dark:text-[#8DD3BB]'
                    : 'text-[#112211] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isFlightActive ? 'bg-[#8DD3BB] text-[#112211]' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
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
                    ? 'bg-[#8DD3BB]/20 text-[#00845B] dark:text-[#8DD3BB]'
                    : 'text-[#112211] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isHotelActive ? 'bg-[#8DD3BB] text-[#112211]' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
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
            <span className="text-[11px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-2 px-1">
              Account & Profile
            </span>
            <div className="space-y-1.5">
              <Link
                to="/account"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
                  isAccountActive
                    ? 'bg-[#8DD3BB]/20 text-[#00845B] dark:text-[#8DD3BB]'
                    : 'text-[#112211] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isAccountActive ? 'bg-[#8DD3BB] text-[#112211]' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
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
                to="/account?tab=favourites"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-[#112211] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center">
                    <Heart className={`w-4 h-4 ${totalFavoritesCount > 0 ? 'text-[#FF8682] fill-[#FF8682]' : ''}`} />
                    {totalFavoritesCount > 0 && (
                      <span className="absolute -top-1 -right-1 min-w-[15px] h-[15px] px-0.5 rounded-full bg-[#FF8682] text-white text-[9px] font-black flex items-center justify-center">
                        {totalFavoritesCount}
                      </span>
                    )}
                  </div>
                  <span>Favourites</span>
                </div>
                <div className="flex items-center gap-2">
                  {totalFavoritesCount > 0 && (
                    <span className="text-xs font-bold text-[#FF8682] px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40">
                      {totalFavoritesCount} saved
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions (Login / Sign Up OR User / Logout) */}
        <div className="p-5 border-t border-gray-100 dark:border-[#24362D] bg-gray-50/50 dark:bg-[#0B130E] space-y-2.5">
          {currentUser ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#141F1A] rounded-xl border border-gray-100 dark:border-[#24362D] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#8DD3BB] text-[#112211] font-bold flex items-center justify-center overflow-hidden">
                  <img src={getAvatarSrc(currentUser)} alt={currentUser.name || 'User'} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#112211] dark:text-white truncate">{currentUser.name || 'User'}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{currentUser.email || ''}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 rounded-xl font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/60 transition-colors cursor-pointer"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-2.5 border border-gray-300 dark:border-gray-700 rounded-xl font-bold text-sm text-[#112211] dark:text-white hover:bg-white dark:hover:bg-white/5 transition-colors"
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
