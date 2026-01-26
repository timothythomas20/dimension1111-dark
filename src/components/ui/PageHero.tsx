import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; path?: string }[];
  image?: string;
}

export default function PageHero({ title, subtitle, badge, breadcrumbs, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-950">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-40"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-900 via-dark-850 to-forest-900 opacity-80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/40 to-transparent" />
      </div>

      <div className="relative z-10 section-container text-center py-32 md:py-40">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 mb-6 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="text-cream-400 hover:text-amber-500 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-500">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-cream-600" />
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-sans uppercase tracking-wider mb-6">
            {badge}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-cream-50 mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-cream-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="gold-line mx-auto mt-8" />
      </div>
    </section>
  );
}
