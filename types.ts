export interface Project {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: string[];
  caseStudy: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type ViewMode = 'terminal' | 'normal' | 'game';