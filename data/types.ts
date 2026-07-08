export type ProjectStatus = "live" | "in-development" | "research" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  metrics: ProjectMetric[];
  sections: ProjectSection[];
  stack: string[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string }[];
  cover?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack?: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  headline: string;
  intro: string;
  currently: string[];
  availability: string;
  resume: string;
  socials: SocialLink[];
}
