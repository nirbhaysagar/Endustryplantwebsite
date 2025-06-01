
import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Cluely', logo: '🔍' },
    { name: 'listkit', logo: '📋' },
    { name: 'ClickUp', logo: '⚡' },
    { name: 'zovo', logo: '✨' },
    { name: 'Kargora', logo: '🚀' },
    { name: 'Tennis', logo: '🎾' },
    { name: 'HelpBnk', logo: '🏦' },
    { name: 'Shipper', logo: '📦' },
    { name: 'Winning Hunter', logo: '🎯' },
    { name: 'Pintarnya', logo: '📌' },
    { name: 'Methodic', logo: '📊' },
    { name: 'Hyperloom', logo: '🌐' },
    { name: 'SWIPE PAY', logo: '💳' },
    { name: 'heyMilo', logo: '👋' },
    { name: 'amoofy', logo: '🎵' },
    { name: 'LAKECHIEF', logo: '🏔️' },
    { name: 'Clarity AI', logo: '🤖' },
    { name: 'BoostBerry', logo: '🚀' },
    { name: 'LLM OBSERVER', logo: '👁️' },
    { name: 'Refermarket', logo: '🔗' },
  ];

  return (
    <section className="px-6 pb-16">
      <div className="max-w-6xl">
        <p className="text-gray-400 text-sm font-inter font-medium tracking-wider uppercase mb-12">
          Trusted by the fastest-growing startups:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <span className="text-lg">{company.logo}</span>
              <span className="font-inter font-medium text-sm">{company.name}</span>
            </div>
          ))}
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="font-inter font-medium text-sm">100+ More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
