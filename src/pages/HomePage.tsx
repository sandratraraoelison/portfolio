import { useRef } from "react";
import { ScrollJourney } from "../components/layout/ScrollJourney";
import { useScrollJourney } from "../hooks/useScrollJourney";
import { useMotion } from "../hooks/useMotion";
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
  const motionRef = useRef<HTMLDivElement>(null);
  useMotion(motionRef);
  useScrollJourney(motionRef);
  return (
    <div id="home" ref={motionRef}>
      <Header />
      <ScrollJourney />
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
