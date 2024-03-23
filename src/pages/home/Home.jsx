import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';
import Contact from '../../components/contact/Contact';
import Slider from '../../components/slider/Slider';
import Logo from '../../assets/icons/logo.svg'


function Home() {
  
  
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {

    const move = () => {
      setCurX(prevX => (tgX - prevX) / 20 + prevX);
      setCurY(prevY => (tgY - prevY) / 20 + prevY);
      requestAnimationFrame(() => {
        move();
      });
    };

    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [tgX, tgY]);

  return (
    <>
    <div className={styles.container}>
    <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      {/*<div className={styles.navContainer}>
        <div className={styles.nav}></div>
        <h1 className={styles.myName}>PITER <br/> SIZOV</h1>
      </div>*/}
      <div className={styles.mainContainer}>
        <Slider/>
        
      </div>
      <div className={styles.contactContainer} >
        <Contact/>
      </div>

      <div className={styles.gradientsContainer}>
        <div className={styles.interactive} style={{ transform: `translate(${curX}px, ${curY}px)` }}></div>
            <div className={styles.g1}></div>
            <div className={styles.g2}></div>
            <div className={styles.g3}></div>
            <div className={styles.g4}></div>
        </div>
    </div>
    </>
  );
}

export default Home;
