import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServiceCardsSection from '../components/ServiceCardsSection';
import ServicesSection from '../components/ServicesSection';
import TrackRecordSection from '../components/TrackRecordSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import GSAPAnimations from '../components/GSAPAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter px-6 md:px-12 lg:px-24">
      <GSAPAnimations />
      <div className="max-w-4xl mx-auto w-full">
        <Header />
        <HeroSection />
        <ServiceCardsSection />
        <ServicesSection />
        <TrackRecordSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
