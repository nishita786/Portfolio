export const profile = {
  name: 'Nishita Kumari',
  firstName: 'Nishita',
  brand: 'nishita',
  brandAccent: 'ta',
  title: 'CSE · Data Science',
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
    twitter: 'https://x.com/nishitakm786',
    leetcode: 'https://leetcode.com/u/nishita786/',
    hackerrank: 'https://www.hackerrank.com/nishita786',
    codechef: 'https://www.codechef.com/users/nishita786',
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
      name: 'MedPal',
      blurb:
        'AI medical assistant using NLP and retrieval to interpret symptoms and surface health insights.',
      stack: ['TypeScript', 'NLP', 'AI'],
      href: 'https://github.com/nishita786/medpal',
    },
    {
      name: 'ZestRoute',
      blurb:
        'Delivery analytics platform on AWS S3, Snowflake, SQL, and Power BI for operational visibility.',
      stack: ['Python', 'Snowflake', 'Power BI'],
      href: 'https://github.com/nishita786/ZestRoute',
    },
    {
      name: 'Collaborative Whiteboard',
      blurb:
        'Multi-user real-time drawing app with React, Node, Express, and WebSockets.',
      stack: ['React', 'WebSockets', 'MongoDB'],
      href: 'https://github.com/nishita786',
    },
    {
      name: 'AI Document Summarizer',
      blurb:
        'LangChain + Python + Streamlit pipeline that summarizes large PDFs with LLMs.',
      stack: ['LangChain', 'Python', 'Streamlit'],
      href: 'https://github.com/nishita786',
    },
    {
      name: 'Credit Risk Model',
      blurb:
        'Machine learning pipeline with PyTorch and XGBoost to classify credit risk from financial data.',
      stack: ['PyTorch', 'XGBoost', 'ML'],
      href: 'https://github.com/nishita786',
    },
  ],
  skills: {
    languages: ['C++', 'Python', 'JavaScript', 'SQL'],
    frontend: ['React.js', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io'],
    data: ['MongoDB', 'MySQL', 'PyTorch', 'XGBoost', 'LangChain', 'Power BI'],
    tools: ['Docker', 'Git', 'Linux', 'AWS'],
    core: ['DSA', 'OOP', 'DBMS', 'OS', 'Networks', 'System Design'],
  },
  achievements: [
    { label: 'LeetCode', value: 'Active', detail: 'Problem solving', href: 'https://leetcode.com/u/nishita786/' },
    { label: 'HackerRank', value: 'Certified', detail: 'Software Engineer', href: 'https://www.hackerrank.com/nishita786' },
    { label: 'CodeChef', value: '★', detail: 'Competitive coding', href: 'https://www.codechef.com/users/nishita786' },
    { label: 'DSA', value: 'Daily', detail: 'Practice habit', href: 'https://github.com/nishita786/leetcode-solutions' },
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
    label: 'Data Science',
    title: 'Nishita',
    description:
      'CSE student specializing in Data Science — crafting backends, intelligent systems, and clean problem-solving.',
    cta: 'Get Started',
    target: '#about',
    orbHue: 160,
  },
  {
    id: 'work',
    label: 'Selected',
    title: 'Work',
    description:
      'From KYC orchestration and AI assistants to analytics platforms — projects that turn ideas into systems.',
    cta: 'View Projects',
    target: '#projects',
    orbHue: 155,
  },
  {
    id: 'path',
    label: 'Career',
    title: 'Path',
    description:
      'Backend intern building REST APIs, auth, and reliable services — open to SDE and data roles.',
    cta: 'See Experience',
    target: '#experience',
    orbHue: 168,
  },
  {
    id: 'reach',
    label: 'Connect',
    title: 'Reach',
    description:
      'Let’s talk systems, data, or your next product. Always happy to connect with builders and recruiters.',
    cta: 'Say Hello',
    target: '#contact',
    orbHue: 150,
  },
]
