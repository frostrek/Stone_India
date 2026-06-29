import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  image?: string;
  title: string;
  description?: string;
  link?: string;
  icon?: ReactNode;
  delay?: number;
  className?: string;
}

export default function Card({ image, title, description, link, icon, delay = 0, className = '' }: CardProps) {
  const content = (
    <>
      {image && (
        <div className="relative overflow-hidden h-64 mb-6 rounded-sm">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className="px-6 pb-8 pt-2">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold rounded-full mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-neutral-600 leading-relaxed mb-4">
            {description}
          </p>
        )}
        {link && (
          <div className="text-gold font-medium uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
            Read More
            <span>&rarr;</span>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = `group block bg-white border border-neutral-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`;

  if (link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
      >
        <Link to={link} className={cardClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={cardClasses}
    >
      {content}
    </motion.div>
  );
}
