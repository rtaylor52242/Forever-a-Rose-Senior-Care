
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ to, children, className = '', variant = 'primary' }) => {
  const baseClasses = 'inline-block px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-brand-burgundy text-white hover:bg-brand-rose-gold',
    secondary: 'bg-white text-brand-burgundy border-2 border-brand-burgundy hover:bg-brand-cream',
  };

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
