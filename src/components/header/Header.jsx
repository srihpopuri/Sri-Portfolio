import React, { useEffect, useState, useMemo } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  const [currentWord, setCurrentWord] = useState('');
  const words = useMemo(() => ['Software Developer', 'Frontend Developer', 'Web Designer'], []);
  const wordIndex = words.indexOf(currentWord);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 500);

    return () => clearInterval(intervalId);
  }, [wordIndex, words]);

  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Sri Harshini Popuri</h1>
        <h3 className="text-light">{currentWord}</h3>
        <CTA />
        <HeaderSocials />
        <a href="#about" className="scroll__down">
          -- Scroll Down -- {`>`}
        </a>
      </div>
    </header>
  );
};

export default Header;
