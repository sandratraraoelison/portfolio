import { useRef, useState } from "react";
import { useMotion } from "../hooks/useMotion";
import { useTranslation } from "../hooks/useTranslation";
import { projects } from "../data/projects";
import styles from "./ProjectsPage.module.css";
import { ProjectCase } from "../components/sections/ProjectCase";
import type { Project } from "../types/portfolio";

export const ProjectsPage = () => {
  const motionRef = useRef<HTMLElement>(null);
  useMotion(motionRef);
  const t = useTranslation();
  const [category, setCategory] = useState<"all" | Project["category"]>("all");
  const visibleProjects = category === "all" ? projects : projects.filter((project) => project.category === category);

  return (
    <main className={styles.page} ref={motionRef}>
      <section className={styles.heroSection} data-motion>
        <div className={styles.heroContent}>
          <p className={styles.subtitle}>{t.projects.journal}</p>
          <h1 className={styles.title}>{t.projects.allTitle}</h1>
          <p className={styles.description}>{t.projects.processIntro}</p>
          <a href="#home" className={styles.backLink}>
            ← {t.projects.backToHome}
          </a>
        </div>
      </section>

      <section className={styles.gridSection} aria-label={t.projects.filtersLabel}>
        <div className={styles.filters} role="group" aria-label={t.projects.filtersLabel}>
          {(["all", "web", "quality", "systems", "mobile"] as const).map((key) => (
            <button key={key} type="button" className={category === key ? styles.activeFilter : styles.filter} aria-pressed={category === key} onClick={() => setCategory(key)}>
              {t.projects.categories[key]}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {visibleProjects.map((project) => <ProjectCase key={project.id} project={project} />)}
        </div>
      </section>
    </main>
  );
};
