import DepthIn from '../components/DepthIn';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

// One lead panel, then the rest of the lineup side by side.
// Each panel rises into place with depth as it scrolls in (see DepthIn).
export default function ProjectList({ headingLevel = 'h3' }) {
  const [lead, ...rest] = projects;

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-2">
      <DepthIn className="lg:col-span-2">
        <ProjectCard project={lead} featured headingLevel={headingLevel} />
      </DepthIn>
      {rest.map((project) => (
        <DepthIn key={project.slug}>
          <ProjectCard project={project} headingLevel={headingLevel} />
        </DepthIn>
      ))}
    </div>
  );
}
