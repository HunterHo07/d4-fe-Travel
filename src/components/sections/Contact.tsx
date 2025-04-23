import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainer, fadeIn, slideIn } from '../animations/useAnimations';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock, FaLocationArrow, FaStar } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import react-leaflet components to avoid SSR issues
const MapComponentsLoader = dynamic(() => import('../../../src/lib/MapComponents'), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-blue-50 flex items-center justify-center">Loading map...</div>
});

const Contact = () => {
  const { ref, controls } = useAnimateOnScroll();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    console.log('🚀 Contact component mounted');
  }, []);

  // Simple map component wrapper
  const MapDisplay = () => (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
      {isBrowser && <MapComponentsLoader />}
    </div>
  );

  const contactMethods = [
    {
      icon: FaPhoneAlt,
      title: 'Phone',
      content: '+1 (234) 567-890',
      href: 'tel:+1234567890',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+603 2731 0579',
      href: 'https://wa.me/60327310579',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'cruise@jebsen.com.my',
      href: 'mailto:cruise@jebsen.com.my',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500'
    },
    {
      icon: FaClock,
      title: 'Open Hours',
      content: 'Mon-Fri: 9AM - 6PM',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-3">
              GET IN TOUCH
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Contact Jebsen Travel
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.2)}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Have questions about our cruises? Our travel specialists are ready to assist you
            with bookings and inquiries. Connect with us through any of the channels below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <motion.div
            variants={slideIn('right')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className={`${method.bgColor} p-4 rounded-lg flex items-start`}
                  whileHover={{ y: -5, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`h-10 w-10 rounded-full ${method.iconColor} bg-white flex items-center justify-center mr-4 flex-shrink-0`}>
                    <method.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{method.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaLocationArrow className="mr-2 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-800">Office Location</h3>
              </div>
              <p className="text-gray-600 mb-2">
                123 Harbor View, Marina Bay, Miami, FL 33132, USA
              </p>
              <div className="flex space-x-3 text-sm mb-6">
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  whileHover={{ x: 2 }}
                >
                  <span>Directions</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
              
              {/* Map Component */}
              <MapDisplay />
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FaStar className="mr-2 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-800">Why Choose Us</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                <p className="text-blue-800 mb-4">Suite 22.01, Level 22, Menara Citibank<br/>165, Jalan Ampang<br/>50450 Kuala Lumpur, Malaysia</p>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Dedicated customer service 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Best price guarantee on all cruise packages
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Customizable cruise itineraries
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                  Subject*
                </label>
                <select
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-600 text-sm">
                    I agree to receive promotional emails and updates from OceanVoyages
                  </span>
                </label>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
