/**
 * Section Projets
 */

import { useTranslation } from "../../hooks/useTranslation";
import { projects } from "../../data/projects";
import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  const t = useTranslation();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title} data-motion>{t.projects.title}</h2>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <div key={project.id} className={styles.card} data-motion>
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>{project.title}</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.viewSite}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.github}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMore}>
          <a href="#/all-projects" className={styles.link}>
            {t.projects.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
};
