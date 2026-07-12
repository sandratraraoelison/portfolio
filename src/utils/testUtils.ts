/**
 * Utilitaires de test
 * Helpers pour les tests unitaires et d'intégration
 */

import type { ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";

/**
 * Render personnalisé pour les tests
 * Peut inclure des providers globaux (Theme, Redux, etc.)
 */
export function render(ui: ReactNode) {
  return rtlRender(ui);
}

/**
 * Mock pour apiService
 */
export const mockApiService = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

/**
 * Crée un mock de réponse API
 */
export function createMockApiResponse<T>(data: T) {
  return Promise.resolve(data);
}

export * from "@testing-library/react";
