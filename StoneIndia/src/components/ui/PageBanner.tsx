import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Breadcrumb {
  name: string;
  path?: string;
}

export interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageBanner({ title, breadcrumbs, backgroundImage }: PageBannerProps) {
  return (
    <div 
      className="relative bg-neutral-900 pt-40 pb-24 px-4 text-center overflow-hidden"
    >
      {/* Background Image / Overlay */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center z-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-md">
          {title}
        </h1>
        
        <nav className="flex items-center justify-center gap-2 text-sm text-neutral-300 font-semibold uppercase tracking-wider flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={16} className="text-gold" />}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gold">{crumb.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
