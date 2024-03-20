import React from 'react'
import styles from './welcome.module.scss'
import Avatar from '../../assets/img/avatar.png'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.piter}>PITER</div>
        <div className={styles.sizov}>SIZOV</div>
      </div>

      <div className={styles.chattingContainer}>
        <div className={styles.messageContainer}>
          <div className={styles.message}><span>Привет!</span></div>
          <div className={styles.message}><span>Меня зовут Петр –<br/>я frontend разработчик.</span></div>
          <div className={styles.message}><span>Проведи вправо, чтобы<br/>посмотреть мои работы.</span></div>
        </div>
        <div className={styles.avatar}><img src={Avatar}/></div>
      </div>

      <div className={styles.swipeContainer}>
        <a>Резюме PDF</a>
        <div className={styles.swiperContainer}></div>
        <div className={styles.swiperToggle}>0</div>
        <div className={styles.swiper}>Посмотреть</div>
      </div>
    </div>
  )
}

export default Welcome