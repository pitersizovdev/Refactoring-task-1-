import React, { useEffect, useRef } from 'react';
import styles from './welcome.module.scss';
import Avatar from '../../assets/img/avatar.png';
import gsap from 'gsap';
import Marquee from '../../components/marquee/MarqueeLogo';
import BtnNext from '../../components/btnnext/BtnNext';

const Welcome = () => {

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Marquee/>
      </div>

      <div className={styles.chattingContainer}>
        <div className={styles.messageContainer}>
          <div className={styles.message}><span>Привет!</span></div>
          <div className={styles.message}><span>Меня зовут Петр –<br/>я Frontend разработчик.</span></div>
          <div className={styles.message}><span>Нажми на кнопку, чтобы<br/>посмотреть мои работы.</span></div>
        </div>
        <div className={styles.avatar}><img src={Avatar}/></div>
      </div>

      <div className={styles.swipeContainer}>
        <a>Резюме PDF</a>
        <BtnNext/>
      </div>
    </div>
  )
}

export default Welcome