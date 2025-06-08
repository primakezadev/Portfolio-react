import React, { useState, useEffect } from 'react';
import personalInfo from '../data/personalInfo.json';
import ayaya from '../assets/ayaya.jpg';
import '../styles/Hero.css';

const Hero = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(personalInfo);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Container for text content and button on the left */}
      <div className="hero-content">
        <h4>I'm {info.name}</h4> {/* Added "I'm " for consistency with example */}
        <h1>{info.title}</h1>
        <p>{info.tagline}</p>
        <a href="#contact" className="hero-button">Contact Me</a> {/* Added a class for styling */}
      </div>
      
      {/* Image on the right */}
      <img src={ayaya} alt="Profile" className="hero-img" />
    </section>
  );
};

export default Hero;