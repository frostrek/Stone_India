import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import { blogs } from '../data/blogs';
import CTABanner from '../components/home/CTABanner';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-gold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  // Determine prev/next posts for navigation
  const currentIndex = blogs.findIndex(b => b.slug === slug);
  const prevPost = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextPost = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <>
      <PageBanner
        title="Blog Details"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'Article' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-6">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-gold" /> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><User size={16} className="text-gold" /> Stone India Admin</span>
              <span className="flex items-center gap-2"><Tag size={16} className="text-gold" /> Natural Stone</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight">
              {blog.title}
            </h1>

            {/* Featured Image Placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-sm overflow-hidden mb-12 flex items-center justify-center">
               <span className="text-neutral-400 font-display text-xl">Featured Image</span>
            </div>

            {/* Dummy Content - Since actual blog content wasn't provided, generating standard lorem placeholder formatted nicely */}
            <div className="prose prose-lg max-w-none text-neutral-600 prose-headings:font-display prose-headings:text-neutral-900 prose-a:text-gold hover:prose-a:text-gold-600">
              <p className="lead text-xl text-neutral-700 font-medium mb-8">
                Natural stone has been a foundational element in architecture for centuries, offering unmatched durability and timeless aesthetic appeal. In this article, we delve into the nuances of this remarkable material.
              </p>
              
              <h2>The Aesthetic Appeal</h2>
              <p>
                Unlike manufactured materials that require harsh chemicals and energy-intensive processes, natural stone is abundant, eco-friendly, and available in bountiful colors and designs. Every slab tells a geological story millions of years in the making.
              </p>

              <blockquote>
                "Stone India offers a great selection of Indian natural stone to the world at affordable rates with excellent service — opening up the beautiful world of natural stone and making the world more beautiful."
              </blockquote>

              <h2>Structural Advantages</h2>
              <p>
                Beyond aesthetics, the structural integrity of natural stone like Sandstone, Limestone, and Granite is exceptional. It withstands harsh weather conditions, heavy foot traffic, and the test of time, making it ideal for both interior and exterior applications.
              </p>

              <ul>
                <li><strong>Durability:</strong> Highly resistant to wear and tear.</li>
                <li><strong>Low Maintenance:</strong> Requires minimal upkeep compared to wood or synthetic alternatives.</li>
                <li><strong>Value Addition:</strong> Significantly increases the property value.</li>
              </ul>

              <p>
                When selecting stone for your next project, consider the specific finish and application area to ensure maximum longevity and visual impact. Our team at Stone India is always ready to guide you through this process.
              </p>
            </div>
          </motion.article>

          {/* Post Navigation */}
          <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex-1">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="group block">
                  <span className="flex items-center gap-2 text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-2">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Previous
                  </span>
                  <span className="font-display font-bold text-neutral-900 group-hover:text-gold transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="flex-1 text-right">
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="group block">
                  <span className="flex items-center justify-end gap-2 text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-2">
                    Next <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="font-display font-bold text-neutral-900 group-hover:text-gold transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  );
}
