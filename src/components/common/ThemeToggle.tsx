/**
 * Composant ThemeToggle - Bascule light/dark
 */

import { useTheme } from "../../context/useTheme";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "light" ? "Mode sombre" : "Mode clair"}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
