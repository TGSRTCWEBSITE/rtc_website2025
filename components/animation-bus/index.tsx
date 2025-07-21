import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import BusAnimation from "../../public/Dust.json";
import styles from "./index.module.css";

const AnimationBus = () => {
  const animationContainer = useRef(null);
  const animationInstanceRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const maxFrames = 200;
  const [containerLeft, setContainerLeft] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const vw = window.innerWidth;
        setIsLargeScreen(vw >= 1024);

        const maxWidth = 1366;
        const margin = (vw - maxWidth) / 2;
        setContainerLeft(vw > maxWidth ? margin : 0);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (isLargeScreen && animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: BusAnimation,
      });

      animationInstanceRef.current = animation;

      return () => {
        animation.destroy();
      };
    }
  }, [isLargeScreen]);

  const frame = useTransform(scrollYProgress, [0, 1], [0, maxFrames - 1]);
  const topPosition = useTransform(scrollYProgress, [0, 1], ["0vw", "50vh"]);

  useEffect(() => {
    if (isLargeScreen) {
      frame.onChange((value) => {
        if (animationInstanceRef.current) {
          if (scrollYProgress.get() >= 1) {
            const fastValue = Math.min(
              maxFrames - 1,
              Math.round(
                ((value - maxFrames * 0.8) * (maxFrames - 1)) / (1 - 0.8)
              )
            );
            animationInstanceRef.current.goToAndStop(fastValue, true);
          } else {
            animationInstanceRef.current.goToAndStop(Math.round(value), true);
          }
        }
      });
    }
  }, [frame, scrollYProgress, isLargeScreen]);

  if (!isLargeScreen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <motion.div
        ref={animationContainer}
        className={styles.animation}
        style={{ top: topPosition, left: `calc(${containerLeft}px)` }}
      />
    </div>
  );
};

export default AnimationBus;
