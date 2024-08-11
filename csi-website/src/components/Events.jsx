import React from 'react';
import EventCard from './EventCard';
import image1 from '../assets/images/ECImage1.png';
import image2 from '../assets/images/ECImage2.png';
import image3 from '../assets/images/ECImage3.png';

const Events = () => {
  return (
    <div className='p-4 sm:p-8 md:p-10 font-inter'>
      <div className='font-bold text-2xl sm:text-3xl font-inter text-white flex justify-start'>
        Events
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
        <EventCard imageurl={image1} title='LLM Workshop' desc='VIT Pune' time='February 12 - 16, 2024'/>
        <EventCard imageurl={image2} title='Speaker Session' desc='Online, free for all' time='January 7 2024'/>
        <EventCard imageurl={image3} title='Placement Guidance Talk' desc='Auditorium, VIT Pune' time='November 2023'/>
      </div>
    </div>
  );
}

export default Events;
