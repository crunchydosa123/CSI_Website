import React from 'react';

const CircleStick = ({ index, title, date }) => {
  return (
    <div className="flex flex-col items-center mt-4 sm:flex-row sm:mt-2 sm:ml-0 sm:mr-0">
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full text-2xl w-14 h-14 flex font-bold items-center justify-center">{index}</div>
          <div className="w-1 bg-white hidden sm:block" style={{ height: '80px' }}></div>
        </div>
        <div className="ml-4 flex flex-col justify-start">
          <div className="font-bold text-white">{title}</div>
          <div className="text-white">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default CircleStick;
