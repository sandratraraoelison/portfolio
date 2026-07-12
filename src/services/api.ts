/**
 * Service API - Centralisé pour tous les appels API
 * Gère les requêtes HTTP et les intercepteurs
 */

import { API_BASE_URL, API_TIMEOUT } from "../constants";
import type { ApiResponse } from "../types";
import { AppError, logError } from "../utils/errorHandling";

interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * Classe API pour centraliser les appels HTTP
 */
class ApiService {
  private baseUrl: string;
  private timeout: number;

  constructor(baseUrl: string = API_BASE_URL, timeout: number = API_TIMEOUT) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  /**
   * Effectue une requête GET
   */
  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", ...config });
  }

  /**
   * Effectue une requête POST
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  /**
   * Effectue une requête PUT
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  /**
   * Effectue une requête DELETE
   */
  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE", ...config });
  }

  /**
   * Requête interne avec gestion d'erreur
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit & RequestConfig = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        signal: abortController.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new AppError(
          "API_ERROR",
          `Erreur API: ${response.statusText}`,
          response.status,
        );
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);
      logError(error, "ApiService");
      throw error;
    }
  }
}

// Exporter une instance singleton
export const apiService = new ApiService();
