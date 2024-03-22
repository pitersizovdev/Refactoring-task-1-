import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';
import Contact from '../../components/contact/Contact';
import Card from '../../components/card/Card';

function Home() {

  return (
    <>
    <div className={styles.container} >

      <div className={styles.navContainer}>
        <div className={styles.nav}>
          
        </div>
      </div>

      <div className={styles.mainContainer}>
        <Card/>
      </div>

      <div className={styles.contactContainer}>
        <Contact/>

      </div>
    </div>
    </>
  );
}

export default Home;
