import { useEffect, useState } from 'react';

/**
 * Animated counter for numbers (supports suffix like '+').
 * @param {number} target - The number to count up to.
 * @param {number} duration - Duration in ms for the animation.
 * @param {string} suffix - Suffix to append (e.g., '+').
 * @returns {string}
 */
export default function useCountUp(target, duration = 1200, suffix = '') {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    let end = typeof target === 'number' ? target : parseInt(target);
    if (isNaN(end)) end = 1;
    const increment = Math.ceil((end - start) / (duration / 16));
    let current = start;
    const step = () => {
      current += increment;
      if (current >= end) {
        setCount(end);
      } else {
        setCount(current);
        requestAnimationFrame(step);
      }
    };
    setCount(start);
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [target, duration]);

  return `${count}${suffix}`;
}
