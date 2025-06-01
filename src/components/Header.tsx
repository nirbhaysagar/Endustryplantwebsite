import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Theme toggle logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="w-full px-6 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-black dark:bg-white border border-gray-300 dark:border-gray-700 transform rotate-45 rounded-sm transition-colors"></div>
        <span className="text-black dark:text-white text-xl font-inter font-semibold">Endustry Plant</span>
      </div>
      
      <nav className="flex items-center space-x-8">
        <Link to="/about" className="text-white/80 hover:text-white transition-colors font-inter">About</Link>
        <Link to="/services" className="text-white/80 hover:text-white transition-colors font-inter">Services</Link>
        <Link to="/work" className="text-white/80 hover:text-white transition-colors font-inter">Work</Link>
        <Link to="/pricing" className="text-white/80 hover:text-white transition-colors font-inter">Pricing</Link>
        <a href="https://cal.com/endustry-plant/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-inter font-medium hover:bg-gray-100 transition-colors">
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
    </header>
  );
};

export default Header;
