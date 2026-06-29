import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { homepageFeaturedProducts } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-theme-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Our Stones"
          title={<>Explore Our <span className="text-gold">Natural Stone</span> Range</>}
          description="Handpicked stones, crafted by nature, perfect for every unique project."
          dark={true}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {homepageFeaturedProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="group block relative overflow-hidden aspect-square border border-white/10 rounded-sm"
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between">
                  <h3 className="text-sm md:text-base font-display font-medium text-white group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <span className="w-6 h-6 shrink-0 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3 hover:bg-white/10 transition-colors duration-300 text-sm tracking-wider uppercase">
            View All Stones <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
