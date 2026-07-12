/**
 * Données de l'expérience professionnelle
 */

import type { Experience } from "../types/portfolio";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "UBITIK",
    position: "Développeur / Testeur",
    period: "Février 2023 - Présent",
    description:
      "Développement, débogage et maintenance d'applications et d'outils internes.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Tests",
      "Maintenance",
      "Typescript",
      "PHP",
    ],
  },
  {
    id: "2",
    company: "MAK I AGENCY",
    position: "Développeur PHP / WordPress",
    period: "Novembre 2022 - Janvier 2023",
    description:
      "Première expérience back-end sur WordPress, intégration de modules et optimisation.",
    technologies: ["PHP", "WordPress", "MySQL", "HTML/CSS"],
  },
  {
    id: "3",
    company: "Freelance",
    position: "Développeur freelance",
    period: "2020 - 2022",
    description:
      "Missions de développement et débogage ponctuel pour clients divers.",
    technologies: ["React.js", "Next.js", "Node.js", "PHP"],
  },
  {
    id: "4",
    company: "NOVOCOMM OGILVY",
    position: "Conseil en informatique",
    period: "2019 - 2020",
    description: "Développement informatique et maintenance des réseaux.",
    technologies: ["Support", "Réseaux", "Maintenance"],
  },
];
