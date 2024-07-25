import React from 'react'

const CircleStickInverted = ({ index, title, date }) => {
  return (
    <div className="flex items-center pr-10 ml-48">
      <div className="flex flex-col items-center">
        <div className="w-1 bg-white" style={{ height: '80px' }}></div>
        <div className="bg-white rounded-full text-2xl w-14 h-14 flex font-bold items-center justify-center">{index}</div>
      </div>
      <div className="ml-4 flex flex-col justify-end pt-20">
        <div className="font-bold text-white">{title}</div>
        <div className="text-white">{date}</div>
      </div>
    </div>
  )
}

export default CircleStickInverted
