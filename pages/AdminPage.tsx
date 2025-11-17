import React, { useState } from 'react';
import { HeartHandshake } from 'lucide-react';
import type { AboutContent, Service, BlogPost, Testimonial, ContactInfo, SocialLink } from '../types';

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
  socialLinks: SocialLink[];
  setSocialLinks: (links: SocialLink[]) => void;
  homeImage: string;
  setHomeImage: (value: string) => void;
}

const AdminInput = ({ label, ...props }) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-brand-gray mb-1">{label}</label>
        <input 
            className="w-full p-2 border border-brand-blue rounded-md focus:ring-2 focus:ring-brand-rose-gold focus:outline-none bg-white text-gray-900"
            {...props} 
        />
    </div>
);

const AdminTextarea = ({ label, ...props }) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-brand-gray mb-1">{label}</label>
        <textarea 
            rows={4}
            className="w-full p-2 border border-brand-blue rounded-md focus:ring-2 focus:ring-brand-rose-gold focus:outline-none bg-white text-gray-900"
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [localHomeMission, setLocalHomeMission] = useState(props.homeMission);
    const [localAbout, setLocalAbout] = useState(props.aboutContent);
    const [localServices, setLocalServices] = useState(props.services);
    const [localBlogPosts, setLocalBlogPosts] = useState(props.blogPosts);
    const [localTestimonials, setLocalTestimonials] = useState(props.testimonials);
    const [localContactInfo, setLocalContactInfo] = useState(props.contactInfo);
    const [localSocialLinks, setLocalSocialLinks] = useState(props.socialLinks);
    const [localHomeImage, setLocalHomeImage] = useState(props.homeImage);
    
    const handleItemChange = (setter, items, index, field, value) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        setter(newItems);
    };

    const handleItemRemove = (setter, items, indexToRemove) => {
        setter(items.filter((_, index) => index !== indexToRemove));
    };

    const handleAddService = () => {
        setLocalServices([
            ...localServices,
            { icon: HeartHandshake, title: '', description: '' }
        ]);
    };

    const handleAddBlogPost = () => {
        setLocalBlogPosts([
            ...localBlogPosts,
            { title: '', excerpt: '', link: '#', image: '' }
        ]);
    };

    const handleAddTestimonial = () => {
        setLocalTestimonials([
            ...localTestimonials,
            { quote: '', author: '' }
        ]);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    handleItemChange(setLocalBlogPosts, localBlogPosts, index, 'image', event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

     const handleHomeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setLocalHomeImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, any username/password is fine, including blank.
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                    <h1 className="text-3xl font-serif text-brand-burgundy text-center mb-6">Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <AdminInput 
                            label="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                        <AdminInput 
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                        <button 
                            type="submit"
                            className="w-full mt-4 bg-brand-burgundy text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-rose-gold transition-colors shadow-md"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
    <div className="py-12 bg-brand-blue/5">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy text-center mb-12">
                Admin Dashboard
            </h1>

            {/* Home Page Hero Image */}
            <AdminSection title="Home Page Hero Image" onSave={() => props.setHomeImage(localHomeImage)}>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-brand-gray mb-2">Current Image Preview</label>
                    <img src={localHomeImage} alt="Home page hero preview" className="w-full h-auto object-cover rounded-md mb-4 max-h-64 border"/>
                    
                    <label className="block text-sm font-bold text-brand-gray mb-2">Upload New Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleHomeImageUpload}
                        className="w-full text-sm text-brand-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-rose-gold/20 file:text-brand-burgundy hover:file:bg-brand-rose-gold/40 cursor-pointer"
                    />
                </div>
            </AdminSection>

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
                   <div key={index} className="mb-6 p-4 border rounded-md relative">
                       <button
                           onClick={() => handleItemRemove(setLocalServices, localServices, index)}
                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors text-xs font-bold"
                           aria-label="Remove Service"
                       >
                           X
                       </button>
                       <h3 className="font-bold text-lg mb-2">{service.title || "New Service"}</h3>
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
               <button
                    onClick={handleAddService}
                    className="w-full mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
               >
                   Add New Service
               </button>
            </AdminSection>

            {/* Blog Posts */}
            <AdminSection title="Blog Posts" onSave={() => props.setBlogPosts(localBlogPosts)}>
               {localBlogPosts.map((post, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md relative">
                       <button
                           onClick={() => handleItemRemove(setLocalBlogPosts, localBlogPosts, index)}
                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors text-xs font-bold"
                           aria-label="Remove Blog Post"
                       >
                           X
                       </button>
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
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-brand-gray mb-1">Blog Post Photo</label>
                            {post.image && (
                                <img src={post.image} alt="Blog post preview" className="w-48 h-auto object-cover rounded-md mb-2"/>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, index)}
                                className="w-full text-sm text-brand-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-rose-gold/20 file:text-brand-burgundy hover:file:bg-brand-rose-gold/40 cursor-pointer"
                            />
                        </div>
                   </div>
               ))}
               <button
                    onClick={handleAddBlogPost}
                    className="w-full mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
               >
                   Add New Blog Post
               </button>
            </AdminSection>

            {/* Testimonials */}
             <AdminSection title="Testimonials" onSave={() => props.setTestimonials(localTestimonials)}>
               {localTestimonials.map((testimonial, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md relative">
                        <button
                           onClick={() => handleItemRemove(setLocalTestimonials, localTestimonials, index)}
                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors text-xs font-bold"
                           aria-label="Remove Testimonial"
                       >
                           X
                       </button>
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
                <button
                    onClick={handleAddTestimonial}
                    className="w-full mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
               >
                   Add New Testimonial
               </button>
            </AdminSection>

            {/* Contact & Socials */}
            <AdminSection 
                title="Contact & Socials" 
                onSave={() => {
                    props.setContactInfo(localContactInfo);
                    props.setSocialLinks(localSocialLinks);
                }}
            >
                <h3 className="text-xl font-serif text-brand-burgundy mb-4">Contact Details</h3>
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
                <AdminInput 
                    label="Street Address"
                    value={localContactInfo.street}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, street: e.target.value})}
                />
                <AdminInput 
                    label="City"
                    value={localContactInfo.city}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, city: e.target.value})}
                />
                <AdminInput 
                    label="State"
                    value={localContactInfo.state}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, state: e.target.value})}
                />
                <AdminInput 
                    label="Zip Code"
                    value={localContactInfo.zipcode}
                    onChange={(e) => setLocalContactInfo({...localContactInfo, zipcode: e.target.value})}
                />
                
                <h3 className="text-xl font-serif text-brand-burgundy mt-8 mb-4 border-t pt-4">Social Media Links</h3>
                {localSocialLinks.map((link, index) => (
                    <AdminInput 
                        key={link.name}
                        label={`${link.name} URL`}
                        value={link.url}
                        onChange={(e) => handleItemChange(setLocalSocialLinks, localSocialLinks, index, 'url', e.target.value)}
                    />
                ))}
            </AdminSection>

        </div>
    </div>
    );
};

export default AdminPage;