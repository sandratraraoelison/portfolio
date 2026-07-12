/**
 * Contexte pour la gestion du thème (dark/light)
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Vérifier localStorage ou les préférences système
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    // Sauvegarder la préférence
    localStorage.setItem("theme", theme);

    // Mettre à jour la classe HTML
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);

    // Mettre à jour la couleur du thème du navigateur
    if (theme === "dark") {
      html.style.colorScheme = "dark";
    } else {
      html.style.colorScheme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
