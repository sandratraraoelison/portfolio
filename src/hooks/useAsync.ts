/**
 * Hook personnalisé pour gérer les appels asynchrones
 * Gère les états loading, success et error
 */

import { useCallback, useEffect, useState } from "react";
import type { RequestStatus } from "../types";

interface UseAsyncState<T> {
  data: T | null;
  error: Error | null;
  status: RequestStatus;
}

interface UseAsyncOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true,
  options?: UseAsyncOptions,
) {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    error: null,
    status: "idle",
  });

  const execute = useCallback(async () => {
    setState({ data: null, error: null, status: "loading" });
    try {
      const response = await asyncFunction();
      setState({ data: response, error: null, status: "success" });
      options?.onSuccess?.();
      return response;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({ data: null, error: err, status: "error" });
      options?.onError?.(err);
      throw err;
    }
  }, [asyncFunction, options]);

  // Exécute la fonction au montage si immediate est true
  useEffect(() => {
    if (immediate) {
      void Promise.resolve().then(execute).catch(() => undefined);
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
    isLoading: state.status === "loading",
    isSuccess: state.status === "success",
    isError: state.status === "error",
  };
}
