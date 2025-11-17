import React, { useState } from 'react';
import type { AboutContent, Service, BlogPost, Testimonial, ContactInfo } from '../types';

interface AdminPageProps {
  homeMission: string;
  setHomeMission: (value: string) => void;
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  services: Service[];
  setServices: (services: Service[]) => void;
  blogPosts: BlogPost[];
  setBlogPosts: (posts: BlogPost[]) => void;
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  contactInfo: ContactInfo;
  setContactInfo: (info: ContactInfo) => void;
}

const AdminInput = ({ label, ...props }) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-brand-gray mb-1">{label}</label>
        <input 
            className="w-full p-2 border border-brand-blue rounded-md focus:ring-2 focus:ring-brand-rose-gold focus:outline-none"
            {...props} 
        />
    </div>
);

const AdminTextarea = ({ label, ...props }) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-brand-gray mb-1">{label}</label>
        <textarea 
            rows={4}
            className="w-full p-2 border border-brand-blue rounded-md focus:ring-2 focus:ring-brand-rose-gold focus:outline-none"
            {...props}
        ></textarea>
    </div>
);


const AdminSection: React.FC<{ title: string, onSave: () => void, children: React.ReactNode }> = ({ title, onSave, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-6 border-b pb-2">{title}</h2>
            {children}
            <button 
                onClick={onSave}
                className="w-full mt-4 bg-brand-burgundy text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-rose-gold transition-colors shadow-md"
            >
                Save Changes
            </button>
        </div>
    );
};

const AdminPage: React.FC<AdminPageProps> = (props) => {
    const [localHomeMission, setLocalHomeMission] = useState(props.homeMission);
    const [localAbout, setLocalAbout] = useState(props.aboutContent);
    const [localServices, setLocalServices] = useState(props.services);
    const [localBlogPosts, setLocalBlogPosts] = useState(props.blogPosts);
    const [localTestimonials, setLocalTestimonials] = useState(props.testimonials);
    const [localContactInfo, setLocalContactInfo] = useState(props.contactInfo);
    
    const handleItemChange = (setter, items, index, field, value) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        setter(newItems);
    };

    return (
    <div className="py-12 bg-brand-blue/5">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy text-center mb-12">
                Admin Dashboard
            </h1>

            {/* Home Page Mission */}
            <AdminSection title="Home Page Mission" onSave={() => props.setHomeMission(localHomeMission)}>
                <AdminTextarea 
                    label="Mission Statement"
                    value={localHomeMission}
                    onChange={(e) => setLocalHomeMission(e.target.value)}
                />
            </AdminSection>

            {/* About Page */}
            <AdminSection title="About Us Page" onSave={() => props.setAboutContent(localAbout)}>
                <AdminTextarea 
                    label="Story (Paragraph 1)"
                    value={localAbout.story[0]}
                    onChange={(e) => setLocalAbout({...localAbout, story: [e.target.value, localAbout.story[1]]})}
                />
                 <AdminTextarea 
                    label="Story (Paragraph 2)"
                    value={localAbout.story[1]}
                    onChange={(e) => setLocalAbout({...localAbout, story: [localAbout.story[0], e.target.value]})}
                />
                <AdminTextarea 
                    label="Mission"
                    value={localAbout.mission}
                    onChange={(e) => setLocalAbout({...localAbout, mission: e.target.value})}
                />
                <AdminTextarea 
                    label="Vision"
                    value={localAbout.vision}
                    onChange={(e) => setLocalAbout({...localAbout, vision: e.target.value})}
                />
            </AdminSection>

            {/* Services */}
            <AdminSection title="Our Services" onSave={() => props.setServices(localServices)}>
               {localServices.map((service, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md">
                       <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                       <AdminInput 
                            label="Service Title"
                            value={service.title}
                            onChange={(e) => handleItemChange(setLocalServices, localServices, index, 'title', e.target.value)}
                        />
                        <AdminTextarea
                            label="Service Description"
                            value={service.description}
                            onChange={(e) => handleItemChange(setLocalServices, localServices, index, 'description', e.target.value)}
                        />
                   </div>
               ))}
            </AdminSection>

            {/* Blog Posts */}
            <AdminSection title="Blog Posts" onSave={() => props.setBlogPosts(localBlogPosts)}>
               {localBlogPosts.map((post, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md">
                        <AdminInput 
                            label="Post Title"
                            value={post.title}
                            onChange={(e) => handleItemChange(setLocalBlogPosts, localBlogPosts, index, 'title', e.target.value)}
                        />
                        <AdminTextarea
                            label="Post Excerpt"
                            value={post.excerpt}
                            onChange={(e) => handleItemChange(setLocalBlogPosts, localBlogPosts, index, 'excerpt', e.target.value)}
                        />
                   </div>
               ))}
            </AdminSection>

            {/* Testimonials */}
             <AdminSection title="Testimonials" onSave={() => props.setTestimonials(localTestimonials)}>
               {localTestimonials.map((testimonial, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md">
                        <AdminTextarea 
                            label="Quote"
                            value={testimonial.quote}
                            onChange={(e) => handleItemChange(setLocalTestimonials, localTestimonials, index, 'quote', e.target.value)}
                        />
                        <AdminInput
                            label="Author"
                            value={testimonial.author}
                            onChange={(e) => handleItemChange(setLocalTestimonials, localTestimonials, index, 'author', e.target.value)}
                        />
                   </div>
               ))}
            </AdminSection>

            {/* Contact Info */}
            <AdminSection title="Contact Information" onSave={() => props.setContactInfo(localContactInfo)}>
                <AdminInput 
                    label="Phone Number"
                    value={localContactInfo.phone}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, phone: e.target.value})}
                />
                <AdminInput 
                    label="Email Address"
                    value={localContactInfo.email}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, email: e.target.value})}
                />
                 <AdminInput 
                    label="Address / Service Area"
                    value={localContactInfo.address}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, address: e.target.value})}
                />
            </AdminSection>

        </div>
    </div>
    );
};

export default AdminPage;
