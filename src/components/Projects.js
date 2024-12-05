import React from 'react';
import './Projects.css';
import positiveImage from '../assets/positive.jpg';  // Update with the correct path to your project image
import domaineImage from '../assets/domaine.jpg';  // Replace with the correct path to your project image
import visionImage from '../assets/vision.jpg';  // Replace with the correct path to your project image
import monarchImage from '../assets/monarch.jpg';  // Replace with the correct path to your project image
import gabImage from '../assets/gab.jpg';  // Replace with the correct path to your project image
import chronoImage from '../assets/chrono.jpg';  // Replace with the correct path to your project image

const projectData = [
  {
    title: 'Positive Properties',
    description: 'A real estate website built with Python Django. Browse and manage property listings, view property details, and connect with agents seamlessly through an intuitive, user-friendly interface.',
    image: positiveImage,
    link: 'https://www.positivepropertiesuae.com/'
  },
  {
    title: 'Domaine Properties',
    description: 'Domaine Properties is a modern real estate platform built with Python Django, offering a seamless way to browse properties, view details, and connect with agents—all in a sleek, responsive design.',
    image: domaineImage,  // Replace with actual image for X-OOP POS
    link: 'https://www.domaine-properties.com/'
  },
  {
    title: 'Vision Nexus',
    description: 'Vision Nexus is a dynamic real estate platform built with Python Django, providing an intuitive way to search for properties, explore listings, and connect with real estate professionals—all within a user-friendly, responsive interface.',
    image: visionImage,
    link: 'https://www.visionxnexus.com/'
  },
  {
    title: 'Monarch Properties',
    description: 'Monarch Properties is a modern real estate platform built with Python Django, offering a sleek and responsive design for browsing, viewing, and connecting with real estate agents.',
    image: monarchImage,
    link: 'https://www.m-capital.co/'
  },
  {
    title: 'Gab Properties',
    description: 'Gab Properties is a dynamic real estate platform built with Python Django, offering a user-friendly interface for browsing, viewing, and connecting with real estate professionals.',
    image: gabImage,
    link: 'https://www.gabpropertiesuae.com/'
  },
  {
    title: 'Chrono Properties',
    description: 'Chrono Corp is an e-commerce platform built with Python Django, offering a smooth shopping experience with easy browsing, detailed product views, and secure transactions.',
    image: chronoImage,
    link: 'https://www.chronocorp.ae/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <h2>for project in Projects:</h2>
        <hr className="divider" />
      </div>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="live-view">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
