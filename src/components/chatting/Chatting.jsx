import React, { useEffect, useRef, useState } from 'react';
import styles from './chatting.module.scss';
import Avatar from '../../assets/img/avatar.png';
import gsap from 'gsap';

const Chatting = () => {
  const messages = useRef(null);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageContainer = messages.current;
    const messageList = [
      { id: 1, content: 'Привет!' },
      { id: 2, content: 'Меня зовут Петр – <br/> я Frontend разработчик.' },
    ];

    const interval = setInterval(() => {
      if (messageIndex < messageList.length) {
        const newMessage = document.createElement('li');
        newMessage.classList.add(styles.message);
        newMessage.innerHTML = `${messageList[messageIndex].content}`;

        messageContainer.appendChild(newMessage);

        gsap.fromTo(newMessage, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });

        setMessageIndex(messageIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <>
      <div ref={messages} className={styles.messageContainer}>
        <ul className="messages"></ul>
      </div>
      <div className={styles.avatar}><img src={Avatar}/></div>
    </>
  );
};

export default Chatting;
