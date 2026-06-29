import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { blogs } from '../data/blogs';
import CTABanner from '../components/home/CTABanner';

export default function BlogListing() {
  return (
    <>
      <PageBanner
        title="Our Blog"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog' }
        ]}
      />

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Insights & News"
            title={<>Latest <span className="text-gold">Stone Industry</span> Updates</>}
            description="Expert insights, tips, and trends on natural stone selection, application, and maintenance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <article className="bg-white border border-neutral-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-2">
                  <Link to={`/blog/${blog.slug}`} className="block relative overflow-hidden h-60 bg-gradient-to-br from-neutral-200 to-neutral-300">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-display">
                        Blog Image
                     </div>
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gold" /> {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1.5"><User size={14} className="text-gold" /> Admin</span>
                    </div>
                    
                    <Link to={`/blog/${blog.slug}`}>
                      <h3 className="text-xl font-display font-bold text-neutral-900 mb-4 group-hover:text-gold transition-colors line-clamp-3">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="text-neutral-600 mb-6 line-clamp-2">
                      Discover the unique benefits and applications of natural stone in modern architecture and design. Read our comprehensive guide.
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-gold font-medium text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                      >
                        Read Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
