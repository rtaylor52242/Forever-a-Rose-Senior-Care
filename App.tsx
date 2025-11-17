import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import ScrollToTop from './components/ScrollToTop';
import { 
  HOME_MISSION,
  ABOUT_CONTENT, 
  SERVICES, 
  BLOG_POSTS, 
  TESTIMONIALS, 
  CONTACT_INFO,
  SOCIAL_LINKS
} from './data';
import type { AboutContent, Service, BlogPost, Testimonial, ContactInfo, SocialLink } from './types';


function App() {
  const [homeMission, setHomeMission] = useState<string>(HOME_MISSION);
  const [aboutContent, setAboutContent] = useState<AboutContent>(ABOUT_CONTENT);
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(CONTACT_INFO);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(SOCIAL_LINKS);
  const [homeImage, setHomeImage] = useState<string>("https://picsum.photos/1600/900?image=22");

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-brand-cream text-brand-gray font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage missionStatement={homeMission} services={services} testimonials={testimonials} homeImage={homeImage} />} />
            <Route path="/about" element={<AboutPage content={aboutContent} />} />
            <Route path="/services" element={<ServicesPage services={services} />} />
            <Route path="/blog" element={<BlogPage posts={blogPosts} />} />
            <Route path="/testimonials" element={<TestimonialsPage testimonials={testimonials} />} />
            <Route path="/contact" element={<ContactPage contactInfo={contactInfo} />} />
            <Route path="/admin" element={
              <AdminPage
                homeMission={homeMission}
                setHomeMission={setHomeMission}
                aboutContent={aboutContent}
                setAboutContent={setAboutContent}
                services={services}
                setServices={setServices}
                blogPosts={blogPosts}
                setBlogPosts={setBlogPosts}
                testimonials={testimonials}
                setTestimonials={setTestimonials}
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                socialLinks={socialLinks}
                setSocialLinks={setSocialLinks}
                homeImage={homeImage}
                setHomeImage={setHomeImage}
              />
            } />
          </Routes>
        </main>
        <Footer contactInfo={contactInfo} socialLinks={socialLinks} />
      </div>
    </HashRouter>
  );
}

export default App;