import { useEffect, type RefObject } from "react";

/** One frame per scroll update; measurements never trigger React renders. */
export function useScrollJourney(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>("main > section[id]"));
    const steps = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-journey-step]"));
    const progress = root.querySelector<HTMLElement>("[data-page-progress]");
    const timeline = root.querySelector<HTMLElement>("[data-timeline]");
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-step]"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const checkpoint = viewport * 0.45;
      const maxScroll = document.documentElement.scrollHeight - viewport;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 1;
      progress?.style.setProperty("--page-progress", String(ratio));
      let current: string | undefined = sections[0]?.id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= checkpoint) current = section.id;
      });
      if (window.scrollY >= maxScroll - 2) current = sections.at(-1)?.id;
      const currentIndex = steps.findIndex((step) => step.hash === `#${current}`);
      steps.forEach((step, index) => {
        step.dataset.reached = String(index <= currentIndex);
        if (index === currentIndex) step.setAttribute("aria-current", "location");
        else step.removeAttribute("aria-current");
      });
      root.querySelector<HTMLElement>("[data-journey]")?.style.setProperty(
        "--journey-progress", String(Math.max(0, currentIndex) / Math.max(1, steps.length - 1)),
      );
      if (timeline && items.length) {
        const start = items[0].getBoundingClientRect().top + 10;
        const end = items[items.length - 1].getBoundingClientRect().top + 10;
        const length = Math.max(0, end - start);
        timeline.style.setProperty("--track-length", `${length}px`);
        const fraction = length ? Math.min(1, Math.max(0, (checkpoint - start) / length)) : Number(checkpoint >= start);
        timeline.style.setProperty("--timeline-progress", String(preference.matches ? 1 : fraction));
        items.forEach((item) => {
          item.dataset.reached = String(preference.matches || item.getBoundingClientRect().top + 10 <= checkpoint);
        });
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : undefined;
    resize?.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, [ref]);
}

