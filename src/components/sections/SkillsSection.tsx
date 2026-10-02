/**
 * Section Compétences
 */

import { useTranslation } from "../../hooks/useTranslation";
import { skills } from "../../data/skills";
import styles from "./SkillsSection.module.css";

export const SkillsSection = () => {
  const t = useTranslation();

  const categories = [
    { key: "frontend", label: t.skills.frontend, icon: "</>" },
    { key: "backend", label: t.skills.backend, icon: "{ }" },
    { key: "tools", label: t.skills.tools, icon: "/ /" },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title} data-motion>{t.skills.title}</h2>

        <div className={styles.content}>
          {categories.map((category) => (
            <div key={category.key} className={styles.category} data-motion>
              <div className={styles.categoryHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.label}</h3>
              </div>

              <div className={styles.skillsList}>
                {skills
                  .filter((skill) => skill.category === category.key)
                  .map((skill) => (
                    <div key={skill.id} className={styles.skill}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <div className={styles.skillBar}>
                        <div
                          className={`${styles.skillFill} ${
                            styles[`level-${skill.level}`]
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
