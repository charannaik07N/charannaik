import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { experience } from '../data/experience';

// `limit` shows only the most recent roles (Home previews; /experience shows all).
export default function ExperienceTimeline({ headingLevel = 'h3', limit }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative ml-1.5">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-line" />
      {/* The rail fills as the reader moves down the timeline. */}
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduceMotion ? 1 : progress }}
        className="absolute inset-y-0 left-0 w-px origin-top bg-fg/50"
      />
      <ol className="relative">
        {experience.slice(0, limit).map((item) => (
          <ExperienceCard key={item.company} item={item} headingLevel={headingLevel} />
        ))}
      </ol>
    </div>
  );
}
