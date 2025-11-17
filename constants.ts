import type { NavLink } from './types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact Us', path: '/contact' },
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
];