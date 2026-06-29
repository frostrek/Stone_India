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
                            <div key={link.name} className="relative group/nav py-2">
                                <Link
                                    to={link.path}
                                    className={`font-medium transition-colors text-sm flex items-center gap-1 ${
                                        location.pathname === link.path ? 'text-gold' : 'text-neutral-600 hover:text-gold'
                                    }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>

                                {link.hasDropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-neutral-100 rounded-sm shadow-xl p-8 w-[600px] grid grid-cols-3 gap-6 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                                        {productCategories.slice(0, 3).map((cat) => {
                                            const catProducts = products.filter(p => p.category === cat.slug).slice(0, 4);
                                            return (
                                                <div key={cat.slug}>
                                                    <div className="border-b border-neutral-100 pb-2 mb-3">
                                                        <h5 className="font-display font-bold text-neutral-900 text-sm">{cat.name}</h5>
                                                        <Link
                                                            to={`/products?category=${cat.slug}`}
                                                            className="text-xs text-gold font-medium hover:underline block mt-0.5"
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
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">
                        <button onClick={toggleLanguage} className="hover:text-gold text-neutral-600 font-bold uppercase transition-colors text-xs tracking-wider">
                            {i18n.language === 'en' ? 'EN' : 'HI'}
                        </button>
                        <Link to="/contact-us" className="btn-custom-animated w-48 h-10 text-xs font-semibold">
                            <span>{t('Get a Consultation')}</span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
