import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';
import Gradient from '../../components/gradient/Gradient';

function Home() {
  const btnContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnContainer.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div className={styles.container} ref={btnContainer}>
      <Gradient />
    </div>
  );
}

export default Home;
