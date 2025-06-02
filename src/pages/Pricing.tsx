import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => (
  <section className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 relative">
    <Link
      to="/"
      className="absolute left-4 sm:left-6 top-4 sm:top-6 text-xs sm:text-sm font-semibold bg-white text-black px-3 sm:px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-colors border border-gray-200 z-10"
    >
      ← Back to Home
    </Link>
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center">Pricing</h1>
    <p className="max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 font-medium">
      Transparent, modular, and value-first. No retainers, no fluff. Only pay for what you need. Book a call for a custom quote or see our packages below.
    </p>
  </section>
);

export default Pricing; 