/**
 * Section Expérience
 */

import { useTranslation } from "../../hooks/useTranslation";
import { experiences } from "../../data/experience";
import styles from "./ExperienceSection.module.css";

export const ExperienceSection = () => {
  const t = useTranslation();

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t.experience.title}</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.position}>{exp.position}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className={styles.timelineLine}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
