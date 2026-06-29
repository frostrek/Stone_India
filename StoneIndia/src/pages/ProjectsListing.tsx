import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/home/CTABanner';

// Dummy data for projects as requested by the user until real data is provided
const projects = [
  { id: 1, title: 'Luxury Villa Paving', category: 'Residential', location: 'Dubai, UAE' },
  { id: 2, title: 'Corporate Headquarters', category: 'Commercial', location: 'Mumbai, India' },
  { id: 3, title: 'Boutique Hotel Facade', category: 'Hospitality', location: 'London, UK' },
  { id: 4, title: 'Public Park Walkways', category: 'Landscaping', location: 'Sydney, Australia' },
  { id: 5, title: 'Resort Pool Deck', category: 'Hospitality', location: 'Maldives' },
  { id: 6, title: 'Modern Home Exterior', category: 'Residential', location: 'New York, USA' }
];

export default function ProjectsListing() {
  return (
    <>
      <PageBanner
        title="Our Projects"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Global <span className="text-gold">Project</span> Success</>}
            description="Discover how our premium natural stones have transformed architectural visions into reality across the world."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-sm bg-neutral-900"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/5] bg-gradient-to-br from-neutral-800 to-neutral-700 opacity-60 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center">
                   <span className="text-neutral-500 font-display">Project Image</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4">
                      {project.location}
                    </p>
                    {/* Fake link for UI completeness */}
                    <div className="inline-flex items-center gap-2 text-white font-medium text-sm uppercase tracking-wider group-hover:text-gold transition-colors cursor-pointer">
                      View Details <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
