export const profile = {
  name: 'Nishita Kumari',
  firstName: 'Nishita',
  brand: 'nishita',
  brandAccent: '.dev',
  title: 'Software Engineer · Data Science',
  location: 'Bengaluru, India',
  email: 'nishitakm786@gmail.com',
  tagline:
    'Building with data, backends, and sharp problem-solving — from ML pipelines to clean APIs.',
  summary:
    'B.E. Computer Science and Engineering student specializing in Data Science at MVJ College of Engineering. Passionate about software engineering, data systems, and machine learning. Open to SDE / Data / Backend roles.',
  links: {
    linkedin: 'https://www.linkedin.com/in/nishita-kumari-profile',
    github: 'https://github.com/nishita786',
    email: 'mailto:nishitakm786@gmail.com',
    leetcode: 'https://leetcode.com/u/QgyWXdSCx8/',
    hackerrank: 'https://www.hackerrank.com/profile/nishitakm786',
    codechef: 'https://www.codechef.com/users/nishita786',
    solutions: 'https://github.com/nishita786/leetcode-solutions',
  },
  education: {
    degree: 'B.E. Computer Science & Engineering',
    specialization: 'Data Science',
    school: 'MVJ College of Engineering',
    year: '2026',
  },
  tools: ['Python', 'C++', 'SQL', 'JavaScript', 'React', 'Node.js', 'PyTorch', 'MongoDB'],
  experience: [
    {
      role: 'Backend Developer Intern',
      company: 'Nija Venture Impacts Pvt. Ltd.',
      period: '2025 — Present',
      highlights: [
        'Developed 10+ RESTful API endpoints with Node.js and Express.js for authentication, user flows, and core product features.',
        'Structured MongoDB collections with full CRUD, JWT authentication, and role-based access control.',
        'Improved API reliability through middleware architecture and structured error handling.',
        'Collaborated with frontend engineers to integrate and debug scalable backend services.',
      ],
    },
  ],
  projects: [
    {
      name: 'KYC / AML Orchestration',
      blurb:
        'Distributed fintech compliance platform with microservices, async messaging, and secure authentication.',
      stack: ['Node.js', 'Microservices', 'Auth'],
      href: 'https://github.com/nishita786/kyc-aml-orchestration',
    },
    {
      name: 'ZestRoute',
      blurb:
        'Delivery analytics platform on AWS S3, Snowflake, SQL, and Power BI for operational visibility.',
      stack: ['Python', 'Snowflake', 'Power BI'],
      href: 'https://github.com/nishita786/ZestRoute',
    },
    {
      name: 'AegisQA',
      blurb:
        'Autonomous QA agent that explores flows, flags regressions, and reports issues without hand-written scripts.',
      stack: ['JavaScript', 'Automation', 'AI'],
      href: 'https://github.com/nishita786/AegisQA-Autonomous-QA-Agent',
    },
    {
      name: 'Bus Reservation',
      blurb:
        'Database-driven booking system with Streamlit, Python, and MySQL — auth, seats, and trip management.',
      stack: ['Python', 'Streamlit', 'MySQL'],
      href: 'https://github.com/nishita786/Bus-Reservation',
    },
    {
      name: 'NLP Chatbot',
      blurb:
        'Conversational AI chatbot that understands queries and generates meaningful responses with NLP.',
      stack: ['Python', 'NLP', 'AI'],
      href: 'https://github.com/nishita786/chatbot_project',
    },
    {
      name: 'RideIQ',
      blurb:
        'Ride analytics experiments exploring demand patterns, routing signals, and operational metrics.',
      stack: ['Python', 'Analytics'],
      href: 'https://github.com/nishita786/RideIQ',
    },
  ],
  skills: {
    languages: ['C++', 'Python', 'JavaScript', 'SQL', 'Java', 'R'],
    frontend: ['React.js', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io'],
    data: ['MongoDB', 'MySQL', 'PyTorch', 'XGBoost', 'LangChain', 'Power BI', 'Snowflake'],
    tools: ['Docker', 'Git', 'Linux', 'AWS'],
    core: ['DSA', 'OOP', 'DBMS', 'OS', 'Networks', 'System Design'],
  },
  achievements: [
    {
      label: 'LeetCode',
      value: '74',
      detail: '42E · 26M · 6H',
      href: 'https://leetcode.com/u/QgyWXdSCx8/',
    },
    {
      label: 'HackerRank',
      value: '★★★',
      detail: 'Python · PS · R Basic',
      href: 'https://www.hackerrank.com/profile/nishitakm786',
    },
    {
      label: 'CodeChef',
      value: '★',
      detail: 'Competitive coding',
      href: 'https://www.codechef.com/users/nishita786',
    },
    {
      label: 'GitHub',
      value: '13+',
      detail: 'Public projects',
      href: 'https://github.com/nishita786',
    },
  ],
} as const

export const heroRoles = [
  'Front-end Developer',
  'Back-end Developer',
  'Artificial Intelligence',
  'Problem Solver',
] as const

export type HeroSlide = {
  id: string
  label: string
  title: string
  description: string
  cta: string
  target: string
  /** CSS hue for the abstract orb (0–360) */
  hue: number
  /** Short side-peek label */
  peek: string
  /** Minimal intro slide: greeting + typewriter only */
  intro?: boolean
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'about',
    label: '',
    title: "Hi, I'm Nishita",
    peek: 'About',
    description: '',
    cta: '',
    target: '#about',
    hue: 190,
    intro: true,
  },
  {
    id: 'work',
    label: 'Selected',
    title: 'Work',
    peek: 'Work',
    description:
      'From KYC orchestration and autonomous QA to analytics platforms — projects that turn ideas into reliable systems.',
    cta: 'View Projects',
    target: '#projects',
    hue: 205,
  },
  {
    id: 'path',
    label: 'Career',
    title: 'Path',
    peek: 'Path',
    description:
      'Backend intern shipping REST APIs, auth, and durable services — with DSA practice across LeetCode and HackerRank.',
    cta: 'See Experience',
    target: '#experience',
    hue: 175,
  },
  {
    id: 'reach',
    label: 'Connect',
    title: 'Reach',
    peek: 'Reach',
    description:
      'Let’s talk systems, data, or your next product. Always happy to connect with builders and recruiters.',
    cta: 'Say Hello',
    target: '#contact',
    hue: 220,
  },
]
