import React, { useState, useEffect } from 'react';
import aboutData from '../data/about.json';
import '../styles/about.css';
import prof from '../assets/prof.png'; // Make sure this path is correct for your image

function About() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(aboutData);
  }, []);

  if (!data.paragraphs) { // Basic loading state or check for data
    return <div>Loading About section...</div>;
  }

  return (
    <section className="about-section" id="about">
      {/* Main Heading and Subheading */}
      <div className="about-header">
        <h2>{data.heading}</h2>
        {data.subheading && <p className="about-subheading">{data.subheading}</p>}
      </div>

      {/* Two-column content layout */}
      <div className="about-content-wrapper">
        {/* Left Column: Image */}
        <div className="about-image-container">
          <img src={prof} alt="Profile" className="about-img" />
        </div>

        {/* Right Column: Text and Social Links */}
        <div className="about-text-container">
          {data.paragraphs.map((text, index) => (
            <p key={index} className="about-paragraph">{text}</p>
          ))}
          
          <div className="about-social-links">
            {data.socialLinks && data.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                {/* IMPORTANT: You'll need actual icon components or a font-awesome CDN link here.
                  For demonstration, I'm using a placeholder text/class.
                  e.g., if using Font Awesome: <i className={link.iconClass}></i>
                */}
                <i className={link.iconClass}></i> {/* Placeholder for actual icon */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;