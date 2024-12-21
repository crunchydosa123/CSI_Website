import React from 'react';

const CircleStick = ({ index, title, date, venue, time }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full text-2xl w-14 h-14 flex font-bold items-center justify-center">{index}</div>
        <div className="w-1 bg-white hidden md:block" style={{ height: '80px' }}></div>
      </div>
      <div className="ml-4 flex flex-col justify-start text-center sm:text-left">
        <div className="font-bold text-white">{title}</div>
        <div className="text-white">{date}</div>
        <div className="text-white">{venue}</div>
        <div className="text-white">{time}</div>
      </div>
    </div>
  );
};

export default CircleStick;
