import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const SETTLE = { stiffness: 140, damping: 26, mass: 0.5 };

// Scroll-linked entrance with depth: the panel starts tipped back and a little
// small, then rises flat into place as it travels up the viewport.
// Transform and opacity only, so scrolling never repaints it.
export default function DepthIn({ className, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.55'] });
  const progress = useSpring(scrollYProgress, SETTLE);

  const scale = useTransform(progress, [0, 1], [0.88, 1]);
  const rotateX = useTransform(progress, [0, 1], [4, 0]);
  const y = useTransform(progress, [0, 1], [60, 0]);
  const opacity = useTransform(progress, [0, 0.6], [0.3, 1]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`[perspective:1400px] ${className ?? ''}`}>
      <motion.div style={{ scale, rotateX, y, opacity, transformOrigin: '50% 100%' }} className="h-full">
        {children}
      </motion.div>
    </div>
  );
}
