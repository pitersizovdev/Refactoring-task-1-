import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';
import Contact from '../../components/contact/Contact';
import Card from '../../components/card/Card';
import Slider from '../../components/slider/Slider';

function Home() {

  return (
    <>
    <div className={styles.container} >

      <div className={styles.navContainer}>
        <div className={styles.nav}>
          
        </div>
      </div>

      <div className={styles.mainContainer}>
        <Slider/>
      </div>

      <div className={styles.contactContainer}>
        <Contact/>

      </div>
    </div>
    </>
  );
}

export default Home;
