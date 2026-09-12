"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Zap,
  Brain,
  Search,
  BookOpen,
  MessageCircle,
} from "lucide-react";

/* ============================================
   WHY WORK WITH ME DATA
   Non-technical strengths with short explanations
   ============================================ */
const strengths = [
  {
    icon: Zap,
    title: "Fast Learner",
    description:
      "Give me a new framework or tool and I'll have a working prototype by the end of the day. I learn best by building, and I don't wait for someone to teach me.",
  },
  {
    icon: Brain,
    title: "Critical Thinker",
    description:
      "I don't just jump to solutions. I break the problem down first, weigh the tradeoffs, and pick the approach that actually makes sense for the context.",
  },
  {
    icon: Search,
    title: "Problem Solver",
    description:
      "Debugging a stubborn pipeline at 2 AM or figuring out why a model's accuracy tanked? That's the kind of challenge that keeps me going, not something I avoid.",
  },
  {
    icon: BookOpen,
    title: "Curious by Nature",
    description:
      "I regularly dig into research papers, source code, and documentation that goes way beyond what's required. If something is interesting, I need to understand how it works.",
  },
  {
    icon: Search,
    title: "Analytical Thinker",
    description:
      "I'm the kind of person who stares at a dataset until the patterns click. I enjoy the slow part of analysis, the part where you question your own assumptions and dig deeper before jumping to conclusions.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communicator",
    description:
      "Whether I'm explaining a technical concept to a non-technical stakeholder or presenting findings to a team, I focus on clarity and making sure the message actually lands.",
  },
];

/* ============================================
   WHY WORK WITH ME SECTION
   Grid of strength cards
   ============================================ */
export function WhyMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="why-me"
      title="Why Work With Me"
      subtitle="Beyond technical skills, here are the qualities I bring to every team and project"
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((strength, i) => (
          <motion.div
            key={strength.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group card-hover rounded-xl border border-border bg-card p-6 shadow-sm text-center"
          >
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/20">
              <strength.icon size={24} />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              {strength.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {strength.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
