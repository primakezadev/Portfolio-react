import React from 'react';
import experienceData from '../data/experience.json';
import '../styles/experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Ex<b>perie</b>nce</h2>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-organization">{exp.organization}</p>
            <p className="experience-date">{exp.date}</p>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-tech">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
