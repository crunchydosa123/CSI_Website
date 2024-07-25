import React from 'react';
import logo from '../assets/images/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#A54657] to-[#1B1B1B] text-white py-8">
      <div className="container mx-auto flex justify-between px-40">
        <div className="flex space-x-36">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="https://www.vit.edu/">VIT Pune website</a></li>
              <li><a href="https://csiindia.org/">Computer Society of India</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul>
              <li>csi@vit.edu</li>
              <li>+91 90286 52004</li>
              <li>987654321</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Socials</h3>
            <ul>
              <li><a href="https://www.instagram.com/csi_vitpune/?igsh=bGU1MDlvdHk4dThy">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/computer-society-of-india-vit-pune/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-40">
          <img src={logo} alt="CSI VIT Pune" className="h-8 mr-4" />
          <h3 className="text-lg font-bold">CSI VIT Pune, 2024-25</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
