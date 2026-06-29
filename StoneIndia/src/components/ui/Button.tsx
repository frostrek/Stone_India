import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "btn-custom-animated",
    secondary: "bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-4",
    outline: "border border-gold text-gold hover:bg-gold hover:text-white px-8 py-4"
  };

  const combinedClassName = variant === 'primary' 
    ? `btn-custom-animated ${className}` 
    : `${baseStyles} ${variants[variant]} ${className}`;

  const renderChildren = variant === 'primary' ? <span>{children}</span> : children;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {renderChildren}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noreferrer">
        {renderChildren}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {renderChildren}
    </button>
  );
}
