import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ContactCTA from '../sections/ContactCTA';
import Education from '../sections/Education';
import ExperienceTimeline from '../sections/ExperienceTimeline';

export default function Experience() {
  return (
    <PageTransition title="Experience">
      <PageHeader title="Experience" subtitle="Building, evaluating, and shipping real systems." />

      <section className="container-x pt-14 pb-24 md:pt-20 md:pb-36">
        <ExperienceTimeline headingLevel="h2" />
      </section>

      <div className="border-t border-line">
        <Education />
      </div>

      <div className="border-t border-line">
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
