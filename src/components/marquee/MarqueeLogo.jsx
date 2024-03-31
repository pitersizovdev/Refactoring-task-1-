import React from 'react'
import styles from './marquee.module.scss'

const MarqueeLogo = () => {
  return (
    <div className={styles.marqueeContainer}>

      <div className={styles.piterContainer}>
        <span className={styles.piter} >PITERPITERPITERPITERPITERPITER</span>
        <span className={styles.piter} >PITERPITERPITERPITERPITERPITER</span>
        <span className={styles.piter} >PITERPITERPITERPITERPITERPITER</span>
        <span className={styles.piter} >PITERPITERPITERPITERPITERPITER</span>
        <span className={styles.piter} >PITERPITERPITERPITERPITERPITER</span>
        <span className={styles.piter} >PITERPITERPITERPITERPITERPITER</span>
      </div>

      <div className={styles.sizovContainer}>
        <span className={styles.sizov} >SIZOVSIZOVSIZOVSIZOVSIZOVSIZOV</span>
        <span className={styles.sizov} >SIZOVSIZOVSIZOVSIZOVSIZOVSIZOV</span>
        <span className={styles.sizov} >SIZOVSIZOVSIZOVSIZOVSIZOVSIZOV</span>
        <span className={styles.sizov} >SIZOVSIZOVSIZOVSIZOVSIZOVSIZOV</span>
        <span className={styles.sizov} >SIZOVSIZOVSIZOVSIZOVSIZOVSIZOV</span>
        <span className={styles.sizov} >SIZOVSIZOVSIZOVSIZOVSIZOVSIZOV</span>
      </div>

    </div>
  )
}

export default MarqueeLogo