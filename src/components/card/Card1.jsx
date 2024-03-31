import React from 'react'
import { Tooltip } from 'react-tooltip'
import styles from './card.module.scss'
import CardImage from '../../assets/img/lmp.png'
import ReactSvg from '../../assets/icons/react.svg'
import Treejs from '../../assets/icons/tree.svg'
import Framer from '../../assets/icons/framer.svg'
import Fire from '../../assets/icons/fire.svg'

const Card1 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={CardImage}/>
        </div>
        <div className={styles.cardDesc}>
            <h1>local music party</h1>
            <p>Разработка сайта для мобильного приложения по поиску локальных музыкальных мероприятий.  <p/> Настройка под Firebase API <br/>и рендер 3D компонентов.</p>
        </div>
        <div className={styles.cardTeam}>
            <a className="piter"><div className={styles.piter}/></a>
            <a className="semen"><div className={styles.semen}/></a>
            <a className="nastya"><div className={styles.nastya}/></a>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#тимлид</span></div>
            <div className={styles.stack}>
                <img src={ReactSvg} title='React.js'/>
                <img src={Treejs} title='Tree.js'/>
                <img src={Fire} title='Firebase'/>
                <img src={Framer} title='Framer Motion'/>
            </div>
        </div>
    <Tooltip anchorSelect=".piter" place="top">Петр Сизов <br/>Teamleader</Tooltip>
    <Tooltip anchorSelect=".semen" place="top">Семен Максисов <br/>3D artist</Tooltip>
    <Tooltip anchorSelect=".nastya" place="top">Анастасия Предеина <br/>UI / UX</Tooltip>
    </div>
  )
}

export default Card1