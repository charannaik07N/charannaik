export const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Google OAuth'],
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'AI / ML',
    skills: [
      'LLMs',
      'RLHF',
      'LLM training',
      'Fine-tuning',
      'Model evaluation',
      'Benchmarking',
      'Prompt engineering',
      'RAG',
      'PyTorch',
    ],
  },
  {
    name: 'UI/UX',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Interaction design', 'Design systems'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Framer', 'Wix Studio'],
  },
];

// The path a request takes through the web stack, top to bottom.
export const webStack = [
  { title: 'Frontend', note: 'Interface' },
  { title: 'React / Next.js', note: 'Rendering' },
  { title: 'REST APIs', note: 'Contract' },
  { title: 'Node / Express', note: 'Server' },
  { title: 'Authentication', note: 'JWT, Google OAuth' },
  { title: 'MongoDB / PostgreSQL', note: 'Data' },
];
