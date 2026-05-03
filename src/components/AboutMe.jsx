const AboutMe = () => {
  return (
    <section id="about" className="about-me section">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2>Developer student focused on practical fullstack work.</h2>
      </div>

      <div className="about-grid">
        <div>
          <p>
            I&apos;m a Fullstack Web Development student at Nackademin with
            experience building web applications using React, JavaScript,
            Node.js, Express, MongoDB, REST APIs, and database concepts
            including SQL, relational databases, and NoSQL databases.
          </p>

          <p>
            Alongside my studies, I&apos;ve contributed to a music platform
            where I&apos;ve worked with testing, feature development, and
            improving the user experience in a real product environment.
          </p>

          <p>
            I&apos;m currently looking for LIA or junior developer opportunities
            where I can keep growing, contribute to real products, and learn
            from experienced developers.
          </p>
        </div>

        <div className="about-panel">
          <h3>What I bring</h3>
          <ul>
            <li>Frontend development with React and JavaScript</li>
            <li>Backend APIs with Node.js, Express, MongoDB, and REST APIs</li>
            <li>Database fundamentals, including SQL, relational databases, and NoSQL</li>
            <li>Team collaboration, testing, and product improvement</li>
            <li>Curiosity, structure, and willingness to learn fast</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
