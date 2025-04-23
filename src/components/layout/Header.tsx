import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { fadeIn } from '../animations/useAnimations';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        console.log('🚀 Header scroll state changed:', isScrolled);
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      initial="hidden"
      animate="show"
      variants={fadeIn('down')}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <motion.div 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 mr-3"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">JT</span>
              </motion.div>
              <div>
                <h1 className="text-white font-bold text-xl">Jebsen Travel</h1>
                <p className="text-blue-200 text-xs">Cruising Excellence Since 1979</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/#cruises">Our Cruises</NavLink>
            <NavLink href="/#destinations">Destinations</NavLink>
            <NavLink href="/#about">About Us</NavLink>
            <NavLink href="/#testimonials">Testimonials</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-blue-900/95 backdrop-blur-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/#cruises" onClick={() => setMobileMenuOpen(false)}>Our Cruises</MobileNavLink>
            <MobileNavLink href="/#destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</MobileNavLink>
            <MobileNavLink href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="/#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all mt-4 w-full"
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Quick contact bar */}
      <motion.div 
        className={`w-full bg-blue-800 py-1 md:block ${scrolled ? 'hidden' : ''}`}
        initial="hidden"
        animate="show"
        variants={fadeIn('up', 0.2)}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-4 text-sm text-blue-100">
            <a href="tel:+1234567890" className="flex items-center hover:text-white">
              <FaPhone className="mr-1" size={12} /> +1 (234) 567-890
            </a>
            <a href="https://wa.me/1234567890" className="flex items-center hover:text-white">
              <FaWhatsapp className="mr-1" size={12} /> WhatsApp
            </a>
            <a href="mailto:info@oceanvoyages.com" className="flex items-center hover:text-white">
              <FaEnvelope className="mr-1" size={12} /> info@oceanvoyages.com
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

// Desktop Nav Link Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <motion.span
      className="text-blue-100 hover:text-white transition-colors cursor-pointer relative group"
      whileHover={{ y: -2 }}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
    </motion.span>
  </Link>
);

// Mobile Nav Link Component
const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <Link href={href}>
    <motion.span
      className="text-white py-2 block border-b border-blue-800/30 w-full"
      onClick={onClick}
      whileTap={{ x: 5 }}
    >
      {children}
    </motion.span>
  </Link>
);

export default Header;
