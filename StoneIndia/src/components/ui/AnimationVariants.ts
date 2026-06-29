import type { Variants } from 'framer-motion';

/** Fade + slide up — stagger-ready */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/** Fade + slide from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Fade + slide from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Scale pop (for badges, icons, CTAs) */
export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: i * 0.1,
    },
  }),
};

/** Stagger container — wraps stagger children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Draw a horizontal line from width 0 to full */
export const lineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Clip-reveal from bottom (text reveal style) */
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: (i: number = 0) => ({
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/** Card hover lift — use whileHover on motion.div */
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
    y: 0,
  },
  hover: {
    scale: 1.035,
    y: -8,
    boxShadow: '0 32px 64px 0 rgba(0,0,0,0.20)',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
