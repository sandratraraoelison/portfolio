/**
 * Section Hero
 */

import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";
import { experiences } from "../../data/experience";
import { Typewriter } from "../common/Typewriter";
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
      <div className={styles.container}>
        <div className={styles.content} data-motion>
          <p className={styles.greeting}><span aria-hidden="true">~/portfolio $ </span>{t.hero.greeting}</p>
          <h1 className={styles.title}><Typewriter text={t.hero.title} delay={200} duration={1300} /></h1>
          <p className={styles.subtitle}><span className={styles.prompt} aria-hidden="true">&gt; </span><Typewriter text={t.hero.subtitle} delay={1600} duration={900} /></p>

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

        <div className={styles.image} data-motion data-motion-delay="120">
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.windowControls} aria-hidden="true"><i /><i /><i /></span>
              <span>sandratra@portfolio: ~</span>
              <span className={styles.shell}>JS</span>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.command}><span className={styles.terminalPrompt} aria-hidden="true">$ </span><Typewriter text="cat developer.js" delay={500} duration={650} /></p>
              <pre className={styles.code}><Typewriter
                text={`const developer = {\n  name: "Sandratra",\n  role: "Fullstack JS",\n  stack: [\n    "React",\n    "TypeScript",\n    "Vite"\n  ]\n};`}
                delay={1300}
                duration={2200}
              /></pre>
              <p className={styles.command}><span className={styles.terminalPrompt} aria-hidden="true">$ </span><Typewriter text="developer.build()" delay={3700} duration={700} /></p>
              <div className={styles.terminalFooter}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>{language === "fr" ? "Du code aux interfaces." : "From code to interfaces."}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
