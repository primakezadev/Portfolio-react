import React from 'react';
import aboutData from '../data/about.json';
import '../styles/about.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>{aboutData.heading}</h2>
      {aboutData.paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
}

export default About;
