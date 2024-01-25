import React from 'react';
import IMG1 from '../../assets/starbucks.png';
import IMG3 from '../../assets/weather-app.png';
import IMG4 from '../../assets/chatbot.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Starbucks Landing Page',
      img: IMG1,
      description:
        'A webdesign for starbucks landing page',
      technologies: 'JavaScript | Html',
      link: 'https://srihpopuri.github.io/Starbucks-Landingpage/',
      github: 'https://github.com/srihpopuri/Starbucks-Landingpage.git',
    },
    {
      id: 2,
      title: 'Chat-bot',
      img: IMG4,
      description:
        'This is a peronalised customer care chatbox ',
      technologies: 'JavaScript | CSS',
      link: 'https://srihpopuri.github.io/ChatBot/',
      github: 'https://github.com/srihpopuri/ChatBot.git',
    },
    {
      id: 3,
      title: 'Weather-App',
      img: IMG3,
      description: 'This is an application to forecast weather information',
      technologies: 'JavaScript | Webpack',
      link: 'https://srihpopuri.github.io/Weather-App/',
      github: 'https://github.com/srihpopuri/Weather-App.git',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
