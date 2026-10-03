import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import ContactCTA from '../sections/ContactCTA';
import Education from '../sections/Education';
import { profile } from '../data/profile';

const DISCIPLINES = [
  {
    title: 'Engineering',
    body: 'I build full-stack web applications with React, Next.js, Node.js and Express, on MongoDB and PostgreSQL.',
  },
  {
    title: 'AI / ML',
    body: 'At Ethara AI I work on LLM training and evaluation: RLHF, preference data, benchmarking, prompt engineering and error analysis.',
  },
  {
    title: 'Design',
    body: 'I design in Figma, from wireframes and prototypes to interaction design and design systems, and take those designs to production.',
  },
];

const HEADLINE = ['Engineer by discipline.', 'Designer by instinct.'];

export default function About() {
  // The portrait column appears once /public/portrait.webp exists.
  const [hasPortrait, setHasPortrait] = useState(true);
  const { portrait } = profile;

  return (
    <PageTransition title="About">
      <header
        className={`container-x pt-32 md:pt-44 ${
          hasPortrait ? 'grid gap-12 lg:grid-cols-[1fr_20rem] lg:items-end lg:gap-16' : ''
        }`}
      >
        <div>
          <h1 className="text-page">
            {HEADLINE.map((line, index) => (
              <FadeIn
                as="span"
                key={line}
                y={28}
                delay={0.1 + index * 0.12}
                className={`block ${index === 1 ? 'text-muted' : ''}`}
              >
                {line}
              </FadeIn>
            ))}
          </h1>
          <FadeIn
            as="p"
            delay={0.4}
            className="mt-10 max-w-3xl text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug tracking-tight text-fg/90"
          >
            I&rsquo;m a Software Engineer focused on building production-ready digital products
            across frontend, backend, AI/ML and UI/UX.
          </FadeIn>
          {profile.intro && (
            <FadeIn as="p" delay={0.5} className="text-lede mt-6 max-w-2xl text-muted">
              {profile.intro}
            </FadeIn>
          )}
        </div>

        {hasPortrait && (
          <FadeIn delay={0.3} className="max-w-xs overflow-hidden rounded-card bg-surface lg:max-w-none">
            <img
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              decoding="async"
              onError={() => setHasPortrait(false)}
              className="block h-auto w-full"
            />
          </FadeIn>
        )}
      </header>

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {DISCIPLINES.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="rounded-card bg-surface p-7 md:p-9">
                <h2 className="text-heading">{item.title}</h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <Education />
      </div>

      <div className="border-t border-line">
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
