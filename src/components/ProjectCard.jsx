import styles from "./ProjectCard.module.css";

function ProjectCard({ title, desc, tech, github, demo }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tech}>{tech}</div>
      <div className={styles.links}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
