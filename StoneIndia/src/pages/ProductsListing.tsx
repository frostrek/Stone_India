import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { products, productCategories } from '../data/products';
import CTABanner from '../components/home/CTABanner';

export default function ProductsListing() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <PageBanner
        title="Our Products"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Stone Collection"
            title={<>Premium <span className="text-gold">Natural Stone</span> Products</>}
            description="Processed in our manufacturing units and made available in finishes like natural, sawn, honed polished, sandblasted, tumbled, calibrated, and others."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 border ${
                activeCategory === 'all'
                  ? 'bg-gold text-white border-gold'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-gold hover:text-gold'
              }`}
            >
              All Products
            </button>
            {productCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 border ${
                  activeCategory === cat.slug
                    ? 'bg-gold text-white border-gold'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-gold hover:text-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
                layout
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block bg-white border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                    {/* TODO: replace with real Stone India product photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-display text-sm">
                      {product.name}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 bg-gold/90 text-white text-xs font-medium uppercase tracking-wider px-3 py-1">
                      {productCategories.find(c => c.slug === product.category)?.name}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-medium text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
