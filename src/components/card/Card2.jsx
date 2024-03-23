import React from 'react'
import styles from './card.module.scss'
import CardImage from '../../assets/img/pinkcheesecake.png'
import Html from '../../assets/icons/html.svg'
import Boostrap from '../../assets/icons/boostrap.svg'
import Gsap from '../../assets/icons/gsap.svg'
import Emailjs from '../../assets/icons/emailjs.svg'

const Card2 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={CardImage}/>
        </div>
        <div className={styles.cardDesc}>
            <h1>pink cheesecake</h1>
            <p>Лендинг для частной пекарни. <p/> Реализовано подключение формы обратоной связи для обработки новых заявок по электронной почте черзе сервис EmailJS.</p>
        </div>
        <div className={styles.cardTeam}>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#точновсрок</span></div>
            <div className={styles.stack}>
                <img src={Html}/>
                <img src={Boostrap}/>
                <img src={Emailjs}/>
                <img src={Gsap}/>
            </div>
        </div>
    </div>
  )
}

export default Card2