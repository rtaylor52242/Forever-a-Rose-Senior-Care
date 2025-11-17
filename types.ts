import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  link: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface AboutContent {
  story: string[];
  mission: string;
  vision: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
  hoursNote: string;
}