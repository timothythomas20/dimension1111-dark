import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mountain, Flame, Music, UtensilsCrossed, MapPin, Clock, ArrowRight,
  ChevronDown, ChevronUp, Calendar, Ruler, TrendingUp, Check, X, Phone
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { treks, experiences } from '../data/constants';

export default function Adventures() {
  const [expandedTrek, setExpandedTrek] = useState<string | null>(null);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-600/20 text-green-400 border-green-500/30';
      case 'moderate':
        return 'bg-amber-600/20 text-amber-400 border-amber-500/30';
      case 'difficult':
        return 'bg-red-600/20 text-red-400 border-red-500/30';
      default:
        return 'bg-dark-600 text-cream-300';
    }
  };

  const trekImages: { [key: string]: string } = {
    kheerganga: '/images/treks/kheerganga.png',
    sarpass: '/images/treks/sarpass.jpg',
    devaropa: '/images/treks/devaropa.webp',
    pinbhaba: '/images/treks/pinbhaba.png',
    shrikhand: '/images/treks/shrikhand.jpg',
    pinparvati: '/images/treks/pinparvati.jpg',
  };

  return (
    <>
      <PageHero
        title="Adventures & Experiences"
        subtitle="Discover the magic of Parvati Valley with our curated experiences"
        badge="6 Trek Packages"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Adventures' },
        ]}
        image="/images/hero/adventure-hero.jpeg"
      />

      {/* Adventures Overview */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <SectionHeader
              label="Explore"
              title="Your Gateway to Himalayan Adventures"
              description="From evening bonfires at the property to multi-day treks through pristine valleys, Dimension 11:11 is your perfect base for exploring the magic of Parvati Valley."
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Flame className="w-8 h-8" />, title: 'On-site Experiences', description: 'Bonfires, BBQ, and music nights' },
              { icon: <MapPin className="w-8 h-8" />, title: 'Day Trips', description: 'Explore nearby villages and hot springs' },
              { icon: <Mountain className="w-8 h-8" />, title: 'Multi-day Treks', description: 'Guided expeditions into the Himalayas' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="card-dark p-6 text-center">
                  <div className="text-amber-500 mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-serif text-cream-100 mb-2">{item.title}</h3>
                  <p className="text-cream-400 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* On-site Experiences */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="At Dimension 11:11"
              title="On-site Experiences"
              description="You don't have to go far for memorable experiences. Our property offers plenty of opportunities to unwind and connect."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Flame className="w-8 h-8" />,
                title: 'Bonfire Evenings',
                description: 'Gather around the warmth of a crackling fire under star-filled skies',
                timing: 'Every evening',
                image: '/images/experiences/bonfire.jpeg',
              },
              {
                icon: <UtensilsCrossed className="w-8 h-8" />,
                title: 'Cafe & Cuisine',
                description: 'Savor delicious meals at our in-house restaurant with mountain views',
                timing: 'All day dining',
                image: '/images/cafe/cafe-food.jpeg',
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: 'BBQ Under Stars',
                description: 'Special barbecue evenings with grilled delights and good company',
                timing: 'On request',
                image: '/images/cafe/cafe-ambiance.jpeg',
              },
              {
                icon: <Music className="w-8 h-8" />,
                title: 'Music Nights',
                description: 'Live music and jam sessions with fellow travelers under the stars',
                timing: 'Evenings',
                image: '/images/past-guests/whatsapp_image_2026-01-19_at_14.06.04_(1).jpeg',
              },
            ].map((experience, index) => (
              <AnimatedSection key={experience.title} delay={index * 100}>
                <div className="card-dark overflow-hidden group h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${experience.image.includes('cafe-food') ? 'object-bottom' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-amber-500">
                      {experience.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif text-cream-100 mb-2">{experience.title}</h3>
                    <p className="text-cream-400 text-sm mb-3">{experience.description}</p>
                    <span className="text-amber-500 text-xs uppercase tracking-wider">{experience.timing}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Destinations */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Day Trips"
              title="Nearby Experiences"
              description="Explore the beautiful surroundings of Kasol with these easy day trips"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.nearby.map((destination, index) => (
              <AnimatedSection key={destination.name} delay={index * 150}>
                <div className="card-dark overflow-hidden group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={index === 0 ? '/images/experiences/pine-forest.jpeg' :
                           index === 1 ? '/images/views/valley-panorama.jpeg' :
                           '/images/views/mountain-sunrise.jpeg'}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-cream-100 mb-2">{destination.name}</h3>
                    <p className="text-cream-400 text-sm mb-4">{destination.description}</p>
                    <div className="flex items-center gap-4 text-cream-300 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-amber-500" /> {destination.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-amber-500" /> {destination.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Packages Header */}
      <section className="py-12 bg-dark-850 border-y border-dark-700">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-cream-100 mb-2">Multi-day Treks</h2>
              <p className="text-cream-400">Guided Himalayan trekking adventures with professional support</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor('easy')}`}>Easy</span>
              <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor('moderate')}`}>Moderate</span>
              <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor('difficult')}`}>Difficult</span>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Treks */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Beginner Friendly"
              title="Easy Treks"
              description="Perfect for first-time trekkers and those looking for a lighter adventure"
            />
          </AnimatedSection>

          {treks.filter(t => t.difficulty === 'Easy').map((trek) => (
            <AnimatedSection key={trek.id}>
              <div className="card-dark overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={trekImages[trek.id]}
                      alt={trek.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor(trek.difficulty)}`}>
                        {trek.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-cream-100 mb-2">{trek.name}</h3>
                    <p className="text-amber-500 font-serif mb-4">{trek.tagline}</p>
                    <p className="text-cream-400 mb-6">{trek.overview}</p>

                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <Calendar className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                        <p className="text-cream-100 text-sm font-semibold">{trek.duration}</p>
                        <p className="text-cream-500 text-xs">Duration</p>
                      </div>
                      <div className="text-center">
                        <Ruler className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                        <p className="text-cream-100 text-sm font-semibold">{trek.distance}</p>
                        <p className="text-cream-500 text-xs">Distance</p>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                        <p className="text-cream-100 text-sm font-semibold">{trek.altitude}</p>
                        <p className="text-cream-500 text-xs">Max Altitude</p>
                      </div>
                      <div className="text-center">
                        <p className="text-amber-500 text-xl font-serif font-bold">Rs.{trek.price.toLocaleString()}</p>
                        <p className="text-cream-500 text-xs">per person</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {trek.highlights.slice(0, 4).map((highlight) => (
                        <span key={highlight} className="px-3 py-1 bg-dark-700/50 rounded text-cream-300 text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openWhatsApp(`Hello! I'm interested in the ${trek.name} (Rs.${trek.price.toLocaleString()}). Please share more details.`)}
                      className="btn-primary w-full sm:w-auto"
                    >
                      Book This Trek
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Moderate Treks */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Some Experience Required"
              title="Moderate Treks"
              description="For those with some trekking experience looking for a challenge"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treks.filter(t => t.difficulty === 'Moderate').map((trek, index) => (
              <AnimatedSection key={trek.id} delay={index * 100}>
                <div className="card-dark overflow-hidden h-full flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={trekImages[trek.id]}
                      alt={trek.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor(trek.difficulty)}`}>
                        {trek.difficulty}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif text-cream-100">{trek.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-amber-500 text-sm mb-3">{trek.tagline}</p>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                      <div>
                        <p className="text-cream-100 text-sm font-semibold">{trek.duration}</p>
                        <p className="text-cream-500 text-xs">Duration</p>
                      </div>
                      <div>
                        <p className="text-cream-100 text-sm font-semibold">{trek.altitude}</p>
                        <p className="text-cream-500 text-xs">Altitude</p>
                      </div>
                      <div>
                        <p className="text-amber-500 text-sm font-bold">Rs.{trek.price.toLocaleString()}</p>
                        <p className="text-cream-500 text-xs">per person</p>
                      </div>
                    </div>

                    <p className="text-cream-400 text-sm mb-4 flex-1">{trek.overview}</p>

                    <button
                      onClick={() => setExpandedTrek(expandedTrek === trek.id ? null : trek.id)}
                      className="text-amber-500 text-sm flex items-center gap-1 mb-4"
                    >
                      {expandedTrek === trek.id ? 'Hide' : 'View'} Highlights
                      {expandedTrek === trek.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {expandedTrek === trek.id && (
                      <div className="mb-4 space-y-2">
                        {trek.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2 text-cream-300 text-sm">
                            <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => openWhatsApp(`Hello! I'm interested in the ${trek.name} (Rs.${trek.price.toLocaleString()}). Please share more details.`)}
                      className="btn-primary w-full text-sm py-3"
                    >
                      Book This Trek
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Difficult Treks */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="For Experienced Trekkers"
              title="Challenging Treks"
              description="Advanced expeditions requiring prior trekking experience and good physical fitness"
            />
          </AnimatedSection>

          <div className="card-dark p-4 mb-8 border-red-500/30 bg-red-950/20">
            <p className="text-cream-300 text-sm flex items-center gap-2">
              <Mountain className="w-5 h-5 text-red-400" />
              These treks require prior high-altitude trekking experience and excellent physical fitness. Please consult with our team before booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treks.filter(t => t.difficulty === 'Difficult').map((trek, index) => (
              <AnimatedSection key={trek.id} delay={index * 150}>
                <div className="card-dark overflow-hidden h-full">
                  <div className="relative h-56">
                    <img
                      src={trekImages[trek.id]}
                      alt={trek.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs border ${getDifficultyColor(trek.difficulty)}`}>
                        {trek.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-cream-100 mb-2">{trek.name}</h3>
                    <p className="text-amber-500 font-serif mb-4">{trek.tagline}</p>
                    <p className="text-cream-400 text-sm mb-6">{trek.overview}</p>

                    <div className="grid grid-cols-4 gap-3 mb-6 text-center">
                      <div>
                        <p className="text-cream-100 text-sm font-semibold">{trek.duration}</p>
                        <p className="text-cream-500 text-xs">Duration</p>
                      </div>
                      <div>
                        <p className="text-cream-100 text-sm font-semibold">{trek.distance}</p>
                        <p className="text-cream-500 text-xs">Distance</p>
                      </div>
                      <div>
                        <p className="text-cream-100 text-sm font-semibold">{trek.altitude}</p>
                        <p className="text-cream-500 text-xs">Altitude</p>
                      </div>
                      <div>
                        <p className="text-amber-500 text-lg font-bold">Rs.{trek.price.toLocaleString()}</p>
                        <p className="text-cream-500 text-xs">per person</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {trek.highlights.slice(0, 4).map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-cream-300 text-sm">
                          <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => openWhatsApp(`Hello! I'm interested in the ${trek.name} (Rs.${trek.price.toLocaleString()}). I have prior trekking experience and would like to know more.`)}
                      className="btn-primary w-full"
                    >
                      Inquire About This Trek
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Booking Process */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="How to Book"
                title="Join Our Treks"
              />
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Choose Your Trek', description: 'Select a trek that matches your experience level' },
                  { step: '2', title: 'Contact Us', description: 'WhatsApp us with your preferred dates and group size' },
                  { step: '3', title: 'Confirm Booking', description: 'Pay the advance amount to secure your spot' },
                  { step: '4', title: 'Prepare', description: 'We\'ll send you a packing list and preparation guide' },
                  { step: '5', title: 'Trek!', description: 'Meet at Dimension 11:11 and start your adventure' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-dark-900 font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-cream-100 font-semibold mb-1">{item.title}</h4>
                      <p className="text-cream-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <SectionHeader
                label="What's Included"
                title="Trek Package Includes"
              />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Professional guide',
                  'Camping equipment',
                  'All meals on trek',
                  'First aid support',
                  'Forest permits',
                  'Transportation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-cream-300">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </div>
                ))}
              </div>

              <h4 className="text-cream-100 font-semibold mb-4">Not Included</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Personal gear',
                  'Travel insurance',
                  'Tips for guides',
                  'Personal expenses',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-cream-400 text-sm">
                    <X className="w-4 h-4 text-red-400" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Adventure CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/experiences/trekking-trail.jpeg"
            alt="Himalayan trek"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
              Plan Your Adventure
            </h2>
            <p className="text-lg text-cream-300 max-w-xl mx-auto mb-10">
              Ready to explore the Himalayas? Contact us to plan your perfect adventure. Custom itineraries available for groups.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello! I would like to plan a trek with Dimension 11:11. Please help me choose the right one.')}
                className="btn-primary"
              >
                Plan My Adventure
              </button>
              <a href="tel:+918580731659" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
