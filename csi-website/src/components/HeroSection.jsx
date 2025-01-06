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
      <div className='flex flex-col justify-center items-center md:flex'>
      <button className="mt-8 px-6 mx-5 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gray-500 bg-opacity-50 rounded-lg text-white hover:bg-pink-700 transition duration-300" onClick={() => window.open('https://codeflix2025.csivitpune.com/')}>
            CodeFlix2025 is live!
      </button>
      </div>
    </div>
  );
}

export default HeroSection;
