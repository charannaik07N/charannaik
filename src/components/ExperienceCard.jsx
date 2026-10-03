import Reveal from './Reveal';

export default function ExperienceCard({ item, headingLevel: Heading = 'h3' }) {
  return (
    <Reveal as="li" className="relative pb-16 pl-8 last:pb-0 md:pb-24 md:pl-14">
      {/* Timeline marker, centred on the rail. */}
      <span
        aria-hidden="true"
        className={`absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full border ${
          item.current ? 'border-accent bg-accent' : 'border-muted bg-ink'
        }`}
      />

      <div className="grid gap-4 md:grid-cols-[13rem_1fr] md:gap-10">
        <p className="pt-0.5 text-sm text-muted tabular-nums">
          {item.period}
          {item.current && <span className="sr-only"> (current role)</span>}
        </p>

        <div>
          <Heading className="text-heading">{item.role}</Heading>
          <p className="mt-1 text-lg text-muted">{item.company}</p>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-fg/85">{item.summary}</p>
          <p className="mt-4 max-w-2xl text-sm text-muted">{item.terms.join(' · ')}</p>
        </div>
      </div>
    </Reveal>
  );
}
