"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, FileText, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Image from "next/image";

/* ============================================
   HERO SECTION
   Full-viewport landing with animated text,
   floating background shapes, profile image,
   CTA buttons, and social links
   ============================================ */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* ---- Animated Background Elements ---- */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/8 blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-indigo-500/6 blur-2xl animate-pulse-glow" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ---- Main Content ---- */}
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Internships & Entry-Level Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Meer Mehran{" "}
              <span className="gradient-text">Khan</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium"
            >
              Data Scientist &amp; Analyst | Python Developer
            </motion.p>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 max-w-xl text-muted-foreground leading-relaxed text-sm sm:text-base mx-auto md:mx-0"
            >
              I like taking messy datasets and turning them into something people can actually use,
              whether that&apos;s a dashboard, a predictive model, or just a clean CSV that finally makes sense.
              Most of what I build lives on GitHub because I&apos;d rather show my work than talk about it.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#projects");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 hover:brightness-110"
              >
                <ArrowDown size={16} />
                View Projects
              </a>
              <a
                href="/Meer-Mehran-Khan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                <FileText size={16} />
                View Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex gap-4 justify-center md:justify-start"
            >
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
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="group relative">
              {/* Gradient ring behind the image */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-purple-500 to-indigo-600 opacity-60 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full overflow-hidden border-4 border-card bg-card shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/profile-placeholder.png"
                  alt="Meer Mehran Khan"
                  fill
                  priority
                  loading="eager"
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
