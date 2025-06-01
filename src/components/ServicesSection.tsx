import React from 'react';
import { User, Users, Play, Award } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <User size={24} />,
      title: "Conversion-Driven Creativity",
      description: "We design to increase signups, sales, and engagement. Every detail supports your business goals."
    },
    {
      icon: <Users size={24} />,
      title: "Fully Committed Team",
      description: "You work with a dedicated team focused solely on your project. No juggling, no outsourcing."
    },
    {
      icon: <Play size={24} />,
      title: "Next-Level Motion Design",
      description: "We create animations that explain, guide, and keep users engaged at every step of the journey."
    },
    {
      icon: <Award size={24} />,
      title: "Battle-Tested Expertise",
      description: "We've helped startups raise over $45M in funding with designs that earn trust and drive investment."
    }
  ];

  return (
    <section className="px-6 pb-24 bg-background text-foreground">
      <div className="max-w-6xl">
        <div className="mb-8">
          <p className="text-orange-500 dark:text-orange-400 text-sm font-inter font-medium tracking-wider uppercase mb-6">
            WHY MIMIC DESIGN?
          </p>
          <h2 className="text-black dark:text-white text-5xl md:text-6xl font-inter font-bold leading-tight">
            The Design Partner<br />
            You've Been Looking For
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg p-8 hover:bg-gray-200 dark:hover:bg-gray-900/70 transition-colors"
            >
              <div className="text-gray-500 dark:text-gray-400 mb-6">
                {service.icon}
              </div>
              <h3 className="text-black dark:text-white text-xl font-inter font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-inter leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
