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
            <a href='https://github.com/pitersizovdev/greenlist-exchange'><img src={CardImage}/></a>
        </div>
        <div className={styles.cardDesc}>
        <a href='https://github.com/pitersizovdev/greenlist-exchange'><h1>greenlist</h1></a>
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
                <img src={Nextjs} title='Next.js'/>
                <img src={Solidity} title='Solidity'/>
                <img src={Зostgres} title='PostgreSQL'/>
                <img src={Sass} title='Sass CSS'/>
            </div>
        </div>
    </div>
  )
}

export default Card3