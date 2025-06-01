import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "01. What does Endustry Plant actually do?",
      answer: "We build MVPs, SaaS products, websites, AI agents, automations, and digital tools — faster than you thought possible. If it's a product idea, we turn it into a working launch-ready reality."
    },
    {
      question: "02. Are you a design agency?",
      answer: "Nope. We're a new-age product agency. Design is part of what we do — but we ship full-blown products: frontend, backend, AI, integrations, and automation."
    },
    {
      question: "03. Who do you typically work with?",
      answer: "Startups, solopreneurs, creators, and teams with a vision — and zero time to waste. Whether you're launching from scratch or scaling something real, we've got you."
    },
    {
      question: "04. How fast can you deliver?",
      answer: "We're built for speed. MVPs in weeks, not months. Need a quick prototype? Days. Full product? We map timelines to your goals."
    },
    {
      question: "05. Do you use AI in your builds?",
      answer: "Absolutely. We build AI agents, automate workflows, and integrate tools like OpenAI, Gemini, and DeepSeek — because modern products should be smart from day one."
    },
    {
      question: "06. What tech stack do you use?",
      answer: "We're full-stack and tech-agnostic — but prefer modern stacks like: React, NestJS, Tailwind, Prisma, PostgreSQL, Redis, Supabase, Vercel, Next.js, BullMQ, OpenAI APIs, LangChain, and more."
    },
    {
      question: "07. Do you offer just design or dev separately?",
      answer: "Yes — we offer modular services. You can hire us for just UI/UX, frontend/backend dev, or AI automation if that's all you need. But full builds are where we shine."
    },
    {
      question: "08. What if I don't have a clear idea yet?",
      answer: "Perfect. We love shaping ideas from scratch. Book a call — we'll help you validate it, sketch the roadmap, and show you what's possible."
    },
    {
      question: "09. What does pricing look like?",
      answer: "Transparent, modular, and value-first. No bloated retainers. No fluff. You only pay for what you need. Book a call to get a custom quote."
    },
    {
      question: "10. How do I get started?",
      answer: 'Hit the "Book an Intro Call" button, and let\'s jam. We\'ll map your idea → product → launch path in 30 minutes or less.'
    }
  ];

  return (
    <section className="px-6 py-24 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-inter font-medium tracking-wider uppercase mb-6">
            FAQs
          </p>
          <h2 className="text-black dark:text-white text-5xl md:text-6xl font-inter font-bold leading-tight">
            Have Questions?<br />
            We Have Answers
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-300 dark:border-gray-800">
              <AccordionTrigger className="text-black dark:text-white font-inter font-medium text-lg hover:text-gray-700 dark:hover:text-gray-300 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 font-inter leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
