import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useFinePointer } from '../hooks/useMediaQuery';

const SIZE = 720;
const DRIFT = { stiffness: 60, damping: 20, mass: 0.6 };

// A soft radial glow that trails the pointer across its parent section.
// Moved with transforms only, so it never triggers layout.
export default function CursorGlow() {
  const ref = useRef(null);
  const finePointer = useFinePointer();
  const reduceMotion = useReducedMotion();
  const follows = finePointer && !reduceMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, DRIFT);
  const springY = useSpring(y, DRIFT);

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section) return undefined;

    // Rest position: centred behind the headline.
    const rect = section.getBoundingClientRect();
    x.jump(rect.width * 0.5 - SIZE / 2);
    y.jump(rect.height * 0.38 - SIZE / 2);

    if (!follows) return undefined;

    const handleMove = (event) => {
      const bounds = section.getBoundingClientRect();
      x.set(event.clientX - bounds.left - SIZE / 2);
      y.set(event.clientY - bounds.top - SIZE / 2);
    };

    section.addEventListener('pointermove', handleMove, { passive: true });
    return () => section.removeEventListener('pointermove', handleMove);
  }, [follows, x, y]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{
          x: springX,
          y: springY,
          width: SIZE,
          height: SIZE,
          background:
            'radial-gradient(closest-side, rgba(41,151,255,0.12) 0%, rgba(41,151,255,0.07) 25%, rgba(41,151,255,0.025) 50%, rgba(41,151,255,0.006) 72%, rgba(41,151,255,0) 100%)',
        }}
        className="absolute top-0 left-0 rounded-full"
      />
    </div>
  );
}
