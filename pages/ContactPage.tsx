
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Here you would typically send the data to a backend server
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
                     </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-brand-gray font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-brand-gray font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-brand-gray font-bold mb-2">Phone</label>
                            <input type="tel" id="phone" name="phone" onChange={handleChange} className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-brand-gray font-bold mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-brand-gray font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows={5} onChange={handleChange} required className="w-full p-3 border border-brand-blue rounded-lg focus:ring-2 focus:ring-brand-rose-gold focus:outline-none"></textarea>
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
                            <a href="tel:919-626-1260" className="text-brand-gray hover:text-brand-burgundy">919-626-1260</a>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <a href="mailto:ForeveraRose.FamilyServices@gmail.com" className="text-brand-gray hover:text-brand-burgundy">ForeveraRose.FamilyServices@gmail.com</a>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Business Hours</h4>
                            <p className="text-brand-gray">Monday - Friday, 9:00 AM - 5:00 PM</p>
                            <p className="text-sm text-brand-gray">(Flexible for urgent care needs)</p>
                        </div>
                     </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-brand-rose-gold mt-1"/>
                        <div>
                            <h4 className="font-bold">Service Area</h4>
                            <p className="text-brand-gray">Clayton, NC and surrounding areas</p>
                        </div>
                     </div>
                </div>
                <div className="h-80 w-full rounded-lg shadow-lg overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103884.22557341075!2d-78.55581934989679!3d35.65216174776104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac65e23546a29d%3A0x67332c058766185!2sClayton%2C%20NC!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
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
