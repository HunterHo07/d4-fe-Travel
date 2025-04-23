"use client";

import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import FeaturedCruises from '@/components/sections/FeaturedCruises';
import Destinations from '@/components/sections/Destinations';
import BookingSystem from '@/components/sections/BookingSystem';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { motion, useScroll } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log('🚀 Home page mounted');
  }, []);

  return (
    <Layout>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Main sections */}
      <Hero />
      <FeaturedCruises />
      <Destinations />
      <BookingSystem />
      <About />
      <Testimonials />
      <Contact />
      
      {/* Floating back to top button */}
      <motion.button
        className="fixed right-6 bottom-6 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg z-30 flex items-center justify-center hover:bg-blue-700 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </Layout>
  );
}
