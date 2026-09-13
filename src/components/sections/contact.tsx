"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/components/ui/icons";

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
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const commonDomains = [
      "gmail.com", "hotmail.com", "yahoo.com", "outlook.com", 
      "icloud.com", "aol.com", "protonmail.com", "zoho.com",
      "live.com", "msn.com"
    ];
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    
    const domain = email.toLowerCase().split('@')[1];
    return commonDomains.includes(domain);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formState.email)) {
      setEmailError("Please enter a valid email address (e.g., name@gmail.com, name@hotmail.com)");
      return;
    }
    
    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/imeermehrankhan@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=imeermehrankhan@gmail.com",
      icon: GmailIcon,
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
              I&apos;m actively looking for full-time opportunities in AI, 
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
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                  <link.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{link.name}</p>
                  <p className="text-sm font-medium text-foreground transition-colors break-all">
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
                type="text"
                required
                value={formState.email}
                onChange={(e) => {
                  setFormState((s) => ({ ...s, email: e.target.value }));
                  if (emailError) setEmailError("");
                }}
                className={`w-full rounded-lg border ${emailError ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors`}
                placeholder="your@email.com"
              />
              {emailError && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">
                  {emailError}
                </p>
              )}
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
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-emerald-500 font-medium space-y-1"
              >
                <p>✓ Message sent successfully!</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
