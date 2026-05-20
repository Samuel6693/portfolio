import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiDotenv,
} from 'react-icons/si';
import { FaDatabase, FaExchangeAlt, FaLock, FaServer, FaShieldAlt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillGroups = [
  {
    title: 'Status',
    items: [{ label: 'Available for LIA', color: '#047857' }],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', Icon: SiReact, color: '#087ea4' },
      { label: 'React Router', Icon: SiReactrouter, color: '#ca4245' },
      { label: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { label: 'JavaScript', Icon: SiJavascript, color: '#b7791f' },
      { label: 'Vite', Icon: SiVite, color: '#646cff' },
      { label: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
      { label: 'CSS3', Icon: SiCss, color: '#1572b6' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', Icon: SiNodedotjs, color: '#5fa04e' },
      { label: 'Express', Icon: SiExpress, color: '#111827' },
      { label: 'REST APIs', Icon: FaExchangeAlt, color: '#0f766e' },
      { label: 'JWT', Icon: SiJsonwebtokens, color: '#d63aff' },
      { label: 'bcrypt', Icon: FaLock, color: '#475569' },
      { label: 'CORS', Icon: FaShieldAlt, color: '#2563eb' },
      { label: 'dotenv', Icon: SiDotenv, color: '#ecd53f' },
    ],
  },
  {
    title: 'Database',
    items: [
      { label: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { label: 'Mongoose', Icon: SiMongoose, color: '#880000' },
      { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
      { label: 'MySQL', Icon: SiMysql, color: '#4479a1' },
      { label: 'SQL', Icon: FaDatabase, color: '#334155' },
      { label: 'NoSQL', Icon: FaServer, color: '#16a34a' },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { label: 'Git', Icon: SiGit, color: '#f05032' },
      { label: 'GitHub', Icon: SiGithub, color: '#181717' },
      { label: 'GitHub Actions', Icon: SiGithubactions, color: '#2088ff' },
      { label: 'Vercel', Icon: SiVercel, color: '#000000' },
      { label: 'VS Code', Icon: VscVscode, color: '#007acc' },
      { label: 'Figma', Icon: SiFigma, color: '#a259ff' },
      { label: 'Postman', Icon: SiPostman, color: '#ff6c37' },
      { label: 'Trello', Icon: SiTrello, color: '#0052cc' },
    ],
  },
  {
    title: 'Testing & CI',
    items: [
      { label: 'Vitest', Icon: SiVitest, color: '#6e9f18' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { label: 'ChatGPT', Icon: SiOpenai, color: '#10a37f' },
      { label: 'Google Gemini', Icon: SiGooglegemini, color: '#4285f4' },
      { label: 'GitHub Copilot', Icon: SiGithubcopilot, color: '#181717' },
    ],
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <p className="hero-kicker">Samuel Soumi - Fullstack Developer Student</p>

      <h1>Building practical web applications with React, Node.js and MongoDB.</h1>

      <p className="hero-lead">
        I am looking for LIA or junior developer opportunities where I can contribute
        to real products, learn from experienced developers, and keep growing as a
        fullstack developer.
      </p>

      <div className="hero-skill-groups">
        {skillGroups.map(({ title, items }) => (
          <div className="hero-skill-group" key={title}>
            <p className="hero-skill-title">{title}</p>
            <div className="hero-tags">
              {items.map(({ label, Icon, color }) => (
                <span key={label} style={{ '--tag-color': color }}>
                  {Icon ? <Icon aria-hidden="true" /> : null}
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
