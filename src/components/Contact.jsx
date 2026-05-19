const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:samuel_somy93@hotmail.com',
    text: 'samuel_somy93@hotmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samuel-soumi-7b88aa347/',
    text: 'LinkedIn',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Samuel6693',
    text: 'GitHub',
    external: true,
  },
  {
    label: 'CodeWars',
    href: 'https://www.codewars.com/users/Samuel6693',
    text: 'CodeWars',
    external: true,
  },
];

const Contact = () => {
  return (
    <footer id="contact" className="contact footer">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s talk about LIA, junior roles, or collaboration.</h2>
        <p>
          I&apos;m open to opportunities where I can contribute, learn from experienced
          developers, and keep growing as a fullstack developer.
        </p>
      </div>
      <ul className="contact-list">
        {contactLinks.map(({ label, href, text, external }) => (
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
              {text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Contact;
