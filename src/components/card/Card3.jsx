import React from 'react'
import styles from './card.module.scss'
import CardImage from '../../assets/img/greenlist.png'
import Nextjs from '../../assets/icons/nextjs.svg'
import Solidity from '../../assets/icons/solidity.svg'
import Sass from '../../assets/icons/sass.svg'
import Зostgres from '../../assets/icons/postgres.svg'

const Card3 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={CardImage}/>
        </div>
        <div className={styles.cardDesc}>
            <h1>greenlist</h1>
            <p>Сервис для обмена криптовалют <br/> и мониторинга цен на ведущие крипто-активы.<p/>Авторизация и регистрация пользователей в базе данных.</p>
        </div>
        <div className={styles.cardTeam}>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#крипто</span></div>
            <div className={styles.stack}>
                <img src={Nextjs}/>
                <img src={Solidity}/>
                <img src={Зostgres}/>
                <img src={Sass}/>
            </div>
        </div>
    </div>
  )
}

export default Card3