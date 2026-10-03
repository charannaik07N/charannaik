import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectImage, { MetricChips } from './ProjectImage';
import { EASE, SPRING } from '../lib/motion';

const card = { rest: { scale: 1 }, hover: { scale: 1.02 } };
const copy = { rest: { x: 0 }, hover: { x: 4 } };
const chevron = { rest: { x: 0 }, hover: { x: 6 } };
const visual = { rest: { scale: 1 }, hover: { scale: 1.05 } };

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-hit gap-1.5 text-[1.0625rem] text-accent hover:underline"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

// A project presented as a product panel. The whole panel opens the case
// study; the external links sit above that click target.
export default function ProjectCard({ project, featured = false, headingLevel: Heading = 'h3' }) {
  const { slug, index, name, category, summary, stack, highlights, links } = project;

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={card}
      transition={SPRING}
      className={`relative flex h-full flex-col overflow-hidden rounded-card bg-surface ${
        featured ? 'lg:grid lg:grid-cols-[5fr_6fr] lg:items-center' : ''
      }`}
    >
      <motion.div
        variants={copy}
        transition={SPRING}
        className={`p-7 sm:p-10 ${featured ? 'lg:py-20 lg:pr-6 lg:pl-14' : 'lg:p-12'}`}
      >
        <p className="text-sm text-muted tabular-nums">{index}</p>

        <Heading className={`mt-5 ${featured ? 'text-title' : 'text-subtitle'}`}>
          <Link
            to={`/work/${slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {name}
          </Link>
        </Heading>
        <p className="text-lede mt-2 text-muted">{category}</p>

        <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-fg/85">{summary}</p>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">{stack.join(', ')}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-7">
          <span aria-hidden="true" className="link-hit gap-1.5 text-[1.0625rem] text-accent">
            Read the case study
            <motion.span variants={chevron} transition={SPRING} className="inline-block">
              ›
            </motion.span>
          </span>
          <div className="relative z-10 flex flex-wrap gap-x-7">
            {links.live && <ExternalLink href={links.live}>View live project</ExternalLink>}
            {links.source && <ExternalLink href={links.source}>View source</ExternalLink>}
          </div>
        </div>
      </motion.div>

      <div
        className={`mt-auto px-7 pb-7 sm:px-10 sm:pb-10 ${
          featured ? 'lg:mt-0 lg:py-14 lg:pr-14 lg:pl-6' : 'lg:px-12 lg:pb-12'
        }`}
      >
        {/* The image scales on hover; the chips over it stay put. */}
        <div className="relative overflow-hidden rounded-small">
          <motion.div variants={visual} transition={{ duration: 0.9, ease: EASE }}>
            <ProjectImage project={project} />
          </motion.div>
          <MetricChips highlights={highlights} />
        </div>
      </div>
    </motion.article>
  );
}
