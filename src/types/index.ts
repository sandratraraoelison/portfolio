/**
 * Types globaux de l'application
 * Centraliser tous les types TypeScript ici
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export type RequestStatus = "idle" | "loading" | "success" | "error";
