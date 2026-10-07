/**
 * Composant LanguageSwitcher - Bascule FR/EN
 */

import { useLanguage } from "../../context/useLanguage";
import type { Language } from "../../i18n";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const languages: { code: Language; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className={styles.switcher} role="group" aria-label={t.accessibility.chooseLanguage}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`${styles.button} ${
            language === lang.code ? styles.active : ""
          }`}
          onClick={() => setLanguage(lang.code)}
          title={lang.label}
          aria-pressed={language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
