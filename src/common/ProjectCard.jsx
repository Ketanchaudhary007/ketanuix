import styles from './ProjectCard.module.css';

function ProjectCard({ src, liveLink, githubLink, link, h3, p, buttonLabel }) {
  return (
    <div className={styles.card}>
      <img src={src} alt={h3} className={styles.image} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className={styles.buttonsContainer}>
        {liveLink && githubLink ? (
          <>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
              Live
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
              GitHub
            </a>
          </>
        ) : (
          buttonLabel && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
              {buttonLabel}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
