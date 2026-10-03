// Resume is the source of truth. Newest first.
// `terms` is at most four key terms per role; the full list lives in Skills.

export const experience = [
  {
    company: 'Ethara AI',
    role: 'Software Engineer',
    period: 'May 2026 – Present',
    current: true,
    summary:
      'LLM training and evaluation: curating preference data for RLHF, benchmarking and evaluating model responses, and analysing where they fail.',
    terms: ['LLM training and evaluation', 'RLHF', 'Benchmarking', 'Prompt engineering'],
  },
  {
    company: 'Prodesk IT',
    role: 'Frontend Developer Intern',
    period: 'Jan 2026 – May 2026',
    summary:
      'Took Figma designs to production with React and Next.js, integrated REST APIs, and worked on accessibility and performance.',
    terms: ['React', 'Next.js', 'Tailwind CSS', 'REST APIs'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer & UI/UX Designer',
    period: 'Jan 2025 – Jan 2026',
    summary:
      'Carried client projects from requirement gathering and UI/UX design through frontend, backend and API development to deployment.',
    terms: ['UI/UX design', 'Frontend', 'Backend', 'Deployment'],
  },
  {
    company: 'Edunet Foundation',
    role: 'Frontend Developer Intern',
    period: 'Jun 2024 – Aug 2024',
    summary:
      'Built responsive web applications with HTML, CSS, JavaScript, PHP and MySQL, tested for cross-browser compatibility.',
    terms: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];
