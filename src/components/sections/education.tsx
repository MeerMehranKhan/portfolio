"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GraduationCap, BookOpen, Calendar, Sparkles } from "lucide-react";

/* ============================================
   EDUCATION SECTION
   Timeline-style layout showing academic
   background with relevant interests
   ============================================ */
export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic journey and continuous learning path"
    >
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative sm:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 hidden sm:flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background z-10">
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm card-hover">
              {/* Degree Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="mt-1 text-sm text-accent font-medium">
                    Quaid-e-Awam University of Engineering, Science &amp; Technology
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-5 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>Expected Graduation: 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen size={14} />
                  <span>Current Semester: 8th</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap size={14} />
                  <span>GPA: 3.61</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-border" />

              {/* Relevant Interests */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  Relevant Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Data Science",
                    "Databases",
                    "Analytics",
                    "Machine Learning",
                    "Finance",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Self-Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative sm:pl-16 mt-6"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 hidden sm:flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent/50 bg-background z-10">
              <div className="h-2 w-2 rounded-full bg-accent/50" />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Continuous Self-Learning
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Actively building projects, learning new frameworks, and exploring AI/ML concepts
                    beyond the university curriculum. Committed to staying current with industry tools
                    and best practices through hands-on experimentation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
