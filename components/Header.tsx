
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, Flower2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#800020',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  };

  return (
    <header className="bg-brand-cream/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-brand-burgundy hover:text-brand-rose-gold transition-colors">
          <Flower2 size={32} />
          <span className="text-xl font-serif font-bold">Forever a Rose</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-brand-gray hover:text-brand-burgundy font-semibold transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-burgundy">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-brand-cream pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-brand-gray hover:text-brand-burgundy font-semibold text-lg transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
