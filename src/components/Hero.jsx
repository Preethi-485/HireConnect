import React from 'react';
import './Hero.css'; // Import the CSS file with the styles

const Hero = ({
  title = 'Become a React Dev',
  subtitle = 'Find the React job that fits your skill set',
}) => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-text-center'>
          <h1 className='hero-title'>
            {title}
          </h1>
          <p className='hero-subtitle'>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
