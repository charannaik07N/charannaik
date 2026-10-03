import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

// Entrance animation for content that is on screen at page load.
// With reduced motion it renders in its final state, with no animation.
export default function FadeIn({ as = 'div', delay = 0, y = 16, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      data-reveal
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
