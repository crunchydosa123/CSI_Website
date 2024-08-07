import React from 'react';
import Navbar from '../../components/Navbar';
import backgroundImage from '../../assets/images/Team 2024-25.jpg'; 
import Gradient from '../../components/GradientBG'
import HeroSection from '../../components/HeroSection';

const Home = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
