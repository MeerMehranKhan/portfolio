"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import Image from "next/image";
import {
  Code2,
  Database,
  BarChart3,
  Wrench,
  Brain,
  LineChart,
  Search,
  Cpu,
  Bot,
  MessageSquare,
  BrainCircuit,
  Network,
} from "lucide-react";
import { type IconType } from "react-icons";
import {
  SiGit,
  SiGithub,
  SiStreamlit,
  SiJupyter,
  SiGooglecolab,
  SiAnaconda,
} from "react-icons/si";
import type { LucideIcon } from "lucide-react";

/* ============================================
   SKILL ICON MAPPING
   Maps each skill to its branded icon + color,
   or a semantic Lucide icon for concepts
   ============================================ */
type SkillIconEntry =
  | { type: "si"; icon: IconType; color: string; darkColor?: string }
  | { type: "lucide"; icon: LucideIcon }
  | { type: "image"; src: string };

const skillIcons: Record<string, SkillIconEntry> = {
  // Programming Languages
  Python: { type: "image", src: "/icons/python.svg" },
  JavaScript: { type: "image", src: "/icons/javascript.svg" },
  HTML: { type: "image", src: "/icons/html.svg" },
  CSS: { type: "image", src: "/icons/css.svg" },
  DAX: { type: "lucide", icon: BarChart3 },

  // Data Science & AI
  NumPy: { type: "image", src: "/icons/numpy.svg" },
  Pandas: { type: "image", src: "/icons/pandas.svg" },
  Matplotlib: { type: "image", src: "/icons/matplotlib.svg" },
  Seaborn: { type: "image", src: "/icons/seaborn.png" },
  "Scikit-learn": { type: "image", src: "/icons/scikit.svg" },
  NLP: { type: "lucide", icon: Brain },
  "Data Analysis": { type: "lucide", icon: BarChart3 },
  "Data Visualization": { type: "lucide", icon: LineChart },
  "Machine Learning": { type: "lucide", icon: Cpu },
  "Exploratory Data Analysis (EDA)": { type: "lucide", icon: Search },

  // Databases
  MySQL: { type: "image", src: "/icons/mysql.svg" },
  MongoDB: { type: "image", src: "/icons/mongodb.svg" },
  PostgreSQL: { type: "image", src: "/icons/postgresql.svg" },

  // Tools & Platforms
  Git: { type: "si", icon: SiGit, color: "#F05032" },
  GitHub: {
    type: "si",
    icon: SiGithub,
    color: "#181717",
    darkColor: "#ffffff",
  },
  Docker: { type: "image", src: "/icons/docker.svg" },
  Streamlit: { type: "si", icon: SiStreamlit, color: "#FF4B4B" },
  "VS Code": { type: "image", src: "/icons/vscode.svg" },
  "Jupyter Notebook": { type: "si", icon: SiJupyter, color: "#F37626" },
  "Google Colab": { type: "si", icon: SiGooglecolab, color: "#F9AB00" },
  Anaconda: { type: "si", icon: SiAnaconda, color: "#44A833" },
  "Power BI": { type: "image", src: "/icons/powerbi.svg" },
  Excel: { type: "image", src: "/icons/excel.svg" },
  Linux: { type: "image", src: "/icons/linux.svg" },

  // AI & Advanced Topics
  "Agentic AI": { type: "lucide", icon: Bot },
  "Large Language Models": { type: "lucide", icon: MessageSquare },
  "Deep Learning": { type: "lucide", icon: BrainCircuit },
  "Neural Networks": { type: "lucide", icon: Network },
  RAG: { type: "lucide", icon: Database },
  Regression: { type: "lucide", icon: LineChart },
  Classification: { type: "lucide", icon: BrainCircuit },
  "Computer Vision": { type: "lucide", icon: Search },
  "Generative AI": { type: "lucide", icon: BrainCircuit },
};

/* ============================================
   SKILL ICON COMPONENT
   Renders branded SI icon with color,
   or semantic Lucide icon with accent
   ============================================ */
function SkillIcon({ name }: { name: string }) {
  const entry = skillIcons[name];
  if (!entry) return null;

  if (entry.type === "image") {
    return (
      <div className="relative w-5 h-5 shrink-0 rounded-sm overflow-hidden">
        <Image src={entry.src} alt={name} fill className="object-contain" sizes="20px" />
      </div>
    );
  }

  if (entry.type === "si") {
    const SiIcon = entry.icon;
    return (
      <SiIcon
        size={20}
        className="shrink-0"
        style={{ color: entry.color }}
        data-dark-color={entry.darkColor}
      />
    );
  }

  const LIcon = entry.icon;
  return <LIcon size={20} className="shrink-0 text-accent" />;
}

/* ============================================
   DARK-MODE AWARE SKILL ICON
   Uses CSS to swap color in dark mode
   ============================================ */
function SkillIconThemed({ name }: { name: string }) {
  const entry = skillIcons[name];
  if (!entry) return null;

  if (entry.type === "image") {
    return (
      <div className="relative w-5 h-5 shrink-0 rounded-sm overflow-hidden">
        <Image src={entry.src} alt={name} fill className="object-contain" sizes="20px" />
      </div>
    );
  }

  if (entry.type === "si" && entry.darkColor) {
    const SiIcon = entry.icon;
    return (
      <>
        <SiIcon
          size={20}
          className="shrink-0 dark:hidden"
          style={{ color: entry.color }}
        />
        <SiIcon
          size={20}
          className="shrink-0 hidden dark:inline-block"
          style={{ color: entry.darkColor }}
        />
      </>
    );
  }

  return <SkillIcon name={name} />;
}

/* ============================================
   SKILLS DATA
   Organized by category with icons
   ============================================ */
const skillCategories = [
  {
    title: "Programming & Databases",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "DAX",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ],
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
      "Data Analysis",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Streamlit",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Anaconda",
      "Power BI",
      "Excel",
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Large Language Models",
      "Generative AI",
      "RAG",
      "Agentic AI",
      "NLP",
      "Regression",
      "Classification",
    ],
  },
];

/* ============================================
   SKILLS SECTION
   Card-based layout with category grouping
   and animated skill badges with branded icons
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
      <div ref={ref} className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="card-hover rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <category.icon size={18} />
              </div>
              <h3 className="text-[15px] font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            {/* Skill Tags with Branded Icons */}
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.1 + skillIdx * 0.03,
                  }}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-1 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5 cursor-default"
                >
                  <SkillIconThemed name={skill} />
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
