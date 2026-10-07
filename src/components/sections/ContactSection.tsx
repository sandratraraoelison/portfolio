/**
 * Section Contact
 */

import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Button } from "../common/Button";
import styles from "./ContactSection.module.css";

export const ContactSection = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [draftReady, setDraftReady] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact — ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`,
    );
    setDraftReady(true);
    window.location.assign(
      `mailto:raoelisonsandratra@gmail.com?subject=${subject}&body=${body}`,
    );
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title} data-motion>{t.contact.title}</h2>
        <p className={styles.subtitle}>{t.contact.subtitle}</p>

        <div className={styles.content}>
          <div className={styles.info} data-motion>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">@</span>
              <div>
                <h3>{t.contact.email}</h3>
                <a href="mailto:raoelisonsandratra@gmail.com">
                  raoelisonsandratra@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">↗</span>
              <div>
                <h3>{t.contact.phone}</h3>
                <p>{t.contact.phoneValue}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">⌖</span>
              <div>
                <h3>{t.contact.location}</h3>
                <p>{t.contact.locationValue}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">↗</span>
              <div>
                <h3>{t.contact.networks}</h3>
                <div className={styles.socialLinks}>
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
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} data-motion data-motion-delay="100" onSubmit={handleSubmit} aria-describedby="contact-mailto-note">
            <p className={styles.formNote} id="contact-mailto-note">{t.contact.mailtoNote}</p>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                autoCapitalize="words"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                autoCapitalize="none"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="lg">
              {t.contact.send}
            </Button>

            {draftReady && (
              <p className={styles.successMessage} role="status" aria-live="polite">{t.contact.draftReady}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
