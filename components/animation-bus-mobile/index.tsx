import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import mobileAnimationData from "../../public/mobile-animation.json";
import styles from './index.module.css';

const AnimationBusMobile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize(); 

    window.addEventListener('resize', checkScreenSize); 

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!isMobile) {
    return null; 
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mobileAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={styles.animationContainer}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default AnimationBusMobile;
