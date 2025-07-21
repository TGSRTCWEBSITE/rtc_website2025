import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface KpiCounterProps {
  target: number;
  decimals?: number; 
}

const KpiCounter: React.FC<KpiCounterProps> = ({ target, decimals = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const { number } = useSpring({
    number: inView ? target : 0,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <span ref={ref}>
      <animated.span>{number.to(n => n.toFixed(decimals))}</animated.span>
    </span>
  );
};

export default KpiCounter;
