import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Calculator',
      image: '../src/assets/picture/calculator.png',
      deployedLink: 'https://jlvstrasse.github.io/calculator/',
      repoLink: 'https://github.com/Jlvstrasse/calculator',
    },
    {
        title: 'Rock Paper Scissors',
        image: '../src/assets/picture/rps.png',
        deployedLink: 'https://jlvstrasse.github.io/rock_paper_scissors/',
        repoLink: 'https://github.com/Jlvstrasse/rock_paper_scissors',
      },
      {
        title: 'Password Generator',
        image: '../src/assets/picture/password.png',
        deployedLink: 'https://jlvstrasse.github.io/password_generator/',
        repoLink: 'https://github.com/Jlvstrasse/password_generator',
      },  
      {
        title: 'Weather Dashboard',
        image: '../src/assets/picture/weather.png',
        deployedLink: 'https://jlvstrasse.github.io/weather_dashboard/',
        repoLink: 'https://github.com/Jlvstrasse/weather_dashboard',
      },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
