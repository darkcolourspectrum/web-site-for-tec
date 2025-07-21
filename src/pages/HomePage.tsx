import React from 'react';
import HeroSection from '../components/HeroSection';
import { FAQSection } from '../components/FAQSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FAQSection/>
      {/* Остальные секции главной страницы */}
    </div>
  );
};

export default HomePage;