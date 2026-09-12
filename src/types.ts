export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  color: string;
  handle?: string;
  badgeUrl: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'tools' | 'ml_libraries' | 'learning';
  badgeUrl?: string;
  color?: string;
  description?: string;
}

export interface BadgeItem {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  verifyUrl?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'power_bi' | 'python_eda' | 'sql' | 'statistical_modeling';
  tagline: string;
  description: string;
  keyInsights: string[];
  tools: string[];
  metrics: ProjectMetric[];
  dataset: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  badgeText: string;
  type: 'certification' | 'education' | 'achievement';
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  username: string;
  seekingRoles: string[];
  currentLearning: string[];
  collaborationTopics: string[];
  expertiseAreas: string[];
  keyStrengths: string[];
  socials: SocialLink[];
  skills: SkillItem[];
  badges: BadgeItem[];
  projects?: ProjectItem[];
  timeline?: TimelineMilestone[];
}
