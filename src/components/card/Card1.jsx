import React from 'react'
import styles from './card.module.scss'
import CardImage from '../../assets/img/lmp.png'
import ReactSvg from '../../assets/icons/react.svg'
import ReduxSvg from '../../assets/icons/redux.svg'
import WebpackSvg from '../../assets/icons/webpack.svg'
import SassSvg from '../../assets/icons/sass.svg'
import Semen from '../../assets/img/sem.png'

const Card1 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={CardImage}/>
        </div>
        <div className={styles.cardDesc}>
            <h1>local music party</h1>
            <p>Сайт для мобильного приложения по поиску локальных музыкальных мероприятий</p>
        </div>
        <div className={styles.cardTeam}>
            <img src={Semen}/>
            <img src={Semen}/>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#тимлидер</span></div>
            <div className={styles.stack}>
                <img src={ReactSvg}/>
                <img src={ReduxSvg}/>
                <img src={WebpackSvg}/>
                <img src={SassSvg}/>
            </div>
        </div>
    </div>
  )
}

export default Card1