// src/components/GradientBG.js
import React from 'react';
import Events from './Events';
import Announcements from './Announcements';
import About from './About';
import Team from './Team';
import Footer from './Footer';

const GradientBG = () => {
  return (
    <div className='bg-gradient-to-tr from-[#A54657] to-black h-full'>
        <section id="events" className="py-8">
          <Events />
        </section>
        <section id="announcements" className="py-8">
          <Announcements />
        </section>
        <section id="about" className="py-8">
          <About />
        </section>
        <section id="team" className="py-8">
          <Team />
        </section>
        <section id="footer" className="pt-8">
          <Footer />
        </section>
    </div>
  );
};

export default GradientBG;
