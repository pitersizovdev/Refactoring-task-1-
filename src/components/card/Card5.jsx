import React from 'react'
import styles from './card.module.scss'
import CardImage from '../../assets/img/py.png'
import Py from '../../assets/icons/py.svg'
import PyCharm from '../../assets/icons/pyc.svg'

const Card5 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <a href='https://github.com/pitersizovdev/EscapeFromSatatovGame-pyton'><img src={CardImage}/></a>
        </div>
        <div className={styles.cardDesc}>
            <h1>Escape from Saratov</h1>
            <p>Приключенческая игра, <br/>построенная на языке Python <br/>с использованием библиотеки Pygame и IDE Pycharm.</p>
        </div>
        <div className={styles.cardTeam}>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
        </div>
        <div className={styles.cardTags}>
            <div className={styles.tag}><span>#оффтоп</span></div>
            <div className={styles.stack}>
                <img src={Py} title='Python'/>
                <img src={PyCharm} title='Pycharm'/>
            </div>
        </div>
    </div>
  )
}

export default Card5