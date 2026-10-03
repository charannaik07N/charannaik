import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ContactCTA from '../sections/ContactCTA';
import ProjectList from '../sections/ProjectList';
import Proof from '../sections/Proof';

export default function Work() {
  return (
    <PageTransition title="Work">
      <PageHeader title="Selected work" subtitle="A few systems I&rsquo;ve designed and built." />

      <section className="container-x pt-12 md:pt-16">
        <ProjectList headingLevel="h2" />
      </section>

      <Proof />

      <div className="border-t border-line">
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
