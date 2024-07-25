import React from 'react'

const EventCard = ({imageurl, title, desc, time}) => {
  return (
    <div className='flex flex-col'>
    <div className='bg-white rounded-md' style={{ backgroundImage: `url(${imageurl})`,
    height: '350px' }}></div>
    <div className='text-white text-md pt-2 pl-2'>{time}</div>
    <div className='font-bold text-white text-2xl pl-2'>{title}</div>
    <div className='text-white text-md pl-2'>{desc}</div>
    </div>
  )
}

export default EventCard