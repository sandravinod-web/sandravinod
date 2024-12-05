import React from 'react';
import './About.css';
import profileImage from '../assets/profile.png'; // Replace with the correct path to your profile image
import resumeFile from '../assets/Sandra_V-Resume.pdf'; // Replace with the correct path to your resume file

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
        <h2>def AboutMe():</h2> 
        <p>
          Hello, I’m Sandra, a Python developer specializing in Backend Development with expertise in Python, Django, and SQL. Since 2023, I’ve been building scalable web applications and expanding my skills through hands-on projects.
        </p>
        <p>
          Some of my key projects include a real-time chat application, chatbots, and task management systems built with Django. I’ve faced challenges like deployment and database migration, which have motivated me to enhance my expertise in backend API development and cloud technologies.
        </p>
        <p>
          I’m seeking opportunities in Python and Backend Development to apply my skills, grow further, and contribute to innovative projects that make a real impact.
        </p>
          <a href={resumeFile} className="resume-button" download="Sandra_V_Resume.pdf">
            <i className="icon">&#8681;</i> Download
          </a>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Sandra Vinod" />
        </div>
      </div>
    </section>
  );
};

export default About;
