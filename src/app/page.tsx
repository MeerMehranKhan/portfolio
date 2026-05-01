"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { AchievementsSection } from "@/components/sections/achievements";
import { WhyMeSection } from "@/components/sections/why-me";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

/* ============================================
   MAIN PAGE
   Assembles all sections into a single-page
   portfolio with smooth scrolling navigation
   ============================================ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <WhyMeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
