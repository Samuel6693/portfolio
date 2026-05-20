import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

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
  {
    label: 'Location',
    text: 'Stockholm, Sweden',
    Icon: FaMapMarkerAlt,
  },
];

const Contact = () => {
  return (
    <footer id="contact" className="contact footer">
      <div className="section-heading">
        <p className="section-kicker footer-kicker">Contact</p>
        <h2>Open to LIA and junior fullstack developer roles.</h2>
        <p>
          I&apos;m looking for a team where I can contribute to real products,
          learn from experienced developers, and keep growing through practical work.
        </p>
      </div>
      <ul className="contact-list">
        {contactLinks.map(({ label, href, text, external, Icon }) => (
          <li key={label}>
            {href ? (
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
            ) : (
              <span className="contact-info">
                <Icon aria-hidden="true" />
                <span>{text}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Contact;
