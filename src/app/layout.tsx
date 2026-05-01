import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/* ============================================
   FONT CONFIGURATION
   Inter: Primary sans-serif for clean readability
   JetBrains Mono: Monospace for code-style accents
   ============================================ */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
  title: "Meer Mehran Khan | Aspiring AI Engineer & Data Scientist",
  description:
    "Portfolio of Meer Mehran Khan — an aspiring Data Analyst, and Python Developer passionate about building intelligent solutions with data science, machine learning, and emerging technologies.",
  keywords: [
    "Meer Mehran Khan",
    "AI Engineer",
    "Data Scientist",
    "Python Developer",
    "Portfolio",
    "Machine Learning",
    "Data Analysis",
  ],
  authors: [{ name: "Meer Mehran Khan" }],
  openGraph: {
    title: "Meer Mehran Khan | Aspiring Data Analyst & Python Developer",
    description:
      "Portfolio of Meer Mehran Khan — an aspiring Data Analyst, and Python Developer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meer Mehran Khan | Aspiring AI Engineer & Data Scientist",
    description:
      "Portfolio of Meer Mehran Khan — an aspiring AI Engineer, Data Analyst, and Python Developer.",
  },
};

/* ============================================
   ROOT LAYOUT
   Wraps the app in ThemeProvider for dark/light mode
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
