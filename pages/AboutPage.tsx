
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy text-center mb-12">
          Our Story & Commitment to Care
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://picsum.photos/600/800?image=1027" 
              alt="Renee Drummond"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-3 space-y-6 text-lg text-brand-gray">
            <p>
              Welcome to Forever a Rose Senior Care, founded by Renee Drummond, a dedicated and passionate Certified Nursing Assistant (CNA). With years of hands-on experience in various healthcare settings, Renee witnessed a need for more personalized, dignified, and compassionate care that truly honors the individual. She built this service on the belief that every senior deserves to live with comfort, joy, and the highest quality of life, all within the familiar surroundings of their own home.
            </p>
            <p>
              Renee's extensive background as a CNA is not just a qualification; it's the heart of our company. It ensures that all care is provided with a professional, knowledgeable, and empathetic touch. We don't just see clients; we see family.
            </p>
            <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-rose-gold">
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy">Our Mission</h3>
              <p className="mt-2 italic">
                To provide premium, compassionate, and personalized in-home senior care that enhances the quality of life for clients and peace of mind for families.
              </p>
            </div>
            <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-rose-gold">
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy">Our Vision</h3>
              <p className="mt-2 italic">
                To become the most trusted and sought-after luxury senior care provider in Clayton and the surrounding North Carolina areas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy">Our Core Values</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold">Dignity</h3>
                    <p className="mt-2">We treat every client with the utmost respect, honoring their life experiences and personal preferences.</p>
                </div>
                 <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold">Comfort</h3>
                    <p className="mt-2">We strive to create a safe, nurturing, and comfortable environment in the place our clients call home.</p>
                </div>
                 <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold">Personalized Attention</h3>
                    <p className="mt-2">We believe in care that is as unique as the individual, offering tailored plans and a unique concierge approach.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
