import React from 'react'
import styles from './card.module.scss'
import CardImage from '../../assets/img/poslepar.png'
import Figma from '../../assets/icons/figma.svg'
import Ai from '../../assets/icons/ai.svg'
import Ps from '../../assets/icons/ps.svg'


const Card4 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={CardImage}/>
        </div>
        <div className={styles.cardDesc}>
            <h1>после пар</h1>
            <p>Концепция информационного портала для студентов.</p>
            <p>Удобная афиша и путиводитель<br/> для гостей и жителей города <br/>Санкт-Петербург.</p>
        </div>
        <div className={styles.cardTeam}>
            <div className={styles.piter}></div>
            <div className={styles.lena}></div>
            <div className={styles.dasha}></div>
            <div className={styles.sonya}></div>



            <Tooltip anchorSelect=".piter" place="top">Петр Сизов<br/>User Experience</Tooltip>
            <Tooltip anchorSelect=".lena" place="top">Елена Романова<br/>Organisator</Tooltip>
            <Tooltip anchorSelect=".dasha" place="top">Даша Задорожная<br/>User Interface</Tooltip>
            <Tooltip anchorSelect=".sonya" place="top">Софья Некрасова<br/>Adobe Il/Ps</Tooltip>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#вкоманде</span></div>
            <div className={styles.stack}>
                <img src={Figma}/>
                <img src={Ai}/>
                <img src={Ps}/>
            </div>
        </div>
    </div>
  )
}

export default Card4