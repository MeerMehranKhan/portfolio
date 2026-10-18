"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

/* ============================================
   QUICK FACTS DATA
   ============================================ */
type QuickFact = {
  label: string;
  value: string;
} & (
  | { icon: LucideIcon; image?: never }
  | { image: string; icon?: never }
);

const quickFacts: QuickFact[] = [
  { image: "/icons/google-maps.svg", label: "Location", value: "Karachi, Sindh, Pakistan" },
  { image: "/icons/graduation.svg", label: "Degree", value: "BS Information Technology" },
  { image: "/icons/trophy.svg", label: "CGPA", value: "3.21" },
  { image: "/icons/calendar.svg", label: "Graduated", value: "September 2026" },
  { image: "/icons/brain.svg", label: "Focus Areas", value: "AI/ML, Data Science & Analytics, Business Intelligence" },
  { image: "/icons/status.svg", label: "Status", value: "Open to Full-Time Opportunities" },
];

/* ============================================
   ABOUT SECTION
   Introduction + Quick Facts cards
   ============================================ */
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Getting to know who I am and what drives me"
    >
      <div ref={ref} className="grid gap-10 lg:grid-cols-5 items-stretch">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex flex-col justify-center space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed">
            Hey, I&apos;m <span className="text-foreground font-semibold">Meer Mehran Khan</span>,
            BS Information Technology graduate from{" "}
            <span className="text-foreground font-medium md:whitespace-nowrap">
              Quaid-e-Awam University of Engineering, Science &amp; Technology
            </span>
            , focused on data analysis, automation, and building tools that solve real problems.
            Most of my work starts with a messy dataset or an inefficient process, and ends with
            a working solution.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I work primarily in <span className="text-accent font-medium">Python</span>,
            using Pandas, SQL, and Streamlit to build end-to-end data pipelines, analytical dashboards,
            and ML-driven applications. My focus on <span className="text-accent font-medium">AI</span> and{" "}
            <span className="text-accent font-medium sm:whitespace-nowrap">Data Analytics</span> comes from consistently
            working with real-world data: cleaning it, analyzing it, and turning it into something
            decision-makers can actually use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I learn best by building. Every project on my GitHub represents a problem I identified,
            scoped, and shipped from NLP-based text analysis to finance automation and agentic
            AI systems. I&apos;m currently open to full-time opportunities where I can apply
            these skills to real business data and grow as an analyst and developer.
          </p>
        </motion.div>

        {/* Quick Facts Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 h-full"
        >
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-full flex flex-col justify-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5">
              Quick Facts
            </h3>
            <div className="space-y-4">
              {quickFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {fact.image ? (
                      <div className="relative h-5 w-5">
                        <Image
                          src={fact.image}
                          alt={fact.label}
                          fill
                          className="object-contain"
                          sizes="20px"
                        />
                      </div>
                    ) : fact.icon ? (
                      <fact.icon size={16} />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{fact.label}</p>
                    <p className="text-sm font-medium text-foreground">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
