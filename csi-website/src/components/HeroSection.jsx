import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center text-white pb-20">
        <h1 className="font-inter text-5xl font-bold">
              Building what <span className="text-[#A54657]">matters.</span>
        </h1>
        <p className="font-inter mt-4 text-md max-w-2xl">
              Welcome to the official website of the Computer Society of India, Student Branch, VIT Pune. 
              We’re all about ideating, envisioning, debugging and ultimately - building what matters!
        </p>
        <button className="mt-8 px-8 py-3 bg-gray-500 bg-opacity-50 rounded-lg text-white hover:bg-pink-700 transition duration-300">
              Thank you for attending MLOps Speaker Session on 5 Aug 2024!
        </button>
    </div>
  )
}

export default HeroSection