import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { productCategories, products } from '../../data/products';
import logoImg from '../../assets/Logo.png';

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
    };

    const navLinks = [
        { name: t('Home'), path: '/' },
        { name: t('About Us'), path: '/about-us' },
        { name: t('Infrastructure'), path: '/infrastructure' },
        { name: t('Packaging'), path: '/packaging' },
        {
            name: t('Products'),
            path: '/products',
            hasDropdown: true
        },
        { name: t('Projects'), path: '/projects' },
        { name: t('Blog'), path: '/blog' },
        { name: t('Contact Us'), path: '/contact-us' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 transition-all duration-300">
            {/* Top Utility Bar */}
            <div className="bg-gold text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${companyInfo.phone.primary}`} className="flex items-center gap-2 hover:text-neutral-200 transition-colors">
                            <Phone size={14} />
                            <span>{companyInfo.phone.primary}</span>
                        </a>
                        <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-neutral-200 transition-colors">
                            <Mail size={14} />
                            <span>{companyInfo.email}</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        <div className="flex gap-3 items-center">
                            {/* Facebook */}
                            <a href={companyInfo.social.facebook} target="_blank" rel="noreferrer" className="hover:text-neutral-200 transition-colors" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            {/* Twitter / X */}
                            <a href={companyInfo.social.twitter} target="_blank" rel="noreferrer" className="hover:text-neutral-200 transition-colors" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" className="hover:text-neutral-200 transition-colors" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                        </div>
                        <span className="text-white/40">|</span>
                        <button onClick={toggleLanguage} className="hover:text-neutral-200 font-medium uppercase transition-colors flex items-center gap-1">
                            {i18n.language === 'en' ? 'EN' : 'HI'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Sticky Nav */}
            <div className="bg-white backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 p-1 rounded-sm">
                        <img
                            className="w-auto h-12 object-contain"
                            src={logoImg}
                            alt="Stone India"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.path}
                                    className={`flex items-center gap-1 font-medium text-sm hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-neutral-800'}`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>

                                {/* Products Mega Dropdown */}
                                {link.hasDropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        <div className="bg-white shadow-2xl border border-neutral-100 rounded-sm p-6 flex gap-8" style={{minWidth: '720px'}}>
                                            {productCategories.map(cat => {
                                                const catProducts = products.filter(p => p.category === cat.id);
                                                return (
                                                    <div key={cat.id} className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between border-b border-neutral-100 pb-2 mb-3">
                                                            <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-wide">
                                                                {cat.name}
                                                            </h4>
                                                            <Link
                                                                to={`/products?category=${cat.slug}`}
                                                                className="text-xs text-gold hover:underline font-medium whitespace-nowrap"
                                                            >
                                                                View all →
                                                            </Link>
                                                        </div>
                                                        <ul className="flex flex-col gap-1.5">
                                                            {catProducts.map(prod => (
                                                                <li key={prod.id}>
                                                                    <Link
                                                                        to={`/products/${prod.slug}`}
                                                                        className="text-sm text-neutral-600 hover:text-gold transition-colors block leading-snug"
                                                                    >
                                                                        {prod.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/contact-us" className="bg-gold hover:bg-gold-600 text-white px-6 py-2.5 rounded-sm font-medium transition-colors text-sm">
                            {t('Get a Consultation')}
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
