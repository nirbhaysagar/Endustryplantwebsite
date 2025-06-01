import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="px-6 pt-16 pb-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Social Proof Line */}
        <div className="flex items-center space-x-2 mb-10">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
            19 FOUNDERS LAUNCHED SOMETHING WITH US THIS MONTH
          </span>
        </div>
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Main Heading + CTAs */}
          <div className="flex-1">
            <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10 tracking-tight">
              We Build MVPs, AI Agents & Automation Systems<br />
              for Startups, Solopreneurs & Modern Businesses
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://cal.com/endustry-plant/30min" target="_blank" rel="noopener noreferrer" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors flex items-center justify-center shadow">
                Book an Intro Call
              </a>
              <a href="#work" className="flex items-center space-x-2 text-black dark:text-white px-6 py-3 rounded-full border border-black/20 dark:border-white/20 font-medium text-base hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span>View Recent Launches</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
          {/* Right: Explainer Subheading */}
          <div className="flex-1 max-w-xl lg:pl-8 mt-10 lg:mt-0">
            <div className="text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed">
              <span className="font-bold text-black dark:text-white">Endustry Plant</span> is a new-age innovation lab.<br />
              We partner with founders, creators, and companies to build:
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>MVPs & full SaaS products</li>
                <li>AI agents & business automation</li>
                <li>Web & mobile apps</li>
                <li>Digital tools & internal systems</li>
              </ul>
              From zero to scalable, we're your unfair advantage.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
