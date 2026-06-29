import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { clipReveal, fadeUp, staggerContainer } from '../ui/AnimationVariants';

export interface Breadcrumb {
  name: string;
  path?: string;
}

export interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageBanner({ title, breadcrumbs, backgroundImage }: PageBannerProps) {
  return (
    <div className="relative bg-neutral-900 pt-40 pb-24 px-4 text-center overflow-hidden">

      {/* Background image with subtle Ken Burns */}
      {backgroundImage ? (
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ scale: 1.08, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-900" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/30" />

      {/* Decorative floating gold particles */}
      <motion.div
        className="absolute top-16 left-16 w-2 h-2 rounded-full bg-gold opacity-60"
        animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-24 right-24 w-1.5 h-1.5 rounded-full bg-gold opacity-40"
        animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-16 left-1/3 w-1 h-1 rounded-full bg-gold opacity-30"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />

      {/* Gold accent line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto flex flex-col items-center z-10"
      >
        {/* Title with clip reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            variants={clipReveal}
            custom={0}
            className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-md"
          >
            {title}
          </motion.h1>
        </div>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="h-[2px] w-16 bg-gold mb-6 origin-left"
        />

        {/* Breadcrumbs */}
        <motion.nav
          variants={fadeUp}
          custom={1}
          className="flex items-center justify-center gap-2 text-sm text-neutral-300 font-semibold uppercase tracking-wider flex-wrap"
        >
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <ChevronRight size={16} className="text-gold" />
                </motion.span>
              )}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors duration-200">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gold">{crumb.name}</span>
              )}
            </div>
          ))}
        </motion.nav>
      </motion.div>
    </div>
  );
}
