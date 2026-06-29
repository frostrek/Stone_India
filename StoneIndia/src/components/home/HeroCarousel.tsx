import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroBanners } from '../../data/products';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const slideVariants: Variants = {
    hidden: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 }
      }
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroBanners.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full bg-neutral-950 overflow-hidden flex items-center justify-center pt-20">
      {/* Background Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0 ">
             <img 
               className="w-full h-full object-cover" 
               src={heroBanners[currentIndex].image} 
               alt={heroBanners[currentIndex].title}
             /> 
             <div className="absolute inset-0"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content (Fixed on screen, animates on slide change) */}
      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 lg:px-8 z-20 pointer-events-none">
        <div className="max-w-2xl relative z-20 pointer-events-auto">
          <motion.div
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gold"></div>
            <span className="uppercase tracking-widest text-gold font-bold text-sm">
              {heroBanners[currentIndex].subtitle}
            </span>
          </motion.div>
          
          <motion.h1
            key={`title-${currentIndex}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.12, delayChildren: 0.4 } 
              }
            }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-[1.1] flex flex-wrap"
          >
            {heroBanners[currentIndex].title.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.25em]">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          
          <motion.div
            key={`buttons-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              to={heroBanners[currentIndex].link}
              className="btn-custom-animated w-48 gap-3"
            >
              <span>View Product</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="btn-custom-animated bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 backdrop-blur-sm w-48 gap-3 transition-colors duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-colors duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-colors duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 z-30 flex gap-3">
        {heroBanners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-gold w-8' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
