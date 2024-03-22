import React from 'react'
import styles from './contact.module.scss'
import Tel from '../../assets/icons/tel.svg'
import Hh from '../../assets/icons/hh.svg'
import Mail from '../../assets/icons/mail.svg'

const Contact = () => {
  return (
    <div className={styles.contactCard}>
    <div className={styles.git}>
      <div className={styles.gitImg}></div>
      <div className={styles.gitLinks}>
        <h3 className={styles.gitName}>pitersizovdev</h3>
        <a className={styles.gitLink}>view on GitHub</a>
      </div>
    </div>
    <div className={styles.contacts}>
      <div className={styles.social}>
        <img src={Tel}/>
        <img src={Hh}/>
        <img src={Mail}/>
      </div>
      <div className={styles.social}></div>
      <div className={styles.social}></div>
    </div>
  </div>
  )
}

export default Contact