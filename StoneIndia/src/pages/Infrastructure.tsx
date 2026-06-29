import { motion } from 'framer-motion';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { Factory, CheckCircle, MapPin } from 'lucide-react';

export default function Infrastructure() {
  const features = [
    {
      icon: <Factory size={32} />,
      title: "Strategic Processing",
      desc: "Since producing and processing all varieties of stones cannot be done in a single factory in one location, we leverage multiple specialized facilities."
    },
    {
      icon: <MapPin size={32} />,
      title: "Pan-India Sourcing",
      desc: "Stone India sources natural stones from various quarries all over India, ensuring access to the best raw materials across regions."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Uncompromising Quality",
      desc: "Trained field staff primarily control the production and quality of procured stones, ensuring no compromise on quality even when sourcing from factories near quarries rather than Gwalior itself."
    }
  ];

  return (
    <>
      <PageBanner
        title="Infrastructure"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Infrastructure' }
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
              className="relative"
            >
              {/* TODO: replace with real Stone India infrastructure/factory photo */}
              <div className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden relative">
                 <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
                 <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400">
                    <span className="font-display text-2xl font-bold mb-2">Factory Photo</span>
                    <span>(Placeholder)</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeading
                eyebrow="Our Facilities"
                title={<>Robust <span className="text-gold">Infrastructure</span> Network</>}
                align="left"
              />
              <div className="prose prose-lg text-neutral-600 mt-6 space-y-6">
                <p>
                  Since producing and processing all varieties of stones cannot be done in a single factory in one location, Stone India sources natural stones from various quarries all over India. 
                </p>
                <p>
                  Trained field staff primarily control the production and quality of procured stones, ensuring no compromise on quality even when sourcing from factories near quarries rather than Gwalior itself.
                </p>
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
                className="bg-neutral-50 p-10 border border-neutral-100 text-center rounded-sm group hover:bg-neutral-950 transition-colors duration-500"
              >
                <div className="w-16 h-16 bg-white border border-neutral-100 rounded-full flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4 group-hover:text-white transition-colors duration-500">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-400 transition-colors duration-500">
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
