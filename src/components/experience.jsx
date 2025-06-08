import React from 'react';
import experienceData from '../data/experience.json';
import '../styles/experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>{experienceData.heading}</h2>
      <div className="experience-list">
        {experienceData.jobs.map((job, index) => (
          <div className="job" key={index}>
            <h3>{job.title} @ {job.company}</h3>
            <p className="duration">{job.duration}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
