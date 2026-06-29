import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeUp } from '../ui/AnimationVariants';

export default function FeaturedProducts() {
  const stoneProducts = products.filter(p => p.category === 'stone-products');
  const sandstoneProducts = products.filter(p => p.category === 'sandstone');
  const artcraftProducts = products.filter(p => p.category === 'stone-artcrafts');

  const [currentSandstoneIndex, setCurrentSandstoneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSandstoneIndex((prev) => (prev + 1) % sandstoneProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sandstoneProducts.length]);

  return (
    <section className="py-24 bg-theme-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeading
          eyebrow="Our Stones"
          title={<>Explore Our <span className="text-gold">Natural Stone</span> Range</>}
          description="Handpicked stones, crafted by nature, perfect for every unique project."
          dark={true}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16"
        >
          {/* Card 1: Stone Products (Horizontal Reel) */}
          <motion.div variants={fadeUp} className="relative rounded-none overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col h-[400px] lg:h-[480px] shadow-2xl">
            <div className="relative z-10 px-8 pt-8 mb-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-3 drop-shadow-sm tracking-tight">Stone Products</h2>
              <p className="text-white/90 text-lg leading-snug font-light">Premium natural stones for construction and architectural excellence.</p>
            </div>
            
            {/* Double Horizontal Reels */}
            <div className="relative w-full flex-1 flex flex-col justify-center gap-4 group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              {/* Top Row */}
              <div className="flex gap-4 animate-marquee-custom w-max group-hover:[animation-play-state:paused] px-4">
                 {[...stoneProducts, ...stoneProducts].map((product, idx) => (
                    <Link key={`top-${product.slug}-${idx}`} to={`/products/${product.slug}`} className="relative block w-32 h-24 lg:w-40 lg:h-28 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group/item">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/item:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-4 right-4 text-center">
                        <h3 className="text-white font-semibold text-xs lg:text-sm leading-tight group-hover/item:text-gold transition-colors line-clamp-2">{product.name}</h3>
                      </div>
                    </Link>
                 ))}
              </div>
              {/* Bottom Row */}
              <div className="flex gap-4 animate-marquee-custom w-max group-hover:[animation-play-state:paused] px-4" style={{ animationDirection: 'reverse' }}>
                 {[...stoneProducts].reverse().concat([...stoneProducts].reverse()).map((product, idx) => (
                    <Link key={`bot-${product.slug}-${idx}`} to={`/products/${product.slug}`} className="relative block w-32 h-24 lg:w-40 lg:h-28 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group/item">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/item:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-4 right-4 text-center">
                        <h3 className="text-white font-semibold text-xs lg:text-sm leading-tight group-hover/item:text-gold transition-colors line-clamp-2">{product.name}</h3>
                      </div>
                    </Link>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sandstone (Switch Effect) */}
          <motion.div variants={fadeUp} className="relative rounded-none overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 flex flex-col h-[400px] lg:h-[480px] shadow-2xl">
            <div className="relative z-10 px-8 pt-8 mb-4 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-3 drop-shadow-sm tracking-tight">Sandstone</h2>
              <p className="text-white/90 text-lg leading-snug font-light">Elegant, durable, and versatile sandstone varieties.</p>
            </div>
            
            {/* Coverflow Switch Effect */}
            <div className="relative flex-1 w-full flex items-center justify-center pb-8" style={{ perspective: 1000 }}>
              {sandstoneProducts.map((product, idx) => {
                const len = sandstoneProducts.length;
                let offset = idx - currentSandstoneIndex;
                if (offset > Math.floor(len / 2)) offset -= len;
                if (offset < -Math.floor(len / 2)) offset += len;

                const isCurrent = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                return (
                  <motion.div
                    key={product.slug}
                    animate={{
                      x: offset * 110,
                      scale: isCurrent ? 1 : 0.8,
                      opacity: isCurrent ? 1 : (isVisible ? 0.6 : 0),
                      zIndex: isCurrent ? 10 : (isVisible ? 5 : 0),
                      rotateY: offset * -15
                    }}
                    initial={false}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute w-40 h-56 lg:w-48 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/20 origin-center"
                    style={{ pointerEvents: isCurrent ? 'auto' : 'none' }}
                  >
                    <Link to={`/products/${product.slug}`} className="block w-full h-full relative group">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-6 left-4 right-4 text-center">
                        <h3 className="text-white font-bold text-lg lg:text-xl drop-shadow-md group-hover:text-gold transition-colors">{product.name}</h3>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 3: Stone Artcrafts (Horizontal Reel) */}
          <motion.div variants={fadeUp} className="relative rounded-none overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-700 flex flex-col h-[400px] lg:h-[480px] shadow-2xl">
            <div className="relative z-10 px-8 pt-8 mb-4 text-right lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-3 drop-shadow-sm tracking-tight">Stone Artcrafts</h2>
              <p className="text-white/90 text-lg leading-snug font-light">Highly attractive and meticulously crafted stone artifacts.</p>
            </div>
            
            {/* Double Horizontal Reels */}
            <div className="relative w-full flex-1 flex flex-col justify-center gap-4 group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              {/* Top Row */}
              <div className="flex gap-4 animate-marquee-custom w-max group-hover:[animation-play-state:paused] px-4" style={{ animationDirection: 'reverse' }}>
                 {[...artcraftProducts, ...artcraftProducts].map((product, idx) => (
                    <Link key={`top-${product.slug}-${idx}`} to={`/products/${product.slug}`} className="relative block w-32 h-24 lg:w-40 lg:h-28 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group/item">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/item:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-4 right-4 text-center">
                        <h3 className="text-white font-semibold text-xs lg:text-sm leading-tight group-hover/item:text-gold transition-colors line-clamp-2">{product.name}</h3>
                      </div>
                    </Link>
                 ))}
              </div>
              {/* Bottom Row */}
              <div className="flex gap-4 animate-marquee-custom w-max group-hover:[animation-play-state:paused] px-4">
                 {[...artcraftProducts].reverse().concat([...artcraftProducts].reverse()).map((product, idx) => (
                    <Link key={`bot-${product.slug}-${idx}`} to={`/products/${product.slug}`} className="relative block w-32 h-24 lg:w-40 lg:h-28 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group/item">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/item:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-4 right-4 text-center">
                        <h3 className="text-white font-semibold text-xs lg:text-sm leading-tight group-hover/item:text-gold transition-colors line-clamp-2">{product.name}</h3>
                      </div>
                    </Link>
                 ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/products"
            className="btn-custom-animated w-56 gap-3 mx-auto"
          >
            <span>View All Stones</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
