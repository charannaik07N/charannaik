import { motion, useReducedMotion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';

// How far each stepped layer steps sideways from the one above it.
const STEP = 7;

// Layers of a system, top to bottom, joined by a rail that draws itself in.
// A single pulse travels the rail to show the direction a request moves.
// `stepped` renders the layers as raised sheets, stepped sideways for depth,
// for use on a band (bg-ink-2).
export default function StackDiagram({ layers, label, stepped = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative" role="img" aria-label={label}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 w-px origin-top bg-line-strong"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.4, ease: EASE }}
      />

      {!reduceMotion && (
        <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px overflow-hidden">
          <motion.span
            className="absolute inset-0"
            animate={{ y: ['-10%', '100%'] }}
            transition={{ duration: 4, ease: 'linear', repeat: Infinity, repeatDelay: 1.2 }}
          >
            <span className="block h-10 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
          </motion.span>
        </span>
      )}

      <ol aria-hidden="true" className={`relative flex flex-col ${stepped ? 'gap-5' : 'gap-7'}`}>
        {layers.map((layer, index) => (
          // The reveal animates the <li>; the row inside keeps its own hover transform.
          <motion.li
            key={layer.title}
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: EASE }}
            style={
              stepped
                ? { marginLeft: index * STEP, marginRight: (layers.length - 1 - index) * STEP }
                : undefined
            }
          >
            <div
              className={`flex items-baseline justify-between gap-4 rounded-small px-5 py-4 ${
                stepped ? 'card-lift card-rim border border-line bg-raised' : 'border border-line bg-surface'
              }`}
            >
              <span className="text-[1.0625rem] font-medium tracking-tight">{layer.title}</span>
              <span className={`text-right text-sm ${stepped ? 'text-fg/75' : 'text-muted'}`}>
                {layer.note}
              </span>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
