import { createContext } from "react";
import type { Language } from "../i18n";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
