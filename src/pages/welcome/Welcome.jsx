import React from 'react';
import styles from './welcome.module.scss';
import Marquee from '../../components/marquee/MarqueeLogo';
import BtnNext from '../../components/btnnext/BtnNext';
import Chatting from '../../components/chatting/Chatting';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Marquee/>
      </div>
      
      <div className={styles.chattingContainer}>
        <Chatting/>
      </div>

      <div className={styles.swipeContainer}>
        <a>Резюме PDF</a>
        <BtnNext/>
      </div>
    </div>
  )
}

export default Welcome