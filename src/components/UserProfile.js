// UserProfile.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

// Import images
import abhirudhImage from './images/Abhirudh BN.jpg';
import akshayImage from './images/Akshay AS.jpeg';
import ajithImage from './images/Ajith S P.jpg';
import akilanImage from './images/Akilan E.jpg';
import abhayImage from './images/Abhay A Rao.jpg';
import ajayImage from './images/Ajay.jpg';
import ajayRaoImage from './images/Ajay Rao.jpg';
import defaultImage from './default.jpeg';

const imageMap = {
  'Abhirudh BN': abhirudhImage,
  'Akshay AS': akshayImage,
  'Ajith S P': ajithImage,
  'Akilan E': akilanImage,
  'Abhay A Rao': abhayImage,
  'Ajay Rao': ajayRaoImage,
  'Ajay': ajayImage,
  'Akash C N': defaultImage,
  'Aditya Shankar': defaultImage
};

const profileInfo = {
    "Abhirudh BN": {
      "Name": "Abhirudh BN",
      "Email": "abhirudhbn@gmail.com",
      "Image": "https://drive.google.com/open?id=1p9ZsdZfYMRkWKrIGPuKUPFaubuu6usFT",
      "About Yourself": "19 y/o and don't want to be 20",
      "Education": "National Hill View Public School",
      "Experience": "University cricket team",
      "Your Skills": "Cloud computing",
      "Project Links": "NA",
      "Certifications / Courses": "Udemy web development course , Skill vertex cloud computing course",
      "Awards / Achievements": "All age group zonal teams , MRD scholarship",
      "Research Papers (if published any)": "NA",
      "Email Address": "abhirudhbn@gmail.com"
    },
    "Akshay AS": {
      "Name": "Akshay AS",
      "Email": "akshay.as2003@gmail.com",
      "Image": "https://drive.google.com/open?id=1XHCXx4QQ5W3uCo8n29hNLwStK26AKppX",
      "About Yourself": "I am a 3rd semester student at PES University, Bengaluru pursuing my B.Tech Degree in Computer Science. My main area of interest is in Web Development. I am an avid sports enthusiast with Football and Formula 1 being my favourites.",
      "Education": "SKCH",
      "Experience": "Google Developer Student Club under Web Development Domain",
      "Your Skills": "Web Development",
      "Project Links": "https://github.com/akshay-here/Snake-Game , https://github.com/akshay-here/Drum-Kit , https://github.com/akshay-here/Pong",
      "Certifications / Courses": "The Complete 2023 Web Development Bootcamp , 100 Days of Code: The Complete Python Programming Bootcamp",
      "Awards / Achievements": "CNR Rao Award",
      "Research Papers (if published any)": "NA",
      "Email Address": "akshay.as2003@gmail.com"
    },
    "Ajith S P": {
      "Name": "Ajith S P",
      "Email": "ajithsp224@gmail.com",
      "Image": "https://drive.google.com/open?id=1rIqUKsQL7a6nhYS7iYRLDtCuhKsdRwLE",
      "About Yourself": "lorem ipsum dolor set",
      "Education": "Sri Kumaran's Composite Home Pre-University College",
      "Experience": "None",
      "Your Skills": "Frontend Developer & Ui Designer, Cooking",
      "Project Links": "NA",
      "Certifications / Courses": "HTML, CSS & JS course by freeCodeCamp.org",
      "Awards / Achievements": "Student of the Year (in 5th Std)",
      "Research Papers (if published any)": "None",
      "Email Address": "ajithsp224@gmail.com"
    },
    "Akilan E": {
      "Name": "Akilan E",
      "Email": "akilanelango@outlook.com",
      "Image": "https://drive.google.com/open?id=1qSLb93a7-w4bDezwH-1PgSu37iJPUwkF",
      "About Yourself": "I am sophomore in PES University, Bangalore, studying Computer Science Engineering. My main areas of interest are Web Development and Data Science. I am an avid enthusiast of fictional literature, football and motorsports of all disciplines.",
      "Education": "TBSM",
      "Experience": "Attended the PeCon Model United Nations in 2022.",
      "Your Skills": "Python Programming Language\nC Programming Language\nJava Programming Language",
      "Project Links": "NA",
      "Certifications / Courses": "PESUIO - \"Essentials of Java",
      "Awards / Achievements": "NA",
      "Research Papers (if published any)": "NA",
      "Email Address": "akilanelango.swag@gmail.com"
    },
    "Ajay": {
      "Name": "Ajay",
      "Email": "ajaysawale@gmail.com",
      "Image": "https://drive.google.com/open?id=1wW2ePf_Vkqlc4QuhaYUexx432sNGz1Wn",
      "About Yourself": "I am devil of my world",
      "Education": "BBA",
      "Experience": "Played throw ball,",
      "Your Skills": "Flirting skills =100%",
      "Project Links": "NA",
      "Certifications / Courses": "Advanced flirting course of 6 months",
      "Awards / Achievements": "Women throwball runner ups",
      "Research Papers (if published any)": "Meet me",
      "Email Address": "akashnyamagoud45@gmail.com"
    },
    "Ajay Rao": {
      "Name": "Ajay Rao",
      "Email": "ajayrao0904@gmail.com",
      "Image": "https://drive.google.com/open?id=1PQ5Ng5GEKCvROMnyaHWyk9Jg-SGX4V_M",
      "About Yourself": "Smooth Operator",
      "Education": "PSBLLA",
      "Experience": "Aikya PESU",
      "Your Skills": "Profesional Baller",
      "Project Links": "NA",
      "Certifications / Courses": "web dev,flutter,gen AI",
      "Awards / Achievements": "NA",
      "Research Papers (if published any)": "NA",
      "Email Address": "ajayrao0904@gmail.com"
    },
    "Abhay A Rao": {
      "Name": "Abhay A Rao",
      "Email": "iabhayrao@gmail.com",
      "Image": "https://drive.google.com/open?id=1DdplAkFpaMz2P4o_gzfF5Cc7V_ctcC2N",
      "About Yourself": "An avid learner who holds a keen interest in coding",
      "Education": "RV PU College",
      "Experience": "IEEE CS,\nMinerva,\nAkita, \nSamarpana",
      "Your Skills": "App Development, Web Development, Image Processing, Basketball, Dance",
      "Project Links": "https://github.com/AbhayARao26/My_Flutter_News_App",
      "Certifications / Courses": "Web Development Bootcamp, \nApp Development Course, \nPython 100 Days on Code",
      "Awards / Achievements": "Scholarship in 1st and 2nd Sem, \nDistinction for remarkable performance in PESU I/O Course",
      "Research Papers (if published any)": "NA",
      "Email Address": "iabhayrao@gmail.com"
    },
    "Aditya Shankar": {
      "Name": "Aditya Shankar",
      "Email": "shankaraditya75@gmail.com",
      "Image": "",
      "About Yourself": "UNIX Developer",
      "Education": "Jnanadeepa High School, Shivamogga",
      "Experience": "NA",
      "Your Skills": "Knows Java, Javascript, Anaconda & Jupyter Notebook, C/C++ coding\nCommunication Skills",
      "Project Links": "NA",
      "Certifications / Courses": "NA",
      "Awards / Achievements": "NA",
      "Research Papers (if published any)": "NA",
      "Email Address": "shankaraditya75@gmail.com"
    },
    "Akash C N": {
      "Name": "Akash C N",
      "Email": "akashnyamagoud45@gmail.com",
      "Image": "",
      "About Yourself": "being optimistic about situations, interactions, and yourself.",
      "Education": "KCS COLLEGE",
      "Experience": "NA",
      "Your Skills": "Active listening skills,Computer skills,Time management skills",
      "Project Links": "NA",
      "Certifications / Courses": "WEB APP DEVELOPMENT\nCYBER SECURITY",
      "Awards / Achievements": "NCC 'A' CERTIFICATE \nBADMINTON STATE LEVEL\nAND MORE TO GO.",
      "Research Papers (if published any)": "NA",
      "Email Address": "akashnyamagoud45@gmail.com"
    }
  };

const UserProfile = () => {
  const { name } = useParams();
  const user = profileInfo[name];

  if (!user) {
    return <div>User profile not found</div>;
  }

  const userImage = imageMap[user.Name];

  return (
    <div className='profile'>
      <h1 className='name'>{user.Name}</h1>
      <center><img className='image' src={userImage} alt="Profile" /></center>

      <center><p>Email: {user.Email}</p></center>
      <section style={{paddingTop : '15px', paddingLeft:'100px', paddingRight:'100px'}}>
        <h2>About</h2>
        <p>{user['About Yourself']}</p>
      </section>

      <section style={{paddingTop : '15px'}}>
        <h2>Education</h2>
        <p>{user.Education}</p>
      </section>

      <section style={{paddingTop : '15px'}}>
        <h2>Experience</h2>
        <p>{user.Experience}</p>
      </section>

      <section style={{paddingTop : '15px'}}>
        <h2>Your Skills</h2>
        <p>{user['Your Skills']}</p>
      </section>

      <section style={{paddingTop : '15px'}}>
        <h2>Project Links</h2>
        <p>{user['Project Links']}</p>
      </section>

      <section style={{paddingTop : '15px'}}>
        <h2>Certifications / Courses</h2>
        <p>{user['Certifications / Courses']}</p>
      </section>

      <section style={{paddingTop : '15px'}}>
        <h2>Awards / Achievements</h2>
        <p>{user['Awards / Achievements']}</p>
      </section>

      <section className='research' style={{paddingTop : '15px'}}>
        <h2>Research Papers (if published any)</h2>
        <p>{user['Research Papers (if published any)']}</p>
      </section>
    </div>
  );
};

export default UserProfile;
