import React from 'react';

const TeamVertical = () => {
  const text = "Meet the team";
  return (
    <div className="flex flex-col items-end right-0 top-1/2 transform">
      <div className='text-white font-bold text-4xl rotate-90 my-10'>{text}</div>
      <div className='text-white text-opacity-50 font-bold text-4xl rotate-90 my-56'>{text}</div>
      <div className='text-white font-bold text-4xl rotate-90 my-10'>{text}</div>
      <div className='text-white text-opacity-50 font-bold text-4xl rotate-90 my-56'>{text}</div>
      <div className='text-white font-bold text-4xl rotate-90 my-10'>{text}</div>
      <div className='text-white text-opacity-50 font-bold text-4xl rotate-90 my-56'>{text}</div>
      <div className='text-white font-bold text-4xl rotate-90 my-10'>{text}</div>
      <div className='text-white text-opacity-50 font-bold text-4xl rotate-90 my-56'>{text}</div>
      <div className='text-white font-bold text-4xl rotate-90 my-10'>{text}</div>
      <div className='text-white text-opacity-50 font-bold text-4xl rotate-90 my-56'>{text}</div>
    </div>
  );
}

export default TeamVertical;