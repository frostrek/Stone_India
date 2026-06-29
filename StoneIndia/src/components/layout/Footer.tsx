import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { homepageFeaturedProducts } from '../../data/products';
import logoImg from '../../assets/Logo.png';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-950 text-neutral-400 pt-20">
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Col 1: Brand */}
                    <div>
                        <Link to="/" className="inline-block mb-6 p-2 rounded-sm">
                            <img className="h-12 w-auto object-contain" src={logoImg} alt="Stone India" />
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            25+ years of experience as Natural Stone processors and traders, building strong relationships with factories and suppliers across India.
                        </p>
                        <div className="flex gap-3">
                            {/* Facebook */}
                            <a href={companyInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            {/* Twitter / X */}
                            <a href={companyInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"
                                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-display font-bold text-xl mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { name: t('About Us'), path: '/about-us' },
                                { name: t('Infrastructure'), path: '/infrastructure' },
                                { name: t('Packaging'), path: '/packaging' },
                                { name: t('Projects'), path: '/projects' },
                                { name: t('Blog'), path: '/blog' },
                                { name: t('Contact Us'), path: '/contact-us' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Hot Products */}
                    <div>
                        <h4 className="text-white font-display font-bold text-xl mb-6">Featured Products</h4>
                        <ul className="flex flex-col gap-3">
                            {homepageFeaturedProducts.slice(0, 5).map(prod => (
                                <li key={prod.slug}>
                                    <Link to={`/products/${prod.slug}`} className="hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold" />
                                        {prod.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h4 className="text-white font-display font-bold text-xl mb-6">{t('Contact Us')}</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-4 items-start">
                                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                                <span>{companyInfo.address}</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Phone className="text-gold shrink-0 mt-1" size={20} />
                                <div className="flex flex-col">
                                    <a href={`tel:${companyInfo.phone.primary}`} className="hover:text-gold transition-colors">{companyInfo.phone.primary}</a>
                                    <a href={`tel:${companyInfo.phone.secondary}`} className="hover:text-gold transition-colors">{companyInfo.phone.secondary}</a>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Mail className="text-gold shrink-0 mt-1" size={20} />
                                <a href={`mailto:${companyInfo.email}`} className="hover:text-gold transition-colors">{companyInfo.email}</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-900 py-6">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Stone India. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
