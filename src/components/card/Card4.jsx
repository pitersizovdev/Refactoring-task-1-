import React from 'react'
import { Tooltip } from 'react-tooltip'
import styles from './card.module.scss'
import CardImage from '../../assets/img/poslepar.png'
import Draw from '../../assets/icons/draw.svg'
import Figma from '../../assets/icons/figma.svg'
import Ai from '../../assets/icons/ai.svg'
import Ps from '../../assets/icons/ps.svg'


const Card4 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <a href='https://www.figma.com/file/3BeaOF7RWV4lRzdC6zZUWs/%D0%A1%D1%82%D1%83%D0%B4%D0%A1%D0%B0%D0%B9%D1%82?type=design&mode=design&t=DLdfKdyz2LJ056up-1' target="_blank"><img src={CardImage}/></a>
        </div>
        <div className={styles.cardDesc}>
        <a href='https://www.figma.com/file/3BeaOF7RWV4lRzdC6zZUWs/%D0%A1%D1%82%D1%83%D0%B4%D0%A1%D0%B0%D0%B9%D1%82?type=design&mode=design&t=DLdfKdyz2LJ056up-1' target="_blank"><h1>после пар</h1></a>
            <p>Концепция информационного портала для студентов.</p>
            <p>Удобная афиша и путеводитель<br/> для гостей и жителей города <br/>Санкт-Петербург.</p>
        </div>
        <div className={styles.cardTeam}>
            <a className="piter"><div className={styles.piter}/></a>
            <a className="lena"><div className={styles.lena}/></a>
            <a className="dasha"><div className={styles.dasha}/></a>
            <a className="sonya"><div className={styles.sonya}/></a>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#вкоманде</span></div>
            <div className={styles.stack}>
                <img src={Draw} title='Draw.io'/>
                <img src={Figma} title='Figma'/>
                <img src={Ai} title='Adobe Illustrator'/>
                <img src={Ps} title='Adobe Photoshop'/>
            </div>
        </div>


        <Tooltip anchorSelect=".piter" place="top">Петр Сизов<br/>User Experience</Tooltip>
        <Tooltip anchorSelect=".lena" place="top">Елена Романова<br/>Organisator</Tooltip>
        <Tooltip anchorSelect=".dasha" place="top">Даша Задорожная<br/>User Interface</Tooltip>
        <Tooltip anchorSelect=".sonya" place="top">Софья Некрасова<br/>Ai / Ps</Tooltip>
    </div>
  )
}

export default Card4