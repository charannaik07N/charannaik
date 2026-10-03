import { useEffect } from 'react';

const SITE_TITLE = 'Charan Nayak — Software Engineer | AI/ML | Full-Stack';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Charan Nayak` : SITE_TITLE;
  }, [title]);
}
