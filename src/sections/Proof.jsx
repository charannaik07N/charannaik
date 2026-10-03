import { ArrowUpRight } from 'lucide-react';
import BentoCard from '../components/BentoCard';
import GlassBackdrop from '../components/GlassBackdrop';
import SectionHeading from '../components/SectionHeading';
import { proof } from '../data/profile';
import { getProject } from '../data/projects';

export default function Proof() {
  const live = getProject('pro-talent-connect');

  return (
    <section className="section-y relative">
      <GlassBackdrop />
      <div className="container-x relative">
        <SectionHeading
          overColour
          title="Built. Shipped. Measured."
          subtitle="Each figure below was measured on a project I built."
        />

        {/* Four equal tiles: 2 x 2, then one row of four. No tile is ever alone on a row. */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:gap-4 lg:grid-cols-4">
          <BentoCard>
            <p className="flex items-center gap-2 text-sm text-fg/75">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
              Production platform
            </p>
            <div>
              <p className="text-heading">{live.name}</p>
              <a
                href={live.links.live}
                target="_blank"
                rel="noreferrer"
                className="link-hit gap-1 text-sm break-all text-fg underline decoration-accent underline-offset-4 hover:decoration-2 sm:text-[1.0625rem]"
              >
                protalentconnect.co.in
                <ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
              </a>
            </div>
          </BentoCard>

          {proof.map((item, index) => (
            <BentoCard
              key={item.label}
              value={item.value}
              label={item.label}
              source={item.source}
              delay={0.04 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
