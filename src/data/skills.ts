/**
 * Données des compétences
 */

import type { Skill } from "../types/portfolio";

export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "HTML / CSS", category: "frontend", level: "advanced" },
  {
    id: "2",
    name: "JavaScript / TypeScript",
    category: "frontend",
    level: "advanced",
  },
  {
    id: "3",
    name: "React.js / Next.js",
    category: "frontend",
    level: "advanced",
  },

  // Backend
  { id: "4", name: "Node.js", category: "backend", level: "advanced" },
  { id: "5", name: "PHP", category: "backend", level: "intermediate" },
  { id: "6", name: "WordPress", category: "backend", level: "intermediate" },

  // Tools
  { id: "7", name: "Git", category: "tools", level: "advanced" },
  {
    id: "8",
    name: "Intelligence Artificielle",
    category: "tools",
    level: "intermediate",
  },
  {
    id: "9",
    name: "Maintenance & Support",
    category: "tools",
    level: "intermediate",
  },
];
