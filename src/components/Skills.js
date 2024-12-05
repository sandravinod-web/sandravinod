import React from 'react';
import './Skills.css';
import pythonLogo from '../assets/python.png'; 
import djangoLogo from '../assets/django.png'; 
import reactLogo from '../assets/react.png'; 
import bootstrapLogo from '../assets/bootstrap.png'; 
import mysqlLogo from '../assets/mysql.png'; 
// import postgresqlLogo from '../assets/postgresql.png'; 
import gitLogo from '../assets/git.png'; 

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>class Skills:</h2>
      <hr className="divider" />
      <h3>Tech Stack</h3>
      <div className="tech-stack">
        <div className="tech-item">
          <img src={pythonLogo} alt="Python" />
        </div>
        <div className="tech-item">
          <img src={djangoLogo} alt="Django" />
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="React" />
        </div>
        <div className="tech-item">
          <img src={bootstrapLogo} alt="Bootstrap" />
        </div>
        <div className="tech-item">
          <img src={mysqlLogo} alt="MySQL" />
        </div>
        {/* <div className="tech-item">
          <img src={postgresqlLogo} alt="PostgreSQL" />
        </div> */}
        <div className="tech-item">
          <img src={gitLogo} alt="Git" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
