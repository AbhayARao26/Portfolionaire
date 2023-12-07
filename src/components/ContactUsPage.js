// ContactUsPage.js

import React from 'react';
import abhayPic from './images/Abhay A Rao.jpg'
import abhirudhPic from './images/Abhirudh BN.jpg'
import aadhyaPic from './images/Aadhya Darshan.jpeg'

import '../App.css';

const contributors = [
  {
    id: 1,
    name: 'Abhirudh B.N.',
    email: 'abhirudhbn@gmail.com',
    linkedin: 'https://github.com/bn1712',
    github: 'https://github.com/bn1712',
    photo: abhirudhPic,
  },
  {
    id: 2,
    name: 'Abhay A Rao',
    email: 'iabhayrao@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abhay-a-rao-460509264/',
    github: 'https://github.com/AbhayARao26',
    photo: abhayPic,
  },
  {
    id: 3,
    name: 'Aadhya Darshan',
    email: 'aadhyadarshan0907@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aadhya-darshan-00335024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Aadhyadarshan',
    photo: aadhyaPic,
  },
];

const ContactUsPage = () => {
  return (
    <div>
      <div id="about">
        <div className="team-members">
          {/* Display contributor objects */}
          {contributors.map((contributor) => (
            <div key={contributor.id} className="team-member">
              <img src={contributor.photo} alt={contributor.name} />
              <h4>{contributor.name}</h4>
              <ul>
                <li><a style={{color: 'rgb(61, 255, 120)'}} href={`mailto:${contributor.email}`}>{contributor.email}</a></li>&nbsp;&nbsp;&nbsp;
                <li>
                  <a style={{color: 'rgb(152, 251, 130)'}} href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a style={{color: 'rgb(152, 251, 130)'}} href={contributor.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
