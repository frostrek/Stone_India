import { motion } from 'framer-motion';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { Pickaxe, Users, PackageCheck, Map } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Pickaxe size={32} />,
      title: "Who We Are",
      desc: "25+ years of experience as Natural Stone processors and traders, building strong relationships with factories and suppliers across India — enabling sourcing at low profit margins for customers. We focus on long-term relationships, not just order-taking, prioritizing quality control, timely delivery, fast communication, shipment assistance, and immediate query response."
    },
    {
      icon: <Users size={32} />,
      title: "Our Team",
      desc: "A closely-knit group of dedicated, highly motivated professionals ready for any challenge, focused on excellent quality stones at competitive prices with impeccable service."
    },
    {
      icon: <PackageCheck size={32} />,
      title: "Warehousing & Packaging",
      desc: "Stones processed in North India are exported via Mundra Port; stones processed in South India are exported via Chennai Port (Tamil Nadu) or Mumbai Port (Maharashtra) — chosen for fast, efficient dispatch processing."
    },
    {
      icon: <Map size={32} />,
      title: "Sources of Stones",
      desc: "Sourced from quarries across India, controlled by trained field staff who manage production and quality. Where local processing (Gwalior) isn't feasible due to transport cost, stones are bought from factories near the quarries, with field staff ensuring quality standards are still met."
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
              <div className="aspect-[4/5] bg-neutral-200 rounded-sm overflow-hidden relative">
                 <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
                 <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400">
                    <span className="font-display text-2xl font-bold mb-2">Company Photo</span>
                    <span>(Placeholder)</span>
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

      {/* Features Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Our Core <span className="text-gold">Strengths</span></>}
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 border border-neutral-100 hover:shadow-xl transition-all duration-300 rounded-sm group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
