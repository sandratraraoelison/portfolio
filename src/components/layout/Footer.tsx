/**
 * Composant Footer
 */

import { useTranslation } from "../../hooks/useTranslation";
import styles from "./Footer.module.css";

export const Footer = () => {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Sandratra Rolando RAOELISON</h3>
          <p>Développeur Fullstack JS</p>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/sandratraraoelison"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sandratra-raoelison-55815a175"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:raoelisonsandratra@gmail.com">Email</a>
        </div>

        <div className={styles.copyright}>
          {t.footer.rights}
          <p>
            &copy; {currentYear} Sandratra Rolando RAOELISON. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
