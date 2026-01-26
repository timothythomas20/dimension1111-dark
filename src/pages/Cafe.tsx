import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock, UtensilsCrossed, Heart, Flame, Star, Leaf, Drumstick, ArrowRight, Phone, Info
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { menuItems } from '../data/constants';

type MenuCategory = 'all' | 'breakfast' | 'mainCourse' | 'snacks' | 'beverages' | 'desserts';

export default function Cafe() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'all', label: 'Full Menu' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'mainCourse', label: 'Main Course' },
    { key: 'snacks', label: 'Snacks' },
    { key: 'beverages', label: 'Beverages' },
    { key: 'desserts', label: 'Desserts' },
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [
        ...menuItems.breakfast,
        ...menuItems.mainCourse,
        ...menuItems.snacks,
        ...menuItems.beverages,
        ...menuItems.desserts,
      ];
    }
    return menuItems[activeCategory] || [];
  };

  return (
    <>
      <PageHero
        title="Cafe & Dining"
        subtitle="Delicious meals prepared with love, served with mountain views"
        badge="8 AM - 10 PM"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Cafe' },
        ]}
        image="/images/hero/cafe-hero.jpeg"
      />

      {/* Kitchen Philosophy */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Our Kitchen"
                title="Mountain Flavors, Homemade Love"
              />
              <p className="text-cream-300 leading-relaxed mb-6">
                Our in-house cafe is the heart of Dimension 11:11. From the first morning chai to late-night hot chocolate, we serve comfort food that warms both body and soul. Every dish is prepared fresh, using local ingredients wherever possible.
              </p>
              <p className="text-cream-300 leading-relaxed mb-8">
                Whether you crave traditional Himachali flavors, familiar comfort food, or quick snacks between adventures, our kitchen has something for everyone. And yes, our Maggi is legendary.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Clock className="w-6 h-6" />, label: 'Open', value: '8 AM - 10 PM' },
                  { icon: <UtensilsCrossed className="w-6 h-6" />, label: 'Service', value: 'Room Delivery' },
                  { icon: <Heart className="w-6 h-6" />, label: 'Options', value: 'Veg & Non-Veg' },
                ].map((item) => (
                  <div key={item.label} className="card-dark p-4 text-center">
                    <div className="text-amber-500 mb-2 flex justify-center">{item.icon}</div>
                    <p className="text-cream-400 text-xs mb-1">{item.label}</p>
                    <p className="text-cream-200 text-sm font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <img
                  src="/images/cafe/cafe-food.jpeg"
                  alt="Cafe food"
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Menu Category Filter */}
      <section className="py-8 bg-dark-850 border-y border-dark-700 sticky top-20 z-30">
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

      {/* Breakfast Section */}
      {(activeCategory === 'all' || activeCategory === 'breakfast') && (
        <section className="section-padding bg-dark-900">
          <div className="section-container">
            <AnimatedSection>
              <SectionHeader
                label="Breakfast"
                title="Start Your Day Right"
                description="Fuel up for your mountain adventures with our hearty breakfast options"
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.breakfast.map((item, index) => (
                <AnimatedSection key={item.name} delay={index * 100}>
                  <div className="card-dark p-5 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-serif text-cream-100">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-amber-600/20 text-amber-400 text-xs rounded">Popular</span>
                        )}
                        {item.veg ? (
                          <Leaf className="w-4 h-4 text-green-500" />
                        ) : (
                          <Drumstick className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </div>
                    <p className="text-cream-400 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Course Section */}
      {(activeCategory === 'all' || activeCategory === 'mainCourse') && (
        <section className={`section-padding ${activeCategory === 'all' ? 'bg-dark-950' : 'bg-dark-900'}`}>
          <div className="section-container">
            <AnimatedSection>
              <SectionHeader
                label="Main Course"
                title="Hearty Meals"
                description="Satisfying dishes to refuel after a day of exploration"
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.mainCourse.map((item, index) => (
                <AnimatedSection key={item.name} delay={index * 100}>
                  <div className="card-dark p-5 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-serif text-cream-100">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-amber-600/20 text-amber-400 text-xs rounded">Popular</span>
                        )}
                        {item.veg ? (
                          <Leaf className="w-4 h-4 text-green-500" />
                        ) : (
                          <Drumstick className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </div>
                    <p className="text-cream-400 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Snacks Section */}
      {(activeCategory === 'all' || activeCategory === 'snacks') && (
        <section className={`section-padding ${activeCategory === 'all' ? 'bg-dark-900' : 'bg-dark-900'}`}>
          <div className="section-container">
            <AnimatedSection>
              <SectionHeader
                label="Snacks"
                title="Quick Bites"
                description="Perfect for when you need a quick energy boost"
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.snacks.map((item, index) => (
                <AnimatedSection key={item.name} delay={index * 100}>
                  <div className="card-dark p-5 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-serif text-cream-100">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-amber-600/20 text-amber-400 text-xs rounded">Popular</span>
                        )}
                        <Leaf className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <p className="text-cream-400 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Beverages Section */}
      {(activeCategory === 'all' || activeCategory === 'beverages') && (
        <section className={`section-padding ${activeCategory === 'all' ? 'bg-dark-950' : 'bg-dark-900'}`}>
          <div className="section-container">
            <AnimatedSection>
              <SectionHeader
                label="Beverages"
                title="Warm & Cold Drinks"
                description="From masala chai to hot chocolate, we have you covered"
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {menuItems.beverages.map((item, index) => (
                <AnimatedSection key={item.name} delay={index * 100}>
                  <div className="card-dark p-5 h-full text-center">
                    <div className="flex justify-center mb-3">
                      {item.popular && <Star className="w-5 h-5 text-amber-500 fill-amber-500" />}
                    </div>
                    <h3 className="text-lg font-serif text-cream-100 mb-2">{item.name}</h3>
                    <p className="text-cream-400 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Desserts Section */}
      {(activeCategory === 'all' || activeCategory === 'desserts') && (
        <section className={`section-padding ${activeCategory === 'all' ? 'bg-dark-900' : 'bg-dark-900'}`}>
          <div className="section-container">
            <AnimatedSection>
              <SectionHeader
                label="Desserts"
                title="Sweet Endings"
                description="End your meal on a sweet note with our homemade desserts"
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {menuItems.desserts.map((item, index) => (
                <AnimatedSection key={item.name} delay={index * 100}>
                  <div className="card-dark p-6 text-center">
                    {item.popular && (
                      <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-400 text-xs rounded mb-4">
                        House Favorite
                      </span>
                    )}
                    <h3 className="text-xl font-serif text-cream-100 mb-2">{item.name}</h3>
                    <p className="text-cream-400">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Special Dining Experiences */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Special Experiences"
              title="More Than Just Meals"
              description="At Dimension 11:11, dining is an experience. Join us for these special culinary moments."
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/images/experiences/bonfire.jpeg',
                icon: <Flame className="w-8 h-8" />,
                title: 'Bonfire Dinners',
                description: 'Gather around the warmth of a crackling fire as you enjoy your meal under the starlit sky. Our evening bonfire sessions create the perfect atmosphere for shared stories and warm conversations.',
              },
              {
                image: '/images/cafe/cafe-ambiance.jpeg',
                icon: <Flame className="w-8 h-8" />,
                title: 'BBQ Evenings',
                description: 'Join us for special BBQ nights where fresh meats and vegetables sizzle on the grill. Cook your own or let our staff handle it while you relax with mountain views.',
              },
              {
                image: '/images/experiences/rooftop-yoga.jpeg',
                icon: <Heart className="w-8 h-8" />,
                title: 'Rooftop Yoga',
                description: 'Start your mornings with rejuvenating yoga sessions on our rooftop. Breathe in the fresh mountain air as you stretch and meditate with panoramic Himalayan views.',
              },
            ].map((experience, index) => (
              <AnimatedSection key={experience.title} delay={index * 150}>
                <div className="card-dark overflow-hidden group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-amber-500">
                      {experience.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-cream-100 mb-3">{experience.title}</h3>
                    <p className="text-cream-400 text-sm leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Policies */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Dining Information"
                title="Good to Know"
              />
              <div className="space-y-4">
                {[
                  { label: 'Cafe Hours', value: '8:00 AM to 10:00 PM daily' },
                  { label: 'Room Service', value: 'Available during cafe hours' },
                  { label: 'BBQ & Bonfire', value: 'Evening sessions, weather permitting' },
                  { label: 'Special Requests', value: 'Please inform us of dietary requirements' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-sm">
                    <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-cream-100 font-semibold">{item.label}</p>
                      <p className="text-cream-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <SectionHeader
                label="Please Note"
                title="Dining Policies"
              />
              <div className="card-dark p-6 border-amber-500/30">
                <div className="flex items-start gap-4 mb-6">
                  <Info className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-cream-100 font-semibold mb-2">Outside Food Policy</h4>
                    <p className="text-cream-400 text-sm leading-relaxed">
                      Outside food is not permitted at Dimension 11:11. This policy helps us maintain hygiene standards and reduces waste in this ecologically sensitive region.
                    </p>
                  </div>
                </div>
                <p className="text-cream-300 text-sm leading-relaxed">
                  Our cafe offers a variety of options at reasonable prices. If you have specific dietary requirements, please let us know and we will do our best to accommodate.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => openWhatsApp('Hello! I have a dietary requirement for my stay at Dimension 11:11.')}
                  className="btn-secondary w-full"
                >
                  Contact for Dietary Requirements
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Menu Note */}
      <section className="py-8 bg-dark-850 border-y border-dark-700">
        <div className="section-container text-center">
          <p className="text-cream-400 text-sm">
            Menu items and availability may vary. Please check with our staff for current offerings and prices.
          </p>
        </div>
      </section>

      {/* Cafe CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cafe/cafe-food.jpeg"
            alt="Cafe ambiance"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
              Visit Our Cafe
            </h2>
            <p className="text-lg text-cream-300 max-w-xl mx-auto mb-10">
              Experience mountain flavors at Dimension 11:11. Our cafe is open to guests and visitors alike.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello! I would like to know more about the cafe at Dimension 11:11.')}
                className="btn-primary"
              >
                Contact Us
              </button>
              <Link to="/stays" className="btn-secondary">
                Book a Stay <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
