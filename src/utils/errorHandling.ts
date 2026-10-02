/**
 * Utilitaires pour la gestion des erreurs
 */

export class AppError extends Error {
  public code: string;
  public statusCode: number;

  constructor(
    code: string,
    message: string,
    statusCode: number = 500,
  ) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.statusCode = statusCode;
  }
}

/**
 * Formate les erreurs de manière cohérente
 */
export function formatError(error: unknown): string {
  if (error instanceof AppError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Une erreur inconnue est survenue";
}

/**
 * Logger les erreurs en développement
 */
export function logError(error: unknown, context?: string): void {
  if (import.meta.env.DEV) {
    console.error(`[${context || "Error"}]`, error);
  }
}
