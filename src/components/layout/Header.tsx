/**
 * Composant Header avec navigation
 */

import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { ThemeToggle } from "../common/ThemeToggle";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import styles from "./Header.module.css";

export const Header = () => {
  const t = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} aria-label="Accueil">
          <span className={styles.logoText}>S.</span>
        </a>

        <button
          className={styles.mobileMenuButton}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setMenuOpen((current) => !current)}
          onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
          type="button"
        >
          <span className={styles.menuIcon} />
        </button>

        <div className={`${styles.navPanel} ${menuOpen ? styles.open : ""}`}>
        <nav id="portfolio-navigation" className={styles.nav} onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
            document.querySelector<HTMLButtonElement>("button[aria-controls=portfolio-navigation]")?.focus();
          }
        }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <LanguageSwitcher />
          <a href="#contact" className={styles.contactBtn}>
            {t.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
};
