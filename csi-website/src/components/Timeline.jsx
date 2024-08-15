import React from 'react';
import CircleStick from './CircleStick';
import CircleStickInverted from '../assets/images/CircleStickInverted';

const Timeline = () => {
  return (
    <div className="flex flex-col space-y-8 sm:space-y-8 md:space-y-0">
      <div className="flex flex-col justify-between sm:flex-col md:flex-row md:mr-40">
        <CircleStick index="1" title="2024-25 Core team is formed" date="17 June 2024" />
        <CircleStick index="2" title="Secretary Recruitment completed" date="2 July 2024" />
      </div>
      <hr className="border-t-4 rounded-md border-white sm:block hidden" />
      <div className="flex flex-col justify-between sm:flex-col md:flex-row md:ml-28">
        <CircleStickInverted index="3" title="Coordinator Recruitment Begins" date="16 July 2024" />
        <div className="mt-5 md:mt-0">
          <CircleStickInverted index="4" title="Coordinator Recruitment Completed" date="26 July 2024" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
