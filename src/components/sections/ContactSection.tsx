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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on peut ajouter la logique d'envoi
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title} data-motion>{t.contact.title}</h2>
        <p className={styles.subtitle}>{t.contact.subtitle}</p>

        <div className={styles.content}>
          <div className={styles.info} data-motion>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>@</span>
              <div>
                <h3>{t.contact.email}</h3>
                <a href="mailto:raoelisonsandratra@gmail.com">
                  raoelisonsandratra@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>↗</span>
              <div>
                <h3>{t.contact.phone}</h3>
                <p>{t.contact.phoneValue}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>⌖</span>
              <div>
                <h3>{t.contact.location}</h3>
                <p>{t.contact.locationValue}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>↗</span>
              <div>
                <h3>{t.contact.networks}</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} data-motion data-motion-delay="100" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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

            {submitted && (
              <p className={styles.successMessage}>{t.contact.success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
