import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import type { ContactInfo } from '../types';

interface ContactPageProps {
    contactInfo: ContactInfo;
}

const initialFormData = {
    salutation: 'Mr.',
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zipcode: '',
    subject: '',
    message: '',
};

const ContactPage: React.FC<ContactPageProps> = ({ contactInfo }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Here you would typically send the data to a backend server
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setSubmitted(false);
    };


  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy">
            Get In Touch with Forever a Rose
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">
            We're here to answer your questions and discuss your loved one's care needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-brand-cream p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-serif text-brand-burgundy mb-6">Contact Form</h2>
                {submitted ? (
                     <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                        <h3 className="text-2xl font-bold">Thank You!</h3>
                        <p className="mt-2">Your message has been sent. We will get back to you shortly.</p>
                        <button 
                            onClick={handleReset}
                            className="mt-6 bg-brand-burgundy text-white font-bold py-2 px-5 rounded-lg hover:bg-brand-rose-gold transition-colors shadow-md"
                        >
                            Send Another Message
                        </button>
                     </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-4 gap-6">
                            <div className="col-span-1">
                                <label htmlFor="salutation" className="block text-brand-gray font-bold mb-2">Salutation</label>
                                <select 
                                    id="salutation" 
                                    name="salutation" 
                                    value={formData.salutation} 
                                    onChange={handleChange} 
                                    className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none"
                                >
                                    <option>Mr.</option>
                                    <option>Ms.</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-span-3">
                                <label htmlFor="name" className="block text-brand-gray font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-brand-gray font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-brand-gray font-bold mb-2">Phone</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                            </div>
                        </div>
                        
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="sm:col-span-1">
                                <label htmlFor="city" className="block text-brand-gray font-bold mb-2">City</label>
                                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="state" className="block text-brand-gray font-bold mb-2">State</label>
                                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="zipcode" className="block text-brand-gray font-bold mb-2">Zip Code</label>
                                <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-brand-gray font-bold mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-brand-gray font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-burgundy text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-rose-gold transition-colors shadow-md">Send Message</button>
                        </div>
                    </form>
                )}
            </div>

            <div className="space-y-8">
                <div className="space-y-6 text-lg">
                    <h3 className="text-3xl font-serif text-brand-burgundy">Our Information</h3>
                     <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Phone</h4>
                            <a href={`tel:${contactInfo.phone}`} className="text-brand-gray hover:text-brand-burgundy">{contactInfo.phone}</a>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <a href={`mailto:${contactInfo.email}`} className="text-brand-gray hover:text-brand-burgundy">{contactInfo.email}</a>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Business Hours</h4>
                            <p className="text-brand-gray">{contactInfo.hours}</p>
                            <p className="text-sm text-brand-gray">{contactInfo.hoursNote}</p>
                        </div>
                     </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Our Location</h4>
                             <p className="text-brand-gray">Forever a Rose</p>
                             <p className="text-brand-gray">{contactInfo.street}</p>
                             <p className="text-brand-gray">{contactInfo.city}, {contactInfo.state} {contactInfo.zipcode}</p>
                            <p className="text-sm text-brand-gray"><strong>Service Area:</strong> {contactInfo.address}</p>
                        </div>
                     </div>
                </div>
                <div className="h-80 w-full rounded-lg shadow-lg overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103884.22557341075!2d-78.55581934989679!3d35.65216174776104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac65e23546a29d%3A0x67332c058766185!2sClayton%2C%2C%20NC!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Service Area Map for Clayton, NC">
                    </iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;