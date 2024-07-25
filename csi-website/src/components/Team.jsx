import React from 'react';
import TeamCard from './TeamCard';
import ECImage1 from '../assets/images/ECImage1.png';
import content from '../assets/images/content_secy.jpg'
import cr from '../assets/images/cr_secy.jpg'
import web3 from '../assets/images/web3_secy.jpg'
import web from '../assets/images/web_secy2.png'
import multimedia from '../assets/images/multimedia_secy2.jpg'
import publicity1 from '../assets/images/publicity_secy.jpg'
import publicity2 from '../assets/images/publicity_co_secy2.jpg'
import spons from '../assets/images/spons_secy.jpg'
import aesthetics from '../assets/images/aesthetics_secy4.jpg'
import aiml from '../assets/images/aiml_secy2.jpg'
import database from '../assets/images/database_secy2.jpg'
import finance from '../assets/images/finance_secy3.jpg'
import venue from '../assets/images/op_venue_secy2.jpg'
import sponsorships from '../assets/images/spons_secy2.jpg'

import president from '../assets/images/president7.jpg'
import management_head from '../assets/images/management_head2.jpg'
import tech_head from '../assets/images/tech_head.jpg'
import treasurer from '../assets/images/treasurer2.jpg'
import suyash from '../assets/images/vp_suyash2.png'
import madhur from '../assets/images/vp_madhur.jpg'
import TeamVertical from './TeamVertical';

const Team = () => {
  const singleMembers = [
    { image: president, name: "Siddhi Sangwai", title: "President" },
    { image: suyash, name: "Suyash Sawant", title: "Vice-President" },
    { image: madhur, name: "Madhur Bhutada", title: "Vice-President" },
    { image: treasurer, name: "Sandesh Kadam", title: "Treasurer" },
    { image: management_head, name: "Tanishka Pimple", title: "Management Head" },
    { image: tech_head, name: "Pratham Gadkari", title: "Technical Head" },
  ];

  const pairedMembers = [
    { image: aesthetics, name: "Tanisha Lakhotiya", title: "Aesthetics Secretary" },
    { image: aiml, name: "Prasad Khambadkar", title: "AIML Secretary" },
    { image: web3, name: "Omkar Khanvilkar", title: "Blockchain Secretary" },
    { image: content, name: "Shreenath Ubale", title: "Content Secretary" },
    { image: cr, name: "Vedant Deore", title: "Corporate Relations Secretary" },
    { image: database, name: "Aryaa Sharma", title: "Database Secretary" },
    { image: finance, name: "Manas Patil", title: "Finance Secretary" },
    { image: multimedia, name: "Purva Rathi", title: "Multimedia Secretary" },
    { image: venue, name: "Sanket Palkar", title: "Operations and Venue Secretary" },
    { image: sponsorships, name: "Manasvi Patil", title: "Sponsorships Secretary" },
    { image: publicity1, name: "Janhavi Mhaske", title: "Publicity Co-Secretary" },
    { image: publicity2, name: "Sanidhya Tiwari", title: "Publicity Co-Secretary" },
    { image: web, name: "Mayank Kulkarni", title: "Web Development Secretary" },
  ];

  return (
    <div className="flex mt-20 ml-80 justify-center">
      <div className="flex flex-col w-3/4">
        {singleMembers.map((member, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} my-2 items-center`}>
            <TeamCard imageurl={member.image} title={member.title} />
            <h3 className={`text-white text-2xl font-bold ${index % 2 === 0 ? 'mr-4 ml-8' : 'ml-4 mr-8'}`}>{member.name}</h3>
          </div>
        ))}

        {pairedMembers.reduce((acc, member, index) => {
          if (index % 2 === 0) {
            acc.push(
              <div key={index} className={`flex ${index % 4 === 0 ? 'flex-row-reverse space-x-reverse space-x-4' : 'flex-row space-x-4'} my-4 items-center`}>
                <TeamCard imageurl={member.image} name={member.name} title={member.title} includeNameInside={true} />
                {index + 1 < pairedMembers.length && (
                  <TeamCard imageurl={pairedMembers[index + 1].image} name={pairedMembers[index + 1].name} title={pairedMembers[index + 1].title} includeNameInside={true} />
                )}
              </div>
            );
          }
          return acc;
        }, [])}
      </div>
      <div className="w-2/4 mt-10">
        <TeamVertical />
      </div>
    </div>
  );
}

export default Team;
