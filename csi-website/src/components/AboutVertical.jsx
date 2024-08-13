import React from 'react';

const AboutVertical = () => {
  const aboutTexts = ['About', 'About', 'About', 'About', 'About'];
  return (
    <div className='flex flex-col items-center md:items-start'>
      {aboutTexts.map((text, index) => (
        <div 
          key={index} 
          className={`text-white ${index % 2 !== 0 ? 'text-opacity-50' : ''} font-bold text-3xl md:text-4xl -rotate-90 my-6 md:my-10`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AboutVertical;
