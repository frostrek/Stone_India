import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Pickaxe, ShieldCheck, Truck, Wrench } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { products, productCategories } from '../data/products';
import { stats } from '../data/stats';

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-neutral-200 rounded-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
          >
            <span className="font-display font-bold text-neutral-900 text-lg pr-4">{item.q}</span>
            <ChevronDown
              size={20}
              className={`text-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <p className="px-6 pb-6 text-neutral-600 leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-4">Product Not Found</h1>
        <Link to="/products" className="text-gold hover:underline">Back to Products</Link>
      </div>
    );
  }

  const category = productCategories.find(c => c.slug === product.category);

  const whyChooseFeatures = [
    { icon: <Pickaxe size={28} />, title: 'Premium Stone Selection', desc: `We source only the finest ${product.name} from trusted quarries across India, ensuring consistent quality and natural beauty in every piece.` },
    { icon: <ShieldCheck size={28} />, title: 'Quality-Controlled Processing', desc: 'Each slab and tile is carefully processed and inspected to ensure uniform thickness, finish accuracy, and structural integrity.' },
    { icon: <Truck size={28} />, title: 'Reliable Supply & Logistics', desc: 'We manage packaging, handling, and delivery with care to ensure materials arrive safely and on schedule, regardless of project scale.' },
    { icon: <Wrench size={28} />, title: 'Project-Oriented Support', desc: 'Our team assists architects, designers, and contractors with material selection, quantity planning, and technical guidance.' },
  ];

  const processSteps = [
    { num: '01', title: 'Material Consultation', desc: 'Understanding your project requirements, application areas, finish preferences, and quantity needs.' },
    { num: '02', title: 'Selection & Confirmation', desc: 'Finalizing stone types, sizes, finishes, and production details based on availability and project specifications.' },
    { num: '03', title: 'Processing & Delivery', desc: 'Precision processing, quality checks, secure packaging, and timely delivery to your site or warehouse.' },
  ];

  const faqItems = [
    { q: `What sizes is ${product.name} available in?`, a: `${product.name} is available in a wide range of sizes depending on the application — from standard tiles to large custom slabs. Contact us for a detailed size chart.` },
    { q: 'What finishes can be applied?', a: 'We offer natural, sawn, honed polished, sandblasted, tumbled, calibrated, and other custom finishes based on your project requirements.' },
    { q: 'What is the minimum order quantity?', a: 'Our minimum order quantities vary depending on the stone type and finish. Contact our team for specific MOQ details for your project.' },
    { q: 'How is the stone packaged for export?', a: 'All stones are packed in our dedicated packing unit to international standards, ensuring safe transit to any destination worldwide.' },
    { q: 'What are the typical lead times?', a: 'Lead times depend on the order size and finish requirements. Standard orders are typically processed within 2-4 weeks.' },
  ];

  return (
    <>
      <PageBanner
        title={product.name}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: product.name }
        ]}
      />

      {/* Intro + Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-neutral-950 p-8 rounded-sm mb-8">
                <h3 className="text-white font-display font-bold text-xl mb-6">
                  Explore Our Products
                </h3>
                <div className="space-y-3">
                  {products.filter(p => p.category === product.category).slice(0, 6).map(p => (
                    <Link
                      key={p.id}
                      to={`/products/${p.slug}`}
                      className={`flex items-center justify-between p-4 transition-colors rounded-sm ${
                        p.slug === slug
                          ? 'bg-gold text-white'
                          : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                      }`}
                    >
                      <span className="font-medium">{p.name}</span>
                      <ArrowRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="relative rounded-sm overflow-hidden">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
                  <h3 className="text-white font-display font-bold text-xl mb-4">
                    Got any questions? Contact us today
                  </h3>
                  <div className="space-y-4 text-neutral-300">
                    <a href="tel:+919371013666" className="flex items-center gap-3 hover:text-gold transition-colors">
                      <span className="text-gold">📞</span> +91 937-101-3666
                    </a>
                    <a href="mailto:info@stoneindia.co" className="flex items-center gap-3 hover:text-gold transition-colors">
                      <span className="text-gold">✉️</span> info@stoneindia.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                {/* TODO: replace with real Stone India product photo */}
                <div className="aspect-[16/9] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-sm overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 font-display text-xl">
                    {product.name}
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <p className="text-neutral-600 leading-relaxed text-lg mb-4">
                  {product.description} Stone India is one of the prominent names engaged in offering a comprehensive range of {category?.name}. These stones are processed in our manufacturing units and made available in finishes like natural, sawn, honed polished, sandblasted, tumbled, calibrated, and others.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Stones are processed either by hand or by machine, producing exceptional hand-cut or machine-cut edges used for paving, flooring, walling, and wall-cladding.
                </p>
              </motion.div>

              {/* Why Choose */}
              <div className="mb-16">
                <SectionHeading
                  eyebrow="Why Choose"
                  title={<>Why Choose <span className="text-gold">{product.name}</span> from Stone India</>}
                  align="left"
                  description="Choosing us means partnering with a supplier who understands stone not just as a material, but as a foundational element of architectural design."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyChooseFeatures.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-6 bg-neutral-50 border border-neutral-100 rounded-sm"
                    >
                      <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-neutral-900 mb-2">{feature.title}</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-16">
                <SectionHeading
                  eyebrow="Our Process"
                  title={<>Our <span className="text-gold">Supply Process</span></>}
                  align="left"
                  description="Our supply process is designed to be straightforward, transparent, and efficient — helping you source the right stone without delays or complications."
                />

                <div className="space-y-6">
                  {processSteps.map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-sm"
                    >
                      <div className="text-4xl font-display font-bold text-gold/30">{step.num}</div>
                      <div>
                        <h4 className="font-display font-bold text-neutral-900 text-lg mb-2">{step.title}</h4>
                        <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Strip */}
              <div className="bg-neutral-950 rounded-sm p-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {stats.map((stat) => (
                    <div key={stat.id}>
                      <div className="text-3xl font-display font-bold text-gold">
                        {stat.value}{stat.suffix}
                      </div>
                      <p className="text-neutral-400 mt-1 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-16">
                <SectionHeading
                  eyebrow="Frequently Asked Questions"
                  title={<>Common Questions About <span className="text-gold">{product.name}</span></>}
                  align="left"
                />
                <FAQAccordion items={faqItems} />
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-gold to-amber-600 rounded-sm p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Interested in {product.name}?
                </h3>
                <p className="text-white/80 mb-6">Get in touch with our team for pricing, samples, and custom specifications.</p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-gold px-8 py-4 font-medium hover:bg-neutral-100 transition-colors"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
