import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTrello,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { label: 'Available for LIA', color: '#047857' },
  { label: 'React', Icon: SiReact, color: '#087ea4' },
  { label: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { label: 'JavaScript', Icon: SiJavascript, color: '#b7791f' },
  { label: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
  { label: 'CSS3', Icon: SiCss, color: '#1572b6' },
  { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
  { label: 'MySQL', Icon: SiMysql, color: '#4479a1' },
  { label: 'Node.js', Icon: SiNodedotjs, color: '#5fa04e' },
  { label: 'Express', Icon: SiExpress, color: '#111827' },
  { label: 'Mongoose', Icon: SiMongoose, color: '#880000' },
  { label: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
  { label: 'Git', Icon: SiGit, color: '#f05032' },
  { label: 'GitHub', Icon: SiGithub, color: '#181717' },
  { label: 'Vercel', Icon: SiVercel, color: '#000000' },
  { label: 'VS Code', Icon: VscVscode, color: '#007acc' },
  { label: 'Postman', Icon: SiPostman, color: '#ff6c37' },
  { label: 'Trello', Icon: SiTrello, color: '#0052cc' },
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

      <div className="hero-tags">
        {skills.map(({ label, Icon, color }) => (
          <span key={label} style={{ '--tag-color': color }}>
            {Icon ? <Icon aria-hidden="true" /> : null}
            {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
