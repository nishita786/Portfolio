export type SkillIcon = {
  name: string
  icon: string
  /** Invert for dark-on-dark brand marks */
  invert?: boolean
}

export type SkillGroup = {
  title: string
  items: SkillIcon[]
}

const d = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`

/** Brand icons only — names live in title/alt for accessibility. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'HTML5', icon: d('html5/html5-original.svg') },
      { name: 'CSS3', icon: d('css3/css3-original.svg') },
      { name: 'JavaScript', icon: d('javascript/javascript-original.svg') },
      { name: 'C++', icon: d('cplusplus/cplusplus-original.svg') },
      { name: 'Java', icon: d('java/java-original.svg') },
      { name: 'Python', icon: d('python/python-original.svg') },
      { name: 'SQL', icon: d('azuresqldatabase/azuresqldatabase-original.svg') },
      { name: 'R', icon: d('r/r-original.svg') },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', icon: d('react/react-original.svg') },
      { name: 'Express.js', icon: d('express/express-original.svg'), invert: true },
      { name: 'Node.js', icon: d('nodejs/nodejs-original.svg') },
      { name: 'Streamlit', icon: d('streamlit/streamlit-original.svg') },
    ],
  },
  {
    title: 'Libraries',
    items: [
      { name: 'PyTorch', icon: d('pytorch/pytorch-original.svg') },
      { name: 'TensorFlow', icon: d('tensorflow/tensorflow-original.svg') },
      { name: 'Pandas', icon: d('pandas/pandas-original.svg') },
      { name: 'NumPy', icon: d('numpy/numpy-original.svg') },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', icon: d('mongodb/mongodb-original.svg') },
      { name: 'MySQL', icon: d('mysql/mysql-original.svg') },
      { name: 'Snowflake', icon: '/skills/snowflake.svg' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: d('git/git-original.svg') },
      { name: 'GitHub', icon: d('github/github-original.svg'), invert: true },
      { name: 'Docker', icon: d('docker/docker-original.svg') },
      { name: 'AWS', icon: d('amazonwebservices/amazonwebservices-plain-wordmark.svg') },
      { name: 'Linux', icon: d('linux/linux-original.svg') },
      { name: 'Power BI', icon: '/skills/powerbi.svg' },
      { name: 'VS Code', icon: d('vscode/vscode-original.svg') },
    ],
  },
  {
    title: 'Environments',
    items: [
      { name: 'Node.js', icon: d('nodejs/nodejs-original.svg') },
      { name: 'AWS', icon: d('amazonwebservices/amazonwebservices-plain-wordmark.svg') },
      { name: 'Anaconda', icon: d('anaconda/anaconda-original.svg') },
    ],
  },
]
