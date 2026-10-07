export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools";
  level: "beginner" | "intermediate" | "advanced";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  category: "web" | "quality" | "systems";
  context: string;
  challenge: string;
  approach: string[];
  outcome: string;
  evidence: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string;
}
