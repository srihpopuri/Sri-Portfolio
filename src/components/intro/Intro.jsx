import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/**
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>

        </div>
        */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Education</h5>
              <small>Masters of Computer Science</small>
            </article>
          </div>
          <p> 
            I'm Sri Harshini Popuri, a passionate Software Engineer who crafts digital wonders with a touch of creativity. Here's a glimpse into my world:
            Imagine me as a digital artist, proficient in languages like JavaScript, Java, and Python. I thrive on solving puzzles hidden within code.
            HTML, CSS, and JavaScript are my trusty tools, and I specialize in ReactJS, TypeScript, and frontend magic. I love turning ideas into beautiful interfaces.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro