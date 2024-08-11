import React from 'react';

const TeamCard = ({ imageurl, name, title, includeNameInside }) => {
  return (
    <div className="w-64 flex flex-col items-center bg-[#b47f85]">
      <img className="w-full h-50" style={{ maxHeight: '200px', objectFit: 'cover' }} src={imageurl} alt="Team member" />
      <div className="p-4 text-center">
        {includeNameInside && <p className="text-black text-xl font-bold">{name}</p>}
        <p className="text-black font-bold">{title}</p>
      </div>
    </div>
  );
}

export default TeamCard;
