/**
 * Données des projets
 */

import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    title: "Maintenance applicative",
    description:
      "Support et débogage d'applications internes pour garantir la stabilité et les performances.",
    image: "/projects/ecommerce.jpg",
    technologies: ["JavaScript", "Node.js", "Maintenance"],
    featured: true,
  },
  {
    id: "2",
    title: "Développement WordPress",
    description:
      "Création et optimisation de sites WordPress, intégration de modules et améliorations back-end.",
    image: "/projects/tasks.jpg",
    technologies: ["PHP", "WordPress", "MySQL"],
    featured: true,
  },
  {
    id: "3",
    title: "Conseil IT & réseaux",
    description:
      "Conseil informatique et maintenance des réseaux pour assurer un fonctionnement fluide des infrastructures.",
    image: "/projects/dashboard.jpg",
    technologies: ["Support", "Réseaux", "Maintenance"],
    featured: true,
  },
  {
    id: "4",
    title: "Missions freelance",
    description:
      "Prestations ponctuelles en développement web et résolution de bugs pour des clients variés.",
    image: "/projects/portfolio.jpg",
    technologies: ["JavaScript", "PHP", "WordPress"],
    featured: false,
  },
];
