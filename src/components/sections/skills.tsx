"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Code2,
  Database,
  BarChart3,
  Wrench,
  Users,
  Compass,
} from "lucide-react";

/* ============================================
   SKILLS DATA
   Organized by category with icons
   ============================================ */
const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "NLP",
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Streamlit",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Anaconda",
    ],
  },
  {
    title: "Currently Exploring",
    icon: Compass,
    skills: [
      "Agentic Systems",
      "Finance Analytics",
      "Large Language Models",
      "Deep Learning",
      "Neural Networks",
      "RAG",
      "LLMOps",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Problem-Solving",
      "Communication",
      "Leadership",
      "Critical Thinking",
      "Curiosity",
      "Team Collaboration",
    ],
  },
];

/* ============================================
   SKILLS SECTION
   Card-based layout with category grouping
   and animated skill badges
   ============================================ */
export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="The tools, technologies, and competencies I work with"
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="card-hover rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <category.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.1 + skillIdx * 0.03,
                  }}
                  className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
