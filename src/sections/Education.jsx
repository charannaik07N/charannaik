import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { certification, education } from '../data/profile';

export default function Education() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading title="Education" />

        {/* Rows stay on the solid page background: this is reading text. */}
        <ol className="mt-12 border-t border-line md:mt-16">
          {education.map((entry, index) => (
            <Reveal
              as="li"
              key={entry.year}
              delay={index * 0.06}
              className="grid gap-x-10 gap-y-1 border-b border-line py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline"
            >
              <p className="text-sm text-muted tabular-nums">{entry.year}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
                <p className="mt-0.5 text-[1.0625rem] text-muted">{entry.school}</p>
              </div>
              <p className="text-[1.0625rem] text-fg/85 tabular-nums">{entry.result}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <div className="card-lift card-rim rounded-card border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-heading">Certification</h3>
            <p className="mt-4 text-lg font-semibold tracking-tight">{certification.title}</p>
            <p className="mt-0.5 text-[1.0625rem] text-fg/75">
              {certification.issuer}, {certification.year}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
