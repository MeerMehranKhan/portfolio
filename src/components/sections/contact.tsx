"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

/* ============================================
   CONTACT SECTION
   Contact form + social links + closing CTA
   ============================================ */
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    const mailtoLink = `mailto:imeermehrankhan@gmail.com?subject=${subject}&body=${body}`;
    
    // Fallback: Copy email to clipboard in case mailto doesn't work
    navigator.clipboard.writeText("imeermehrankhan@gmail.com");
    
    // Open in new tab (often works better than location.href in React)
    window.open(mailtoLink, '_blank');
    
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      href: "mailto:imeermehrankhan@gmail.com",
      icon: Mail,
      label: "imeermehrankhan@gmail.com",
      name: "Email",
    },
    {
      href: "https://github.com/MeerMehranKhan",
      icon: GithubIcon,
      label: "github.com/MeerMehranKhan",
      name: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/meermehrankhan",
      icon: LinkedinIcon,
      label: "linkedin.com/in/meermehrankhan",
      name: "LinkedIn",
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project idea, opportunity, or just want to connect? I'd love to hear from you."
    >
      <div ref={ref} className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Left: Contact Info + Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Let&apos;s Build Something Together
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I&apos;m actively looking for internship opportunities and entry-level roles in AI, 
              data science, and Python development. Whether you&apos;re a recruiter, a fellow developer, 
              or someone with an interesting project, I&apos;m always open to conversation.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.name}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110"
            >
              <Send size={16} />
              Send Message
            </button>

            {/* Success Message */}
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-emerald-500 font-medium"
              >
                ✓ Message sent! (Or if it didn&apos;t open your email app, my email address was copied to your clipboard).
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
