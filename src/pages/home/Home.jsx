import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';
import Contact from '../../components/contact/Contact';

function Home() {

  return (
    <>
    <div className={styles.container} >

      <div className={styles.navContainer}>
        <div className={styles.nav}>
          123
        </div>
      </div>

      <div className={styles.mainContainer}>
        123
      </div>

      <div className={styles.contactContainer}>
        <Contact/>

      </div>
    </div>
    </>
  );
}

export default Home;
