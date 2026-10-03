import Button from '../components/Button';
import Chevron from '../components/Chevron';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ContactCTA from '../sections/ContactCTA';
import Engineering from '../sections/Engineering';
import ExperienceTimeline from '../sections/ExperienceTimeline';
import Hero from '../sections/Hero';
import ProjectList from '../sections/ProjectList';
import Proof from '../sections/Proof';
import Statement from '../sections/Statement';

// Most important first: the work, then the proof behind it. Experience is a
// preview; the full timeline, education and skills live on their own pages.
export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Statement />

      <section id="work" className="section-y scroll-mt-12 border-t border-line">
        <div className="container-x">
          <SectionHeading
            title="Selected work"
            subtitle="A few systems I&rsquo;ve designed and built."
          />
          <div className="mt-12 md:mt-16">
            <ProjectList />
          </div>
        </div>
      </section>

      <Proof />

      <section className="section-y border-t border-line">
        <div className="container-x">
          <SectionHeading
            title="Experience"
            subtitle="Building, evaluating, and shipping real systems."
          />
          <div className="mt-14 md:mt-20">
            <ExperienceTimeline limit={2} />
          </div>
          <div className="mt-12 -ml-2 md:mt-16">
            <Button to="/experience" variant="secondary">
              See all experience and education
              <Chevron />
            </Button>
          </div>
        </div>
      </section>

      <Engineering showSkillsLink />

      <div className="border-t border-line">
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
