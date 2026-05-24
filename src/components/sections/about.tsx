"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Calendar, Brain, Briefcase } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

/* ============================================
   QUICK FACTS DATA
   ============================================ */
const quickFacts = [
  { icon: MapPin, label: "Location", value: "Nawabshah, Sindh, Pakistan" },
  { icon: GraduationCap, label: "Degree", value: "BS Information Technology" },
  { icon: Calendar, label: "Graduation", value: "2026" },
  { icon: Brain, label: "Focus Areas", value: "AI, Data Science, Python" },
  { icon: Briefcase, label: "Status", value: "Open to Opportunities" },
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
      <div ref={ref} className="grid gap-10 lg:grid-cols-5">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed">
            Hey, I&apos;m <span className="text-foreground font-semibold">Meer Mehran Khan</span>.
            I&apos;m wrapping up my final year of IT at{" "}
            <span className="text-foreground font-medium">
              Quaid-e-Awam University of Engineering, Science &amp; Technology
            </span>
            . Between classes and side projects, I spend most of my time writing Python and figuring
            out how to make data do something interesting.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I spend most of my time building things with <span className="text-accent font-medium">Python</span>.
            That could be training ML models, writing data pipelines, or putting together full-stack dashboards
            with Streamlit. I got into <span className="text-accent font-medium">AI</span> and{" "}
            <span className="text-accent font-medium">Data Science</span> because I like turning messy real-world
            data into something actually useful. That part of the work never gets old for me.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Outside of coursework, I&apos;m usually working on a side project or picking up something new
            like NLP, finance analytics, or agentic systems. I put everything I build on GitHub because
            I think shipping real projects says more than any certification.
          </p>
        </motion.div>

        {/* Quick Facts Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5">
              Quick Facts
            </h3>
            <div className="space-y-4">
              {quickFacts.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
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
