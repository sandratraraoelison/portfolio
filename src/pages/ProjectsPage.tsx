import { useTranslation } from "../hooks/useTranslation";
import { projects } from "../data/projects";
import styles from "./ProjectsPage.module.css";

export const ProjectsPage = () => {
  const t = useTranslation();

  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.subtitle}>{t.projects.pageIntro}</p>
          <h1 className={styles.title}>{t.projects.allTitle}</h1>
          <p className={styles.description}>{t.projects.pageDescription}</p>
          <a href="#home" className={styles.backLink}>
            ← {t.projects.backToHome}
          </a>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
