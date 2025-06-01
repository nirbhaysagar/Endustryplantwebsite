import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white font-inter">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
        <h2 className="text-black dark:text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Let's Build Something<br />
          People Remember
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="https://cal.com/endustry-plant/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded-full font-inter font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center shadow">
            Book an Intro Call
          </a>
          <a href="#work" className="text-white font-inter font-medium hover:text-gray-300 transition-colors flex items-center space-x-2 border border-white/20 px-8 py-3 rounded-full">
            <span>View Work</span>
            <span>→</span>
          </a>
        </div>
      </div>
      {/* Two-column brand/nav section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8 border-t border-white/10">
        {/* Column 1: Brand + Tagline */}
        <div>
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">ENDUSTRY PLANT</div>
          <div className="text-gray-400 text-base font-medium max-w-xs">
            Elite AI & product automation for ambitious teams.
          </div>
        </div>
        {/* Column 2: Navigation */}
        <nav className="flex flex-col md:items-end gap-2 md:gap-3 w-full md:w-auto mt-8 md:mt-0">
          <Link to="/about" className="font-semibold text-lg tracking-tight transition-colors duration-200 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white/40">About</Link>
          <Link to="/services" className="font-semibold text-lg tracking-tight transition-colors duration-200 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white/40">Services</Link>
          <Link to="/work" className="font-semibold text-lg tracking-tight transition-colors duration-200 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white/40">Work</Link>
          <Link to="/pricing" className="font-semibold text-lg tracking-tight transition-colors duration-200 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white/40">Pricing</Link>
          <a href="#launch" className="font-semibold text-lg tracking-tight transition-colors duration-200 text-black bg-white px-4 py-2 rounded-full mt-2 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50">Launch a Project</a>
        </nav>
      </div>
      {/* Microcopy */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm font-medium tracking-wide">
          © Endustry Plant 2025 · All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
