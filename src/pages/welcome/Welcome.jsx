import React from 'react'
import styles from './welcome.module.scss'
import Swipe from '../../components/swipe/Swipe'
import Avatar from '../../assets/img/avatar.png'

const Welcome = () => {
  return (
    <div className={styles.container}>

      <div className={styles.chattingContainer}>
        <div className={styles.message}><p>Привет! Меня зовут Петр,<br/> я frontend разработчик.</p></div>
        <div className={styles.avatar}><img src={Avatar}/></div>
      </div>

      <div className={styles.swiperContainer}>
        <div className={styles.swipeToggle}>0</div>
        <div className={styles.swiper}>Посмотреть</div>
      </div>
    </div>
  )
}

export default Welcome