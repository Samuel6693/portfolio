import { useState } from 'react';

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
  previewUrl,
  previewTitle,
  eyebrow,
  summary,
  highlights,
  featured = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

        <div className="project-tech">
          {techStack.map((tech) => (
            <span key={tech} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>
        
        {previewUrl ? (
          <div className='project-preview'>
            <iframe
              src={previewUrl}
              title={previewTitle || `${title} live preview`}
              className='project-preview-frame'
              loading='lazy'
            />
          </div>
        ): null}
      </article>
    </>
  );
};

export default ProjectCard;
