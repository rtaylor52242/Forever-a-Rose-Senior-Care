
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 transition-shadow hover:shadow-xl">
    <div className="flex-shrink-0">
      <div className="p-5 bg-brand-rose-gold/20 rounded-full">
        <service.icon className="w-16 h-16 text-brand-burgundy" />
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-serif font-bold text-brand-burgundy">{service.title}</h3>
      <p className="mt-2 text-brand-gray text-lg">{service.description}</p>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="py-20 bg-brand-blue/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy">
            Tailored Care for Every Need
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">
            We understand that every individual has unique needs. Our services are designed to be flexible and comprehensive, ensuring we provide the highest quality of personalized support for your loved one.
          </p>
        </div>
        
        <div className="space-y-10">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
