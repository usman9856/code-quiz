import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1000,
  delay = 0,
  className = ""
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = value / (duration / 16); // 60fps
      
      const animate = () => {
        start += increment;
        if (start < value) {
          setDisplayValue(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  return <span className={className}>{displayValue}</span>;
};
