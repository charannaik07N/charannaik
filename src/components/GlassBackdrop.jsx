import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Soft drifting colour behind a section. Purely decorative. The colour scrolls
// slower than the page, which puts it a layer behind the content. The drift
// stops under prefers-reduced-motion (see index.css) and while off screen.
export default function GlassBackdrop({ className = '' }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [onScreen, setOnScreen] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-14%', '14%']);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={`blobs ${onScreen ? '' : 'blobs-paused'} ${className}`}>
      <motion.div style={reduceMotion ? undefined : { y }} className="absolute inset-0">
        <span className="blob blob-blue" />
        <span className="blob blob-violet" />
        <span className="blob blob-pink" />
      </motion.div>
    </div>
  );
}
