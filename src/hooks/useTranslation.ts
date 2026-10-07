/**
 * Hook personnalisé pour utiliser les traductions
 */

import { useLanguage } from "../context/useLanguage";
import { getTranslation } from "../i18n";

export const useTranslation = () => {
  const { language } = useLanguage();
  return getTranslation(language);
};
