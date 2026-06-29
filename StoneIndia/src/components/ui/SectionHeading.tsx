import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false, className = '' }: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-display font-bold mb-6 leading-tight ${dark ? 'text-white' : 'text-theme-dark'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg max-w-2xl leading-relaxed ${dark ? 'text-neutral-400' : 'text-neutral-600'}`}
          style={{ marginLeft: align === 'center' ? 'auto' : '0', marginRight: align === 'center' ? 'auto' : '0' }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
