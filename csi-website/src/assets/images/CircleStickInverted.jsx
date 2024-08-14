import React from 'react';

const CircleStickInverted = ({ index, title, date }) => {
  return (
    <div className="flex items-center sm:flex-row sm:mt-2 sm:ml-0 sm:mr-0">
      <div className="flex flex-col items-center" style={{marginTop: '-8px'}}>
        <div className="w-1 bg-white hidden sm:block" style={{ height: '80px' }}></div>
        <div className="bg-white rounded-full text-2xl w-14 h-14 flex font-bold items-center justify-center">{index}</div>
      </div>
      <div className="ml-8 flex flex-col justify-end pt-20 sm:pt-2">
        <div className="font-bold text-white">{title}</div>
        <div className="text-white">{date}</div>
      </div>
    </div>
  );
};

export default CircleStickInverted;
