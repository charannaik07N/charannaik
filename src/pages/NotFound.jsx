import Chevron from '../components/Chevron';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition title="Page not found">
      <PageHeader
        title="This page doesn&rsquo;t exist."
        subtitle="The address may be mistyped, or the page may have moved."
      >
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 pb-40">
          <Button to="/">Go to the homepage</Button>
          <Button to="/work" variant="secondary">
            See my work
            <Chevron />
          </Button>
        </div>
      </PageHeader>
    </PageTransition>
  );
}
