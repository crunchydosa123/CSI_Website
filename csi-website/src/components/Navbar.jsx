import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-black to-transparent p-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <img src={logo} alt="CSI VIT Pune" className="h-8 sm:h-10 mr-2 sm:mr-4" />
          <div className="text-white whitespace-nowrap text-sm sm:text-base lg:text-xl">
            <span className="font-inter font-bold">CSI VIT Pune</span>
            <br />
            <span className="font-inter">Student Branch</span>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`lg:flex lg:items-center lg:justify-end font-bold font-inter space-x-12 ${isOpen ? 'absolute top-full right-0 w-64 bg-black text-white p-4 rounded-lg flex flex-col items-center' : 'hidden'} lg:static lg:flex-row lg:space-x-12 lg:mr-8`}>
          <li className="mt-4 lg:mt-0">
            <a href="#events" className="text-white hover:text-pink-700 transition duration-300">Events</a>
          </li>
          <li className="mt-4 lg:mt-0">
            <a href="#about" className="text-white hover:text-pink-700 transition duration-300 mr-12 md:mr-0">About</a>
          </li>
          <li className="mt-4 lg:mt-0">
            <a href="#team" className="text-white hover:text-pink-700 transition duration-300 mr-12 md:mr-0">Team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
