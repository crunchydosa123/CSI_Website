import React from 'react';
import PropTypes from 'prop-types';

export const CirclePhoto = ({ imageurl, title, desc }) => {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <div className="w-48 h-48 rounded-full overflow-hidden border-2">
        <img 
          src={imageurl}
          className="w-full h-full object-cover" 
          alt={title}
        />
      </div>
      <div className='text-center text-white font-bold pt-3 text-xl'>{title}</div>
      <div className='text-center text-white pt-3'>{desc}</div>
    </div>
  );
};

CirclePhoto.propTypes = {
  imageurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

CirclePhoto.defaultProps = {
  title: 'Title not available',
  desc: 'Description not available',
};
