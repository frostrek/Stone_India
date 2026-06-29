import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { clipReveal, fadeUp, staggerContainer } from '../ui/AnimationVariants';

export default function CTABanner() {
  return (
    <section className="bg-neutral-900 py-24 relative overflow-hidden">

      {/* Animated floating orbs */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-gold rounded-full blur-[120px] opacity-10"
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-gold rounded-full blur-[100px] opacity-8"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-white rounded-full blur-[80px] opacity-[0.03]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #B8860B 1px, transparent 1px), linear-gradient(to bottom, #B8860B 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-4 mb-6">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block h-px w-12 bg-gold origin-left"
            />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Let's Build Together</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block h-px w-12 bg-gold origin-right"
            />
          </motion.div>

          {/* Headline with clip reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              variants={clipReveal}
              custom={0}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Ready to Transform
              <br />
              <span className="text-gold">Your Space?</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Explore our extensive collection of premium natural stones or contact our experts 
            to find the perfect match for your project.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              to="/contact-us"
              className="btn-custom-animated w-48 gap-2 font-bold"
            >
              <PhoneCall size={18} />
              <span>Contact Us</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/products"
              className="btn-custom-animated w-48"
            >
              <span>Explore Collection</span>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-12 flex items-center justify-center gap-8 text-neutral-500 text-sm"
          >
            {['25+ Years Experience', '40+ Countries', '10,000+ Happy Clients'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
