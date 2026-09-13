"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { MapPin, Calendar, Briefcase, ExternalLink, X } from "lucide-react";
import Image from "next/image";

/* ============================================
   EXPERIENCE DATA
   ============================================ */
const experience = {
  role: "Data Analysis Intern",
  company: "Qwetrum Technologies",
  location: "Remote",
  duration: "June 2026 - July 2026",
  description: [
    "Performed exploratory data analysis on the Sample Superstore dataset (9,994 rows, 21 columns), identifying top-selling products, month-over-month revenue trends, and profitability patterns across categories and regions.",
    "Built data visualizations (bar charts, line charts, pie/donut charts) to communicate sales distribution, seasonal trends, and the effects of discounting on profit margins.",
    "Cleaned and validated the Census Income dataset by handling missing values, stripping whitespace, removing 24 duplicate rows, and correcting data types to prepare it for downstream analysis.",
    "Developed a reproducible Python/Pandas workflow in Jupyter Notebooks with documented before-and-after comparisons of data quality.",
  ],
  technologies: [
    "Python",
    "Pandas",
    "Jupyter Notebook",
    "Data Cleaning",
    "EDA",
    "Data Visualization",
  ],
  githubUrl:
    "https://github.com/MeerMehranKhan/qwetrum-technologies-data-analytics",
  certificateImage: "/certificates/qwetrum-certificate.png",
};

/* ============================================
   EXPERIENCE SECTION
   Internship card with certificate display
   ============================================ */
export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showCertificate, setShowCertificate] = useState(false);

  const closeCertificate = useCallback(() => {
    setShowCertificate(false);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    if (!showCertificate) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCertificate();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [showCertificate, closeCertificate]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCertificate]);

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional experience and internships"
    >
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm"
        >
          {/* Header: Role, Company, Meta */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {experience.role}
              </h3>
              <p className="text-base font-medium text-accent mt-1">
                {experience.company}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {experience.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {experience.duration}
              </span>
            </div>
          </div>

          {/* Description Bullets */}
          <ul className="space-y-3 mb-6">
            {experience.description.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {bullet}
              </motion.li>
            ))}
          </ul>

          {/* Certificate - Central Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
              Internship Certificate
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowCertificate(true)}
                className="group relative w-full max-w-lg rounded-lg border border-border overflow-hidden bg-white transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer"
                aria-label="View certificate in full size"
              >
                <Image
                  src={experience.certificateImage}
                  alt="Qwetrum Technologies Internship Certificate"
                  width={800}
                  height={566}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-white bg-black/60 px-3 py-1.5 rounded-full">
                    Click to enlarge
                  </span>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Technology Tags + GitHub Link */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={experience.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:border-accent/50 shrink-0"
            >
              <Briefcase size={16} />
              View GitHub Repository
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={closeCertificate}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate viewer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCertificate}
                className="absolute -top-12 right-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                aria-label="Close certificate viewer"
              >
                Close
                <X size={20} />
              </button>
              <Image
                src={experience.certificateImage}
                alt="Qwetrum Technologies Internship Certificate"
                width={1600}
                height={1132}
                className="w-full h-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
