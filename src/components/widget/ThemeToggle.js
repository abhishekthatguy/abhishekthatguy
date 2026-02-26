'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import themeConfig from '@/config/theme';

const ThemeToggle = () => {
  const { toggleTheme, getEffectiveTheme, mounted } = useTheme();
  const [effectiveTheme, setEffectiveTheme] = useState('light');

  useEffect(() => {
    if (!mounted) return;
    const updateTheme = () => {
      setEffectiveTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });
    window.addEventListener('themechange', updateTheme);
    return () => {
      observer.disconnect();
      window.removeEventListener('themechange', updateTheme);
    };
  }, [mounted]);

  if (!mounted) return null;

  const isDark = effectiveTheme === 'dark';
  const positionClass = 'top-5 right-5';

  return (
    <motion.div
      className={`fixed ${positionClass} z-50 flex items-center gap-0.5 p-1 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg ${
        themeConfig.toggleButton.showOnMobile ? '' : 'hidden md:flex'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle light or dark mode"
    >
      {/* Light option */}
      <motion.button
        type="button"
        onClick={() => !isDark || toggleTheme()}
        className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
          !isDark
            ? 'text-yellow-600 dark:text-yellow-400'
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
        }`}
        aria-label="Light mode"
        title="Light mode"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </motion.button>

      {/* Sliding pill background */}
      <motion.span
        className="absolute top-1 left-1 w-9 h-9 rounded-full bg-yellow-100 dark:bg-gray-700 shadow-sm border border-gray-200/50 dark:border-gray-600/50"
        animate={{ x: isDark ? 38 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />

      {/* Dark option */}
      <motion.button
        type="button"
        onClick={() => isDark || toggleTheme()}
        className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isDark
            ? 'text-blue-400'
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
        }`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
