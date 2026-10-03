import { motion, useReducedMotion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';

// Scroll reveal. Runs once, when the element enters the viewport.
// With reduced motion there is no reveal: the content is simply there.
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (reduceMotion) {
    return (
      <Tag className={className} initial={false} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      data-reveal
      className={className}
      // Opacity and transform only: animating a blur here repainted every frame mid-scroll.
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
