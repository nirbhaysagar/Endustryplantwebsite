import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  // Theme toggle logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [useLocation().pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/pricing', label: 'Pricing' },
  ];

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center relative bg-background">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-black dark:bg-white border border-gray-300 dark:border-gray-700 transform rotate-45 rounded-sm transition-colors"></div>
        <span className="text-black dark:text-white text-xl font-inter font-semibold">Endustry Plant</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors font-inter"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://cal.com/endustry-plant/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-inter font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
        >
          Book an Intro Call
        </a>
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-2 rounded-full border border-gray-700 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          aria-label="Toggle light/dark theme"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-black dark:text-white" />
        ) : (
          <Menu className="w-6 h-6 text-black dark:text-white" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-black dark:bg-white border border-gray-300 dark:border-gray-700 transform rotate-45 rounded-sm"></div>
                <span className="text-black dark:text-white text-xl font-inter font-semibold">Endustry Plant</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-black dark:text-white" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors font-inter text-lg py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://cal.com/endustry-plant/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-inter font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors text-center mt-4"
              >
                Book an Intro Call
              </a>
              <button
                onClick={toggleTheme}
                className="mt-4 px-4 py-3 rounded-full border border-gray-700 bg-gray-900 text-white hover:bg-gray-800 transition-colors w-full flex items-center justify-center space-x-2"
                aria-label="Toggle light/dark theme"
              >
                <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
                <span>Toggle Theme</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Back to Home button (top right) */}
      {!isHome && (
        <Link
          to="/"
          className="absolute right-6 top-4 text-sm font-semibold bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-colors border border-gray-200 hidden md:block"
        >
          ← Back to Home
        </Link>
      )}
    </header>
  );
};

export default Header;
