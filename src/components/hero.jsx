import React, { useState, useEffect } from 'react';
import personalInfo from '../data/personalInfo.json'; // ✅
import '../styles/Hero.css';

const Hero = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(personalInfo);
  }, []);

  return (
    <section className="hero" id="hero">
      
      <img src={info.photo} alt="Profile" className="hero-img" />
      <h1>{info.name}</h1>
      <h2>{info.title}</h2>
      <p>{info.tagline}</p>
      <a href="#contact">Contact Me</a>
    </section>
  );
};

export default Hero;
