import { profile } from '../data/profile';

const links = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-x flex flex-col gap-6 py-8 text-xs text-muted md:flex-row md:items-end md:justify-between">
        <div className="space-y-1.5">
          <p className="text-fg">&copy; 2026 Charan Nayak</p>
          <p>Software Engineer &bull; AI/ML &bull; Full-Stack &bull; UI/UX</p>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <ul className="-mx-2 flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="link-hit justify-center px-2 transition-colors duration-200 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
}
