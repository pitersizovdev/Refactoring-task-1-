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
            <a href='https://github.com/pitersizovdev/taskchain' target="_blank"><img src={CardImage}/></a>
        </div>
        <div className={styles.cardDesc}>
        <a href='https://github.com/pitersizovdev/taskchain' target="_blank"><h1>Taskchain</h1></a>
            <p>Мессенджкр для обмена докуметами <br/> в распределенной сети IPFS.<p/>Авторизация и регистрация пользователей в базе данных.</p>
        </div>
        <div className={styles.cardTeam}>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#блокчейн</span></div>
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