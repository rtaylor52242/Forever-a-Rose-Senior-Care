
import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-brand-rose-gold">
    <Quote className="w-10 h-10 text-brand-blue/50 mb-4" />
    <p className="text-lg italic text-brand-gray">"{testimonial.quote}"</p>
    <p className="mt-6 font-bold text-brand-burgundy text-right">- {testimonial.author}</p>
  </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <div className="py-20 bg-brand-blue/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy">
            What Our Families Say
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">
            Hear from families who have experienced the compassionate and professional care provided by Forever a Rose Senior Care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
