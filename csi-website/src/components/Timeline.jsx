import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CircleStick from './CircleStick';
import CircleStickInverted from '../assets/images/CircleStickInverted';

const Timeline = () => {
  const timelineRef = useRef(null); 
  const isInView = useInView(timelineRef, { once: true }); 

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 2, 
        ease: 'easeInOut',
      },
    },
  };

  const stickVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 1, 
      },
    },
  };

  return (
    <motion.div
      ref={timelineRef}
      className="flex flex-col space-y-8 sm:space-y-8 md:space-y-0"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="flex flex-col justify-between sm:flex-col md:flex-row md:mr-40">
        <motion.div variants={stickVariants}>
          <CircleStick index="1" title="MLOps" date="5 August 2024" venue="Auditorium" time="3 pm" />
        </motion.div>
        <motion.div variants={stickVariants}>
          <CircleStick index="2" title="Git and Github Workshop" date="20 August 2024" venue="Room no. 1314" time="4 pm" />
        </motion.div>
      </div>

      <motion.hr
        className="border-t-4 rounded-md border-white sm:block hidden"
        variants={lineVariants}
      />

      <div className="flex flex-col justify-between sm:flex-col md:flex-row md:ml-28">
        <motion.div variants={stickVariants}>
          <CircleStickInverted index="3" title="Codex" date="25 September 2024" venue="MIT" time="3:30 pm" />
        </motion.div>
        <motion.div className="mt-5 md:mt-0" variants={stickVariants}>
          <CircleStickInverted index="4" title="Session on Cloud Security" date="13 October 2024" venue="Online" time="11 am" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;
