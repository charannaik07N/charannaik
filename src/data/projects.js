// Resume is the source of truth: no metric, feature or technology here that is not on it.
// `image` is the card screenshot: a 1600x1000 .webp in /public/projects/.
// With `frame: 'browser'` it can be any width: it is shown whole, in a browser window.
// `screenshots` takes further { src, alt } objects (files in /public); the detail
// page shows a gallery as soon as a project has any.
// `links.live` and `links.source` are each shown only when present.

export const projects = [
  {
    slug: 'pro-talent-connect',
    index: '01',
    name: 'Pro Talent Connect',
    category: 'Football talent platform',
    image: {
      src: '/projects/pro-talent-connect.webp',
      alt: 'Screenshot of Pro Talent Connect',
      frame: 'browser',
    },
    status: 'Live in production',
    summary:
      'A live talent discovery platform connecting players, scouts, and clubs through a role-based backend architecture.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'RBAC'],
    highlights: [
      { value: '4', label: 'user roles' },
      { value: '50+', label: 'API endpoints' },
      { value: '40%', label: 'faster API response times' },
    ],
    problem:
      'Players, scouts and clubs use the same platform for different jobs. Each needs its own level of access to the same data.',
    solution:
      'A Node.js and Express backend that puts every request through JWT authentication and role-based access control. Four user roles are served by more than 50 REST API endpoints, backed by MongoDB.',
    architecture: [
      { title: 'Players, scouts, clubs', note: 'Clients' },
      { title: 'REST API', note: '50+ endpoints, Express.js' },
      { title: 'JWT', note: 'Authentication' },
      { title: 'RBAC', note: '4 user roles' },
      { title: 'MongoDB', note: 'Database' },
    ],
    features: [
      'Talent discovery across players, scouts and clubs',
      'Four user roles with role-based access control',
      '50+ REST API endpoints',
      'JWT authentication',
      'Running in production at protalentconnect.co.in',
    ],
    decisions: [
      {
        title: 'Access decided by role',
        body: 'Permissions are defined per role and enforced with RBAC, so four kinds of user share one API.',
      },
      {
        title: 'Token-based authentication',
        body: 'JWT handles authentication across the REST API.',
      },
      {
        title: 'A document database',
        body: 'MongoDB stores the platform data behind the Express API.',
      },
    ],
    performance: [{ value: '40%', label: 'faster API response times' }],
    links: {
      live: 'https://protalentconnect.co.in',
      source: 'https://github.com/LasyWorks/Pro-Talent-Connect',
    },
    screenshots: [],
  },
  {
    slug: 'mkreddy-general-stores',
    index: '02',
    name: 'MKReddy General Stores',
    category: 'Full-stack grocery platform',
    image: {
      src: '/projects/mkreddy-general-stores.webp',
      alt: 'Fresh vegetables and produce on grocery store shelves',
    },
    summary:
      'A grocery platform with an English and Telugu storefront, sign-in by Google OAuth or email OTP, and an admin console behind it.',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Google OAuth'],
    highlights: [
      { value: '30%', label: 'faster page load' },
      { value: '<1s', label: 'API response' },
    ],
    problem:
      'Selling groceries online takes more than a catalogue. Customers shop in English or Telugu and need a simple way to sign in, and the store needs orders, invoices and promotions handled in one place.',
    solution:
      'A Next.js storefront on an Express API and PostgreSQL. Shoppers browse in English or Telugu, sign in with Google OAuth or an email OTP, and go from cart to checkout to order tracking. The platform also covers an admin console, invoicing and promotions.',
    architecture: [
      { title: 'Next.js storefront', note: 'English + Telugu' },
      { title: 'Express REST API', note: 'Server' },
      { title: 'Google OAuth + email OTP', note: 'Authentication' },
      { title: 'PostgreSQL', note: 'Database' },
    ],
    features: [
      'English + Telugu storefront',
      'Google OAuth sign-in',
      'Email OTP sign-in',
      'Admin console',
      'Cart & checkout',
      'Order tracking',
      'Invoicing',
      'Promotions',
    ],
    decisions: [
      {
        title: 'Two languages in one storefront',
        body: 'The storefront is available in English and Telugu.',
      },
      {
        title: 'Two ways to sign in',
        body: 'Customers can use Google OAuth or a one-time password sent by email.',
      },
      {
        title: 'A relational database',
        body: 'PostgreSQL sits behind the Express API.',
      },
    ],
    performance: [
      { value: '30%', label: 'faster page load' },
      { value: '<1s', label: 'API response' },
    ],
    links: {
      source: 'https://github.com/LasyWorks/MK-REDDY-GENRAL-STORES',
    },
    screenshots: [],
  },
  {
    slug: 'paynest',
    index: '03',
    name: 'PayNest',
    category: 'Payroll management system',
    image: {
      src: '/projects/paynest.webp',
      alt: 'Tax forms, a calculator and a pen laid out on a desk',
    },
    summary:
      'A payroll management system on the MERN stack: automated salary processing, tax calculations and attendance, run from an admin dashboard.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    highlights: [
      { value: '50%', label: 'less manual processing' },
      { value: '30%', label: 'backend performance improvement' },
    ],
    problem:
      'Payroll done by hand is slow and repetitive. Salaries, tax and attendance have to be worked out for every employee, every cycle.',
    solution:
      'PayNest automates salary processing and tax calculations, tracks attendance, and gives administrators a dashboard with data visualization. It manages 100+ employee records.',
    architecture: [
      { title: 'React', note: 'Admin dashboard' },
      { title: 'Express + Node.js', note: 'API' },
      { title: 'MongoDB', note: 'Database' },
    ],
    features: [
      'Automated payroll',
      'Tax calculations',
      'Attendance',
      'Admin dashboard',
      'Data visualization',
      '100+ employee records',
    ],
    decisions: [
      {
        title: 'Automate the repeatable work',
        body: 'Salary processing and tax calculations run automatically, which cut manual processing by 50%.',
      },
      {
        title: 'One dashboard for administrators',
        body: 'Payroll, attendance and data visualization are managed from a single admin dashboard.',
      },
      {
        title: 'MERN end to end',
        body: 'MongoDB, Express, React and Node.js across the whole stack.',
      },
    ],
    performance: [
      { value: '50%', label: 'reduction in manual processing' },
      { value: '30%', label: 'backend performance improvement' },
    ],
    links: {
      source: 'https://github.com/charannaik07N/PayNest',
    },
    screenshots: [],
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
