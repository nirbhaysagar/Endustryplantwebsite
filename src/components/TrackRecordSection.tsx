import React from 'react';

const TrackRecordSection = () => {
  const stats = [
    {
      number: "48+",
      label: "SaaS Tools, AI Systems, & Automations Deployed"
    },
    {
      number: "$15M+",
      label: "Raised by clients leveraging our tech infrastructure"
    },
    {
      number: "1M+",
      label: "Users reached through our products, flows & system"
    }
  ];

  return (
    <section className="px-6 pb-24 bg-background text-foreground">
      <div className="max-w-6xl">
        <div className="mb-16">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-inter font-medium tracking-wider uppercase mb-6">
            TRACK RECORD
          </p>
          <h2 className="text-black dark:text-white text-5xl md:text-6xl font-inter font-bold leading-tight">
            Decades of Reliable<br />
            Design Experience
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-black dark:text-white text-6xl md:text-7xl font-inter font-bold mb-4">
                {stat.number}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-inter text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
