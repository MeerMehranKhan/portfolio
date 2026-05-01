"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Award, Lightbulb, Rocket } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

/* ============================================
   ACHIEVEMENTS DATA
   ============================================ */
const achievements = [
  {
    icon: Award,
    title: "Generative AI Webinar Certificate",
    description:
      "Completed Outskill's Generative AI Webinar. I took it because I wanted to understand how the latest generative models actually work, not just for the certificate.",
  },
  {
    icon: Rocket,
    title: "5+ End-to-End AI Projects Shipped",
    description:
      "Built and deployed multiple production-grade projects from scratch: expense analyzers, resume matchers, news dashboards, startup validators. Each one solves a real problem, not a tutorial exercise.",
  },
  {
    icon: GithubIcon,
    title: "Open-Source Project Portfolio",
    description:
      "Every project I ship gets a proper README, clean commit history, and working setup instructions. I use my GitHub as proof of what I can build, not just a code dump.",
  },
  {
    icon: Lightbulb,
    title: "Self-Taught Beyond the Curriculum",
    description:
      "Most of what I know about AI, NLP, and data engineering I picked up on my own through docs, research papers, and building things that break until they don't.",
  },
];

/* ============================================
   ACHIEVEMENTS SECTION
   Grid of achievement cards with icons
   ============================================ */
export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="achievements"
      title="Certifications & Achievements"
      subtitle="Milestones and recognitions along my learning journey"
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-2">
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <achievement.icon size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {achievement.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
