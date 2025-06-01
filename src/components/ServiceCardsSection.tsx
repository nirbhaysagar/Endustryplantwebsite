import React from 'react';
import { Rocket, Bot, Zap, Award, Code, Smartphone } from 'lucide-react';

const ServiceCardsSection = () => {
  const services = [
    {
      icon: <Rocket size={32} className="text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2" />,
      title: "MVP Building",
      description: "Rapid MVP development to validate your ideas and get to market faster."
    },
    {
      icon: <Bot size={32} className="text-pink-400 bg-pink-100 dark:bg-pink-900/30 rounded-full p-2" />,
      title: "AI Agents",
      description: "Intelligent automation solutions that work 24/7 to scale your business."
    },
    {
      icon: <Zap size={32} className="text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 rounded-full p-2" />,
      title: "Business Automation",
      description: "Streamline operations with custom automation workflows and integrations."
    },
    {
      icon: <Code size={32} className="text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full p-2" />,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business needs."
    },
    {
      icon: <Smartphone size={32} className="text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full p-2" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Award size={32} className="text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full p-2" />,
      title: "Premium Quality",
      description: "World-class design quality that matches industry leaders."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-100 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-500 transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-black dark:text-white text-2xl font-inter font-bold mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-base leading-relaxed min-h-[56px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
