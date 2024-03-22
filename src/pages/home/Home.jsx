import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';

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
        <div className={styles.contactCard}>
          <div className={styles.git}>
            <div className={styles.gitImg}></div>
            <div className={styles.gitLinks}>
              <h3 className={styles.gitName}>pitersizovdev</h3>
              <a className={styles.gitLink}>view on GitHub</a>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.social}></div>
            <div className={styles.social}></div>
            <div className={styles.social}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
