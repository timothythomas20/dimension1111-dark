import { Link } from 'react-router-dom';
import {
  MapPin, ChevronDown, Bed, Mountain, UtensilsCrossed, Flame, Car, Wifi,
  Droplets, Zap, Heart, Sparkles, Map, Star, ArrowRight, Phone, Users, Clock
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeader from '../components/ui/SectionHeader';
import ImageCarousel from '../components/ui/ImageCarousel';
import { rooms, testimonials, amenities } from '../data/constants';

export default function Home() {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  const getAmenityIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Mountain: <Mountain className="w-6 h-6" />,
      Flame: <Flame className="w-6 h-6" />,
      Car: <Car className="w-6 h-6" />,
      Wifi: <Wifi className="w-6 h-6" />,
      Droplets: <Droplets className="w-6 h-6" />,
      UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
      Zap: <Zap className="w-6 h-6" />,
      ConciergeBell: <UtensilsCrossed className="w-6 h-6" />,
      Beef: <Flame className="w-6 h-6" />,
      Map: <Map className="w-6 h-6" />,
      Sparkles: <Sparkles className="w-6 h-6" />,
      Heart: <Heart className="w-6 h-6" />,
    };
    return icons[iconName] || <Star className="w-6 h-6" />;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/new-images/common-areas/new-hero.jpeg"
            alt="Himalayan mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 via-transparent to-dark-950/40" />
        </div>

        <div className="relative z-10 section-container text-center py-32">
          <AnimatedSection animation="fade-in-down" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/60 backdrop-blur-sm border border-amber-500/30 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span className="text-cream-200 text-sm font-sans uppercase tracking-wider">Old Kasol, Parvati Valley</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-cream-50 mb-4 tracking-tight">
              <span className="text-amber-500">Dimension</span>
              <br />
              <span className="text-cream-100">11:11</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl text-amber-500/90 font-serif tracking-wide mb-6">
              Homestay, Cafe & Adventure
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={600}>
            <p className="text-lg md:text-xl text-cream-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Where mountain comfort meets adventure spirit. Wake up to valley views, gather around evening bonfires, and discover the magic of the Himalayas.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/stays" className="btn-primary">
                Explore Our Stays
              </Link>
              <button
                onClick={() => openWhatsApp('Hello! I would like to book a stay at Dimension 11:11.')}
                className="btn-secondary"
              >
                Book on WhatsApp
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={1200} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-amber-500 animate-bounce-slow" />
          </AnimatedSection>
        </div>
      </section>

      {/* Welcome Introduction */}
      <section className="section-padding bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <p className="text-amber-500 text-sm font-sans uppercase tracking-[0.3em] mb-6">Welcome to</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream-100 mb-8 leading-tight">
              A Place Where Time Slows Down
            </h2>
            <p className="text-lg text-cream-300 leading-relaxed mb-8">
              Nestled in the serene Old Kasol, away from the bustling main market, Dimension 11:11 is where the mountains speak and souls find peace. Our property offers the perfect balance - close enough to explore, far enough to find tranquility.
            </p>
            <div className="gold-line mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Trio Cards */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Our Experiences"
              title="The Complete Mountain Experience"
              description="From comfortable stays with valley views to guided Himalayan treks and delicious mountain cuisine, Dimension 11:11 offers everything for your perfect getaway."
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Bed className="w-10 h-10" />,
                title: 'Homestay Rooms',
                description: 'Comfortable rooms with valley views, attached baths, and mountain hospitality',
                link: '/stays',
                image: '/images/rooms/deluxe-room.jpeg',
              },
              {
                icon: <Mountain className="w-10 h-10" />,
                title: 'Trekking Adventures',
                description: 'Explore stunning Himalayan trails with guided treks to Kheerganga, Rasol, and beyond',
                link: '/adventures',
                image: '/images/experiences/hiking-mountains.jpeg',
              },
              {
                icon: <UtensilsCrossed className="w-10 h-10" />,
                title: 'Cafe & Dining',
                description: 'Savor delicious meals at our in-house cafe with panoramic mountain views',
                link: '/cafe',
                image: '/images/cafe/cafe-food.jpeg',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150}>
                <Link
                  to={item.link}
                  className="group block relative h-[400px] rounded-sm overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.image.includes('cafe-food') ? 'object-bottom' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                  <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-dark-950/10 transition-colors duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-amber-500 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-cream-100 mb-2">{item.title}</h3>
                    <p className="text-cream-300 text-sm mb-4">{item.description}</p>
                    <span className="inline-flex items-center text-amber-500 text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="py-12 bg-dark-850 border-y border-dark-700">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '7', label: 'Unique Rooms' },
              { value: '1.4', label: 'km from Market' },
              { value: '6', label: 'Trek Packages' },
              { value: '500+', label: 'Happy Guests' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-amber-500 mb-2">{stat.value}</p>
                <p className="text-cream-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Our Story"
                title="A Sanctuary in the Himalayas"
              />
              <p className="text-cream-300 leading-relaxed mb-6">
                The name "11:11" carries a special meaning - a moment of synchronicity and awakening that many experience in these mystical mountains. We created this space for travelers seeking more than just a stay; a place for connection, reflection, and unforgettable experiences.
              </p>
              <p className="text-cream-300 leading-relaxed mb-8">
                Founded by Varun, a traveler who fell in love with the Parvati Valley and decided to create a space where others could experience its magic.
              </p>
              <blockquote className="border-l-2 border-amber-500 pl-6 mb-8">
                <p className="text-cream-200 italic font-serif text-lg">
                  "Some places call you. This valley called me home."
                </p>
                <cite className="text-amber-500 text-sm not-italic mt-2 block">- Varun, Founder</cite>
              </blockquote>
              <Link to="/about" className="btn-secondary">
                Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" className="relative">
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <img
                  src="/images/views/valley-panorama.jpeg"
                  alt="Himalayan landscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark-800 border border-amber-500/30 p-6 rounded-sm">
                <p className="text-amber-500 text-3xl font-serif font-bold">Since</p>
                <p className="text-cream-100 text-4xl font-serif font-bold">2020</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Accommodations"
              title="Find Your Perfect Stay"
              description="Choose from our cozy Deluxe Rooms or spacious Family Suites, each offering mountain comfort and warm hospitality."
              centered
            />
          </AnimatedSection>

          <div className="space-y-16">
            <AnimatedSection>
              <div className="card-dark overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-72 lg:h-auto lg:min-h-[360px] overflow-hidden group">
                    <img
                      src={rooms.deluxe.image}
                      alt={rooms.deluxe.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-dark-900 px-4 py-2 rounded-sm font-semibold">
                      From Rs.{rooms.deluxe.price.toLocaleString()}/night
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-amber-500 text-sm">{rooms.deluxe.count} rooms</span>
                      <span className="text-cream-500">|</span>
                      <span className="text-cream-400 text-sm flex items-center gap-1">
                        <Users className="w-4 h-4" /> {rooms.deluxe.capacity} guests
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-cream-100 mb-2">{rooms.deluxe.label}</h3>
                    <p className="text-cream-400 text-sm mb-6">{rooms.deluxe.description}</p>
                    <div className="flex items-center gap-4">
                      <Link to="/stays" className="btn-primary text-sm py-3 px-6">
                        View Rooms
                      </Link>
                      <button
                        onClick={() => openWhatsApp(`Hello! I'm interested in booking a Deluxe Room at Dimension 11:11.`)}
                        className="btn-secondary text-sm py-3 px-6"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 lg:p-8 lg:pt-0">
                  <ImageCarousel images={rooms.deluxe.gallery.slice(0, 8)} title="Deluxe Room" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card-dark overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-72 lg:h-auto lg:min-h-[360px] overflow-hidden group lg:order-2">
                    <img
                      src={rooms.suite.image}
                      alt={rooms.suite.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-dark-900 px-4 py-2 rounded-sm font-semibold">
                      From Rs.{rooms.suite.price.toLocaleString()}/night
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center lg:order-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-amber-500 text-sm">{rooms.suite.count} suites</span>
                      <span className="text-cream-500">|</span>
                      <span className="text-cream-400 text-sm flex items-center gap-1">
                        <Users className="w-4 h-4" /> {rooms.suite.capacity} guests
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-cream-100 mb-2">{rooms.suite.label}</h3>
                    <p className="text-cream-400 text-sm mb-6">{rooms.suite.description}</p>
                    <div className="flex items-center gap-4">
                      <Link to="/stays" className="btn-primary text-sm py-3 px-6">
                        View Rooms
                      </Link>
                      <button
                        onClick={() => openWhatsApp(`Hello! I'm interested in booking a Family Suite at Dimension 11:11.`)}
                        className="btn-secondary text-sm py-3 px-6"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 lg:p-8 lg:pt-0">
                  <ImageCarousel images={rooms.suite.gallery} title="Family Suite" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="What We Offer"
              title="Comfort Meets Adventure"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <AnimatedSection key={amenity.name} delay={index * 50}>
                <div className="card-dark p-6 text-center group cursor-default">
                  <div className="text-amber-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {getAmenityIcon(amenity.icon)}
                  </div>
                  <p className="text-cream-300 text-sm">{amenity.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Preview */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left" className="order-2 lg:order-1">
              <div className="relative h-[450px] rounded-sm overflow-hidden">
                <img
                  src="/images/cafe/cafe-ambiance.jpeg"
                  alt="Cafe dining"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" className="order-1 lg:order-2">
              <SectionHeader
                label="Dining"
                title="Mountain Flavors, Homemade Love"
              />
              <p className="text-cream-300 leading-relaxed mb-6">
                Our in-house cafe is the heart of Dimension 11:11. From the first morning chai to late-night hot chocolate, we serve comfort food that warms both body and soul.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Clock className="w-5 h-5" />, label: '8 AM - 10 PM' },
                  { icon: <UtensilsCrossed className="w-5 h-5" />, label: 'Room Service' },
                  { icon: <Heart className="w-5 h-5" />, label: 'Veg & Non-Veg' },
                ].map((item) => (
                  <div key={item.label} className="bg-dark-800/50 border border-dark-600/30 p-4 rounded-sm text-center">
                    <div className="text-amber-500 mb-2 flex justify-center">{item.icon}</div>
                    <p className="text-cream-300 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-cream-400 text-sm mb-3">Popular dishes:</p>
                <div className="flex flex-wrap gap-2">
                  {['Masala Chai', 'Aloo Paratha', 'Masala Maggi', 'Apple Pie'].map((dish) => (
                    <span key={dish} className="px-3 py-1 bg-dark-800 border border-dark-600/30 rounded-full text-cream-300 text-sm">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/cafe" className="btn-secondary">
                View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Adventures Preview */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Explore"
              title="Himalayan Adventures Await"
              description="From evening bonfires to multi-day treks, discover the magic of Parvati Valley with our curated experiences."
              centered
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Bonfire Evenings',
                description: 'Gather around warmth under star-filled skies',
                image: '/images/experiences/bonfire.jpeg',
              },
              {
                title: 'Kheerganga Trek',
                description: 'Hot springs at 10,000 ft - 2 days',
                image: '/images/home-explore/kheerganga-trek.jpg',
              },
              {
                title: 'Manikaran',
                description: 'Sacred hot springs & temples - 4 km',
                image: '/images/home-explore/manikaran.avif',
              },
              {
                title: 'Music Nights',
                description: 'Live music and jam sessions with fellow travelers',
                image: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.04_(1).jpeg',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="card-dark overflow-hidden group h-[300px] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-lg font-serif text-cream-100 mb-1">{item.title}</h3>
                    <p className="text-cream-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/adventures" className="btn-primary">
              Discover All Adventures <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Trek Highlight */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/kharganga1.jpg"
            alt="Kheerganga trek"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/80" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-xs uppercase tracking-wider mb-6">
                Beginner Friendly
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-4">Kheerganga Trek</h2>
              <p className="text-xl text-amber-500 font-serif mb-6">Hot Springs in the Himalayas</p>
              <p className="text-cream-300 mb-8">
                One of Himachal's most famous treks, featuring natural hot water springs at the summit, stunning valley views, and dense forests. Perfect for first-time trekkers.
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Duration', value: '2 Days' },
                  { label: 'Distance', value: '24 km' },
                  { label: 'Altitude', value: '10,000 ft' },
                  { label: 'Price', value: 'Rs.3,499' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-amber-500 text-xl font-serif font-bold">{stat.value}</p>
                    <p className="text-cream-400 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openWhatsApp('Hello! I am interested in the Kheerganga Trek package at Dimension 11:11.')}
                  className="btn-primary"
                >
                  Book This Trek
                </button>
                <Link to="/adventures" className="btn-secondary">
                  View All Treks
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Past Guests Section */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Our Community"
              title="Memories Made at 11:11"
              description="Real moments from travelers who found their happy place in the mountains"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/images/past-guests/past-guests1.jpeg',
              '/images/past-guests/trek4.jpeg',
              '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.18_(1).jpeg',
              '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.22_(1).jpeg',
              '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.24.jpeg',
              '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.25.jpeg',
              '/images/past-guests/whatsapp_image_2026-01-19_at_14.05.37.jpeg',
              '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.03.jpeg',
            ].map((src, index) => (
              <AnimatedSection key={index} delay={index * 75}>
                <div className="relative aspect-square rounded-sm overflow-hidden group">
                  <img
                    src={src}
                    alt={`Guest memory ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/30 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/gallery" className="btn-secondary">
              View More Photos <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Gallery"
              title="Glimpses of Paradise"
              description="Moments captured at Dimension 11:11 - from misty mornings to starlit nights"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/images/views/misty-mountains.jpeg',
              '/images/views/mountain-sunrise.jpeg',
              '/images/rooms/room-with-view.jpeg',
              '/images/experiences/bonfire.jpeg',
              '/images/cafe/cafe-food.jpeg',
              '/images/views/valley-panorama.jpeg',
            ].map((src, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${src.includes('cafe-food') ? 'object-bottom' : ''}`}
                  />
                  <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-cream-100 opacity-0 group-hover:opacity-100 transition-opacity font-serif">View</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Google Reviews"
              title="What Our Guests Say"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((review, index) => (
              <AnimatedSection key={review.name} delay={index * 100}>
                <div className="card-dark p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-cream-300 text-sm leading-relaxed flex-1 mb-4">
                    "{review.text}"
                  </p>
                  <div className="border-t border-dark-700 pt-4">
                    <p className="text-cream-100 font-semibold">{review.name}</p>
                    <p className="text-cream-500 text-sm">{review.date}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Find Us"
                title="Your Journey Begins Here"
              />
              <p className="text-cream-300 leading-relaxed mb-6">
                Located in Old Kasol, just 1.4 km from the main bus stand, Dimension 11:11 offers the perfect balance of accessibility and serenity. Away from the crowds, yet close to everything.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cream-100 font-semibold mb-1">Address</p>
                    <p className="text-cream-400 text-sm">Near Gungun Parking, Old Kasol, Himachal Pradesh 175105</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cream-100 font-semibold mb-1">Contact</p>
                    <p className="text-cream-400 text-sm">+91 85807 31659</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-dark-800/50 border border-dark-600/30 px-4 py-3 rounded-sm">
                  <p className="text-amber-500 text-lg font-serif font-bold">1.4 km</p>
                  <p className="text-cream-400 text-xs">from Bus Stand</p>
                </div>
                <div className="bg-dark-800/50 border border-dark-600/30 px-4 py-3 rounded-sm">
                  <p className="text-amber-500 text-lg font-serif font-bold">4 km</p>
                  <p className="text-cream-400 text-xs">from Manikaran</p>
                </div>
                <div className="bg-dark-800/50 border border-dark-600/30 px-4 py-3 rounded-sm">
                  <p className="text-amber-500 text-lg font-serif font-bold">Free</p>
                  <p className="text-cream-400 text-xs">Parking</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=32.0098,77.3150"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get Directions <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.2!2d77.3150!3d32.0098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAwJzM1LjMiTiA3N8KwMTgnNTQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* House Rules Quick View */}
      <section className="py-12 bg-dark-850 border-y border-dark-700">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { label: 'Check-in', value: '12:00 PM' },
              { label: 'Check-out', value: '11:00 AM' },
              { label: 'ID Required', value: 'At Check-in' },
              { label: 'Couples', value: 'Welcome' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-cream-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-cream-100 font-semibold">{item.value}</p>
              </div>
            ))}
            <Link to="/contact" className="text-amber-500 text-sm hover:underline">
              View All Policies
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/views/valley-panorama.jpeg"
            alt="Mountain sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream-50 mb-6">
              Ready for Your Mountain Escape?
            </h2>
            <p className="text-lg text-cream-300 max-w-2xl mx-auto mb-10">
              Book your stay at Dimension 11:11 and experience the magic of Parvati Valley. Valley views, bonfire nights, and Himalayan adventures await.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello! I would like to book a stay at Dimension 11:11.')}
                className="btn-primary"
              >
                Book on WhatsApp
              </button>
              <a href="tel:+918580731659" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" /> Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
