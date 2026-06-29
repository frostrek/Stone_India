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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: '0 32px 64px 0 rgba(0,0,0,0.20)',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Card({ image, title, description, link, icon, delay = 0, className = '' }: CardProps) {
  const content = (
    <>
      {image && (
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          {/* Gold shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>
      )}

      <div className="px-6 pb-8 pt-5">
        {icon && (
          <motion.div
            className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold rounded-full mb-4"
            whileHover={{ rotate: 10, scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
            {description}
          </p>
        )}
        {link && (
          <div className="flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider">
            <span className="group-hover:translate-x-0 -translate-x-0 transition-transform duration-300">Read More</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        )}
      </div>

      {/* Bottom border reveal on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gold transition-all duration-500 ease-out" />
    </>
  );

  const cardClasses = `group relative block bg-white border border-neutral-100 rounded-sm overflow-hidden ${className}`;

  if (link) {
    return (
      <motion.div
        variants={cardVariants}
        custom={delay}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        animate="rest"
        viewport={{ once: true, margin: '-50px' }}
      >
        <Link to={link} className={cardClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      animate="rest"
      viewport={{ once: true, margin: '-50px' }}
      className={cardClasses}
    >
      {content}
    </motion.div>
  );
}
