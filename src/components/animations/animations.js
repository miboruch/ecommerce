import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

export const createSlideOpacity = (duration, delay, valuesFrom, valuesTo) => {
  return () =>
    useSpring({
      config: { duration: duration, easing: easeExpOut },
      from: { opacity: 0, ...valuesFrom },
      to: { opacity: 1, ...valuesTo },
      delay: delay
    });
};

export const createOpacity = (duration, delay) => {
  return () =>
    useSpring({
      config: { duration: duration, easing: easeExpOut },
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: delay
    });
};

export const createBackgroundSlide = (duration, delay) => {
  return () =>
    useSpring({
      config: { duration: duration, easing: easeExpOut },
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(0)' },
      delay: delay
    });
};
