import React from 'react';
import CircleStick from './CircleStick';
import CircleStickInverted from '../assets/images/CircleStickInverted';

const Timeline = () => {
  return (
    <div className="flex flex-col">
      {/* Apply margin-right only on medium screens and larger (md:mr-40) */}
      <div className="flex justify-between sm:flex-col md:flex-row md:mr-40 sm:mr-0">
        <CircleStick index="1" title="2024-25 Core team is formed" date="17 June 2024" />
        <CircleStick index="3" title="Coordinator Recruitment Begins" date="16 July 2024" />
      </div>
      <hr className="border-t-4 rounded-md border-white hidden sm:block" />
      {/* Apply margin-left only on medium screens and larger (md:ml-28) */}
      <div className="flex justify-between sm:flex-col md:flex-row md:ml-28 sm:ml-0">
        <CircleStickInverted index="2" title="Secretary Recruitment completed" date="2 July 2024" />
        <CircleStickInverted index="4" title="Coordinator Recruitment Completed" date="26 July 2024" />
      </div>
    </div>
  );
};

export default Timeline;
