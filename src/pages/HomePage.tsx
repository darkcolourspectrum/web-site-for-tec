import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      {/* Здесь будут остальные секции главной страницы */}
    </div>
  );
};

export default HomePage;