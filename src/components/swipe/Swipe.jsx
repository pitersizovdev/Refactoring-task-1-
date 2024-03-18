import React from 'react'
import styles from './swipe.module.scss'

const Swipe = () => {
  return (
    <div className={styles.swipeContainer}>
        <div className={styles.swiper}></div>
        <div className={styles.swipe}></div>
    </div>
  )
}

export default Swipe