export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
