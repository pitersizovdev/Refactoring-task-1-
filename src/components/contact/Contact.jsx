import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import styles from './contact.module.scss'
import Tel from '../../assets/icons/tel.svg'
import Hh from '../../assets/icons/hh.svg'
import Mail from '../../assets/icons/mail.svg'


const Contact = () => {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div className={styles.contactCard}>
    <div className={styles.git}>
        <a className={styles.gitLink} href='https://github.com/pitersizovdev' target='_blank' title='GitHub'><div className={styles.gitImg} title='GitHub'></div></a>
      <div className={styles.gitLinks}>
        <h3 className={styles.gitName} title='GitHub'>pitersizovdev</h3>
        <a className={styles.gitLink} href='https://github.com/pitersizovdev' target='_blank' title='GitHub'>view on GitHub</a>
      </div>
    </div>
    <div className={styles.contacts}>
      <div className={styles.social}>
        <a href='https://t.me/pvibes2k' target="_blank"><img src={Tel} title='Telegram'/></a>
        <a href='https://spb.hh.ru/resume/ef4c04c4ff0cbc05410039ed1f753247573978?customDomain=1' target="_blank"><img src={Hh} title='hh.ru'/></a>
        <a onClick={() => handleCopyToClipboard('pitersizov.dev@gmail.com')}>
          <img className='mailto' src={Mail} title='E-mail' alt='E-mail'/>
        </a>
      </div>
      <div className={styles.social}></div>
      <div className={styles.social}></div>
    </div>


    <Tooltip anchorSelect=".mailto" place="top">
          {isCopied ? 'Copied!' : 'pitersizov.dev@gmail.com'}
        </Tooltip>
  </div>
  )
}

export default Contact