import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Chevron from '../components/Chevron';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import ProjectImage from '../components/ProjectImage';
import Reveal from '../components/Reveal';
import StackDiagram from '../components/StackDiagram';
import { getProject, projects } from '../data/projects';
import NotFound from './NotFound';

function DetailSection({ title, children }) {
  return (
    <Reveal
      as="section"
      className="grid gap-5 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10 md:py-14"
    >
      <h2 className="text-heading">{title}</h2>
      <div className="max-w-2xl">{children}</div>
    </Reveal>
  );
}

const prose = 'text-lede text-fg/85';
const linkRow =
  'flex min-h-11 items-center justify-between gap-4 py-4 text-[1.0625rem] text-accent hover:underline';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const { links } = project;

  return (
    <PageTransition title={project.name}>
      <article>
        <header className="container-x pt-24 md:pt-32">
          <Link to="/work" className="group link-hit gap-1.5 text-sm text-accent hover:underline">
            <Chevron back />
            All work
          </Link>

          <FadeIn y={24} delay={0.1} className="mt-8">
            <p className="text-sm text-muted tabular-nums">{project.index}</p>
            <h1 className="text-page mt-4 text-balance">{project.name}</h1>
            <p className="mt-4 text-[clamp(1.25rem,2.2vw,1.75rem)] tracking-tight text-muted">
              {project.category}
            </p>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2">
            {links.live && (
              <Button href={links.live}>
                View live project
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            )}
            {links.source && (
              <Button href={links.source} variant={links.live ? 'secondary' : 'primary'}>
                View source
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            )}
          </FadeIn>
        </header>

        <div className="container-x mt-14 md:mt-20">
          <Reveal className="rounded-card bg-surface p-4 sm:p-10 lg:p-16">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-small">
              <ProjectImage project={project} />
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-16 md:mt-24">
          <DetailSection title="Overview">
            <p className={prose}>{project.summary}</p>
            {project.status && (
              <p className="mt-5 flex items-center gap-2.5 text-sm text-muted">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {project.status}
              </p>
            )}
          </DetailSection>

          <DetailSection title="Problem">
            <p className={prose}>{project.problem}</p>
          </DetailSection>

          <DetailSection title="Solution">
            <p className={prose}>{project.solution}</p>
          </DetailSection>

          <DetailSection title="Architecture">
            <div className="max-w-md">
              <StackDiagram
                layers={project.architecture}
                label={`${project.name} architecture, top to bottom: ${project.architecture
                  .map((layer) => layer.title)
                  .join(', ')}.`}
              />
            </div>
          </DetailSection>

          <DetailSection title="Technology">
            <p className={prose}>{project.stack.join(', ')}</p>
          </DetailSection>

          <DetailSection title="Key features">
            <ul className="border-t border-line">
              {project.features.map((feature) => (
                <li key={feature} className="border-b border-line py-3.5 text-[1.0625rem] text-fg/85">
                  {feature}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Engineering decisions">
            <dl className="space-y-7">
              {project.decisions.map((decision) => (
                <div key={decision.title}>
                  <dt className="text-lg font-medium tracking-tight">{decision.title}</dt>
                  <dd className="mt-1.5 text-[1.0625rem] leading-relaxed text-muted">{decision.body}</dd>
                </div>
              ))}
            </dl>
          </DetailSection>

          <DetailSection title="Performance">
            <dl className="flex flex-wrap items-start gap-x-14 gap-y-8">
              {project.performance.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse">
                  <dt className="mt-2 max-w-[12rem] text-[1.0625rem] text-muted">{metric.label}</dt>
                  <dd className="text-figure">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </DetailSection>

          {project.screenshots.length > 0 && (
            <DetailSection title="Screenshots">
              <div className="space-y-4">
                {project.screenshots.map((shot) => (
                  <img
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-small border border-line"
                  />
                ))}
              </div>
            </DetailSection>
          )}

          <DetailSection title="Links">
            <ul className="border-t border-line">
              {links.live && (
                <li className="border-b border-line">
                  <a href={links.live} target="_blank" rel="noreferrer" className={linkRow}>
                    <span className="break-all">{links.live.replace('https://', '')}</span>
                    <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted">
                      Live project
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              )}
              {links.source && (
                <li className="border-b border-line">
                  <a href={links.source} target="_blank" rel="noreferrer" className={linkRow}>
                    <span className="break-all">{links.source.replace('https://', '')}</span>
                    <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted">
                      Source
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </DetailSection>
        </div>
      </article>

      <nav aria-label="Next project" className="mt-10 border-t border-line">
        <Link
          to={`/work/${next.slug}`}
          className="group container-x flex items-end justify-between gap-6 py-16 md:py-24"
        >
          <span>
            <span className="block text-sm text-muted">Next project</span>
            <span className="text-title mt-3 block">{next.name}</span>
          </span>
          <span className="text-title text-muted transition-colors duration-200 group-hover:text-fg">
            <Chevron />
          </span>
        </Link>
      </nav>
    </PageTransition>
  );
}
