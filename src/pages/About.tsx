import { Link } from 'react-router-dom';
import {
  Sparkles, Sun, Users, Scale, Heart, Leaf, Mountain, Compass,
  ArrowRight, Quote, Clock, Shield, MapPin, Phone
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function About() {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="The story behind Dimension 11:11 and the people who make it special"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
        image="/images/hero/about-hero.jpeg"
      />

      {/* Our Story Section */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Our Story"
                title="From Traveler to Host"
              />
              <p className="text-cream-300 leading-relaxed mb-6">
                Dimension 11:11 was born from a deep love for the mountains. Like many who visit Kasol, our founder Varun came as a traveler, drawn by the mystical beauty of the Parvati Valley. What started as a brief escape became a calling.
              </p>
              <p className="text-cream-300 leading-relaxed mb-6">
                After years of corporate life in the city, Varun took the leap to build something meaningful in the mountains. His vision was simple: create a space where travelers could experience the magic of the Himalayas with all the comforts of home.
              </p>
              <p className="text-cream-300 leading-relaxed">
                Today, Dimension 11:11 stands as a space where travelers from around the world can experience their own moment of synchronicity. It is not just a place to stay; it is a place to connect - with nature, with fellow travelers, and with yourself.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <img
                  src="/images/about/our-story.jpeg"
                  alt="Parvati Valley landscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The 11:11 Meaning */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <SectionHeader
                label="The Name"
                title="Why 11:11?"
                centered
              />
              <p className="text-cream-300 leading-relaxed mb-8 text-lg">
                The name "11:11" was not chosen randomly. In numerology and spiritual traditions, 11:11 represents a moment of alignment and awakening - that magical instant when you look at the clock and feel the universe is speaking to you.
              </p>
              <p className="text-cream-300 leading-relaxed mb-12 text-lg">
                For Varun, discovering this property in Old Kasol was exactly that moment. A sign that this was where he was meant to be, creating a sanctuary for fellow seekers and travelers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-amber-500/20 animate-pulse" />
                </div>
                <div className="relative z-10 py-12">
                  <p className="text-7xl md:text-8xl font-serif font-bold text-amber-500 mb-4">11:11</p>
                  <p className="text-cream-400 uppercase tracking-[0.3em] text-sm">A Moment of Awakening</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <blockquote className="max-w-2xl mx-auto mt-12">
                <Quote className="w-10 h-10 text-amber-500/30 mx-auto mb-4" />
                <p className="text-2xl font-serif text-cream-100 italic mb-4">
                  "Some places call you. This valley called me home."
                </p>
                <cite className="text-amber-500 not-italic">- Varun, Founder</cite>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="The 11:11 Philosophy"
              title="More Than a Moment"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Synchronicity',
                description: '11:11 is often seen as an "angel number" - a sign that you are aligned with the universe. Our space is designed to nurture those moments of meaningful coincidence and connection.',
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: 'Awakening',
                description: 'In the silence of the mountains, away from the noise of everyday life, we believe everyone can find clarity and renewal. Our property is a space for both adventure and introspection.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community',
                description: 'The bonfire is our hearth. Every evening, strangers become friends around its warmth. Some of the most meaningful connections happen under the stars.',
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: 'Balance',
                description: 'We believe in the balance between comfort and adventure. You can trek to remote villages by day and return to a warm bed at night. That is the Dimension 11:11 experience.',
              },
            ].map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 100}>
                <div className="card-dark p-8 h-full text-center">
                  <div className="text-amber-500 mb-6 flex justify-center">{pillar.icon}</div>
                  <h3 className="text-xl font-serif text-cream-100 mb-4">{pillar.title}</h3>
                  <p className="text-cream-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Host */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative">
                <div className="relative h-[500px] rounded-sm overflow-hidden">
                  <img
                    src="/images/about/meet-your-host.jpeg"
                    alt="Mountain host"
                    className="w-full h-full object-cover lg:object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-amber-500 font-serif text-lg mb-1">Host & Founder</p>
                  <p className="text-cream-100 text-3xl font-serif font-bold">Varun</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <SectionHeader
                label="The People"
                title="Meet Your Hosts"
                description="The team behind your unforgettable stay"
              />
              <p className="text-cream-300 leading-relaxed mb-6">
                After years of corporate life in the city, Varun took the leap to build something meaningful in the mountains. His vision was simple: create a space where travelers could experience the magic of the Himalayas with all the comforts of home.
              </p>
              <p className="text-cream-300 leading-relaxed mb-8">
                Today, Varun and his dedicated caretaker team ensure every guest feels welcomed, comfortable, and connected. From arranging treks to recommending the best local cafes, they are your guides to the Parvati Valley.
              </p>

              <div className="space-y-4">
                <h4 className="text-cream-100 font-serif text-lg">Our Promise:</h4>
                <ul className="space-y-3">
                  {[
                    'Warm, personalized hospitality',
                    'Local knowledge and travel assistance',
                    'A safe space for all travelers',
                    'Commitment to your comfort',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cream-300">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="What We Stand For"
              title="Our Values"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-10 h-10" />,
                title: 'Hospitality',
                description: 'Genuine warmth and care for every guest, making you feel at home in the mountains.',
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: 'Sustainability',
                description: 'Respecting the fragile Himalayan ecosystem through responsible practices.',
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Community',
                description: 'Creating spaces where travelers connect and share meaningful experiences.',
              },
              {
                icon: <Compass className="w-10 h-10" />,
                title: 'Adventure',
                description: 'Enabling exploration while ensuring safety and comfort for all.',
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="group">
                  <div className="relative h-48 mb-6 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-dark-800 group-hover:from-amber-600/30 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-amber-500 group-hover:scale-110 transition-transform duration-500">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-cream-100 mb-3">{value.title}</h3>
                  <p className="text-cream-400 text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Property */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="The Space"
              title="Dimension 11:11 Property"
              description="A thoughtfully designed space where comfort meets nature"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/images/rooms/deluxe-room.jpeg',
                title: 'Comfortable Rooms',
                description: '7 unique accommodations with valley views',
              },
              {
                image: '/images/cafe/cafe-food.jpeg',
                title: 'In-house Cafe',
                description: 'Delicious meals from 8 AM to 10 PM',
              },
              {
                image: '/images/experiences/bonfire.jpeg',
                title: 'Bonfire Area',
                description: 'Evening gatherings under the stars',
              },
              {
                image: '/images/views/misty-mountains.jpeg',
                title: 'Valley Views',
                description: 'Breathtaking Parvati Valley panoramas',
              },
              {
                image: '/images/experiences/pine-forest.jpeg',
                title: 'Garden & Terrace',
                description: 'Peaceful outdoor spaces to relax',
              },
              {
                image: '/images/experiences/hiking-mountains.jpeg',
                title: 'Trek Starting Point',
                description: 'Perfect base for Himalayan adventures',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="card-dark overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.image.includes('cafe-food') ? 'object-bottom' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif text-cream-100 mb-1">{item.title}</h3>
                    <p className="text-cream-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Our Journey"
              title="Milestones"
              centered
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              { year: '2020', title: 'The Beginning', description: 'Varun discovers the property in Old Kasol and begins renovation' },
              { year: '2021', title: 'First Guests', description: 'Dimension 11:11 opens its doors to travelers from around the world' },
              { year: '2022', title: 'Cafe Launch', description: 'In-house cafe begins serving mountain comfort food' },
              { year: '2023', title: 'Trek Packages', description: 'Partnered with local guides to offer curated trek experiences' },
              { year: '2024', title: 'Growing Community', description: '500+ happy guests and counting, building lasting connections' },
            ].map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-dark-900 font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < 4 && <div className="w-0.5 h-full bg-dark-700 mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-serif text-cream-100 mb-2">{milestone.title}</h3>
                    <p className="text-cream-400">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-dark-850 border-y border-dark-700">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Mountain className="w-6 h-6" />, value: '10,000 ft', label: 'Elevation' },
              { icon: <MapPin className="w-6 h-6" />, value: '1.4 km', label: 'from Market' },
              { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Caretaker' },
              { icon: <Shield className="w-6 h-6" />, value: '100%', label: 'Safe & Secure' },
            ].map((stat) => (
              <AnimatedSection key={stat.label} className="text-center">
                <div className="text-amber-500 mb-3 flex justify-center">{stat.icon}</div>
                <p className="text-2xl font-serif font-bold text-cream-100 mb-1">{stat.value}</p>
                <p className="text-cream-400 text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/views/mountain-sunrise.jpeg"
            alt="Himalayan sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
              Ready to Write Your Story?
            </h2>
            <p className="text-lg text-cream-300 max-w-2xl mx-auto mb-10">
              Join the travelers who have found their moment of synchronicity at Dimension 11:11. Your Himalayan adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello! I would like to book a stay at Dimension 11:11.')}
                className="btn-primary"
              >
                Book Your Stay
              </button>
              <Link to="/stays" className="btn-secondary">
                Explore Rooms <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
