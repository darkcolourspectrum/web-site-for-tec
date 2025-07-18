import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      {/* Остальные секции главной страницы */}
    </div>
  );
};

export default HomePage;