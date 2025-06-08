import React from 'react';
import projectData from '../data/projects.json';
import '../styles/projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>{projectData.heading}</h2>
      <div className="project-list">
        {projectData.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
