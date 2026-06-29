import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-neutral-900 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-10">
            Explore our extensive collection of premium natural stones or contact our experts to find the perfect match for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-gold text-neutral-900 px-8 py-4 uppercase tracking-wider font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link 
              to="/products" 
              className="border border-white/30 text-white px-8 py-4 uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              Explore Collection
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
