import FadeIn from './FadeIn';

// Top-of-page heading for every route except Home. Staggers title, then subtitle.
export default function PageHeader({ title, subtitle, children }) {
  return (
    <header className="container-x pt-32 pb-4 md:pt-44">
      <FadeIn as="h1" y={24} delay={0.1} className="text-title max-w-4xl text-balance">
        {title}
      </FadeIn>
      {subtitle && (
        <FadeIn as="p" delay={0.2} className="text-lede mt-6 max-w-xl text-muted">
          {subtitle}
        </FadeIn>
      )}
      {children}
    </header>
  );
}
