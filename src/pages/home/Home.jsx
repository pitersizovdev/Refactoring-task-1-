import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './home.module.scss';
import Gradient from '../../components/gradient/Gradient';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const btnContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnContainer.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        onComplete: () => {
          setIsVisible(true);
        }
      }
    );
  }, []);

  return (
    <div className={styles.container} style={{ opacity: isVisible ? 1 : 0 }} ref={btnContainer}>
      <Gradient />
    </div>
  );
}

export default Home;
