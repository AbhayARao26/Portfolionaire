import React from 'react';
import userImage from './images/Abhay A Rao.jpg';

const AbhayProfile = () => {
    const profileInfo = {
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
    };

    return (
    <div className='profile'>
        <h1 className='name'>{profileInfo.Name}</h1>
        <center><img className='image' src={userImage} alt="Profile" /></center>

        <center><p>Email: {profileInfo.Email}</p></center>
        <section style={{paddingTop : '15px'}}>
            <h2>About Yourself</h2>
            <p>{profileInfo['About Yourself']}</p>
        </section>

        <section style={{paddingTop : '15px'}}>
            <h2>Education</h2>
            <p>{profileInfo.Education}</p>
        </section>

        <section style={{paddingTop : '15px'}}>
            <h2>Experience</h2>
            <p>{profileInfo.Experience}</p>
        </section>

        <section style={{paddingTop : '15px'}}>
            <h2>Your Skills</h2>
            <p>{profileInfo['Your Skills']}</p>
        </section>

        <section style={{paddingTop : '15px'}}>
            <h2>Project Links</h2>
            <p>{profileInfo['Project Links']}</p>
        </section>

        <section style={{paddingTop : '15px'}}>
            <h2>Certifications / Courses</h2>
            <p>{profileInfo['Certifications / Courses']}</p>
        </section>

        <section style={{paddingTop : '15px'}}>
            <h2>Awards / Achievements</h2>
            <p>{profileInfo['Awards / Achievements']}</p>
        </section>

        <section className='research' style={{paddingTop : '15px'}}>
            <h2>Research Papers (if published any)</h2>
            <p>{profileInfo['Research Papers (if published any)']}</p>
        </section>
    </div>
    );
};

export default AbhayProfile;