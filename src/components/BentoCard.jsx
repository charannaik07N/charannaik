import Reveal from './Reveal';

// One measured fact on a solid tile: a figure, what it counts, and the project it comes from.
export default function BentoCard({ value, label, source, delay = 0, children }) {
  return (
    // The reveal animates the wrapper, so the tile's own hover transform stays free.
    <Reveal delay={delay} className="h-full">
      <div className="card-lift card-rim flex h-full flex-col gap-4 rounded-card border border-line bg-surface p-5 md:p-6">
        {children ?? (
          <>
            <p className="text-figure">{value}</p>
            <div>
              <p className="text-[1.0625rem] leading-snug text-fg">{label}</p>
              <p className="mt-1 text-sm text-fg/75">{source}</p>
            </div>
          </>
        )}
      </div>
    </Reveal>
  );
}
