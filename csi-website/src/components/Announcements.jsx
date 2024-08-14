import React from 'react';
import Timeline from './Timeline';

const Announcements = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 font-inter">
      <div className="font-bold text-3xl text-white flex justify-start mb-4">
        Announcements and Timeline
      </div>
      <Timeline />
    </div>
  );
};

export default Announcements;
