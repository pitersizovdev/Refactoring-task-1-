import React, { useEffect, useRef, useState } from 'react';
import styles from './chatting.module.scss';
import Avatar from '../../assets/img/avatar.png';

const Chatting = () => {
  const messages = useRef(null);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageContainer = messages.current;
    const messageList = [
      { id: 1, content: 'Привет!' },
      { id: 2, content: 'Меня зовут Петр – <br/> я Frontend разработчик.' },
      { id: 3, content: 'Нажми на кнопку, чтобы <br/> посмотреть мои работы.' },
    ];

    const interval = setInterval(() => {
      if (messageIndex < messageList.length) {
        const newMessage = document.createElement('li');
        newMessage.classList.add(styles.message);
        newMessage.innerHTML = `${messageList[messageIndex].content}`;

        messageContainer.appendChild(newMessage);
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