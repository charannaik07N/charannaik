import { motion, useReducedMotion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { EASE } from '../lib/motion';

// Wraps every route. One short opacity / translate transition, no loader.
// With reduced motion the page swaps with no transition at all.
export default function PageTransition({ title, children }) {
  usePageTitle(title);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <main id="main" tabIndex={-1}>
        {children}
      </main>
    );
  }

  return (
    <motion.main
      id="main"
      tabIndex={-1}
      data-reveal
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.main>
  );
}
