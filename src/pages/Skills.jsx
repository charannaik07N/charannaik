import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ContactCTA from '../sections/ContactCTA';
import Engineering from '../sections/Engineering';
import SkillGroups from '../sections/SkillGroups';

export default function Skills() {
  return (
    <PageTransition title="Skills">
      <PageHeader title="Skills" subtitle="What I work with, grouped by where it sits." />

      <section className="container-x pt-12 pb-24 md:pt-16 md:pb-36">
        <SkillGroups headingLevel="h2" />
      </section>

      <Engineering />
      <ContactCTA />
    </PageTransition>
  );
}
