/* ============================================
   PROFILE DATA - Single source of truth
   All content, dates, links and facts live here.
   Components and metadata read from this file.
   ============================================ */

// ---- Identity and Links ----

export const identity = {
  name: "Meer Mehran Khan",
  firstName: "Meer Mehran",
  lastName: "Khan",
  headline: "Data Analyst | Business Analyst",
  headlineDotSeparated: "Data Analyst \u00b7 Business Analyst",
  location: "Karachi, Sindh, Pakistan",
  email: "imeermehrankhan@gmail.com",
  github: "https://github.com/MeerMehranKhan",
  linkedin: "https://www.linkedin.com/in/meermehrankhan",
  siteUrl: "https://portfolio-meer-mehran-khan.vercel.app",
} as const;

// ---- SEO and Metadata ----

export const seo = {
  title: "Meer Mehran Khan | Data Analyst and Business Analyst",
  description:
    "Entry-level Data Analyst and Business Analyst in Karachi. SQL, Python, Power BI and Excel. Six end-to-end projects and Google certifications. See my work and resume.",
  keywords: [
    "Meer Mehran Khan",
    "Data Analyst",
    "Business Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Karachi",
    "Portfolio",
  ],
} as const;

// ---- Canonical Dates ----

export const dates = {
  degreeStart: "Dec 2022",
  degreeEnd: "Aug 2026",
  degreeRange: "Dec 2022 \u2013 Aug 2026",
  graduated: "Aug 2026",
  internshipRange: "Jun 2026 \u2013 Jul 2026",
  certificationsDate: "Jul 2026",
  copyrightYear: 2026,
} as const;

// ---- Education ----

export const education = {
  degree: "Bachelor of Science in Information Technology",
  degreeShort: "BS Information Technology",
  university: "Quaid-e-Awam University of Engineering, Science & Technology",
  cgpa: "3.21",
  interests: [
    "Data Analytics",
    "Business Analysis",
    "Databases",
    "Finance",
    "Machine Learning",
    "AI",
  ],
} as const;

// ---- Quick Facts ----

export const quickFacts = [
  { label: "Location", value: identity.location },
  { label: "Degree", value: education.degreeShort },
  { label: "CGPA", value: education.cgpa },
  { label: "Graduated", value: dates.graduated },
  {
    label: "Focus Areas",
    value: "Data Analytics, Business Analysis, SQL, Power BI",
  },
  { label: "Status", value: "Open to Full-Time Opportunities" },
] as const;

// ---- Experience ----

export const experience = {
  role: "Data Analysis Intern",
  company: "Qwetrum Technologies",
  location: "Remote",
  duration: dates.internshipRange,
  bullets: [
    "Performed exploratory data analysis on the Sample Superstore dataset (9,994 rows, 21 columns), identifying top-selling products, month-over-month revenue trends, and profitability patterns across categories, regions and discount tiers.",
    "Built data visualizations (bar, line, pie/donut charts) showing sales distribution, seasonality and the effect of discounting on profit margins.",
    "Cleaned and validated the Census Income dataset: missing values, stripped whitespace, removed 24 duplicate rows, corrected data types.",
    "Developed a reproducible Python/Pandas workflow in Jupyter Notebooks with documented before-and-after data quality comparisons.",
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
} as const;

// ---- Skills (closed list) ----

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Databases",
    skills: ["Python", "SQL", "MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "Data Analysis",
    skills: [
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
      "Data Validation",
      "Statistical Analysis",
      "Forecasting",
      "Anomaly Detection",
    ],
  },
  {
    title: "Visualization & BI",
    skills: [
      "Power BI",
      "DAX",
      "Excel",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit",
    ],
  },
  {
    title: "Business Analysis",
    skills: [
      "SWOT Analysis",
      "MVP Scoping",
      "Competitor Analysis",
      "Risk Scoring",
      "Unit Economics",
      "P&L Modeling",
      "Sensitivity Analysis",
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "Regression",
      "Classification",
      "NLP",
      "Sentiment Analysis",
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "Agentic AI",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "Anaconda",
      "Docker",
    ],
  },
];

// ---- Projects ----

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demoUrl?: string;
  screenshot?: string;
}

export const projects: Project[] = [
  {
    title: "AI Pricing Intelligence Engine",
    description:
      "Simulates profit and loss across 50 price points, clusters competitor pricing, runs sensitivity analysis and produces 90-day revenue projections with go/no-go decisions and exportable reports.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Plotly", "Pydantic", "SQLite"],
    github: "https://github.com/MeerMehranKhan/ai-pricing-intelligence-engine",
  },
  {
    title: "Smart Expense Analyzer",
    description:
      "Categorizes transactions with regex rules, flags anomalous spending with IQR outlier detection, detects hidden recurring subscriptions and forecasts next-month spending with moving averages. Exports PDF, CSV and JSON reports.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "SQLite", "Scikit-learn"],
    github: "https://github.com/MeerMehranKhan/smart-expense-analyzer",
  },
  {
    title: "AI News Intelligence Dashboard",
    description:
      "Ingests up to 200 articles per run from 25+ RSS sources, groups them into 13 topic clusters with TF-IDF cosine similarity, scores sentiment with VADER and maps regional signals across 28 countries.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly", "NLP"],
    github: "https://github.com/MeerMehranKhan/ai-news-intelligence-dashboard",
  },
  {
    title: "AI Product Research Agent",
    description:
      "Evaluates 200+ e-commerce candidates with multi-factor weighted scoring, confidence levels and risk indicators, then generates launch plans with full unit economics.",
    tech: ["Python", "Streamlit", "Pandas", "SQLite", "BeautifulSoup"],
    github: "https://github.com/MeerMehranKhan/ai-product-research-agent",
  },
  {
    title: "AI-Powered Startup Idea Validator",
    description:
      "Turns one idea input into SWOT, MVP scope, competitor mapping and multi-factor risk scoring, with interactive radar charts and SQLite history. Uses an LLM when available and a rule-based fallback when not.",
    tech: ["Python", "Streamlit", "Plotly", "Pydantic", "SQLite"],
    github:
      "https://github.com/MeerMehranKhan/ai-powered-startup-idea-validator",
  },
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "Parses PDF resumes, compares them with job descriptions using TF-IDF, finds missing keywords and ATS formatting gaps, and returns an explainable match score with rewrite coaching. Runs fully offline.",
    tech: ["Python", "Streamlit", "PyMuPDF", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/MeerMehranKhan/ai-powered-resume-analyzer",
  },
];

// ---- Certifications ----

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationUrl: string;
  company?: "Google" | "IBM" | "Microsoft";
}

export const certifications: Certification[] = [
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    date: dates.certificationsDate,
    image: "/certificates/google-advanced-data-analytics.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/GIF98L3Y1UDM",
    company: "Google",
  },
  {
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google via Coursera",
    date: dates.certificationsDate,
    image: "/certificates/google-business-intelligence.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/SMWO200NIW03",
    company: "Google",
  },
  {
    title: "IBM RAG and Agentic AI Professional Certificate",
    issuer: "IBM via Coursera",
    date: dates.certificationsDate,
    image: "/certificates/ibm-rag-agentic-ai.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/R64S7UZOH6GW",
    company: "IBM",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    date: "Jul 2026",
    image: "/certificates/google-data-analytics.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/4OGPHZJU9NAZ",
    company: "Google",
  },
  {
    title: "Microsoft Power BI Data Analyst Professional Certificate",
    issuer: "Microsoft via Coursera",
    date: "Oct 2026",
    image: "/certificates/microsoft-power-bi-data-analyst.png",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/LLW7N1VR339P",
    company: "Microsoft",
  },
];

// ---- Hero copy ----

export const heroCopy = {
  badge: "Open to Full-Time Opportunities",
  pills: ["SQL", "Python", "Power BI", "Excel"],
  paragraph:
    "I take messy datasets and turn them into dashboards, forecasts and recommendations a business can act on. My projects cover pricing, expense forecasting, anomaly detection and news analysis, and every one of them is on GitHub because I\u2019d rather show my work than talk about it.",
} as const;

// ---- About copy ----

export const aboutCopy = {
  subtitle: "Getting to know who I am and what drives me",
  paragraphs: [
    `Hey, I'm <name>Meer Mehran Khan</name>, a BS Information Technology graduate from <university>Quaid-e-Awam University of Engineering, Science & Technology</university>. I'm looking for entry-level Data Analyst and Business Analyst roles.`,
    `My work usually starts with a messy dataset or a slow process and ends with something people can use: a clean file, a dashboard, a forecast, or a clear recommendation. I work mainly in SQL, Python (Pandas), Power BI and Excel.`,
    `I have six end-to-end projects across pricing, personal finance, news analysis and decision support, plus a data analysis internship at Qwetrum Technologies (${dates.internshipRange}). I'm open to full-time roles in Karachi, hybrid, remote, or abroad.`,
  ],
} as const;

// ---- Contact copy ----

export const contactCopy = {
  heading: "Let's Connect",
  paragraph:
    "I'm looking for full-time, entry-level Data Analyst and Business Analyst roles. If you're a recruiter, hiring manager or fellow analyst with an opportunity or question, I'd like to hear from you.",
} as const;
