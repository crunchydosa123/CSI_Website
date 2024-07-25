import React from 'react';
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-black to-transparent p-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ml-8"> 
          <img src={logo} alt="CSI VIT Pune" className="h-10 mr-6" />
          <div className="text-white">
            <span className="font-inter text-xl font-bold">CSI VIT Pune</span>
            <br />
            <span className="font-inter text-sm">Student Branch</span>
          </div>
        </div>
        <ul className="flex font-bold font-inter space-x-12 mr-8">
          <li>
            <a href="#events" className="text-white hover:text-pink-700 transition duration-300">Events</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-pink-700 transition duration-300">About</a>
          </li>
          <li>
            <a href="#team" className="text-white hover:text-pink-700 transition duration-300">Team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
