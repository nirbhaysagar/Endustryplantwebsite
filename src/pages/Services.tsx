import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Bot, Zap, Code, Smartphone, Award } from 'lucide-react';

const services = [
  {
    icon: <Rocket size={32} className="text-indigo-500" />, 
    title: 'MVP Building',
    description: 'Rapid MVP development to validate your ideas and get to market faster.'
  },
  {
    icon: <Bot size={32} className="text-pink-500" />, 
    title: 'AI Agents',
    description: 'Intelligent automation solutions and custom AI agents for your business.'
  },
  {
    icon: <Zap size={32} className="text-yellow-400" />, 
    title: 'Business Automation',
    description: 'Streamline operations with custom automation workflows and integrations.'
  },
  {
    icon: <Code size={32} className="text-blue-500" />, 
    title: 'Custom Development',
    description: 'Full-stack web, mobile, and SaaS product development tailored to your needs.'
  },
  {
    icon: <Smartphone size={32} className="text-green-500" />, 
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <Award size={32} className="text-orange-500" />, 
    title: 'Premium Quality',
    description: 'World-class design, robust code, and ongoing support for ambitious teams.'
  }
];

const Services = () => (
  <section className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 relative">
    <Link
      to="/"
      className="absolute left-4 sm:left-6 top-4 sm:top-6 text-xs sm:text-sm font-semibold bg-white text-black px-3 sm:px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-colors border border-gray-200 z-10"
    >
      ← Back to Home
    </Link>
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center">Our Services</h1>
    <p className="max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 font-medium mb-6 sm:mb-10">
      We help founders, startups, and teams launch, automate, and scale with:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
      {services.map((service, idx) => (
        <div key={idx} className="bg-gray-100 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow hover:shadow-lg transition-all">
          <div className="mb-3 sm:mb-4">{service.icon}</div>
          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-black dark:text-white">{service.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">{service.description}</p>
        </div>
      ))}
    </div>
    <div className="max-w-xl sm:max-w-2xl mt-8 sm:mt-12 text-center text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium">
      <span className="font-semibold text-black dark:text-white">Endustry Plant</span> is your unfair advantage for building MVPs, SaaS, AI, and automation. We offer modular services, full builds, and ongoing support—always fast, always premium.
    </div>
  </section>
);

export default Services; 