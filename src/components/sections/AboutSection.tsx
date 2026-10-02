/**
 * Section À propos
 */

import { useTranslation } from "../../hooks/useTranslation";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  const t = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title} data-motion>{t.about.title}</h2>

        <div className={styles.content}>
          <p className={styles.description}>{t.about.description}</p>

          <p className={styles.description}>{t.about.description2}</p>

          <div className={styles.highlights}>
            <div className={styles.highlight} data-motion>
              <span className={styles.icon}>01</span>
              <h3>{t.about.performance}</h3>
              <p>{t.about.performanceDesc}</p>
            </div>
            <div className={styles.highlight} data-motion>
              <span className={styles.icon}>02</span>
              <h3>{t.about.design}</h3>
              <p>{t.about.designDesc}</p>
            </div>
            <div className={styles.highlight} data-motion>
              <span className={styles.icon}>03</span>
              <h3>{t.about.innovation}</h3>
              <p>{t.about.innovationDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
