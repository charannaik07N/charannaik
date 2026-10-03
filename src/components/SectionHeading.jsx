import Reveal from './Reveal';

// `overColour`: the heading sits on a GlassBackdrop, where the usual grey loses contrast.
export default function SectionHeading({ title, subtitle, as: Tag = 'h2', overColour = false, className = '' }) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <Reveal>
        <Tag className="text-title text-balance">{title}</Tag>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.08}>
          <p className={`text-lede mt-5 max-w-xl ${overColour ? 'text-fg/75' : 'text-muted'}`}>{subtitle}</p>
        </Reveal>
      )}
    </header>
  );
}
