/**
 * Index pour les traductions
 */

import { fr } from "./fr";
import { en } from "./en";

export type Language = "fr" | "en";

export const translations = {
  fr,
  en,
};

export const getTranslation = (lang: Language) => translations[lang];
