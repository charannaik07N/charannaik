import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Chevron from '../components/Chevron';
import CursorGlow from '../components/CursorGlow';
import FadeIn from '../components/FadeIn';
import GlassBackdrop from '../components/GlassBackdrop';
import Button from '../components/Button';
import { EASE } from '../lib/motion';

// The headline breaks differently on phones so every line fits at full size.
const WIDE_LINES = ['I build digital', 'systems that feel', 'effortless.'];
const NARROW_LINES = ['I build', 'digital', 'systems', 'that feel', 'effortless.'];

function HeadlineLines({ lines, className }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, index) => (
        // Padding keeps descenders from being clipped by the reveal mask.
        <span key={line} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
          <motion.span
            data-reveal
            className="block"
            initial={reduceMotion ? false : { y: '115%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15 + index * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);

  // As the reader scrolls on, the hero sinks back: smaller, fainter, a little higher.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const depthScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const depthY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const depthOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const depth = reduceMotion ? undefined : { scale: depthScale, y: depthY, opacity: depthOpacity };

  const scrollToWork = (event) => {
    const target = document.getElementById('work');
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section ref={ref} className="relative flex min-h-svh flex-col">
      <GlassBackdrop />
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <CursorGlow />

      <motion.div
        style={depth}
        className="container-x hero-inset relative flex flex-1 flex-col items-center justify-center text-center"
      >
        <h1 className="text-display">
          <HeadlineLines lines={NARROW_LINES} className="sm:hidden" />
          <HeadlineLines lines={WIDE_LINES} className="hidden sm:block" />
        </h1>

        <FadeIn as="p" delay={0.55} className="hero-gap text-xl font-medium tracking-tight md:text-2xl">
          Software Engineer
        </FadeIn>

        <FadeIn as="p" delay={0.65} className="text-lede mt-3 max-w-2xl text-fg/75">
          I build production-ready web applications and work on LLM training, evaluation, and
          human-feedback workflows.
        </FadeIn>

        <FadeIn delay={0.75} className="hero-gap flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Button href="#work" onClick={scrollToWork}>
            View my work
          </Button>
          <Button to="/contact" variant="secondary">
            Let&rsquo;s connect
            <Chevron />
          </Button>
        </FadeIn>
      </motion.div>

    </section>
  );
}
