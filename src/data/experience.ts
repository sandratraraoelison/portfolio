import type { Experience } from "../types/portfolio";

export const experiences: Experience[] = [
  {
    id: "1", company: "UBITIK", position: "Développeur / Testeur", period: "Février 2023 - Présent",
    description: "Développer, faire évoluer, déboguer et maintenir des applications web. Reproduire les anomalies signalées, valider les correctifs et contribuer aux tests fonctionnels et de non-régression avant livraison.",
    technologies: ["JavaScript", "TypeScript", "Node.js", "PHP", "Tests fonctionnels", "Régression"],
  },
  {
    id: "2", company: "MAKI AGENCY", position: "Développeur PHP / WordPress", period: "Novembre 2022 - Janvier 2023",
    description: "Développement back-end avec WordPress/PHP et participation aux corrections applicatives.",
    technologies: ["PHP", "WordPress"],
  },
  {
    id: "3", company: "Freelance", position: "Développeur freelance", period: "2020 - 2022",
    description: "Missions ponctuelles de développement, maintenance et débogage selon les besoins des clients.",
    technologies: ["React.js", "Next.js", "Node.js", "PHP"],
  },
  {
    id: "4", company: "NOVOCOMM OGILVY", position: "Conseil en informatique", period: "2019 - 2020",
    description: "Développement informatique, assistance technique et maintenance des réseaux.",
    technologies: ["Assistance", "Réseaux", "Maintenance"],
  },
];
