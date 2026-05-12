import { useEffect, useState } from 'react';

const ProjectCard = ({
  title,
  problem,
  contribution,
  techStack,
  githubUrl,
  githubLabel = 'GitHub',
  repoLinks = [],
  demoUrl,
  demoLabel = 'Live Demo',
  eyebrow,
  summary,
  highlights,
  screenshots,
  featured = false,
}) => {
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const [ isExpanded, setIsExpanded ] = useState(false);

  useEffect(() => {
    if (!activeScreenshot) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveScreenshot(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeScreenshot]);

  return (
    <>
      <article className={`project-card${featured ? ' project-card-featured' : ''}`}>
        <div className="project-card-header">
          <div>
            {eyebrow ? <p className="project-card-eyebrow">{eyebrow}</p> : null}
            <h3>{title}</h3>
          </div>
          <div className="project-links">
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                {githubLabel}
              </a>
            ) : null}
            {repoLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
            {demoUrl ? (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                {demoLabel}
              </a>
            ) : (
              <span className="project-link-muted">Demo coming soon</span>
            )}
          </div>
        </div>

        <div className={`project-card-details${isExpanded ? ' is-expanded' : ''}`}>
          {summary ? <p className="project-card-summary">{summary}</p> : null}

          <p>
            <strong>Problem:</strong> {problem}
          </p>
          <p>
            <strong>What I built:</strong> {contribution}
          </p>

          {highlights?.length ? (
            <ul className="project-highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
          </div>

          <button  
            type="button"
            className="show-more-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>

          {screenshots?.length ? (
            <div className="project-gallery">
              {screenshots.map((shot) => (
                <figure key={shot.src} className="project-gallery-item">
                  <button
                    type="button"
                    className="project-gallery-button"
                    onClick={() => setActiveScreenshot(shot)}
                    aria-label={`Open screenshot: ${shot.alt}`}
                  >
                    <img src={shot.src} alt={shot.alt} className="project-gallery-image" />
                  </button>
                  {shot.caption ? (
                    <figcaption className="project-gallery-caption">{shot.caption}</figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : null}

          <div className="project-tech">
            {techStack.map((tech) => (
              <span key={tech} className="project-tech-pill">
                {tech}
              </span>
            ))}
          </div>
      </article>

      {activeScreenshot ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="project-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-lightbox-close"
              onClick={() => setActiveScreenshot(null)}
              aria-label="Close expanded screenshot"
            >
              Close
            </button>
            <img
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
              className="project-lightbox-image"
            />
            {activeScreenshot.caption ? (
              <p className="project-lightbox-caption">{activeScreenshot.caption}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectCard;
