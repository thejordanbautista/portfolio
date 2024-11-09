import ProjectCard from '../components/projectCard';
import projects from '../data/projects';
import styles from './projectCard.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1>My Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
