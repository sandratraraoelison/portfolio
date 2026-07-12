/**
 * Composant Button réutilisable
 * Exemple de composant common avec variants
 */

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNameUtils";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], styles[size], {
        [styles.loading]: isLoading,
        [styles.disabled]: disabled || isLoading,
      })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Chargement..." : children}
    </button>
  );
};
