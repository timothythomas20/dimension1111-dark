interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ label, title, description, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto' : ''}`}>
      {label && (
        <p className={`section-label ${light ? 'text-amber-400' : ''}`}>{label}</p>
      )}
      <h2 className={`section-title ${light ? 'text-cream-50' : ''}`}>{title}</h2>
      {description && (
        <p className={`section-description ${centered ? 'mx-auto' : ''} ${light ? 'text-cream-200' : ''}`}>
          {description}
        </p>
      )}
      <div className={`gold-line mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
