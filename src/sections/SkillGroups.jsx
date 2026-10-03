import Reveal from '../components/Reveal';
import { skillGroups } from '../data/skills';

export default function SkillGroups({ headingLevel: Heading = 'h3' }) {
  return (
    <div className="border-t border-line">
      {skillGroups.map((group, index) => (
        <Reveal
          key={group.name}
          delay={index * 0.05}
          className="grid gap-4 border-b border-line py-8 md:grid-cols-[14rem_1fr] md:gap-10 md:py-10"
        >
          <Heading className="text-heading">{group.name}</Heading>
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-lg text-fg/85 md:pt-1">
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
