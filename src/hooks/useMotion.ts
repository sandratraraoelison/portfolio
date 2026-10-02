import { useEffect, type RefObject } from "react";

/** One-shot reveals: content stays readable if animation is unavailable. */
export function useMotion(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Map<HTMLElement, Animation>();
    const revealed = new WeakSet<HTMLElement>();
    let observer: IntersectionObserver | undefined;
    const reveal = (element: HTMLElement) => {
      observer?.unobserve(element);
      revealed.add(element);
      if (preference.matches || !element.animate) return;
      const animation = element.animate(
        [{ opacity: 0, translate: "0 22px" }, { opacity: 1, translate: "0 0" }],
        {
          duration: 650,
          delay: Number(element.dataset.motionDelay || 0),
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        },
      );
      running.set(element, animation);
      animation.onfinish = () => running.delete(element);
    };
    const setup = () => {
      observer?.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
      if (preference.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        });
      }, { threshold: 0.08 });
      root.querySelectorAll<HTMLElement>("[data-motion]").forEach((element) => {
        if (revealed.has(element)) return;
        if (!element.dataset.motionDelay && element.parentElement) {
          const siblings = Array.from(element.parentElement.children)
            .filter((child) => child.hasAttribute("data-motion"));
          element.dataset.motionDelay = String(Math.min(siblings.indexOf(element) * 70, 210));
        }
        observer?.observe(element);
      });
    };
    const onFocus = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-motion]");
      if (element) {
        observer?.unobserve(element);
        revealed.add(element);
        running.get(element)?.cancel();
        running.delete(element);
      }
    };
    setup();
    preference.addEventListener("change", setup);
    root.addEventListener("focusin", onFocus);
    return () => {
      observer?.disconnect();
      running.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", setup);
      root.removeEventListener("focusin", onFocus);
    };
  }, [ref]);
}
