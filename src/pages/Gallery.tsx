import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';

const galleryImages = [
  { src: '/new-images/common-areas/new-hero.jpeg', category: 'property', alt: 'Property view' },
  { src: '/new-images/common-areas/WhatsApp_Image_2026-02-27_at_09.29.15_(1).jpeg', category: 'property', alt: 'Common area' },
  { src: '/new-images/common-areas/WhatsApp_Image_2026-02-27_at_09.29.16.jpeg', category: 'property', alt: 'Common area' },
  { src: '/new-images/common-areas/WhatsApp_Image_2026-02-27_at_09.30.34_(1).jpeg', category: 'property', alt: 'Common area' },
  { src: '/new-images/common-areas/WhatsApp_Image_2026-02-27_at_09.30.35.jpeg', category: 'property', alt: 'Common area' },
  { src: '/new-images/common-areas/WhatsApp_Image_2026-02-27_at_09.30.36.jpeg', category: 'property', alt: 'Common area' },
  { src: '/new-images/common-areas/WhatsApp_Image_2026-02-27_at_09.30.53_(1).jpeg', category: 'property', alt: 'Common area' },
  { src: '/new-images/lounge-new/l1.jpeg', category: 'lounge', alt: 'Lounge area' },
  { src: '/new-images/lounge-new/l2.jpeg', category: 'lounge', alt: 'Lounge area' },
  { src: '/new-images/lounge-new/l3.jpeg', category: 'lounge', alt: 'Lounge area' },
  { src: '/new-images/lounge-new/l4.jpeg', category: 'lounge', alt: 'Lounge area' },
  { src: '/new-images/lounge-new/l5.jpeg', category: 'lounge', alt: 'Lounge area' },
  { src: '/images/views/valley-panorama.jpeg', category: 'views', alt: 'Valley panorama' },
  { src: '/images/rooms/deluxe-room.jpeg', category: 'rooms', alt: 'Deluxe room interior' },
  { src: '/images/experiences/bonfire.jpeg', category: 'bonfire', alt: 'Evening bonfire' },
  { src: '/images/cafe/cafe-food.jpeg', category: 'cafe', alt: 'Cafe food' },
  { src: '/images/views/mountain-sunrise.jpeg', category: 'views', alt: 'Mountain sunrise' },
  { src: '/images/experiences/trekking-trail.jpeg', category: 'treks', alt: 'Trekking trail' },
  { src: '/images/rooms/room-with-view.jpeg', category: 'rooms', alt: 'Room with view' },
  { src: '/images/views/misty-mountains.jpeg', category: 'views', alt: 'Misty mountains' },
  { src: '/images/cafe/cafe-ambiance.jpeg', category: 'cafe', alt: 'Cafe ambiance' },
  { src: '/images/experiences/hiking-mountains.jpeg', category: 'treks', alt: 'Hiking in mountains' },
  { src: '/images/rooms/family-suite.jpeg', category: 'rooms', alt: 'Family suite' },
  { src: '/images/experiences/pine-forest.jpeg', category: 'views', alt: 'Pine forest' },
  { src: '/images/rooms/cozy-bedroom.jpeg', category: 'rooms', alt: 'Cozy bedroom' },
  { src: '/images/rooms/room-details.jpeg', category: 'rooms', alt: 'Room details' },
  { src: '/images/rooms/suite-interior.jpeg', category: 'rooms', alt: 'Suite interior' },
  { src: '/images/views/evening-sky.jpeg', category: 'views', alt: 'Evening sky' },
  { src: '/images/experiences/rooftop-yoga.jpeg', category: 'property', alt: 'Rooftop yoga' },
  { src: '/images/treks/kheerganga.png', category: 'treks', alt: 'Kheerganga trek' },
  { src: '/images/treks/pinparvati.jpg', category: 'treks', alt: 'Pin Parvati pass' },
  { src: '/images/treks/sarpass.png', category: 'treks', alt: 'Sar Pass trek' },
  { src: '/images/treks/pinbhaba.png', category: 'treks', alt: 'Pin Bhaba pass' },
  { src: '/images/treks/shrikhand.jpg', category: 'treks', alt: 'Shrikhand Mahadev' },
  { src: '/images/treks/devaropa.webp', category: 'treks', alt: 'Devaropa trek' },
  { src: '/images/home-explore/kheerganga-trek.jpg', category: 'treks', alt: 'Kheerganga hot springs' },
  { src: '/images/home-explore/tosh-village.jpg', category: 'views', alt: 'Tosh village' },
  { src: '/images/home-explore/manikaran.avif', category: 'views', alt: 'Manikaran' },
  { src: '/images/about/our-story.jpeg', category: 'property', alt: 'Our story' },
  { src: '/images/about/meet-your-host.jpeg', category: 'property', alt: 'Meet your host' },
  { src: '/images/kharganga1.jpg', category: 'views', alt: 'Kharganga valley' },
  { src: '/images/past-guests/past-guests1.jpeg', category: 'guests', alt: 'Guest memories' },
  { src: '/images/past-guests/trek4.jpeg', category: 'guests', alt: 'Guest trek adventure' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.18_(1).jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.22_(1).jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.24.jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.25.jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.37.jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.03.jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.04_(1).jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.05.jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.16.jpeg', category: 'guests', alt: 'Guest moment' },
  { src: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.17_(1).jpeg', category: 'guests', alt: 'Guest moment' },
];

type Category = 'all' | 'rooms' | 'cafe' | 'views' | 'treks' | 'bonfire' | 'property' | 'guests' | 'lounge';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'guests', label: 'Guest Moments' },
    { key: 'rooms', label: 'Rooms' },
    { key: 'lounge', label: 'Lounge' },
    { key: 'cafe', label: 'Cafe' },
    { key: 'views', label: 'Views' },
    { key: 'treks', label: 'Treks' },
    { key: 'bonfire', label: 'Bonfire' },
    { key: 'property', label: 'Property' },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments captured at Dimension 11:11 - from misty mornings to starlit nights"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Gallery' },
        ]}
        image="/images/hero/gallery-hero.jpeg"
      />

      {/* Gallery Introduction */}
      <section className="py-12 bg-dark-950">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-cream-300 text-lg leading-relaxed">
              Every corner of Dimension 11:11 tells a story. From the breathtaking valley views that greet you each morning to the warm glow of our evening bonfires, these images capture the essence of mountain life at our property.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-dark-850 border-y border-dark-700 sticky top-20 z-30">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-5 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-amber-600 text-dark-900'
                    : 'bg-dark-700 text-cream-300 hover:bg-dark-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={index} delay={(index % 8) * 50}>
                <button
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer w-full"
                >
                  <img
                    src={image.src.replace('w=1200', 'w=600')}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${image.src.includes('cafe-food') ? 'object-bottom' : ''}`}
                  />
                  <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-cream-100 opacity-0 group-hover:opacity-100 transition-opacity font-serif text-lg">
                      View
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Count */}
      <section className="py-6 bg-dark-850 border-y border-dark-700">
        <div className="section-container text-center">
          <p className="text-cream-400 text-sm">
            Showing {filteredImages.length} of {galleryImages.length} images
          </p>
        </div>
      </section>

      {/* Experience It Section */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Beyond Photos"
                title="Experience It Yourself"
                description="These images only capture a fraction of what Dimension 11:11 has to offer. The mountain air, the warmth of the bonfire, the taste of fresh chai - some things can only be experienced in person."
              />
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openWhatsApp('Hello! I saw your gallery and would love to book a stay at Dimension 11:11.')}
                  className="btn-primary"
                >
                  Book Your Stay
                </button>
                <Link to="/stays" className="btn-secondary">
                  View Rooms <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-sm overflow-hidden">
                    <img
                      src="/images/rooms/deluxe-room.jpeg"
                      alt="Room"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-sm overflow-hidden">
                    <img
                      src="/images/experiences/bonfire.jpeg"
                      alt="Bonfire"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-sm overflow-hidden">
                    <img
                      src="/images/cafe/cafe-food.jpeg"
                      alt="Food"
                      className="w-full h-full object-cover object-bottom"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-sm overflow-hidden">
                    <img
                      src="/images/views/valley-panorama.jpeg"
                      alt="View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Share Your Moments */}
      <section className="py-16 bg-dark-900">
        <div className="section-container text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-serif text-cream-100 mb-4">Share Your Moments</h3>
            <p className="text-cream-400 mb-6 max-w-xl mx-auto">
              Stayed with us? Share your photos on Instagram and tag us! We love seeing the valley through your eyes.
            </p>
            <a
              href="https://instagram.com/dimension1111kasol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              @dimension1111kasol
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/views/mountain-sunrise.jpeg"
            alt="Mountain view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
              Create Your Own Memories
            </h2>
            <p className="text-lg text-cream-300 max-w-xl mx-auto mb-10">
              The best photos are the ones you take yourself. Book your stay and capture your own moments at Dimension 11:11.
            </p>
            <button
              onClick={() => openWhatsApp('Hello! I would like to book a stay at Dimension 11:11.')}
              className="btn-primary"
            >
              Book Now
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/95 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-cream-300 hover:text-cream-100 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 p-2 text-cream-300 hover:text-cream-100 transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 p-2 text-cream-300 hover:text-cream-100 transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-400 text-sm">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
