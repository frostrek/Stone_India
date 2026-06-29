import { motion } from 'framer-motion';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { Pickaxe, Users, PackageCheck, Map, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Pickaxe size={24} />,
      title: "Who We Are",
      desc: "25+ years of experience as Natural Stone processors and traders, building strong relationships across India.",
      bullets: [
        "Low profit margins for customers",
        "Strict quality control & timely delivery",
        "Fast communication & shipment assistance",
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Our Team",
      desc: "A closely-knit group of dedicated, highly motivated professionals ready for any challenge.",
      bullets: [
        "Excellent quality stones",
        "Competitive pricing",
        "Impeccable end-to-end service",
      ]
    },
    {
      icon: <PackageCheck size={24} />,
      title: "Warehousing & Packaging",
      desc: "Stones processed across India exported via Mundra, Chennai, or Mumbai Port for fast dispatch.",
      bullets: [
        "Mundra Port for North India",
        "Chennai & Mumbai Port for South India",
        "Efficient dispatch processing",
      ]
    },
    {
      icon: <Map size={24} />,
      title: "Sources of Stones",
      desc: "Sourced from quarries across India, managed by trained field staff ensuring consistent quality.",
      bullets: [
        "Pan-India quarry network",
        "On-site quality management",
        "Near-quarry processing options",
      ]
    }
  ];

  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us' }
        ]}
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="Our Story"
                title={<>25+ Years of Natural Stone <span className="text-gold">Excellence</span></>}
                align="left"
              />
              <div className="prose prose-lg text-neutral-600 mt-6 space-y-6">
                <p>
                  <strong>STONE INDIA</strong> is one of the prominent names engaged in offering a comprehensive range of Gwalior & Kota stones. We are also one of the leading Natural Stone processors and traders in India who process and export a variety of Indian stone like Sandstone, Limestone, Slate, Mosaic, Pebbles, circles, Stone Palisade, granite, etc.
                </p>
                <p>
                  These stones are processed in our manufacturing units and made available in finishes like natural, sawn, honed polished, sandblasted, tumbled, calibrated, and others. Stones are processed either by hand or by machine, producing exceptional hand-cut or machine-cut edges used for paving, flooring, walling, and wall-cladding.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* TODO: replace with real Stone India photo */}
              <div className="aspect-[4/5]  rounded-sm overflow-hidden relative">
                 <div className="w-full h-full ">
                    <img className='w-full h-full object-cover' src="/company.webp" alt="Company Photo" />
                 </div>
              </div>
              
              {/* Floating Stat Box */}
              <div className="absolute -bottom-8 -left-8 bg-neutral-950 p-8 text-white rounded-sm hidden md:block">
                <div className="text-5xl font-display font-bold text-gold mb-2">25+</div>
                <div className="font-medium text-lg">Years of<br />Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Strengths — card style matching reference */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Our Core <span className="text-gold">Strengths</span></>}
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, boxShadow: '0 24px 56px 0 rgba(184,134,11,0.13)' }}
                className="relative bg-white rounded-2xl p-8 border border-gold/25 hover:border-gold/60 transition-colors duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Subtle gold corner glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top row: icon box + arrow */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon in gold rounded square */}
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center text-white shadow-md shadow-gold/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Arrow icon top-right */}
                  <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-gold mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 leading-relaxed text-sm mb-6">
                  {feature.desc}
                </p>

                {/* Divider */}
                <div className="h-px bg-gold/15 mb-5" />

                {/* Bullet points */}
                <ul className="flex flex-col gap-3">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-neutral-600">
                      <CheckCircle size={17} className="text-gold shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
