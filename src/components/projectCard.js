// components/ProjectCard.js
import styles from './projectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
