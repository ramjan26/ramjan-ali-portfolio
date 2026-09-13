export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  stack: string[];
  accent: "violet" | "blue" | "green" | "orange" | "black";
  phase: string;
};

export const profile = {
  name: "Ramjan Ali",
  greeting: "Hi, I'm Ramjan",
  wave: "👋",
  headline: "I turn ideas, data and intelligent systems into useful digital experiences.",
  intro:
    "A multidisciplinary developer exploring software, AI, data and interfaces-from full-stack products to machine-learning experiments and visual analytics.",
  eyebrow: "SOFTWARE / AI / DATA / PRODUCT",
};

export const technologyLogos = [
  { label: "Python", mark: "PY", tone: "violet", icon: "/assets/images/tech/python.svg" },
  { label: "JavaScript", mark: "JS", tone: "gold", icon: "/assets/images/tech/javascript.svg" },
  { label: "TypeScript", mark: "TS", tone: "blue", icon: "/assets/images/tech/typescript.svg" },
  { label: "React", mark: "R", tone: "cyan", icon: "/assets/images/tech/react.svg" },
  { label: "Next.js", mark: "N", tone: "black", icon: "/assets/images/tech/nextjs.svg" },
  { label: "AI / ML", mark: "AI", tone: "purple", icon: "/assets/images/tech/aiml.svg" },
  { label: "OCR / Vision", mark: "CV", tone: "green", icon: "/assets/images/tech/vision.svg" },
  { label: "Qlik / Plotly", mark: "DV", tone: "orange", icon: "/assets/images/tech/dataviz.svg" },
];

export const capabilityGroups = [
  {
    title: "Software",
    body: "Product interfaces, web applications, workflows and reusable systems with a strong focus on clarity.",
  },
  {
    title: "Intelligence",
    body: "AI, machine learning, NLP and OCR experiments that make software more useful without hiding uncertainty.",
  },
  {
    title: "Data",
    body: "Data preparation, analysis and visualization that turn information into patterns people can act on.",
  },
  {
    title: "Interfaces",
    body: "Clean, responsive interfaces that connect people to products, models and information without unnecessary complexity.",
  },
];

export const proficiency = [
  { label: "Software development", value: 88 },
  { label: "AI / ML experimentation", value: 84 },
  { label: "Data analytics", value: 86 },
  { label: "Frontend / UX engineering", value: 83 },
];

export const process = [
  { step: "01", title: "Frame the problem", text: "Start with the user, the constraint and the thing that actually needs to change." },
  { step: "02", title: "Find the signal", text: "Simplify messy information until the important pattern, behavior or decision becomes visible." },
  { step: "03", title: "Build a working idea", text: "Prototype early-interfaces, models and workflows all need something tangible to react to." },
  { step: "04", title: "Refine the system", text: "Push on edge cases, interaction quality, maintainability and the details that make a build feel finished." },
];

export const projects: Project[] = [
  {
    slug: "personal-blog-cms",
    title: "Personal Blog CMS",
    category: "FULL-STACK PRODUCT",
    summary: "A publishing system designed around writing, organizing and presenting content with minimal friction.",
    detail: "The project explores the complete content loop: authoring, structured content, editorial organization and a readable public experience. The emphasis is on product flow, maintainability and keeping the admin experience separate from the reading experience.",
    stack: ["Next.js", "TypeScript", "CMS", "Product UI"],
    accent: "violet",
    phase: "PRODUCT BUILD",
  },
  {
    slug: "truthlens",
    title: "TruthLens",
    category: "AI / NLP",
    summary: "An AI-assisted fake-news detection concept focused on communicating model signals without pretending uncertainty does not exist.",
    detail: "TruthLens is about the interface around an AI decision as much as the model itself. The useful challenge is presenting probability, evidence and interpretation in a way that remains understandable and responsible.",
    stack: ["Python", "NLP", "Machine Learning", "AI UX"],
    accent: "blue",
    phase: "AI EXPERIMENT",
  },
  {
    slug: "nutrisnap",
    title: "NutriSnap",
    category: "OCR + COMPUTER VISION",
    summary: "A camera-to-information workflow that extracts nutrition details from images and turns them into structured, readable information.",
    detail: "The product challenge is the bridge between imperfect visual input and useful structure: capture, extract, normalize and present. NutriSnap demonstrates how computer vision can become a practical product capability.",
    stack: ["OCR", "Python", "Image Processing", "Data Extraction"],
    accent: "green",
    phase: "VISION PROTOTYPE",
  },
  {
    slug: "analytics-dashboard",
    title: "Data Analytics Dashboard",
    category: "DATA + VISUALIZATION",
    summary: "A visual analytics project using Qlik Sense, Pandas and Plotly to make structured data easier to explore and interpret.",
    detail: "The focus is the pipeline behind the charts: preparing data, selecting useful dimensions and creating visual hierarchy that supports exploration rather than simply decorating a dataset.",
    stack: ["Qlik Sense", "Pandas", "Plotly", "Data Modeling"],
    accent: "orange",
    phase: "ANALYTICS BUILD",
  },
  {
    slug: "gui",
    title: "GUI",
    category: "SOFTWARE INTERFACE",
    summary: "A focused interface project exploring desktop-style interaction, intuitive controls, structured layouts, smooth navigation, and clear user feedback.",
    detail: "GUI is a study in making software feel understandable: hierarchy, state changes, feedback and responsive interaction all matter just as much as the underlying logic.",
    stack: ["GUI", "Interaction", "UI Design", "Software"],
    accent: "black",
    phase: "INTERFACE STUDY",
  },
  {
    slug: "apdcl-app",
    title: "APDCL APP",
    category: "SOFTWARE INTERFACE",
    summary: "A React-based application concept shaped around clear information architecture, service-oriented flows and responsive interaction.",
    detail: "APDCL APP explores how a utility-focused product can make important information easier to scan and actions easier to complete. The emphasis is on component reuse, straightforward navigation, responsive behavior and a calm interface hierarchy.",
    stack: ["React", "JavaScript", "Responsive UI", "Component Architecture"],
    accent: "violet",
    phase: "REACT BUILD",
  },
];

export const socialLinks = {
  github: "https://github.com/ramjan26",
  linkedin: "https://www.linkedin.com/in/ramjan26/",
  instagram: "https://www.instagram.com/mrdlholic/",
  facebook: "https://www.facebook.com/mridul.choudhury.319/",
  email: "ramjan02611@gmail.com",
};
