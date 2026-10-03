import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const PHRASES = [
  'I work at the intersection of',
  'software engineering,',
  'AI systems,',
  'and human-centered design.',
];

function Phrase({ progress, index, total, children }) {
  // Each phrase lights up across its own slice of the scroll range. Dimmed, it
  // still clears 3:1 contrast for large text in both themes.
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.5, 1]);
  return (
    <motion.span style={{ opacity }} className="block">
      {children}
    </motion.span>
  );
}

export default function Statement() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.5'] });

  return (
    <section className="section-y">
      <div className="container-x">
        <h2 ref={ref} className="text-statement max-w-5xl">
          {PHRASES.map((phrase, index) =>
            reduceMotion ? (
              <span key={phrase} className="block">
                {phrase}
              </span>
            ) : (
              <Phrase key={phrase} progress={scrollYProgress} index={index} total={PHRASES.length}>
                {phrase}
              </Phrase>
            ),
          )}
        </h2>
      </div>
    </section>
  );
}
