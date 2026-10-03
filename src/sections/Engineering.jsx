import Button from '../components/Button';
import Chevron from '../components/Chevron';
import GlassBackdrop from '../components/GlassBackdrop';
import SectionHeading from '../components/SectionHeading';
import StackDiagram from '../components/StackDiagram';
import { webStack } from '../data/skills';

// One diagram of how the layers connect. The full list of what I work with
// lives on the Skills page, so it is not repeated here; `showSkillsLink`
// points there from pages that do not already show it.
export default function Engineering({ showSkillsLink = false }) {
  return (
    <section className="section-y relative bg-ink-2">
      <GlassBackdrop className="-scale-x-100" />
      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <SectionHeading
            overColour
            title="Under the surface."
            subtitle="The path a request takes through what I build."
          />
          {showSkillsLink && (
            <div className="mt-8 -ml-2">
              <Button to="/skills" variant="secondary">
                See all skills
                <Chevron />
              </Button>
            </div>
          )}
        </div>
        <StackDiagram
          stepped
          layers={webStack}
          label="Web stack, top to bottom: frontend, React and Next.js, REST APIs, Node and Express, authentication, MongoDB and PostgreSQL."
        />
      </div>
    </section>
  );
}
