import type { Project } from "../../types/portfolio";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/useLanguage";
import styles from "./ProjectCase.module.css";

export const ProjectCase = ({ project }: { project: Project }) => {
  const t = useTranslation();
  const { language } = useLanguage();
  const label = t.projects.categories[project.category];
  const content = language === "en" ? { ...project, ...project.translations?.en } : project;

  return (
    <details className={styles.case}>
      <summary className={styles.summary}>
        <span className={styles.index}>CASE / {project.id.padStart(2, "0")}<span className={styles.category}>{label}</span></span>
        <span className={styles.mainInfo}>
          <span className={styles.summaryTitle}>{content.title}</span>
          <span className={styles.context}>{content.context}</span>
          <span className={styles.tags}>{project.technologies.map((tech) => <span className={styles.tag} key={tech}>{tech}</span>)}</span>
        </span>
      </summary>
      <div className={styles.body}>
        {project.image && (
          <figure className={styles.projectVisual}>
            <img src={project.image} alt={t.projects.soulmeetImageAlt} loading="lazy" decoding="async" />
          </figure>
        )}
        <div className={styles.narrative}>
          <div><h4>{t.projects.challenge}</h4><p>{content.challenge}</p></div>
          <div><h4>{t.projects.approach}</h4><p>{content.outcome}</p></div>
          <div><h4>{t.projects.learning}</h4><p>{content.approach.join(" · ")}</p></div>
        </div>
        <ol className={styles.approach}>{content.approach.map((step) => <li key={step}>{step}</li>)}</ol>
        <div className={styles.diagram} aria-hidden="true">
          {content.approach.map((step, index) => <span className={styles.diagramNode} key={step}>{step}{index < content.approach.length - 1 && <span className={styles.diagramArrow} aria-hidden="true"> →</span>}</span>)}
        </div>
        <p className={styles.evidence}>{t.projects.evidenceLabel}: {content.evidence}</p>
        {(project.link || project.github) && (
          <div className={styles.projectLinks}>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{t.projects.viewSite}<span aria-hidden="true">↗</span></a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">{t.projects.github}<span aria-hidden="true">↗</span></a>}
          </div>
        )}
      </div>
    </details>
  );
};
