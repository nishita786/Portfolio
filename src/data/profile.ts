export const profile = {
  name: 'Nishita Kumari',
  firstName: 'Nishita',
  brand: 'nishita',
  brandAccent: 'ta',
  title: 'Software Engineer',
  location: 'Bengaluru, India',
  email: 'nishitakm786@gmail.com',
  tagline:
    'Building scalable backends, intelligent systems, and sharp problem-solving instincts — from REST APIs to competitive programming.',
  summary:
    'Information Science & Engineering graduate (2026) at Bangalore Institute of Technology. Passionate about software engineering, backend development, and machine learning. Open to SDE / Backend / AI-ML roles.',
  links: {
    linkedin: 'https://www.linkedin.com/in/nishita-kumari-profile',
    github: 'https://github.com/nishita786',
    email: 'mailto:nishitakm786@gmail.com',
  },
  education: {
    degree: 'B.E. Information Science & Engineering',
    school: 'Bangalore Institute of Technology',
    year: '2026',
  },
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
      accent: '#38bdf8',
    },
    {
      name: 'MedPal',
      blurb:
        'AI medical assistant using NLP and retrieval to interpret symptoms and surface informative health insights.',
      stack: ['TypeScript', 'NLP', 'AI'],
      href: 'https://github.com/nishita786/medpal',
      accent: '#67e8f9',
    },
    {
      name: 'ZestRoute',
      blurb:
        'Delivery analytics platform on AWS S3, Snowflake, SQL, and Power BI for operational visibility.',
      stack: ['Python', 'Snowflake', 'Power BI'],
      href: 'https://github.com/nishita786/ZestRoute',
      accent: '#7dd3fc',
    },
    {
      name: 'Collaborative Whiteboard',
      blurb:
        'Multi-user real-time drawing app with React, Node, Express, and WebSockets.',
      stack: ['React', 'WebSockets', 'MongoDB'],
      href: 'https://github.com/nishita786',
      accent: '#a5f3fc',
    },
    {
      name: 'AI Document Summarizer',
      blurb:
        'LangChain + Python + Streamlit pipeline that summarizes large PDFs with LLMs.',
      stack: ['LangChain', 'Python', 'Streamlit'],
      href: 'https://github.com/nishita786',
      accent: '#22d3ee',
    },
    {
      name: 'Credit Risk Model',
      blurb:
        'Machine learning pipeline with PyTorch and XGBoost to classify credit risk from financial data.',
      stack: ['PyTorch', 'XGBoost', 'ML'],
      href: 'https://github.com/nishita786',
      accent: '#06b6d4',
    },
  ],
  skills: {
    languages: ['C++', 'Python', 'JavaScript', 'SQL'],
    frontend: ['React.js', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io'],
    data: ['MongoDB', 'MySQL', 'PyTorch', 'XGBoost', 'LangChain'],
    tools: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Git', 'Linux'],
    core: ['DSA', 'OOP', 'DBMS', 'OS', 'Networks', 'System Design'],
  },
  achievements: [
    { label: 'CodeChef', value: '5★', detail: 'Peak 2001' },
    { label: 'Codeforces', value: 'CM', detail: 'Peak 1909' },
    { label: 'Problems', value: '1000+', detail: 'Solved' },
    { label: 'CF Round', value: '65th', detail: 'of 25k+' },
  ],
} as const

export type HeroSlide = {
  id: string
  label: string
  title: string
  description: string
  cta: string
  target: string
  orbHue: number
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'about',
    label: 'Engineer',
    title: 'Nishita',
    description:
      'Software engineer crafting backends, intelligent systems, and clean architecture — with a competitive programming edge.',
    cta: 'Get Started',
    target: '#about',
    orbHue: 195,
  },
  {
    id: 'work',
    label: 'Selected',
    title: 'Work',
    description:
      'From KYC orchestration and AI assistants to real-time collaboration — projects that ship ideas into systems.',
    cta: 'View Projects',
    target: '#projects',
    orbHue: 185,
  },
  {
    id: 'path',
    label: 'Career',
    title: 'Path',
    description:
      'Backend intern building REST APIs, auth, and reliable services — open to SDE roles that move the needle.',
    cta: 'See Experience',
    target: '#experience',
    orbHue: 205,
  },
  {
    id: 'reach',
    label: 'Connect',
    title: 'Reach',
    description:
      'Let’s talk systems, algorithms, or your next product. Always happy to connect with builders and recruiters.',
    cta: 'Say Hello',
    target: '#contact',
    orbHue: 175,
  },
]
