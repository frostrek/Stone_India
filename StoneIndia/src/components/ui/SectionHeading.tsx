import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, clipReveal, lineGrow } from './AnimationVariants';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 md:mb-16 ${alignmentClass} ${className}`}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUpItem}
          className="flex items-center gap-3 mb-4 justify-inherit"
          style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
        >
          {/* Animated gold accent line */}
          <motion.span
            variants={lineGrow}
            className="block h-px w-10 bg-gold flex-shrink-0"
          />
          <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
          <motion.span
            variants={lineGrow}
            className="block h-px w-10 bg-gold flex-shrink-0"
          />
        </motion.div>
      )}

      {/* Clip-reveal heading */}
      <div className="overflow-hidden">
        <motion.h2
          variants={clipReveal}
          className={`text-4xl md:text-5xl font-display font-bold mb-6 leading-tight ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          variants={fadeUpItem}
          className={`text-lg max-w-2xl leading-relaxed ${dark ? 'text-neutral-400' : 'text-neutral-600'}`}
          style={{
            marginLeft: align === 'center' ? 'auto' : '0',
            marginRight: align === 'center' ? 'auto' : '0',
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
