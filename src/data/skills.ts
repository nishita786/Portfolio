export type SkillIcon = {
  name: string
  icon: string
  href: string
  /** Invert for dark-on-dark brand marks */
  invert?: boolean
}

export type SkillGroup = {
  title: string
  items: SkillIcon[]
}

const d = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`

/** Brand icons only — names live in title/alt; href opens official docs/home. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      {
        name: 'HTML5',
        icon: d('html5/html5-original.svg'),
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'CSS3',
        icon: d('css3/css3-original.svg'),
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        name: 'JavaScript',
        icon: d('javascript/javascript-original.svg'),
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'C++',
        icon: d('cplusplus/cplusplus-original.svg'),
        href: 'https://isocpp.org/',
      },
      {
        name: 'Java',
        icon: d('java/java-original.svg'),
        href: 'https://dev.java/',
      },
      {
        name: 'Python',
        icon: d('python/python-original.svg'),
        href: 'https://www.python.org/',
      },
      {
        name: 'SQL',
        icon: d('azuresqldatabase/azuresqldatabase-original.svg'),
        href: 'https://www.w3schools.com/sql/',
      },
      {
        name: 'R',
        icon: d('r/r-original.svg'),
        href: 'https://www.r-project.org/',
      },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      {
        name: 'React',
        icon: d('react/react-original.svg'),
        href: 'https://react.dev/',
      },
      {
        name: 'Express.js',
        icon: d('express/express-original.svg'),
        href: 'https://expressjs.com/',
        invert: true,
      },
      {
        name: 'Node.js',
        icon: d('nodejs/nodejs-original.svg'),
        href: 'https://nodejs.org/',
      },
      {
        name: 'Streamlit',
        icon: d('streamlit/streamlit-original.svg'),
        href: 'https://streamlit.io/',
      },
    ],
  },
  {
    title: 'Libraries',
    items: [
      {
        name: 'PyTorch',
        icon: d('pytorch/pytorch-original.svg'),
        href: 'https://pytorch.org/',
      },
      {
        name: 'TensorFlow',
        icon: d('tensorflow/tensorflow-original.svg'),
        href: 'https://www.tensorflow.org/',
      },
      {
        name: 'Pandas',
        icon: d('pandas/pandas-original.svg'),
        href: 'https://pandas.pydata.org/',
      },
      {
        name: 'NumPy',
        icon: d('numpy/numpy-original.svg'),
        href: 'https://numpy.org/',
      },
    ],
  },
  {
    title: 'Databases',
    items: [
      {
        name: 'MongoDB',
        icon: d('mongodb/mongodb-original.svg'),
        href: 'https://www.mongodb.com/',
      },
      {
        name: 'MySQL',
        icon: d('mysql/mysql-original.svg'),
        href: 'https://www.mysql.com/',
      },
      {
        name: 'Snowflake',
        icon: '/skills/snowflake.svg',
        href: 'https://www.snowflake.com/',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Git',
        icon: d('git/git-original.svg'),
        href: 'https://git-scm.com/',
      },
      {
        name: 'GitHub',
        icon: d('github/github-original.svg'),
        href: 'https://github.com/',
        invert: true,
      },
      {
        name: 'Docker',
        icon: d('docker/docker-original.svg'),
        href: 'https://www.docker.com/',
      },
      {
        name: 'AWS',
        icon: d('amazonwebservices/amazonwebservices-plain-wordmark.svg'),
        href: 'https://aws.amazon.com/',
      },
      {
        name: 'Linux',
        icon: d('linux/linux-original.svg'),
        href: 'https://www.kernel.org/',
      },
      {
        name: 'Power BI',
        icon: '/skills/powerbi.svg',
        href: 'https://www.microsoft.com/en-us/power-platform/products/power-bi',
      },
      {
        name: 'VS Code',
        icon: d('vscode/vscode-original.svg'),
        href: 'https://code.visualstudio.com/',
      },
    ],
  },
  {
    title: 'Environments',
    items: [
      {
        name: 'Node.js',
        icon: d('nodejs/nodejs-original.svg'),
        href: 'https://nodejs.org/',
      },
      {
        name: 'AWS',
        icon: d('amazonwebservices/amazonwebservices-plain-wordmark.svg'),
        href: 'https://aws.amazon.com/',
      },
      {
        name: 'Anaconda',
        icon: d('anaconda/anaconda-original.svg'),
        href: 'https://www.anaconda.com/',
      },
    ],
  },
]
