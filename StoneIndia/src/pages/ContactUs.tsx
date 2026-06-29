import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import { companyInfo } from '../data/companyInfo';

export default function ContactUs() {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      details: [companyInfo.address],
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: [companyInfo.phone.primary, companyInfo.phone.secondary],
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: [companyInfo.email],
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    }
  ];

  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact' }
        ]}
      />

      <section className="py-24 bg-neutral-50 relative z-10 -mt-16 mx-4 md:mx-auto max-w-7xl rounded-sm shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 bg-neutral-950 text-white p-10 md:p-16">
            <SectionHeading
              eyebrow="Get In Touch"
              title={<>Contact <span className="text-gold">Information</span></>}
              align="left"
              className="[&_h2]:text-white mb-12"
            />
            
            <div className="space-y-10">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center text-gold shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-2">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-neutral-400 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h4 className="font-display font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {Object.entries(companyInfo.social).map(([platform, url]) => (
                  <a 
                    key={platform}
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                  >
                    <span className="uppercase text-xs font-bold">{platform.substring(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <SectionHeading
              eyebrow="Send a Message"
              title={<>Request a <span className="text-gold">Quote</span></>}
              align="left"
              description="Fill out the form below and our team will get back to you within 24 hours with the information you need."
            />

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted! (EmailJS integration requires Service/Template IDs to be configured by the administrator)');
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name"
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="user_email" 
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="user_phone"
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-neutral-700"
                  >
                    <option>Product Inquiry</option>
                    <option>Request a Quote</option>
                    <option>Export Details</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-custom-animated w-48 gap-3"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full bg-neutral-200 relative">
        <iframe 
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14309.434444585145!2d${companyInfo.coordinates.lng}!3d${companyInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6bb1b045331%3A0xc3b2e3e5c9476b89!2sBanmore%2C%20Madhya%20Pradesh%20476444%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Stone India Location"
          className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
      </section>
    </>
  );
}
