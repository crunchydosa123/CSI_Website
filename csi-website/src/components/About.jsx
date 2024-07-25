import React from 'react'
import AboutVertical from './AboutVertical'
import { CirclePhoto } from './CirclePhoto'
import ghadekar from '../assets/images/ghadekar.jpeg'
import kunekar from '../assets/images/kunekar.jpeg'

const About = () => {
  return (
    <div className='flex mt-10 pb-10'>
      <div className='flex flex-col pt-10'>
      <AboutVertical />
      </div>
      
      <div className='flex flex-col'>
        <div className='text-white text-xl text-left px-10 pt-10 font-inter leading-loose'> Computer Society of India (CSI) Student Chapter at VIT Pune is a dynamic community that focuses on igniting a passion for technology among students. They organize a variety of events throughout the academic year, with a primary emphasis on technical workshops covering topics ranging from programming languages to cutting-edge technologies such as artificial intelligence and blockchain. These workshops aim to not only enhance practical skills but also promote hands-on learning and collaboration. CSI also hosts hackathons where participants can brainstorm and develop innovative solutions to real-world problems within a limited timeframe, fostering creativity and teamwork. Additionally, the club arranges online sessions with industry experts who provide valuable insights and updates on tech trends, giving students a glimpse into the current industry practices and future advancements.</div>
        
        <div className='flex justify-around'>
        <CirclePhoto imageurl={ghadekar} title='Prof. Premanand Ghadekar' desc='Head, Department of IT, VIT Pune' />
        <CirclePhoto imageurl={kunekar} title='Pankaj Kunekar' desc='Faculty Advisor'/>

        </div>
        
      </div>
      </div>
  )
}

export default About