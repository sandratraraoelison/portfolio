import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./ScrollJourney.module.css";

export const ScrollJourney = () => {
  const t = useTranslation();
  const { language } = useLanguage();
  const steps = [
    { id: "hero", label: language === "fr" ? "Introduction" : "Introduction" },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];
  return (
    <>
      <div className={styles.pageProgress} data-page-progress aria-hidden="true" />
      <nav className={styles.journey} data-journey aria-label={language === "fr" ? "Parcours du portfolio" : "Portfolio journey"}>
        <span className={styles.caption} aria-hidden="true">{language === "fr" ? "PARCOURS" : "JOURNEY"}</span>
        <div className={styles.steps}>
          <span className={styles.track} aria-hidden="true" />
          {steps.map((step, index) => (
            <a key={step.id} href={`#${step.id}`} className={styles.step} data-journey-step aria-label={step.label} title={step.label}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.label}>{step.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
