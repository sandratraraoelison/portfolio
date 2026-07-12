/**
 * Utilitaires pour manipuler les class names
 */

type ClassValue = string | undefined | null | Record<string, boolean>;

/**
 * Combine les noms de classe de manière efficace
 * @example
 * classNames('btn', { 'btn-primary': true, 'btn-disabled': false })
 * // => 'btn btn-primary'
 */
export function classNames(...classes: ClassValue[]): string {
  return classes
    .flatMap((cls) => {
      if (typeof cls === "string") return cls;
      if (!cls) return [];
      return Object.entries(cls)
        .filter(([, value]) => value)
        .map(([key]) => key);
    })
    .filter(Boolean)
    .join(" ");
}
