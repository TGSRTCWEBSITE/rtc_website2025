import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/web-bus-animation.json';
import mobileAnimationData from '../../public/mobile-banner-animation.json';

const ScrollAnimation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 599);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: isMobile ? mobileAnimationData : animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },

  };

  return (
    <div>
      {/* Modified the animation issue  */}
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </div>
  );
};

export default ScrollAnimation;
