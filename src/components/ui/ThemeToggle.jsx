import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({
  className = '',
  size = 'md', // 'sm' | 'md'
  scrolled = false,
  transparent = false
}) {
  const { isDark, toggleTheme } = useTheme();

  const isSmall = size === 'sm';
  const iconSize = isSmall ? 15 : 17;

  // Determine button styling based on header context & theme
  let themeButtonClasses = '';
  if (scrolled) {
    // Dynamic island pill mode (dark island)
    themeButtonClasses = 'text-white/80 hover:text-[#8DD3BB] hover:bg-white/10 active:bg-white/15';
  } else if (transparent) {
    // Transparent hero header (white text)
    themeButtonClasses = 'text-white hover:text-[#8DD3BB] hover:bg-white/15 active:bg-white/20';
  } else {
    // Standard header (adapts to light/dark)
    themeButtonClasses = isDark
      ? 'text-gray-300 hover:text-[#8DD3BB] hover:bg-white/10 active:bg-white/15'
      : 'text-gray-700 hover:text-[#8DD3BB] hover:bg-gray-100 active:bg-gray-200';
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DD3BB] ${
        isSmall ? 'w-8 h-8' : 'w-9 h-9'
      } ${themeButtonClasses} ${className}`}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center text-amber-300 hover:text-amber-200"
          >
            <Sun size={iconSize} className="stroke-[2.2]" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Moon size={iconSize} className="stroke-[2.2]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
