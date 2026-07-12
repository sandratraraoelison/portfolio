/**
 * Exemple de composant utilisant les meilleures pratiques
 * Ce fichier montre comment assembler les différentes parties du projet
 */

import type { FC } from "react";
import { Button } from "../components/common";
import { useAsync } from "../hooks";
import { apiService } from "../services/api";
import { MESSAGES } from "../constants";
import { classNames } from "../utils/classNameUtils";

interface ExampleComponentProps {
  title?: string;
  variant?: "primary" | "secondary";
}

/**
 * Exemple de composant avec:
 * - Props typées
 * - Hooks personnalisés
 * - Services
 * - Composants réutilisables
 */
export const ExampleComponent: FC<ExampleComponentProps> = ({
  title = "Exemple",
  variant = "primary",
}) => {
  // Utilisation du hook personnalisé
  const { data, isLoading, error, execute } = useAsync(
    () => apiService.get("/example"),
    false, // Ne pas exécuter au montage
    {
      onSuccess: () => console.log("Succès"),
      onError: (error) => console.error(error),
    },
  );

  return (
    <div
      className={classNames("example-container", {
        [variant]: true,
      })}
    >
      <h2>{title}</h2>

      {/* Affichage des états */}
      {isLoading && <p>{MESSAGES.LOADING}</p>}
      {error && <p className="error">{error.message}</p>}
      {data && <p className="success">{MESSAGES.SUCCESS}</p>}

      {/* Composant Button réutilisable */}
      <Button variant={variant} onClick={() => execute()} disabled={isLoading}>
        Charger les données
      </Button>

      {/* Affichage des données */}
      {data && (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};
