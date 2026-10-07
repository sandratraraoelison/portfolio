/**
 * Section Projets
 */

import { useTranslation } from "../../hooks/useTranslation";
import { projects } from "../../data/projects";
import { ProjectCase } from "./ProjectCase";
import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  const t = useTranslation();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>{t.projects.journal}</p>
        <h2 className={styles.title} data-motion>{t.projects.title}</h2>
        <p className={styles.intro}>{t.projects.processIntro}</p>
        <div className={styles.grid}>
          {featuredProjects.map((project) => <ProjectCase key={project.id} project={project} />)}
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
