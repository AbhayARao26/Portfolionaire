import React from 'react';
import { useTrail, animated, config } from 'react-spring';
import '../App.css'; // Import your CSS file for styling

const AnimatedIntroduction = () => {
  const text = [
    "Portfolionaire, our dedicated resume website, is a dynamic tool catering specifically to the students of our class.",
    " This platform provides a centralized space for showcasing a comprehensive overview of skills, experiences, and achievements, empowering individuals to highlight their unique qualities. ",
    "Its interactive features ensure a captivating user experience, fostering deeper engagement. ",
    "Furthermore, Portfolionaire significantly boosts online visibility, optimizing searchability and discoverability in the digital realm.",
    "In essence, this platform stands as a strategic asset, delivering a modern, tailored, and impactful representation of each student's professional identity, ultimately enhancing their prospects in the competitive academic and professional landscape."
  ];

  const trail = useTrail(text.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 80, friction: 30 },
  });

    console.log(config);

  return (
    <div className="animated-intro-container">
      {trail.map((props, index) => (
        <animated.p key={index} style={props}>
          {text[index]}
        </animated.p>
      ))}
    </div>
  );
};

export default AnimatedIntroduction;

