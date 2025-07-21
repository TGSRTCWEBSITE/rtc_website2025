import React, { useState, useEffect } from "react";
import styles from "./scroll-effect.module.css";
import MouseImage from "../../public/mouse-shadow-img.png";

const ScrollEffect = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollDown = () => {
    if (isScrolling) return; // Prevent multiple clicks during scroll
    setIsScrolling(true);

    const startY = window.scrollY;
    const targetY = startY + window.innerHeight;
    const duration = 500; // Adjust the duration for smoother scrolling

    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOut = progress < 0.5 
        ? 4 * progress ** 3 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + (targetY - startY) * easeInOut);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const checkScrollPosition = () => {
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsAtBottom(atBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div
      className={styles.fixedIconContainer}
      style={{ display: isAtBottom ? "none" : "flex" }}
      onClick={handleScrollDown}
    >
      <img
        src={MouseImage.src}
        alt="Scroll Down"
        className={styles.fixedIcon}
      />
    </div>
  );
};

export default ScrollEffect;