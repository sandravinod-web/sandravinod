import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>
        <span className="function">hello():</span> I'm <span className="name">Sandra Vinod</span>
      </h1>
      <h2>Python django developer</h2>
      <p className="description">
        With a strong foundation in Python and Django, I develop efficient web solutions tailored to meet user needs.      </p>
      <p className="description">
        I am driven by creativity and focus on building scalable, impactful applications that deliver real value to businesses and users alike.
      </p>
      <div className="buttons">
        <a href='mailto:sandra002255@gmail.com'><button className="cta">Let's Talk!</button></a>
        <button className="settings">
          <i className="gear-icon">&#9881;</i>
        </button>
      </div>
    </section>
  );
};

export default Home;
