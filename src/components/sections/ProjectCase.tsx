import type { Project } from "../../types/portfolio";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./ProjectCase.module.css";

export const ProjectCase = ({ project }: { project: Project }) => {
  const t = useTranslation();
  const label = t.projects.categories[project.category];

  return (
    <details className={styles.case}>
      <summary className={styles.summary}>
        <span className={styles.index}>CASE / {project.id.padStart(2, "0")}<span className={styles.category}>{label}</span></span>
        <span className={styles.mainInfo}>
          <span className={styles.summaryTitle}>{project.title}</span>
          <span className={styles.context}>{project.context}</span>
          <span className={styles.tags}>{project.technologies.map((tech) => <span className={styles.tag} key={tech}>{tech}</span>)}</span>
        </span>
      </summary>
      <div className={styles.body}>
        <div className={styles.narrative}>
          <div><h4>{t.projects.challenge}</h4><p>{project.challenge}</p></div>
          <div><h4>{t.projects.approach}</h4><p>{project.outcome}</p></div>
          <div><h4>{t.projects.learning}</h4><p>{project.approach.join(" · ")}</p></div>
        </div>
        <ol className={styles.approach}>{project.approach.map((step) => <li key={step}>{step}</li>)}</ol>
        <div className={styles.diagram} role="img" aria-label={`${t.projects.process}: ${project.approach.join(", ")}`}>
          {project.approach.map((step, index) => <span className={styles.diagramNode} key={step}>{step}{index < project.approach.length - 1 && <span className={styles.diagramArrow} aria-hidden="true"> →</span>}</span>)}
        </div>
        <p className={styles.evidence}>{t.projects.evidenceLabel}: {project.evidence}</p>
      </div>
    </details>
  );
};
