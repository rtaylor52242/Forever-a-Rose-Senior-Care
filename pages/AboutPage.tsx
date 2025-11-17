import React from 'react';
import type { AboutContent } from '../types';

interface AboutPageProps {
  content: AboutContent;
}

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy text-center mb-12">
          Our Story & Commitment to Care
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src={content.image}
              alt="Renee Drummond"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-3 space-y-6 text-lg text-brand-gray">
            {content.story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-rose-gold">
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy">Our Mission</h3>
              <p className="mt-2 italic">
                {content.mission}
              </p>
            </div>
            <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-rose-gold">
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy">Our Vision</h3>
              <p className="mt-2 italic">
                {content.vision}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy">Our Core Values</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.coreValues.map((value, index) => (
                    <div key={index} className="p-6">
                        <h3 className="text-2xl font-serif font-bold">{value.title}</h3>
                        <p className="mt-2">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;