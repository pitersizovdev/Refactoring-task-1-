import React, { useEffect, useRef } from 'react'
import styles from './welcome.module.scss';
import Marquee from '../../components/marquee/MarqueeLogo';
import BtnNext from '../../components/btnnext/BtnNext';
import Chatting from '../../components/chatting/Chatting';
import gsap from 'gsap'

const Welcome = () => {
  const btnContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(btnContainer.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 4 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Marquee/>
      </div>

      <div className={styles.chattingContainer}>
        <Chatting/>
      </div>
      
      <div ref={btnContainer} className={styles.btnContainer}>
        <BtnNext/>
        <a>Резюме PDF</a>
      </div>
    </div>
  )
}

export default Welcome