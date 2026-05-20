import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:samuel_somy93@hotmail.com',
    text: 'samuel_somy93@hotmail.com',
    Icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samuel-soumi-7b88aa347/',
    text: 'LinkedIn',
    external: true,
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Samuel6693',
    text: 'GitHub',
    external: true,
    Icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <footer id="contact" className="contact footer">
      <div className="section-heading">
        <p className="section-kicker footer-kicker">Contact</p>
        <h2>Let&apos;s talk about LIA, junior roles, or collaboration.</h2>
        <p>
          I&apos;m open to opportunities where I can contribute, learn from experienced
          developers, and keep growing as a fullstack developer.
        </p>
      </div>
      <ul className="contact-list">
        {contactLinks.map(({ label, href, text, external, Icon }) => (
          <li key={label}>
            <a
              href={href}
              {...(external
                ? {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
                : {})}
            >
              <Icon aria-hidden="true" />
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Contact;
