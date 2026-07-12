/**
 * Section Hero
 */

import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";
import { experiences } from "../../data/experience";
import { Button } from "../common/Button";
import styles from "./HeroSection.module.css";

const getExperienceYears = () => {
  const years = experiences
    .map((item) => {
      const match = item.period.match(/\d{4}/g);
      return match ? Number(match[0]) : null;
    })
    .filter((year): year is number => year !== null);

  if (years.length === 0) {
    return 3;
  }

  const earliest = Math.min(...years);
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - earliest);
};

const downloadCV = (language: string) => {
  const cvFileName =
    language === "fr"
      ? "CV RAOELISON Sandratra-fr.pdf"
      : "CV RAOELISON Sandratra-en .pdf";

  const link = document.createElement("a");
  link.href = encodeURI(
    `/CV RAOELISON Sandratra-${language === "fr" ? "fr" : "en "}.pdf`,
  );
  link.download = cvFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const HeroSection = () => {
  const t = useTranslation();
  const { language } = useLanguage();
  const experienceYears = getExperienceYears();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroDecor}>
        <span className={`${styles.bubble} ${styles.bubbleLarge}`} />
        <span className={`${styles.bubble} ${styles.bubbleMedium}`} />
        <span className={`${styles.bubble} ${styles.bubbleSmall}`} />
        <span className={`${styles.bubble} ${styles.bubbleGlow}`} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>{t.hero.greeting}</p>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <p className={styles.description}>{t.hero.description}</p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.location.hash = "/all-projects";
              }}
            >
              {t.hero.cta1}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => downloadCV(language)}
            >
              {t.hero.cta2}
            </Button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>{experienceYears}+</span>
              <span className={styles.label}>{t.hero.experience}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>20+</span>
              <span className={styles.label}>{t.hero.projects}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>100%</span>
              <span className={styles.label}>{t.hero.passion}</span>
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.avatar}>
            <div className={styles.initials}>S</div>
          </div>
        </div>
      </div>
    </section>
  );
};
