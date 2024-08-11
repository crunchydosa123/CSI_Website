import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center text-white p-4">
      <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Building what <span className="text-[#A54657]">matters.</span>
      </h1>
      <p className="font-inter mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-xl md:max-w-2xl">
        Welcome to the official website of the Computer Society of India, Student Branch, VIT Pune. 
        We’re all about ideating, envisioning, debugging, and ultimately - building what matters!
      </p>
      <button className="mt-8 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gray-500 bg-opacity-50 rounded-lg text-white hover:bg-pink-700 transition duration-300">
            Thank you for attending MLOps Speaker Session on 5 Aug 2024!
      </button>
    </div>
  );
}

export default HeroSection;
