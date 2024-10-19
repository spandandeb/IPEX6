import React from 'react';
import './Projects.css'; // Import external CSS for styling
import projectData from './projectData'; // Import project data

function Project({ title, description, image, liveDemo }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo-link">
        Live Demo
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <Project 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            image={project.image} 
            liveDemo={project.liveDemo} 
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
