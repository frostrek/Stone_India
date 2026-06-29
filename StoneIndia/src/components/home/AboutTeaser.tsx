import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function AboutTeaser() {
  const points = [
    "Durable & readily available",
    "Eco-friendly & abundant",
    "Bountiful colors and designs",
    "Affordable rates with excellent service"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* TODO: replace with real Stone India photo */}
              <div className="aspect-[4/5] w-4/5 bg-neutral-200 rounded-sm overflow-hidden relative z-10 shadow-lg">
                 <img src="/Rainbow-Sandstone-04.webp" alt="Stone India Office and Quarry" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-12 -right-4 w-2/3 aspect-square bg-gold rounded-sm overflow-hidden border-8 border-white z-20 shadow-xl"
            >
              {/* TODO: replace with real Stone India photo */}
              <div className="w-full h-full bg-neutral-300">
                  <img src="/mosaic-stone-tile-5.webp" alt="Stone India Stone Detail" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-12 -left-8 bg-white p-6 shadow-xl rounded-sm z-30 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-display font-bold text-gold">25+</div>
                <div className="text-sm font-medium text-neutral-900 leading-tight">Years of<br />Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8 mt-16 lg:mt-0"
          >
            <SectionHeading
              eyebrow="Our Mission"
              title={<>Making the World More <span className="text-gold">Beautiful</span></>}
              align="left"
            />
            
            <div className="text-neutral-600 text-lg leading-relaxed mt-6 space-y-6">
              <p>
                Our organization is a closely knit group of dedicated professionals who are highly motivated and always ready for challenges. 
              </p>
              <p>
                Natural stone is durable, readily available, and comes in a variety of textures and colors. Unlike manufactured materials requiring harsh chemicals, natural stone is abundant, eco-friendly, and available in bountiful colors and designs. 
              </p>
              <p className="font-medium text-neutral-900 border-l-4 border-gold pl-6 py-2">
                Stone India offers a great selection of Indian natural stone to the world at affordable rates with excellent service — opening up the beautiful world of natural stone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-gold shrink-0" />
                  <span className="text-neutral-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about-us" 
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-gold text-white px-8 py-4 font-medium transition-all duration-300 group rounded-sm"
            >
              Read More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
