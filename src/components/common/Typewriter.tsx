import { useEffect, useRef } from "react";
import styles from "./Typewriter.module.css";

interface TypewriterProps {
  text: string;
  delay?: number;
  duration?: number;
  cursor?: boolean;
}

/** Reserve the complete text layout and expose it once to assistive technology. */
export const Typewriter = ({ text, delay = 0, duration = 1400, cursor = true }: TypewriterProps) => {
  const host = useRef<HTMLSpanElement>(null);
  const output = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = host.current;
    const target = output.current;
    if (!element || !target) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const characters = Array.from(text);
    let timer: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;
    let started = false;
    let position = 0;
    const finish = () => {
      clearTimeout(timer);
      observer?.disconnect();
      target.textContent = text;
      element.dataset.typing = "complete";
    };
    const tick = () => {
      position += 1;
      target.textContent = characters.slice(0, position).join("");
      if (position >= characters.length) {
        finish();
      } else {
        timer = setTimeout(tick, duration / Math.max(characters.length, 1));
      }
    };
    const start = () => {
      if (started) return;
      started = true;
      observer?.disconnect();
      timer = setTimeout(() => {
        element.dataset.typing = "active";
        tick();
      }, delay);
    };
    const onPreferenceChange = () => { if (preference.matches) finish(); };
    if (preference.matches) {
      finish();
    } else {
      target.textContent = "";
      element.dataset.typing = "waiting";
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) start();
        }, { threshold: 0.1 });
        observer.observe(element);
      } else {
        start();
      }
    }
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [text, delay, duration]);

  return (
    <span ref={host} className={styles.typewriter}>
      <span className={styles.accessible}>{text}</span>
      <span className={styles.reserve} aria-hidden="true">{text}</span>
      <span className={styles.output} aria-hidden="true">
        <span ref={output}>{text}</span>
        {cursor && <span className={styles.cursor} />}
      </span>
    </span>
  );
};
