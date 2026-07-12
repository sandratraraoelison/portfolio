/**
 * Constantes globales de l'application
 */

export const APP_NAME = "Portfolio";
export const APP_VERSION = "0.0.1";

// API Configuration
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://api.example.com";
export const API_TIMEOUT = 10000; // 10 secondes

// Navigation
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
  ADMIN: "/admin",
} as const;

// Messages
export const MESSAGES = {
  SUCCESS: "Opération réussie",
  ERROR: "Une erreur est survenue",
  LOADING: "Chargement...",
} as const;
