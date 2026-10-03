import { ArrowUpRight, Mail } from 'lucide-react';
import GlassBackdrop from '../components/GlassBackdrop';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

// The closing statement. Used at the end of every page and as the Contact page itself.
export default function ContactCTA({ as: Heading = 'h2', className = 'section-y', showEmail = true }) {
  return (
    <section className={`relative ${className}`}>
      <GlassBackdrop className="-scale-x-100" />
      <div className="container-x relative">
        <Reveal>
          <Heading className="text-closing">
            Have something
            <br />
            worth building?
          </Heading>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-closing text-fg/60">Let&rsquo;s talk.</p>
        </Reveal>

        {profile.availability && (
          <Reveal delay={0.16}>
            <p className="text-lede mt-10 max-w-xl text-fg/85 md:mt-14">{profile.availability}</p>
          </Reveal>
        )}

        <Reveal
          delay={0.2}
          className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${
            profile.availability ? 'mt-6' : 'mt-12 md:mt-16'
          }`}
        >
          <Button href={`mailto:${profile.email}`}>
            <Mail size={17} aria-hidden="true" />
            Email me
          </Button>
          <Button href={profile.linkedin} variant="secondary">
            LinkedIn
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
          <Button href={profile.github} variant="secondary">
            GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
          <Button href={profile.resume} variant="secondary">
            Résumé
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </Reveal>

        {showEmail && (
          <Reveal delay={0.28}>
            <p className="mt-8 text-[1.0625rem] break-all text-fg/75 select-all">{profile.email}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
