"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

/* ============================================
   FEATURED PROJECTS DATA
   Sourced from GitHub repositories
   ============================================ */
const featuredProjects = [
  {
    title: "Smart Expense Analyzer",
    description:
      "A personal finance dashboard that goes beyond simple tracking. It ingests bank transaction data, auto-categorizes expenses using regex heuristics, detects hidden recurring subscriptions, flags anomalous spending via IQR analysis, and forecasts next-month spending with moving averages. Also supports exportable PDF/CSV/JSON reports and optional LLM-driven financial summaries.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "SQLite", "Scikit-learn"],
    github: "https://github.com/MeerMehranKhan/smart-expense-analyzer",
    demo: null,
  },
  {
    title: "AI Product Research Agent",
    description:
      "An adaptive product discovery system for e-commerce sellers. It discovers candidate products via scraping and offline data, engineers monetization signals, scores opportunities with dynamic context-aware weights, and generates concrete launch plans with confidence levels, risk assessments, and full unit economics.",
    tech: ["Python", "Streamlit", "Pandas", "SQLite", "FastAPI", "BeautifulSoup"],
    github: "https://github.com/MeerMehranKhan/ai-product-research-agent",
    demo: null,
  },
  {
    title: "AI-Powered Startup Idea Validator",
    description:
      "A startup idea validation platform where you input a concept and get a full business analysis: SWOT breakdown, MVP scope, competitor mapping, and risk assessment. Features a dynamic multi-factor heuristic scoring engine, interactive radar charts, and history versioning with SQLite. Supports LLM analysis or a sophisticated rule-based fallback.",
    tech: ["Python", "Streamlit", "Plotly", "Pydantic", "SQLite"],
    github: "https://github.com/MeerMehranKhan/ai-powered-startup-idea-validator",
    demo: null,
  },
  {
    title: "AI News Intelligence Dashboard",
    description:
      "A real-time news analysis dashboard that pulls live headlines from multiple RSS sources, groups stories by topic and sentiment, detects regional signals and emerging trends, and summarizes the biggest narratives. Includes keyword extraction, topic clustering, and interactive Plotly visualizations.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly", "NLP"],
    github: "https://github.com/MeerMehranKhan/ai-news-intelligence-dashboard",
    demo: null,
  },
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "A local-first resume analysis tool that parses PDF resumes, compares them against job descriptions, identifies missing keywords and ATS formatting gaps, and calculates an explainable match score. It also generates section-by-section coaching with bullet rewrite suggestions. No external API required, works entirely offline with TF-IDF or optional embeddings.",
    tech: ["Python", "Streamlit", "PyMuPDF", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/MeerMehranKhan/ai-powered-resume-analyzer",
    demo: null,
  },
  {
    title: "AI Pricing Intelligence Engine",
    description:
      "A decision-grade pricing intelligence system for e-commerce products. It analyzes market conditions with competitor clustering, computes fully-loaded unit economics, tests business fragility via sensitivity analysis, and delivers actionable go/no-go pricing decisions. Features include full profit simulations across 50 price points, 90-day revenue projections, and exportable reports.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Plotly", "Pydantic", "SQLite"],
    github: "https://github.com/MeerMehranKhan/ai-pricing-intelligence-engine",
    demo: null,
  },
];

/* ============================================
   PROJECTS SECTION
   Featured project cards with hover animations
   ============================================ */
export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of projects that showcase my technical skills and interests"
    >
      {/* Featured Projects Grid */}
      <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group card-hover flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden"
          >
            {/* Card Top Accent */}
            <div className="h-1 bg-gradient-to-r from-accent to-purple-500" />

            <div className="flex flex-1 flex-col p-6">
              {/* Project Icon + Title */}
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Folder size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-snug pt-1">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted/50 border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  <GithubIcon size={15} />
                  Source Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All on GitHub */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/MeerMehranKhan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all hover:underline"
        >
          <GithubIcon size={16} />
          View all projects on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
}
