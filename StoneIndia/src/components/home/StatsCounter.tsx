import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from '../ui/AnimationVariants';

const stats = [
  { id: 1, name: 'Years of Experience', value: 25, suffix: '+', icon: '🏆' },
  { id: 2, name: 'Countries Exported', value: 40, suffix: '+', icon: '🌍' },
  { id: 3, name: 'Premium Stone Varieties', value: 150, suffix: '+', icon: '💎' },
  { id: 4, name: 'Satisfied Clients', value: 10, suffix: 'k+', icon: '🤝' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* Animated gold gradient line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white font-display font-bold text-3xl md:text-4xl mb-16"
        >
          Our Impact in <span className="text-gold">Numbers</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              custom={idx}
              className="group flex flex-col items-center text-center p-10 bg-neutral-950 hover:bg-neutral-900 transition-colors duration-400 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Icon */}
              <motion.div
                className="text-3xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {stat.icon}
              </motion.div>

              {/* Animated number */}
              <div className="text-5xl md:text-6xl font-display font-bold text-gold mb-3 tabular-nums">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-neutral-400 font-medium text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                {stat.name}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold w-0 group-hover:w-16 transition-all duration-400"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated gold gradient line bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent origin-right"
      />
    </section>
  );
}
