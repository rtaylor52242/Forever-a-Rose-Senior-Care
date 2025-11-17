import type { Service, BlogPost, Testimonial, AboutContent, ContactInfo } from './types';
import { HeartHandshake, Pill, Car, UtensilsCrossed, Users, BellRing } from 'lucide-react';

export const HOME_MISSION = "Forever a Rose Senior Care is dedicated to providing premium, compassionate, and personalized in-home senior care that enhances the quality of life for clients and peace of mind for families.";

export const ABOUT_CONTENT: AboutContent = {
  story: [
    "Welcome to Forever a Rose Senior Care, founded by Renee Drummond, a dedicated and passionate Certified Nursing Assistant (CNA). With years of hands-on experience in various healthcare settings, Renee witnessed a need for more personalized, dignified, and compassionate care that truly honors the individual. She built this service on the belief that every senior deserves to live with comfort, joy, and the highest quality of life, all within the familiar surroundings of their own home.",
    "Renee's extensive background as a CNA is not just a qualification; it's the heart of our company. It ensures that all care is provided with a professional, knowledgeable, and empathetic touch. We don't just see clients; we see family."
  ],
  mission: "To provide premium, compassionate, and personalized in-home senior care that enhances the quality of life for clients and peace of mind for families.",
  vision: "To become the most trusted and sought-after luxury senior care provider in Clayton and the surrounding North Carolina areas."
};

export const SERVICES: Service[] = [
  {
    icon: HeartHandshake,
    title: 'Personal Care',
    description: 'Assistance with daily living activities including bathing, dressing, grooming, and mobility support, always respecting dignity and privacy.',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Reliable reminders and assistance to ensure medications are taken correctly and on schedule, managed by a Certified Nursing Assistant.',
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Safe and comfortable transportation to appointments, errands, social events, and family gatherings.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Meal Preparation',
    description: 'Nutritious and delicious meal planning and preparation tailored to dietary needs and preferences, promoting health and well-being.',
  },
  {
    icon: Users,
    title: 'Companionship & Recreational Support',
    description: 'Engaging conversation, companionship, and support for hobbies, outings, and social activities to combat loneliness and foster joy.',
  },
  {
    icon: BellRing,
    title: 'Concierge Services',
    description: 'Personalized assistance with appointments, errands, household organization, and special requests, offering unparalleled convenience and peace of mind.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '5 Benefits of In-Home Senior Care',
    excerpt: 'Discover how staying in the comfort of your own home can enhance independence, provide personalized attention, and reduce stress for seniors and their families.',
    link: '#/blog/1',
  },
  {
    title: 'Choosing the Right Caregiver for Your Loved One',
    excerpt: 'A guide to finding compassionate, trustworthy, and skilled caregivers, focusing on qualifications, experience, and the importance of a personal connection.',
    link: '#/blog/2',
  },
  {
    title: 'Healthy Eating Tips for Seniors',
    excerpt: 'Simple and delicious ways to maintain a balanced diet for optimal senior health, energy, and vitality, with practical meal ideas.',
    link: '#/blog/3',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Forever a Rose Senior Care has been a true blessing for our family. Renee's professionalism and genuine compassion made all the difference for my mother. We trust them completely.",
    author: 'Sarah M., Daughter of Client',
  },
  {
    quote: 'The personalized care my husband receives is exceptional. From medication management to cheerful companionship, every detail is handled with the utmost care and respect. Highly recommend!',
    author: 'David L., Husband of Client',
  },
  {
    quote: 'Choosing Forever a Rose was the best decision we made. The peace of mind knowing my father is in such capable and caring hands is invaluable. It truly feels like an extension of our family.',
    author: 'Emily R., Daughter of Client',
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: '919-626-1260',
  email: 'ForeveraRose.FamilyServices@gmail.com',
  address: 'Clayton, NC & Surrounding Areas',
  hours: 'Monday - Friday, 9:00 AM - 5:00 PM',
  hoursNote: '(Flexible for urgent care needs)'
};