"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

/* ============================================
   FOOTER COMPONENT
   Name, tagline, social links, copyright,
   and a smooth back-to-top button
   ============================================ */
export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Name & Tagline */}
          <div>
            <h3 className="text-lg font-bold gradient-text">
              Meer Mehran Khan
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Analyst · Python Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              {
                href: "https://github.com/MeerMehranKhan",
                icon: GithubIcon,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/meermehrankhan",
                icon: LinkedinIcon,
                label: "LinkedIn",
              },
              {
                href: "mailto:imeermehrankhan@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Meer Mehran Khan. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
