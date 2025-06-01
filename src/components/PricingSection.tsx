import React from 'react';
import { Check, Infinity, Clock, User, Palette, Zap, Star, Briefcase } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: "💡",
      title: "MVP Ignition Kit",
      price: "$2,500",
      description: "Turn your idea into a live MVP in just 21 days. Get your product out of your head and into the hands of users — fast.",
      features: [
        "AI-native MVP (with 1 core feature)",
        "Conversion-optimized landing page",
        "Email collection & analytics setup",
        "Basic automation (lead reply, capture)",
        "Launch-ready docs & support",
        "✅ Perfect for solo founders & creators",
        "🚀 Ideal for quick validation & iteration"
      ]
    },
    {
      icon: "⚙️",
      title: "SaaS Growth Builder",
      price: "$5,000",
      description: "Build a complete, scalable SaaS product — with AI baked in. Designed to scale from day one, with built-in automation & integrations.",
      features: [
        "Full SaaS app (up to 3 modules)",
        "Admin dashboard & user roles",
        "2 AI agents (e.g., onboarding, auto-response)",
        "Stripe/Supabase integrations",
        "Growth-ready UI/UX",
        "✅ Perfect for indie hackers & early-stage startups",
        "⚡ Great balance between function, polish & automation"
      ]
    },
    {
      icon: "🤖",
      title: "AI Autopilot System",
      price: "$8,000",
      description: "Let your startup or business run smarter, not harder. We build the systems and agents so you can focus on what matters.",
      features: [
        "Custom SaaS platform",
        "Internal + external AI agents",
        "Automated onboarding, sales, data workflows",
        "AI content system (emails, social, reports)",
        "Staff onboarding & 30-day post-launch support",
        "✅ Best for teams & SMBs ready to scale",
        "🧠 AI + automation = exponential leverage"
      ]
    },
    {
      icon: "🕵️‍♂️",
      title: "Competitive Edge Suite",
      price: "$3,500",
      description: "Track competitors, decode strategy, stay 10 steps ahead. See what others miss — and act before they do.",
      features: [
        "Competitor tracking (sites, social, product)",
        "Change detection dashboard",
        "AI-powered marketing strategy reports",
        "Copy breakdowns & growth suggestions",
        "Daily alerts & assistant insights",
        "✅ Ideal for growth marketers, agencies & operators",
        "🔍 From insight to advantage, automatically"
      ]
    },
    {
      icon: "🛠️",
      title: "Custom AI Stack Partnership",
      price: "Starting at $10,000",
      description: "You dream it. We build the full AI product, system, or agent. From internal tooling to public platforms — we're your AI co-founders.",
      features: [
        "End-to-end strategy, design & dev",
        "Custom agents, apps, APIs or dashboards",
        "Secure infra setup (Redis, Supabase, vector DBs, etc.)",
        "Optional ongoing support/retainer",
        "Team training & documentation",
        "✅ Tailored for startups, teams, or enterprises",
        "🌐 Build IP, not just buy tools"
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="mb-16 text-center section-heading">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-inter font-medium tracking-wider uppercase mb-6">
            PRICING
          </p>
          <h2 className="text-black dark:text-white text-5xl md:text-6xl font-inter font-bold leading-tight">
            Transparent Pricing<br />
            Without Surprises
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {pricingPlans.slice(0, 4).map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#18181A] border border-gray-300 dark:border-[#232326] rounded-2xl p-8 shadow-xl flex flex-col justify-between min-h-[520px]"
            >
              <div>
                <div className="mb-2 flex items-center gap-2 text-3xl">
                  <span>{plan.icon}</span>
                  <h3 className="text-black dark:text-white text-xl font-inter font-semibold">
                    {plan.title}
                  </h3>
                </div>
                <div className="text-black dark:text-white text-4xl font-inter font-bold mb-2 flex items-end gap-1">
                  {plan.price}
                </div>
                <p className="text-gray-700 dark:text-gray-400 font-inter text-base mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <hr className="border-gray-200 dark:border-[#232326] mb-6" />
                <ul className="space-y-3 mb-8 list-none p-0">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 font-inter text-sm">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto space-y-3">
                <a href="https://cal.com/endustry-plant/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-full font-inter font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors text-base flex items-center justify-center">
                  Get Started
                </a>
                <a href="https://cal.com/endustry-plant/30min" target="_blank" rel="noopener noreferrer" className="w-full text-black dark:text-white py-3 rounded-full border border-gray-300 dark:border-[#232326] font-inter font-medium hover:bg-gray-100 dark:hover:bg-[#232326] transition-colors text-base flex items-center justify-center">
                  Or Book a Call
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-gray-100 dark:bg-[#18181A] border border-gray-300 dark:border-[#232326] rounded-2xl p-8 shadow-xl flex flex-col md:flex-row justify-between min-h-[320px] gap-8">
              {/* Left: Title, Price, Description, CTA */}
              <div className="flex-1 flex flex-col justify-between mb-8 md:mb-0">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-3xl">
                    <span>{pricingPlans[4].icon}</span>
                    <h3 className="text-black dark:text-white text-xl font-inter font-semibold">
                      {pricingPlans[4].title}
                    </h3>
                  </div>
                  <div className="text-black dark:text-white text-4xl font-inter font-bold mb-2 flex items-end gap-1">
                    {pricingPlans[4].price}
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 font-inter text-base mb-6 leading-relaxed">
                    {pricingPlans[4].description}
                  </p>
                </div>
                <a href="https://cal.com/endustry-plant/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-full font-inter font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors text-base flex items-center justify-center mt-4 md:mt-0">
                  Get Started
                </a>
              </div>
              {/* Right: Features */}
              <div className="flex-1 flex flex-col justify-center md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 dark:border-[#232326] pt-8 md:pt-0">
                <ul className="space-y-4 list-none p-0">
                  {pricingPlans[4].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 font-inter text-base">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
