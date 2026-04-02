import { Link } from 'react-router-dom';
import {
  Users, Bed, Mountain, Droplets, Wifi, UtensilsCrossed,
  Sparkles, Phone, Check, Info
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import ImageCarousel from '../components/ui/ImageCarousel';
import { rooms } from '../data/constants';

export default function Stays() {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <PageHero
        title="Our Accommodations"
        subtitle="Mountain comfort awaits in our thoughtfully designed rooms"
        badge="7 Unique Rooms"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Stays' },
        ]}
        image="/images/hero/stays-hero.jpeg"
      />

      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <SectionHeader
              label="Your Stay"
              title="Find Your Perfect Room"
              description="Choose from our cozy Deluxe Rooms or spacious Family Suites. Every stay comes with mountain hospitality, valley views, and all the comforts you need for a memorable retreat."
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Mountain className="w-8 h-8" />, title: 'Valley Views', description: 'Wake up to stunning Parvati Valley panoramas' },
              { icon: <Droplets className="w-8 h-8" />, title: '24/7 Hot Water', description: 'Essential comfort for mountain mornings' },
              { icon: <Sparkles className="w-8 h-8" />, title: 'Daily Housekeeping', description: 'Fresh linens and spotless rooms daily' },
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

      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Room Types"
              title="Choose Your Space"
              centered
            />
          </AnimatedSection>

          <div className="space-y-20">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden group">
                  <img
                    src={rooms.deluxe.image}
                    alt={rooms.deluxe.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-dark-900/80 backdrop-blur-sm text-amber-500 text-sm font-semibold rounded-sm">
                      {rooms.deluxe.count} Rooms Available
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-amber-600/20 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-wider rounded-sm">
                      Popular Choice
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-cream-100 mb-2">{rooms.deluxe.label}</h3>
                  <p className="text-amber-500 text-2xl font-serif font-bold mb-4">
                    Rs.{rooms.deluxe.price.toLocaleString()}<span className="text-cream-400 text-base font-normal">/night</span>
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-cream-300">
                    <span className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-amber-500" />
                      {rooms.deluxe.beds}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-amber-500" />
                      Up to {rooms.deluxe.capacity} guests
                    </span>
                  </div>

                  <p className="text-cream-300 leading-relaxed mb-6">
                    {rooms.deluxe.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {rooms.deluxe.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-cream-300 text-sm">
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => openWhatsApp(`Hello! I'm interested in booking a Deluxe Room at Dimension 11:11. Please let me know the availability.`)}
                      className="btn-primary"
                    >
                      Book Deluxe Room
                    </button>
                    <a href="tel:+918580731659" className="btn-secondary">
                      <Phone className="w-4 h-4 mr-2" /> Call to Book
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-cream-400 text-sm mb-4 uppercase tracking-wider">Room Gallery</p>
                <ImageCarousel images={rooms.deluxe.gallery} title="Deluxe Room" />
              </div>
            </AnimatedSection>

            <div className="border-t border-dark-700" />

            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden group">
                  <img
                    src={rooms.suite.image}
                    alt={rooms.suite.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-dark-900/80 backdrop-blur-sm text-amber-500 text-sm font-semibold rounded-sm">
                      {rooms.suite.count} Suites Available
                    </span>
                  </div>
                </div>

                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-amber-600/20 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-wider rounded-sm">
                      Best for Families
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-cream-100 mb-2">{rooms.suite.label}</h3>
                  <p className="text-amber-500 text-2xl font-serif font-bold mb-4">
                    Rs.{rooms.suite.price.toLocaleString()}<span className="text-cream-400 text-base font-normal">/night</span>
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-cream-300">
                    <span className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-amber-500" />
                      {rooms.suite.beds}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-amber-500" />
                      Up to {rooms.suite.capacity} guests
                    </span>
                  </div>

                  <p className="text-cream-300 leading-relaxed mb-6">
                    {rooms.suite.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {rooms.suite.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-cream-300 text-sm">
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => openWhatsApp(`Hello! I'm interested in booking a Family Suite at Dimension 11:11. Please let me know the availability.`)}
                      className="btn-primary"
                    >
                      Book Family Suite
                    </button>
                    <a href="tel:+918580731659" className="btn-secondary">
                      <Phone className="w-4 h-4 mr-2" /> Call to Book
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-cream-400 text-sm mb-4 uppercase tracking-wider">Suite Gallery</p>
                <ImageCarousel images={rooms.suite.gallery} title="Family Suite" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-850 border-y border-dark-700">
        <div className="section-container">
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-4 px-4 text-cream-400 font-sans text-sm uppercase tracking-wider">Feature</th>
                  <th className="text-center py-4 px-4 text-cream-100 font-serif text-lg">Deluxe Room</th>
                  <th className="text-center py-4 px-4 text-cream-100 font-serif text-lg">Family Suite</th>
                </tr>
              </thead>
              <tbody className="text-cream-300">
                <tr className="border-b border-dark-700/50">
                  <td className="py-3 px-4">Price</td>
                  <td className="py-3 px-4 text-center text-amber-500 font-semibold">Rs.2,499</td>
                  <td className="py-3 px-4 text-center text-amber-500 font-semibold">Rs.3,499</td>
                </tr>
                <tr className="border-b border-dark-700/50">
                  <td className="py-3 px-4">Beds</td>
                  <td className="py-3 px-4 text-center">1 Double Bed</td>
                  <td className="py-3 px-4 text-center">2 Double Beds</td>
                </tr>
                <tr className="border-b border-dark-700/50">
                  <td className="py-3 px-4">Max Guests</td>
                  <td className="py-3 px-4 text-center">2</td>
                  <td className="py-3 px-4 text-center">4</td>
                </tr>
                <tr className="border-b border-dark-700/50">
                  <td className="py-3 px-4">Best For</td>
                  <td className="py-3 px-4 text-center">Couples / Solo</td>
                  <td className="py-3 px-4 text-center">Families / Groups</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Available</td>
                  <td className="py-3 px-4 text-center">5 rooms</td>
                  <td className="py-3 px-4 text-center">2 suites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Included"
              title="Every Room Includes"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Mountain className="w-6 h-6" />, label: 'Valley Views' },
              { icon: <Droplets className="w-6 h-6" />, label: '24/7 Hot Water' },
              { icon: <Wifi className="w-6 h-6" />, label: 'Free Wi-Fi' },
              { icon: <UtensilsCrossed className="w-6 h-6" />, label: 'Room Service' },
              { icon: <Sparkles className="w-6 h-6" />, label: 'Housekeeping' },
              { icon: <Check className="w-6 h-6" />, label: 'Attached Bath' },
            ].map((amenity, index) => (
              <AnimatedSection key={amenity.label} delay={index * 50}>
                <div className="card-dark p-5 text-center">
                  <div className="text-amber-500 mb-3 flex justify-center">{amenity.icon}</div>
                  <p className="text-cream-300 text-sm">{amenity.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-850 border-y border-dark-700">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-serif text-cream-100 mb-2">Additional Services</h3>
                <div className="flex flex-wrap gap-6 text-cream-300">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-500" />
                    Extra Mattress: Rs.500
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-500" />
                    Early check-in (subject to availability)
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-500" />
                    Pickup arrangement
                  </span>
                </div>
              </div>
              <button
                onClick={() => openWhatsApp('Hello! I have a question about additional services at Dimension 11:11.')}
                className="btn-secondary whitespace-nowrap"
              >
                Ask Us
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Book Your Stay"
                title="How to Book"
              />
              <div className="space-y-6">
                {[
                  { step: '1', title: 'WhatsApp Inquiry', description: 'Send us your preferred dates and room type' },
                  { step: '2', title: 'Confirmation', description: 'We check availability and confirm your booking' },
                  { step: '3', title: 'Advance Payment', description: 'Secure your booking with advance payment via UPI or bank transfer' },
                  { step: '4', title: 'Arrival', description: 'Check-in at 12 PM and enjoy your mountain escape' },
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
                label="Payment Methods"
                title="We Accept"
              />
              <div className="space-y-4 mb-8">
                {['UPI (GPay, PhonePe, Paytm)', 'Bank Transfer (NEFT/IMPS)', 'Cash at Check-in (balance amount)'].map((method) => (
                  <div key={method} className="flex items-center gap-3 text-cream-300">
                    <Check className="w-5 h-5 text-amber-500" />
                    {method}
                  </div>
                ))}
              </div>

              <div className="card-dark p-6 border-amber-500/30">
                <div className="flex items-start gap-3 mb-4">
                  <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-cream-100 font-semibold mb-2">Booking Note</h4>
                    <p className="text-cream-400 text-sm">
                      Advance booking is recommended, especially during peak season (March-June, September-November). Contact us directly for last-minute availability.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Important Information"
              title="Policies Quick Reference"
              centered
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Check-in', value: '12:00 PM', note: 'Early check-in subject to availability' },
              { title: 'Check-out', value: '11:00 AM', note: 'Late check-out subject to availability' },
              { title: 'ID Required', value: 'At Check-in', note: 'Valid government ID for all guests' },
              { title: 'Cancellation', value: 'Non-refundable', note: 'Date changes subject to availability' },
            ].map((policy, index) => (
              <AnimatedSection key={policy.title} delay={index * 100}>
                <div className="card-dark p-5 text-center">
                  <p className="text-cream-400 text-sm mb-1">{policy.title}</p>
                  <p className="text-amber-500 text-xl font-serif font-bold mb-2">{policy.value}</p>
                  <p className="text-cream-500 text-xs">{policy.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Link to="/contact" className="text-amber-500 hover:underline text-sm">
              View all house rules and policies
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rooms/cozy-bedroom.jpeg"
            alt="Cozy room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
              Reserve Your Room
            </h2>
            <p className="text-lg text-cream-300 max-w-xl mx-auto mb-10">
              Ready to wake up to valley views and mountain air? Book your stay now via WhatsApp for instant confirmation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello! I would like to book a room at Dimension 11:11. Please let me know the availability.')}
                className="btn-primary"
              >
                Book on WhatsApp
              </button>
              <a href="tel:+918580731659" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" /> Call to Book
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
