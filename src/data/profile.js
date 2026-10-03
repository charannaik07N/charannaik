// Everything here comes from the resume. Do not add facts that are not on it.

export const profile = {
  name: 'Kethavath Charan Nayak',
  shortName: 'Charan Nayak',
  role: 'Software Engineer',
  email: 'charannaikcharan734@gmail.com',
  github: 'https://github.com/charannaik07N',
  linkedin: 'https://www.linkedin.com/in/charan-naik-charan',

  // Served from /public. The file has to be added there.
  resume: 'https://drive.google.com/file/d/1nM8C3BIeHQKJbGp5kU0MCn_0llJF6PZn/view?usp=sharing',

  // Shown above the contact buttons. Leave empty to hide the line.
  availability: '',

  // About page. `intro` is two sentences in Charan's own words; empty hides it.
  // The portrait is hidden until /public/portrait.webp exists.
  intro: '',
  portrait: { src: '/portrait.webp', alt: 'Portrait of Charan Nayak', width: 800, height: 1000 },
};

export const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

export const education = [
  {
    year: '2026',
    title: 'B.Tech, Computer Science',
    school: 'SRM University AP',
    result: 'CGPA: 7.78',
  },
  {
    year: '2022',
    title: 'Intermediate',
    school: 'Sri Chaitanya Junior College',
    result: '71%',
  },
  {
    year: '2020',
    title: 'SSC',
    school: 'Nehru Nikethan English Medium High School',
    result: '90%',
  },
];

export const certification = {
  title: 'MongoDB Associate Developer Path',
  issuer: 'MongoDB University',
  year: '2024',
};

// Each metric names the project it was measured on. Pro Talent Connect's
// figures are not repeated here: they live on its work card.
export const proof = [
  { value: '30%', label: 'Page-load improvement', source: 'MKReddy General Stores' },
  { value: '100+', label: 'Employee records', source: 'PayNest' },
  { value: '50%', label: 'Manual payroll processing reduction', source: 'PayNest' },
];
