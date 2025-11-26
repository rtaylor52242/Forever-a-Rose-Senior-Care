
import React, { useState, useEffect } from 'react';
import { HeartHandshake, Save, X, Check } from 'lucide-react';
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

const AdminInput = ({ label, ...props }: any) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-brand-gray mb-1">{label}</label>
        <input 
            className="w-full p-2 border border-brand-blue rounded-md focus:ring-2 focus:ring-brand-rose-gold focus:outline-none bg-white text-gray-900"
            {...props} 
        />
    </div>
);

const AdminTextarea = ({ label, ...props }: any) => (
    <div className="mb-4">
        <label className="block text-sm font-bold text-brand-gray mb-1">{label}</label>
        <textarea 
            rows={4}
            className="w-full p-2 border border-brand-blue rounded-md focus:ring-2 focus:ring-brand-rose-gold focus:outline-none bg-white text-gray-900"
            {...props}
        ></textarea>
    </div>
);


const AdminSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-6 border-b pb-2">{title}</h2>
            {children}
        </div>
    );
};

const AdminPage: React.FC<AdminPageProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Local state for form fields
    const [localHomeMission, setLocalHomeMission] = useState(props.homeMission);
    const [localAbout, setLocalAbout] = useState(props.aboutContent);
    const [localServices, setLocalServices] = useState(props.services);
    const [localBlogPosts, setLocalBlogPosts] = useState(props.blogPosts);
    const [localTestimonials, setLocalTestimonials] = useState(props.testimonials);
    const [localContactInfo, setLocalContactInfo] = useState(props.contactInfo);
    const [localSocialLinks, setLocalSocialLinks] = useState(props.socialLinks);
    const [localHomeImage, setLocalHomeImage] = useState(props.homeImage);

    // UX State
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

    // Warn user before leaving if there are unsaved changes
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (hasUnsavedChanges) {
                e.preventDefault();
                e.returnValue = ''; // Chrome requires this to be set
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [hasUnsavedChanges]);
    
    // Helper to mark state as dirty
    const markAsDirty = () => {
        if (!hasUnsavedChanges) setHasUnsavedChanges(true);
        if (saveStatus === 'saved') setSaveStatus('idle');
    };

    const handleItemChange = (setter: any, items: any[], index: number, field: string, value: any) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        setter(newItems);
        markAsDirty();
    };

    const handleItemRemove = (e: React.MouseEvent, setter: any, indexToRemove: number, itemName = 'item') => {
        e.preventDefault();
        e.stopPropagation();
        setter((prevItems: any[]) => prevItems.filter((_, index) => index !== indexToRemove));
        markAsDirty();
    };

    const handleAddService = () => {
        setLocalServices([
            ...localServices,
            { icon: HeartHandshake, title: '', description: '' }
        ]);
        markAsDirty();
    };

    const handleAddBlogPost = () => {
        setLocalBlogPosts([
            ...localBlogPosts,
            { title: '', excerpt: '', link: '#', image: '' }
        ]);
        markAsDirty();
    };

    const handleAddTestimonial = () => {
        setLocalTestimonials([
            ...localTestimonials,
            { quote: '', author: '' }
        ]);
        markAsDirty();
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
                    markAsDirty();
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAboutImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setLocalAbout({ ...localAbout, image: event.target.result as string });
                    markAsDirty();
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleCoreValueChange = (index: number, field: 'title' | 'description', value: string) => {
        const newCoreValues = [...localAbout.coreValues];
        newCoreValues[index] = { ...newCoreValues[index], [field]: value };
        setLocalAbout({ ...localAbout, coreValues: newCoreValues });
        markAsDirty();
    };

    // Generic wrapper for simple state setters to track changes
    const handleFieldChange = (setter: any, value: any) => {
        setter(value);
        markAsDirty();
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, any username/password is fine, including blank.
        setIsLoggedIn(true);
    };

    const handleSaveAll = () => {
        props.setHomeMission(localHomeMission);
        props.setAboutContent(localAbout);
        props.setServices(localServices);
        props.setBlogPosts(localBlogPosts);
        props.setTestimonials(localTestimonials);
        props.setContactInfo(localContactInfo);
        props.setSocialLinks(localSocialLinks);
        props.setHomeImage(localHomeImage);
        
        setHasUnsavedChanges(false);
        setSaveStatus('saved');
        
        // Reset status after 3 seconds
        setTimeout(() => {
            setSaveStatus('idle');
        }, 3000);
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
                            onChange={(e: any) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                        <AdminInput 
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
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
    <div className="py-12 bg-brand-blue/5 relative min-h-screen">
        <div className="container mx-auto px-6 pb-24">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-burgundy text-center mb-12">
                Admin Dashboard
            </h1>

            {/* Home Page Hero Image */}
            <AdminSection title="Home Page Hero Image">
                <div className="mb-4">
                    <label className="block text-sm font-bold text-brand-gray mb-2">Current Image Preview</label>
                    <img src={localHomeImage} alt="Home page hero preview" className="w-full h-auto object-cover rounded-md mb-4 max-h-64 border"/>
                    
                    <label className="block text-sm font-bold text-brand-gray mb-2">
                        Upload New Image <span className="text-brand-burgundy/70 font-normal ml-1 text-xs">(Recommended: 1600 x 900 px)</span>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleHomeImageUpload}
                        className="w-full text-sm text-brand-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-rose-gold/20 file:text-brand-burgundy hover:file:bg-brand-rose-gold/40 cursor-pointer"
                    />
                </div>
            </AdminSection>

            {/* Home Page Mission */}
            <AdminSection title="Home Page Mission">
                <AdminTextarea 
                    label="Mission Statement"
                    value={localHomeMission}
                    onChange={(e: any) => handleFieldChange(setLocalHomeMission, e.target.value)}
                />
            </AdminSection>

            {/* About Page */}
            <AdminSection title="About Us Page">
                <div className="mb-4">
                    <label className="block text-sm font-bold text-brand-gray mb-2">About Page Image</label>
                    <img src={localAbout.image} alt="About page preview" className="w-full h-auto object-cover rounded-md mb-4 max-h-64 border"/>
                    
                    <label className="block text-sm font-bold text-brand-gray mb-2">
                        Upload New Image <span className="text-brand-burgundy/70 font-normal ml-1 text-xs">(Recommended: 600 x 800 px)</span>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAboutImageUpload}
                        className="w-full text-sm text-brand-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-rose-gold/20 file:text-brand-burgundy hover:file:bg-brand-rose-gold/40 cursor-pointer"
                    />
                </div>
                <AdminTextarea 
                    label="Story (Paragraph 1)"
                    value={localAbout.story[0]}
                    onChange={(e: any) => handleFieldChange(setLocalAbout, {...localAbout, story: [e.target.value, localAbout.story[1]]})}
                />
                 <AdminTextarea 
                    label="Story (Paragraph 2)"
                    value={localAbout.story[1]}
                    onChange={(e: any) => handleFieldChange(setLocalAbout, {...localAbout, story: [localAbout.story[0], e.target.value]})}
                />
                <AdminTextarea 
                    label="Mission"
                    value={localAbout.mission}
                    onChange={(e: any) => handleFieldChange(setLocalAbout, {...localAbout, mission: e.target.value})}
                />
                <AdminTextarea 
                    label="Vision"
                    value={localAbout.vision}
                    onChange={(e: any) => handleFieldChange(setLocalAbout, {...localAbout, vision: e.target.value})}
                />
                <h3 className="text-xl font-serif text-brand-burgundy mt-8 mb-4 border-t pt-4">Core Values</h3>
                {localAbout.coreValues.map((value, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-md">
                        <AdminInput
                            label={`Value ${index + 1} Title`}
                            value={value.title}
                            onChange={(e: any) => handleCoreValueChange(index, 'title', e.target.value)}
                        />
                        <AdminTextarea
                            label={`Value ${index + 1} Description`}
                            value={value.description}
                            onChange={(e: any) => handleCoreValueChange(index, 'description', e.target.value)}
                        />
                    </div>
                ))}
            </AdminSection>

            {/* Services */}
            <AdminSection title="Our Services">
               {localServices.map((service, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md relative">
                       <button
                           type="button"
                           onClick={(e) => handleItemRemove(e, setLocalServices, index, 'service')}
                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                           aria-label="Remove Service"
                       >
                           <X size={16} />
                       </button>
                       <h3 className="font-bold text-lg mb-2">{service.title || "New Service"}</h3>
                       <AdminInput 
                            label="Service Title"
                            value={service.title}
                            onChange={(e: any) => handleItemChange(setLocalServices, localServices, index, 'title', e.target.value)}
                        />
                        <AdminTextarea
                            label="Service Description"
                            value={service.description}
                            onChange={(e: any) => handleItemChange(setLocalServices, localServices, index, 'description', e.target.value)}
                        />
                   </div>
               ))}
               <button
                    type="button"
                    onClick={handleAddService}
                    className="w-full mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
               >
                   Add New Service
               </button>
            </AdminSection>

            {/* Blog Posts */}
            <AdminSection title="Blog Posts">
               {localBlogPosts.map((post, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md relative">
                       <button
                           type="button"
                           onClick={(e) => handleItemRemove(e, setLocalBlogPosts, index, 'blog post')}
                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                           aria-label="Remove Blog Post"
                       >
                           <X size={16} />
                       </button>
                        <AdminInput 
                            label="Post Title"
                            value={post.title}
                            onChange={(e: any) => handleItemChange(setLocalBlogPosts, localBlogPosts, index, 'title', e.target.value)}
                        />
                        <AdminTextarea
                            label="Post Excerpt"
                            value={post.excerpt}
                            onChange={(e: any) => handleItemChange(setLocalBlogPosts, localBlogPosts, index, 'excerpt', e.target.value)}
                        />
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-brand-gray mb-1">
                                Blog Post Photo <span className="text-brand-burgundy/70 font-normal ml-1 text-xs">(Recommended: 800 x 500 px)</span>
                            </label>
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
                    type="button"
                    onClick={handleAddBlogPost}
                    className="w-full mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
               >
                   Add New Blog Post
               </button>
            </AdminSection>

            {/* Testimonials */}
             <AdminSection title="Testimonials">
               {localTestimonials.map((testimonial, index) => (
                   <div key={index} className="mb-6 p-4 border rounded-md relative">
                        <button
                           type="button"
                           onClick={(e) => handleItemRemove(e, setLocalTestimonials, index, 'testimonial')}
                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                           aria-label="Remove Testimonial"
                       >
                           <X size={16} />
                       </button>
                        <AdminTextarea 
                            label="Quote"
                            value={testimonial.quote}
                            onChange={(e: any) => handleItemChange(setLocalTestimonials, localTestimonials, index, 'quote', e.target.value)}
                        />
                        <AdminInput
                            label="Author"
                            value={testimonial.author}
                            onChange={(e: any) => handleItemChange(setLocalTestimonials, localTestimonials, index, 'author', e.target.value)}
                        />
                   </div>
               ))}
                <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="w-full mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-md"
               >
                   Add New Testimonial
               </button>
            </AdminSection>

            {/* Contact & Socials */}
            <AdminSection title="Contact & Socials">
                <h3 className="text-xl font-serif text-brand-burgundy mb-4">Contact Details</h3>
                <AdminInput 
                    label="Phone Number"
                    value={localContactInfo.phone}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, phone: e.target.value})}
                />
                <AdminInput 
                    label="Email Address"
                    value={localContactInfo.email}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, email: e.target.value})}
                />
                 <AdminInput 
                    label="Address / Service Area"
                    value={localContactInfo.address}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, address: e.target.value})}
                />
                <AdminInput 
                    label="Street Address"
                    value={localContactInfo.street}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, street: e.target.value})}
                />
                <AdminInput 
                    label="City"
                    value={localContactInfo.city}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, city: e.target.value})}
                />
                <AdminInput 
                    label="State"
                    value={localContactInfo.state}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, state: e.target.value})}
                />
                <AdminInput 
                    label="Zip Code"
                    value={localContactInfo.zipcode}
                    onChange={(e: any) => handleFieldChange(setLocalContactInfo, {...localContactInfo, zipcode: e.target.value})}
                />
                
                <h3 className="text-xl font-serif text-brand-burgundy mt-8 mb-4 border-t pt-4">Social Media Links</h3>
                {localSocialLinks.map((link, index) => (
                    <AdminInput 
                        key={link.name}
                        label={`${link.name} URL`}
                        value={link.url}
                        onChange={(e: any) => handleItemChange(setLocalSocialLinks, localSocialLinks, index, 'url', e.target.value)}
                    />
                ))}
            </AdminSection>

            {/* Floating Save Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button 
                    type="button"
                    onClick={handleSaveAll}
                    disabled={saveStatus === 'saved'}
                    className={`
                        font-bold py-4 px-8 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center gap-3 border-2 border-white
                        ${saveStatus === 'saved' ? 'bg-green-600 hover:bg-green-700' : 'bg-brand-burgundy hover:bg-brand-rose-gold'}
                        text-white
                    `}
                    aria-label="Save All Changes"
                >
                    {saveStatus === 'saved' ? <Check size={24} /> : <Save size={24} />}
                    {saveStatus === 'saved' ? 'Saved!' : 'Save All Changes'}
                </button>
            </div>

        </div>
    </div>
    );
};

export default AdminPage;
