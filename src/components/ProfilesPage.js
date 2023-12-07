// src/components/ProfilesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import data from './data';

import abhirudhImage from './images/Abhirudh BN.jpg';
import akshayImage from './images/Akshay AS.jpeg';
import ajithImage from './images/Ajith S P.jpg';
import akilanImage from './images/Akilan E.jpg';
import abhayimage from './images/Abhay A Rao.jpg';
import ajayImage from './images/Ajay.jpg';
import ajayRaoImage from './images/Ajay Rao.jpg';
import defaultImage from './default.jpeg';

const imageMap = {
  'Abhirudh BN': abhirudhImage,
  'Akshay AS': akshayImage,
  'Ajith S P': ajithImage,
  'Akilan E': akilanImage,
  'Abhay A Rao': abhayimage,
  'Ajay Rao': ajayRaoImage,
  'Ajay': ajayImage,
  'Akash C N': defaultImage,
  'Aditya Shankar': defaultImage
};

const ProfilesPage = ({ searchQuery }) => {
  const renderProfileItems = () => {
    const filteredProfiles = data.filter((profile) =>
      profile.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredProfiles.map((profile, index) => (
      <div key={index} className="portfolio-item">
        <Link to={`/profiles/${profile.Name}`} className="buttonProfile">
          <div className="profile-container">
            <img
              src={imageMap[profile.Name] || defaultImage}
              alt={`Profile of ${profile.Name}`}
              className="profile-image"
            />
            <span className="username">{profile.Name}</span>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <div className="portfolio-grid">{renderProfileItems()}</div>
      </div>
    </div>
  );
};

export default ProfilesPage;
