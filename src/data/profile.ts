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
  overview: [
    'Hi, I’m Nishita — a Computer Science specialization in Data Science student who enjoys turning data, ideas, and complex problems into practical solutions.',
    'I’m particularly interested in Data Analyst, Artificial Intelligence, Machine Learning, and backend development. I enjoy understanding how things work behind the scenes — from collecting and transforming data to building intelligent systems that can actually use it.',
    'Throughout my academic journey, I’ve worked on projects involving data pipelines, analytics platforms, AI-powered applications, backend systems, and machine learning models. I like taking an idea from a rough concept and turning it into something functional, whether that means designing an API, building a data pipeline, training a model, or creating an interface that people can actually use.',
    'What interests me most is the intersection of data and intelligent systems. I enjoy working with technologies such as Python, SQL, Java, MongoDB, Snowflake, AWS, Docker, Power BI, TensorFlow, LangChain, and modern backend frameworks, while continuously exploring new tools and approaches.',
    'I’m someone who believes that building good technology starts with asking the right questions. Before thinking about how to build something, I like understanding why it needs to be built, what problem it solves, and how it can be made better.',
    'I also enjoy participating in hackathons, technical projects, and collaborative development, because they push me to work beyond textbook concepts and solve problems under real constraints. Some of my work has explored areas such as Self-RAG and document intelligence, fintech systems, delivery analytics, AI applications, and data-driven decision making.',
    'Outside academics, you’ll usually find me experimenting with a new project, learning a technology I haven’t worked with before, practicing problem-solving, or trying to turn a random idea into something that actually works. Sometimes the idea works perfectly. Sometimes the code decides otherwise.',
    'I’m continuously learning and building toward a career where I can work on data-intensive and intelligent systems that solve meaningful real-world problems.',
    'This portfolio is a collection of the projects, experiments, challenges, and lessons that have shaped that journey.',
    'Thanks for stopping by — feel free to explore my work!',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/nishita-kumari-profile',
    github: 'https://github.com/nishita786',
    email: 'mailto:nishitakm786@gmail.com',
    resume: '/Nishita_Kumari_Resume.pdf',
    leetcode: 'https://leetcode.com/u/QgyWXdSCx8/',
    hackerrank: 'https://www.hackerrank.com/profile/nishitakm786',
    codechef: 'https://www.codechef.com/users/nishita786',
    solutions: 'https://github.com/nishita786/leetcode-solutions',
  },
  path: [
    {
      stage: '01',
      period: 'Hackathon',
      title: 'ClearCare AI',
      place: 'Cognizant TechnoVision Hackathon',
      detail: [
        'Designed and developed ClearCare AI, an AI-powered healthcare platform focused on simplifying insurance and clinical workflows. The solution combines AI-driven insurance advisory, automated clinical pre-authorization, and multilingual patient education into a unified platform.',
        'The system is designed to help patients better understand insurance-related decisions while reducing manual effort in pre-authorization workflows. It also uses multilingual AI interactions to make healthcare information more accessible to users from different linguistic backgrounds.',
      ],
      focus: ['AI/ML', 'Healthcare Technology', 'Automation', 'NLP', 'Multilingual AI'],
    },
    {
      stage: '02',
      period: 'Hackathon',
      title: 'Notion × OpenMetadata Connector',
      place: 'WeMakeDevs × OpenMetadata Hackathon',
      detail: [
        'Built and prototyped a Notion connector for OpenMetadata to bridge the gap between workspace documentation and enterprise data discovery. The project enables information from Notion to be integrated into OpenMetadata, making documentation and metadata easier to discover and manage from a centralized platform.',
        'The connector was designed around a Notion → Connector → OpenMetadata workflow, using the Notion API and OpenMetadata ingestion framework to retrieve content, process metadata, and integrate it into the OpenMetadata ecosystem.',
        'The project focused on creating a modular and extensible integration that could handle external-service communication, metadata mapping, API orchestration, validation, and ingestion while fitting into OpenMetadata’s existing architecture.',
      ],
      focus: [
        'OpenMetadata',
        'Notion API',
        'Data Engineering',
        'Metadata Management',
        'API Integration',
        'Data Discovery',
      ],
    },
    {
      stage: '03',
      period: 'Hackathon',
      title: 'Tata Elxsi Teleport · Season 4',
      place: 'Grad Partners · Team Quantum — Lead',
      detail: [
        'Led Team Quantum during the Tata Elxsi Teleport Season 4 hackathon, taking the project from problem understanding and ideation through solution development and presentation.',
        'As the team lead, I was involved in problem framing, solution strategy, task coordination, technical discussions, and final delivery. The experience involved working under a fixed deadline and translating an open-ended problem statement into a structured, practical solution.',
        'Beyond the technical aspects, the project strengthened my experience in team leadership, collaborative problem-solving, rapid prototyping, and decision-making under real-world constraints.',
      ],
      focus: [
        'Team Leadership',
        'Problem Solving',
        'Rapid Prototyping',
        'Collaboration',
        'Product Thinking',
      ],
    },
  ],
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
      name: 'Lexicon Gate',
      blurb:
        'Evidence-grounded Self-RAG research workspace — hybrid retrieval, claim verification, adaptive retrieval, and cited answers over a user’s paper library.',
      stack: ['React', 'FastAPI', 'LangChain', 'Self-RAG', 'Python'],
      href: 'https://github.com/nishita786/Lexicon-gate',
    },
    {
      name: 'Sign Language Recognition',
      blurb:
        'Real-time sign language recognition with MediaPipe hand landmarks, CNN-LSTM and MobileNet-LSTM models, motion features, and live webcam inference.',
      stack: ['Python', 'MediaPipe', 'TensorFlow', 'CNN-LSTM', 'OpenCV'],
      href: 'https://github.com/nishita786/sign-language-recognition',
    },
    {
      name: 'KYC / AML Orchestration',
      blurb:
        'Enterprise-style fintech orchestration for KYC and AML — JWT auth, vendor adapters, state-machine workflows, audit logs, and Dockerized REST APIs.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT'],
      href: 'https://github.com/nishita786/kyc-aml-orchestration',
    },
    {
      name: 'ZestRoute',
      blurb:
        'Delivery analytics platform on AWS S3, Snowflake, SQL, and Power BI for operational visibility and data-driven routing insights.',
      stack: ['Python', 'AWS S3', 'Snowflake', 'SQL', 'Power BI'],
      href: 'https://github.com/nishita786/ZestRoute',
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
  'Full Stack Developer',
  'Software Engineer',
  'Data Engineer',
  'Data Scientist',
  'Artificial Intelligence',
  'RAG Pipeline Builder',
  'Cybersecurity Enthusiast',
  'System Thinker',
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
    target: '#overview',
    hue: 190,
    intro: true,
  },
  {
    id: 'work',
    label: 'Selected',
    title: 'Work',
    peek: 'Work',
    description:
      'Top builds — Lexicon Gate, Sign Language Recognition, KYC/AML orchestration, and ZestRoute analytics.',
    cta: 'View Projects',
    target: '#projects',
    hue: 205,
  },
  {
    id: 'path',
    label: 'Selected',
    title: 'Builds',
    peek: 'Builds',
    description:
      'Hackathons where I shipped under pressure — ClearCare AI, OpenMetadata connectors, and leading Team Quantum.',
    cta: 'See Arena',
    target: '#path',
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
