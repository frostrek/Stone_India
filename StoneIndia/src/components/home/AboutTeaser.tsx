import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { fadeLeft, fadeRight, scalePop, staggerContainer, fadeUp } from '../ui/AnimationVariants';

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

          {/* ── Images column ── */}
          <div className="relative">
            {/* Main image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="aspect-[4/5] w-4/5 rounded-sm overflow-hidden relative z-10 shadow-2xl"
            >
              <motion.img
                src="/Rainbow-Sandstone-04.webp"
                alt="Stone India Office and Quarry"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-gold/10 pointer-events-none" />
            </motion.div>

            {/* Floating secondary image */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-4 w-2/3 aspect-square rounded-sm overflow-hidden border-[6px] border-white z-20 shadow-2xl"
            >
              <motion.img
                src="/mosaic-stone-tile-5.webp"
                alt="Stone India Stone Detail"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
              />
              {/* Gold border glow on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-gold opacity-0 hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              variants={scalePop}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute top-12 -left-8 bg-white p-6 shadow-2xl rounded-sm z-30 hidden md:block"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-display font-bold text-gold">25+</div>
                <div className="text-sm font-semibold text-neutral-900 leading-tight">
                  Years of<br />Experience
                </div>
              </div>
              {/* Animated underline inside badge */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-3 h-[2px] bg-gold origin-left"
              />
            </motion.div>

            {/* Decorative dot grid pattern */}
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #B8860B 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
              }}
            />
          </div>

          {/* ── Content column ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:pl-8 mt-16 lg:mt-0"
          >
            <SectionHeading
              eyebrow="Our Mission"
              title={<>Making the World More <span className="text-gold">Beautiful</span></>}
              align="left"
            />

            <div className="text-neutral-600 text-lg leading-relaxed mt-6 space-y-5">
              <p>
                Our organization is a closely knit group of dedicated professionals who are highly motivated and always ready for challenges.
              </p>
              <p>
                Natural stone is durable, readily available, and comes in a variety of textures and colors. Unlike manufactured materials requiring harsh chemicals, natural stone is abundant, eco-friendly, and available in bountiful colors and designs.
              </p>
              <p className="font-medium text-neutral-900 border-l-4 border-gold pl-6 py-2 bg-gold/5 rounded-r-sm">
                Stone India offers a great selection of Indian natural stone to the world at affordable rates with excellent service — opening up the beautiful world of natural stone.
              </p>
            </div>

            {/* Check points */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10"
            >
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle2 size={20} className="text-gold shrink-0" />
                  </motion.div>
                  <span className="text-neutral-700 font-medium group-hover:text-gold transition-colors duration-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA button with fill animation */}
            <Link
              to="/about-us"
              className="btn-custom-animated w-64 gap-3"
            >
              <span>Read More About Us</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
