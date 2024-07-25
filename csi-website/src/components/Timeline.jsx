import React from 'react';
import CircleStick from './CircleStick';
import CircleStickInverted from '../assets/images/CircleStickInverted';

const Timeline = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between'>
        <CircleStick index='1' title='2024-25 Core team is formed' date='17 June 2024'/>
        <CircleStick index='3' title='Coordinator Recruitment Begins' date='16 July 2024'/>
        </div>
        <hr className="border-t-4 rounded-md border-white" />
        <div className='flex justify-between'>
        <CircleStickInverted index='2' title='Secretary Recruitment completed' date='2 July 2024' />
        <CircleStickInverted index='4' title='Coordinator Recruitment Completed' date='26 July 2024' />
        </div>
    </div>
  );
}

export default Timeline;
