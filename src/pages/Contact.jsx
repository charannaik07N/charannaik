import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import ContactCTA from '../sections/ContactCTA';
import { profile } from '../data/profile';

const CHANNELS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/charan-naik-charan', href: profile.linkedin },
  { label: 'GitHub', value: 'github.com/charannaik07N', href: profile.github },
];

export default function Contact() {
  return (
    <PageTransition title="Contact">
      <ContactCTA as="h1" className="pt-32 pb-16 md:pt-44 md:pb-24" showEmail={false} />

      <section className="container-x pb-24 md:pb-36">
        <h2 className="sr-only">Where to reach me</h2>
        <ul className="border-t border-line">
          {CHANNELS.map((channel, index) => (
            <Reveal as="li" key={channel.label} delay={index * 0.06} className="border-b border-line">
              <a
                href={channel.href}
                {...(channel.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group grid gap-1 py-6 transition-colors duration-300 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-10"
              >
                <span className="text-sm text-muted">{channel.label}</span>
                <span className="text-lg break-all tracking-tight text-accent group-hover:underline md:text-2xl">
                  {channel.value}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
