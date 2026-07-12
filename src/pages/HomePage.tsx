/**
 * Page d'accueil - Portfolio
 */

import { Header, Footer } from "../components/layout";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "../components/sections";

export const HomePage = () => {
  return (
    <div id="home">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
