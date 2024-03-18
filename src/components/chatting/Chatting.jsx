import React from 'react'
import styles from './chatting.module.scss'
import Avatar from '../../assets/img/avatar.png'

const Chatting = () => {
  return (
    <div className={styles.chattingContainer}>
      <div className={styles.message}><p>Привет! Меня зовут Петр –<br/> я Frontend разработчик.</p></div>
      <div className={styles.avatar}><img src={Avatar}/></div>
    </div>
)
}

export default Chatting