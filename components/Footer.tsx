import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Flower2 } from 'lucide-react';
import type { ContactInfo, SocialLink } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ contactInfo, socialLinks }) => {
  return (
    <footer className="bg-brand-gray text-brand-cream">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link to="/" className="flex items-center space-x-2 text-brand-cream hover:opacity-80 transition-opacity">
              <Flower2 size={28} />
              <span className="text-2xl font-serif font-bold">Forever a Rose</span>
            </Link>
            <p className="mt-4 text-brand-blue">Premium, Compassionate In-Home Senior Care.</p>
          </div>
          
          <div>
            <h3 className="font-bold font-serif text-lg text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-rose-gold transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-serif text-lg text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-brand-blue">
              <li>Phone: <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-rose-gold transition-colors">{contactInfo.phone}</a></li>
              <li>Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-rose-gold transition-colors">{contactInfo.email}</a></li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold font-serif text-lg text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-rose-gold transition-colors">
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-blue/30 pt-8 text-center text-brand-blue text-sm">
          <p>&copy; {new Date().getFullYear()} Forever a Rose Senior Care. All Rights Reserved.</p>
           <div className="mt-2">
            <Link to="/admin" className="text-xs hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;