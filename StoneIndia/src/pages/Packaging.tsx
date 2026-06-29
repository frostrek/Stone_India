import { motion } from 'framer-motion';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { Package, ShieldCheck, Globe } from 'lucide-react';

export default function Packaging() {
  const features = [
    {
      icon: <Package size={32} />,
      title: "Dedicated Unit",
      desc: "Stone India has a fully dedicated stone packing unit with specialized staff ensuring materials are secured."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Extreme Care",
      desc: "Packaging is treated as a core part of the business, preserving both the aesthetics and quality of the natural stone."
    },
    {
      icon: <Globe size={32} />,
      title: "International Standards",
      desc: "Every crate and pallet is packed to strict international standards to ensure safe transit worldwide."
    }
  ];

  return (
    <>
      <PageBanner
        title="Packaging"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Packaging' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="Our Process"
                title={<>International <span className="text-gold">Packaging</span> Standards</>}
                align="left"
              />
              <div className="prose prose-lg text-neutral-600 mt-6 space-y-6">
                <p>
                  Stone India has a fully dedicated stone packing unit with dedicated staff, ensuring stones are packed with extreme care and to international packing standards. 
                </p>
                <p>
                  Packaging is treated as a core part of the business — because the business is about both aesthetics and quality of material. We ensure that every piece reaches its destination exactly as it left our facility.
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
              {/* TODO: replace with real Stone India packaging photo */}
              <div className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden relative">
                 <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
                 <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400">
                    <span className="font-display text-2xl font-bold mb-2">Packaging Photo</span>
                    <span>(Placeholder)</span>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-50 p-10 border border-neutral-100 rounded-sm group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white border border-neutral-100 rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
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
