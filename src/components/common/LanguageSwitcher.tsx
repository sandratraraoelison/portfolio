/**
 * Composant LanguageSwitcher - Bascule FR/EN
 */

import { useLanguage } from "../../context/useLanguage";
import type { Language } from "../../i18n";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className={styles.switcher}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`${styles.button} ${
            language === lang.code ? styles.active : ""
          }`}
          onClick={() => setLanguage(lang.code)}
          title={lang.label}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
