import React from 'react';

export const CirclePhoto = ({imageurl, title, desc}) => {
  return (
    <div className='mt-10 flex flex-col justify-around'>
      <div className="w-48 h-48 rounded-full overflow-hidden border-2 ml-2 ">
        <img 
          src={imageurl}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className='text-center text-white font-bold pt-3 text-xl text-inter'>{title}</div>
      <div className='text-center text-white  pt-3 text-inter'>{desc}</div>
    </div>
  );
}
