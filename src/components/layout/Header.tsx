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
        <div className={styles.logo}>
          <span className={styles.logoText}>S</span>
        </div>

        <button
          className={styles.mobileMenuButton}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span className={styles.menuIcon} />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
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
