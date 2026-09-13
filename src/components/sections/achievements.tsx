"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ExternalLink, X, Award } from "lucide-react";
import Image from "next/image";

/* ============================================
   CERTIFICATIONS DATA
   ============================================ */
interface Certification {
  title: string;
  issuer: string;
  date?: string;
  image: string;
  verificationUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    image: "/certificates/google-advanced-data-analytics.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/GIF98L3Y1UDM",
  },
  {
    title: "IBM RAG and Agentic AI Professional Certificate",
    issuer: "IBM via Coursera",
    image: "/certificates/ibm-rag-agentic-ai.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/R64S7UZOH6GW",
  },
  {
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google via Coursera",
    image: "/certificates/google-business-intelligence.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/SMWO200NIW03",
  },
];

/* ============================================
   CERTIFICATIONS SECTION
   Professional credential cards with
   certificate images and verification links
   ============================================ */
export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const closeModal = useCallback(() => {
    setSelectedCert(null);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    if (!selectedCert) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [selectedCert, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and completed programs"
    >
      <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-hover flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden"
          >
            {/* Certificate Image */}
            <button
              onClick={() => setSelectedCert(cert)}
              className="group relative w-full bg-white overflow-hidden cursor-pointer"
              aria-label={`View ${cert.title} certificate`}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-white bg-black/60 px-3 py-1.5 rounded-full">
                  Click to enlarge
                </span>
              </div>
            </button>

            {/* Certificate Info */}
            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                  <Award size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto pt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5"
                >
                  View Certificate
                </button>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:border-accent/50"
                >
                  Verify Credential
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate viewer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-white/80 text-sm font-medium truncate pr-4">
                  {selectedCert.title}
                </p>
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm shrink-0"
                  aria-label="Close certificate viewer"
                >
                  Close
                  <X size={20} />
                </button>
              </div>

              {/* Certificate Image */}
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.title} certificate`}
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg object-contain bg-white"
              />

              {/* Modal Footer */}
              <div className="flex justify-center mt-3">
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  Verify Credential
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
