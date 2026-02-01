export type CMSRole = 'admin' | 'editor' | 'hr' | 'marketing';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  role: CMSRole;
  photoURL?: string;
}

export interface Executive {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  order: number;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  published: boolean;
  createdAt: string;
  closingDate?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  sector?: string;
  icon?: string;
  image?: string;
  features?: string[];
  order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  scope: string;
  technologies: string[];
  sector: string;
  images: string[];
  summary: string;
  year?: string;
  published: boolean;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
  scheduledFor?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  type: 'news' | 'press' | 'success-story' | 'event';
  coverImage?: string;
  date: string;
  published: boolean;
  createdAt: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  logo: string;
  type: 'client' | 'partner';
  url?: string;
  order: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export interface CareerApplication {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  cvUrl: string;
  coverLetter?: string;
  createdAt: string;
}
