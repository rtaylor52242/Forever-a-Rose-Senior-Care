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
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface AboutContent {
  story: string[];
  mission: string;
  vision: string;
  image: string;
  coreValues: CoreValue[];
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  hours: string;
  hoursNote: string;
}