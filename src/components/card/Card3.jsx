import React from 'react'
import styles from './card.module.scss'
import CardImage from '../../assets/img/cardImg.png'
import ReactSvg from '../../assets/icons/react.svg'
import ReduxSvg from '../../assets/icons/redux.svg'
import WebpackSvg from '../../assets/icons/webpack.svg'
import SassSvg from '../../assets/icons/sass.svg'

const Card3 = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={CardImage}/>
        </div>
        <div className={styles.cardDesc}>
            <h1>local music party</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In blanditiis, quisquam nam obcaecati, vitae at quasi accusantium delectus explicabo iure facilis velit aliquid quas qui corporis quae voluptatem quibusdam libero.</p>
        </div>
        <div className={styles.cardTeam}>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
            <div className={styles.member}></div>
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

export default Card3