import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import type { Service, Testimonial } from '../types';

interface HomePageProps {
  missionStatement: string;
  services: Service[];
  testimonials: Testimonial[];
}

const HomePage: React.FC<HomePageProps> = ({ missionStatement, services, testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src="https://picsum.photos/1600/900?image=22" alt="Caregiver with senior" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
            Premium, Compassionate In-Home Senior Care
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
            Enhancing Quality of Life with Personalized Support
          </p>
          <div className="mt-8">
            <Button to="/contact">Schedule a Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy">Our Mission</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">
          {missionStatement}
        </p>
      </section>

      {/* Key Services Summary */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy text-center">Our Core Services</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-block p-4 bg-brand-rose-gold/20 rounded-full">
                 <service.icon className="w-12 h-12 text-brand-burgundy" />
              </div>
              <h3 className="mt-4 text-2xl font-serif font-bold">{service.title}</h3>
              <p className="mt-2 text-brand-gray">{service.description.substring(0, 80)}...</p>
              <Link to="/services" className="mt-4 inline-block text-brand-burgundy font-bold hover:underline">Learn More &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Snippets */}
      <section className="bg-brand-blue/10 py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy">What Our Families Say</h2>
            <div className="relative mt-8 max-w-3xl mx-auto min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`transition-opacity duration-1000 absolute w-full ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                  <Quote className="w-12 h-12 text-brand-rose-gold mx-auto" />
                  <p className="mt-4 text-xl italic text-brand-gray">"{testimonial.quote}"</p>
                  <p className="mt-4 font-bold text-brand-burgundy">- {testimonial.author}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
                <Button to="/testimonials" variant="secondary">Read More Stories</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;