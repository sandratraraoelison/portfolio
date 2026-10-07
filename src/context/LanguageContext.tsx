/**
 * Contexte pour la gestion de la langue (i18n)
 */

import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "../i18n";
import { LanguageContext } from "./LanguageContextValue";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Vérifier localStorage ou la langue du navigateur
    const saved = localStorage.getItem("language") as Language | null;
    if (saved) return saved;

    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "fr") return "fr";
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

