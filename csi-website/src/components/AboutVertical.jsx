import React from 'react';

const AboutVertical = () => {
  const aboutTexts = ['About', 'About', 'About', 'About', 'About'];
  return (
    <div className='flex flex-col items-start md:items-start w-full'>
      <div className='block md:hidden text-white text-opacity-100 font-bold text-3xl md:text-4xl text-left w-full px-4 sm:px-6 lg:px-10'>
        About
      </div>
      <div className='hidden md:block'>
        {aboutTexts.map((text, index) => (
          <div 
            key={index} 
            className={`text-white ${index % 2 !== 0 ? 'text-opacity-50' : ''} font-bold text-3xl md:text-4xl -rotate-90 my-20`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutVertical;
