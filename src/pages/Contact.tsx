import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, MessageCircle, Clock, Shield, CreditCard, Users,
  Home, AlertCircle, ChevronDown, ChevronUp, Instagram, Facebook, ArrowRight
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { faqs, PHONE_NUMBER, EMAIL, ADDRESS } from '../data/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '2',
    roomType: '',
    message: '',
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello! I would like to make a booking inquiry at Dimension 11:11.

*Booking Details:*
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not provided'}
- Check-in: ${formData.checkin}
- Check-out: ${formData.checkout}
- Guests: ${formData.guests}
- Room Preference: ${formData.roomType || 'No preference'}
- Special Requests: ${formData.message || 'None'}

Please confirm availability and share the booking details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to book your stay or ask any questions"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
        image="/images/hero/contact-hero.jpeg"
      />

      {/* Contact Methods */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Get in Touch"
              title="Contact Information"
              description="Multiple ways to reach us - choose what works best for you"
              centered
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Call Us',
                value: PHONE_NUMBER,
                description: 'Available 8 AM - 10 PM',
                action: () => window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'WhatsApp',
                value: PHONE_NUMBER,
                description: 'Quick responses',
                action: () => openWhatsApp('Hello! I have a question about Dimension 11:11.'),
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email',
                value: EMAIL,
                description: 'For detailed inquiries',
                action: () => window.location.href = `mailto:${EMAIL}`,
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Address',
                value: 'Old Kasol',
                description: 'Near Gungun Parking',
                action: () => window.open('https://maps.google.com/?q=32.0098,77.3150', '_blank'),
              },
            ].map((contact, index) => (
              <AnimatedSection key={contact.title} delay={index * 100}>
                <button
                  onClick={contact.action}
                  className="card-dark p-6 text-center w-full h-full hover:border-amber-500/50 transition-all group"
                >
                  <div className="text-amber-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-serif text-cream-100 mb-2">{contact.title}</h3>
                  <p className="text-cream-200 text-sm font-semibold mb-1">{contact.value}</p>
                  <p className="text-cream-500 text-xs">{contact.description}</p>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                label="Book Your Stay"
                title="Send Us an Inquiry"
                description="Fill out the form and we'll get back to you with availability and pricing. For immediate assistance, feel free to call or WhatsApp us directly."
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream-300 text-sm mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-cream-300 text-sm mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream-300 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream-300 text-sm mb-2">Check-in Date *</label>
                    <input
                      type="date"
                      name="checkin"
                      value={formData.checkin}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-cream-300 text-sm mb-2">Check-out Date *</label>
                    <input
                      type="date"
                      name="checkout"
                      value={formData.checkout}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream-300 text-sm mb-2">Number of Guests *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-cream-300 text-sm mb-2">Room Preference</label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="">No preference</option>
                      <option value="Deluxe Room">Deluxe Room (Rs.2,499)</option>
                      <option value="Family Suite">Family Suite (Rs.3,499)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cream-300 text-sm mb-2">Special Requests / Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-100 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Inquiry via WhatsApp
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="card-dark p-6 mb-6 border-amber-500/30">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-cream-100 font-semibold mb-2">Important Information</h4>
                    <ul className="space-y-2 text-cream-400 text-sm">
                      <li>- Minimum guest age: 18 years</li>
                      <li>- Couples are welcome (valid ID required)</li>
                      <li>- Pets are not allowed</li>
                      <li>- Outside food is not permitted</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-sm overflow-hidden mb-6">
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

              <div className="space-y-4">
                <h4 className="text-cream-100 font-serif text-lg">Our Location</h4>
                <p className="text-cream-400 text-sm leading-relaxed">
                  {ADDRESS}
                </p>
                <a
                  href="https://maps.google.com/?q=32.0098,77.3150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm transition-colors"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Travel Guide"
              title="How to Reach Us"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'By Air',
                description: 'Nearest airport is Kullu-Manali Airport (Bhuntar), about 30 km away. Taxis available from airport to Kasol.',
              },
              {
                title: 'By Bus',
                description: 'Regular buses from Delhi, Chandigarh, and Manali to Kasol. We are 1.4 km from Kasol bus stand.',
              },
              {
                title: 'By Car',
                description: 'Well-connected roads from major cities. Free parking available at our property.',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="card-dark p-6 text-center">
                  <h3 className="text-lg font-serif text-cream-100 mb-3">{item.title}</h3>
                  <p className="text-cream-400 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <p className="text-cream-300">
              Need pickup from Kasol bus stand?{' '}
              <button
                onClick={() => openWhatsApp('Hello! I need pickup arrangement from Kasol bus stand.')}
                className="text-amber-500 hover:underline"
              >
                Contact us
              </button>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* House Rules */}
      <section className="section-padding bg-dark-900">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Policies"
              title="House Rules"
              description="Please review our policies before booking"
              centered
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Check-in / Check-out',
                items: [
                  'Check-in: 12:00 PM',
                  'Check-out: 11:00 AM',
                  'Early/late requests subject to availability',
                ],
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Guest Policy',
                items: [
                  'Minimum age: 18 years',
                  'Couples welcome with valid ID',
                  'Valid government ID required',
                ],
              },
              {
                icon: <Home className="w-6 h-6" />,
                title: 'Property Rules',
                items: [
                  'No outside food allowed',
                  'Smoking in designated areas only',
                  'Pets not permitted',
                ],
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: 'Cancellation',
                items: [
                  'Booking is non-refundable',
                  'Date changes subject to availability',
                  'Contact us for special circumstances',
                ],
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: 'Payment',
                items: [
                  'Advance booking recommended',
                  'UPI / Bank transfer accepted',
                  'Balance payable at check-in',
                ],
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Safety',
                items: [
                  '24/7 caretaker on premises',
                  'First aid available',
                  'Doctor on call for emergencies',
                ],
              },
            ].map((rule, index) => (
              <AnimatedSection key={rule.title} delay={index * 100}>
                <div className="card-dark p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-amber-500">{rule.icon}</div>
                    <h3 className="text-lg font-serif text-cream-100">{rule.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.items.map((item) => (
                      <li key={item} className="text-cream-400 text-sm flex items-start gap-2">
                        <span className="text-amber-500">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-950">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              label="Common Questions"
              title="Frequently Asked Questions"
              centered
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="card-dark overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <span className="text-cream-100 font-medium pr-4">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-cream-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-dark-900">
        <div className="section-container text-center">
          <AnimatedSection>
            <SectionHeader
              label="Follow Us"
              title="Stay Connected"
              description="Follow us on social media for updates, photos, and travel inspiration"
              centered
            />

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com/dimension1111kasol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-300 hover:border-amber-500/50 hover:text-amber-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://facebook.com/dimension1111kasol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-dark-800 border border-dark-600 rounded-sm text-cream-300 hover:border-amber-500/50 hover:text-amber-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/views/valley-panorama.jpeg"
            alt="Valley sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-cream-300 max-w-xl mx-auto mb-10">
              We're here to help! Reach out anytime and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello! I have a question about Dimension 11:11.')}
                className="btn-primary"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
              </button>
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
