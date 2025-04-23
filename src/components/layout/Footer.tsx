import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { slideIn, staggerContainer } from '../animations/useAnimations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Company Info */}
          <motion.div variants={slideIn('up')}>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 mb-3">
                <span className="text-white font-bold text-lg">JCT</span>
              </div>
              <h3 className="text-xl font-bold">Jebsen Cruise Travel</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Providing exceptional cruise experiences for over 20 years. Setting sail to dream destinations with unmatched service and luxury.
            </p>
            <div className="flex space-x-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-blue-800 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={slideIn('up', 0.1)}>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Our Cruises', 'Destinations', 'About Us', 'Testimonials', 'Contact Us', 'FAQ'].map((item, index) => (
                <li key={index}>
                  <Link href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    <motion.span
                      className="text-blue-200 hover:text-white transition-colors inline-block"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={slideIn('up', 0.2)}>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-blue-200">123 Harbor View, Marina Bay, Miami, FL 33132, USA</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-blue-200 hover:text-white">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-2 flex-shrink-0" />
                <a href="mailto:cruise@jebsen.com.my" className="text-blue-200 hover:text-white">cruise@jebsen.com.my</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={slideIn('up', 0.3)}>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Join Our Newsletter</h3>
            <p className="text-blue-200 mb-4">Subscribe to get the latest offers and promotions</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <motion.button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Jebsen Cruise Travel. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-blue-300">
              <Link href="/privacy-policy">
                <motion.span className="hover:text-white transition-colors" whileHover={{ y: -1 }}>
                  Privacy Policy
                </motion.span>
              </Link>
              <Link href="/terms-of-service">
                <motion.span className="hover:text-white transition-colors" whileHover={{ y: -1 }}>
                  Terms of Service
                </motion.span>
              </Link>
              <Link href="/cookie-policy">
                <motion.span className="hover:text-white transition-colors" whileHover={{ y: -1 }}>
                  Cookie Policy
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
