/**
 * Composant ThemeToggle - Bascule light/dark
 */

import { useTheme } from "../../context/useTheme";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslation();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={theme === "light" ? t.accessibility.switchToDark : t.accessibility.switchToLight}
      aria-pressed={theme === "dark"}
      title={theme === "light" ? t.accessibility.switchToDark : t.accessibility.switchToLight}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
