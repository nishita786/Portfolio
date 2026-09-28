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
      subtitle: 'Evidence-Grounded Self-RAG Research Workspace',

      points: [
        'Built an AI-powered research workspace for asking questions over a personal library of academic papers and documents.',
        'Implemented a Self-RAG pipeline that retrieves relevant evidence before generating an answer.',
        'Added claim-level verification to check whether generated statements are supported by retrieved evidence.',
        'Implemented adaptive retrieval, allowing the system to retrieve additional evidence when the initial context is insufficient.',
        'Added citation-backed responses so users can trace answers back to relevant document sources.',
        'Designed the system to reduce hallucinations and unsupported claims by filtering claims that cannot be sufficiently supported.',
        'Developed the application with a React frontend and FastAPI backend, integrating retrieval, verification, and generation into a single workflow.',
        'Worked with vector search and semantic embeddings to improve document retrieval and relevance.',
      ],
      stack: [
        'React',
        'FastAPI',
        'Python',
        'LangChain',
        'Self-RAG',
        'Pinecone',
        'Gemini',
        'Sentence Transformers',
      ],
      href: 'https://github.com/nishita786/Lexicon-gate',
    },
    {
      name: 'Sign Language Recognition',
      subtitle: 'Real-Time Sign Language Recognition System',

      points: [
        'Developed a computer-vision and deep-learning system for recognizing sign language gestures and converting them into text.',
        'Processed hand and gesture information from visual input to extract meaningful features for recognition.',
        'Used deep learning models to learn spatial and temporal patterns present in sign language movements.',
        'Experimented with CNN-based approaches for visual feature learning and LSTM-based models for sequential gesture recognition.',
        'Integrated OpenCV for image/video processing and real-time visual input.',
        'Used MediaPipe hand landmarks to capture structured hand-position and movement information.',
        'Prepared and processed gesture datasets for model training and evaluation.',
        'Analyzed model performance using accuracy and confusion-matrix-based evaluation to identify commonly confused gestures.',
        'Designed the system with the goal of making communication more accessible by converting recognized gestures into readable text.',
      ],
      stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN', 'LSTM'],
      href: 'https://github.com/nishita786/sign-language-recognition',
    },
    {
      name: 'KYC / AML Orchestration',
      subtitle: 'Enterprise KYC / AML Orchestration Platform',

      points: [
        'Built a backend platform for orchestrating Know Your Customer (KYC) and Anti-Money Laundering (AML) verification workflows.',
        'Designed workflow orchestration to coordinate different verification stages and external service providers.',
        'Implemented vendor adapter patterns to make integrations modular and easier to extend.',
        'Used state-machine-based workflow processing to manage verification states and transitions.',
        'Implemented JWT-based authentication and authorization for secure API access.',
        'Added audit logging to maintain traceability across verification requests and workflow events.',
        'Designed REST APIs for initiating, processing, and tracking KYC/AML workflows.',
        'Used MongoDB for storing workflow data, verification information, and application records.',
        'Containerized the backend using Docker for consistent development and deployment environments.',
        'Focused on creating a backend architecture that can be extended with additional KYC/AML providers and verification services.',
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker', 'REST APIs'],
      href: 'https://github.com/nishita786/kyc-aml-orchestration',
    },
    {
      name: 'ZestRoute',
      subtitle: 'Cloud-Based Delivery Analytics Platform',

      points: [
        'Built a data engineering and analytics platform for analyzing delivery and operational performance.',
        'Designed a cloud-based data pipeline using AWS S3 as a scalable data storage layer.',
        'Loaded and organized operational delivery data into Snowflake for analytical processing.',
        'Used SQL to transform, clean, join, and analyze delivery datasets.',
        'Created analytical datasets focused on delivery performance and operational metrics.',
        'Developed Power BI dashboards to visualize delivery trends and key performance indicators.',
        'Enabled analysis of delivery performance, operational patterns, and other business-level insights.',
        'Designed the workflow to demonstrate an end-to-end analytics pipeline from data ingestion → transformation → warehouse → visualization.',
        'Focused on converting raw operational data into insights that can support data-driven decision-making.',
      ],
      stack: ['AWS S3', 'Snowflake', 'SQL', 'Power BI', 'Python', 'Pandas'],
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
  'AI Engineer',
  'Data Analyst',
  'Software Engineer',
  'Backend Developer',
  'Frontend Developer',
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
