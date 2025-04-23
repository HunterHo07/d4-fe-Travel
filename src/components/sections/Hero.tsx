"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../animations/useAnimations';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);
  
  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          alt="Cruise ship sailing in the ocean"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Ocean Waves - Using duplicated SVGs for seamless infinite animation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden w-[120%] -ml-[10%] h-32">
        {/* Container for wave animations */}
        <div className="relative">
          {/* First wave layer */}
          <motion.div
            className="absolute w-[200%]" 
            animate={{ x: ["-50%", "0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "linear" 
            }}
          >
            <svg 
              viewBox="0 0 2880 100" 
              className="w-full h-auto"
            >
              <path 
                d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z M1440,32L1488,37.3C1536,43,1632,53,1728,53.3C1824,53,1920,43,2016,48C2112,53,2208,75,2304,80C2400,85,2496,75,2592,69.3C2688,64,2784,64,2832,64L2880,64L2880,100L2832,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1488,100L1440,100Z" 
                fill="rgba(255, 255, 255, 0.9)"
              />
            </svg>
          </motion.div>
          
          {/* Second wave layer with different animation timing */}
          <motion.div
            className="absolute w-[200%]" 
            animate={{ x: ["0%", "-50%", "0%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 15,
              ease: "linear" 
            }}
          >
            <svg 
              viewBox="0 0 2880 110" 
              className="w-full h-auto"
            >
              <path 
                d="M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,96C672,107,768,117,864,112C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,110L1392,110C1344,110,1248,110,1152,110C1056,110,960,110,864,110C768,110,672,110,576,110C480,110,384,110,288,110C192,110,96,110,48,110L0,110Z M1440,64L1488,64C1536,64,1632,64,1728,69.3C1824,75,1920,85,2016,96C2112,107,2208,117,2304,112C2400,107,2496,85,2592,80C2688,75,2784,85,2832,90.7L2880,96L2880,110L2832,110C2784,110,2688,110,2592,110C2496,110,2400,110,2304,110C2208,110,2112,110,2016,110C1920,110,1824,110,1728,110C1632,110,1536,110,1488,110L1440,110Z" 
                fill="rgba(255, 255, 255, 0.7)"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeIn('down', 0.2)}
            className="mb-3"
          >
            <span className="bg-blue-500/80 text-white px-4 py-1 rounded-full backdrop-blur-sm">
Malaysia&apos;s Premier Cruise Specialist Since 1979
            </span>
          </motion.div>
          
          <motion.h1 
            variants={slideIn('up', 0.3)}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            <span className="block">Discover Your Dream</span>
            <span className="block text-blue-300">Cruise Experience</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-8"
          >
Representing over 40 international cruise lines. Jebsen Travel has been Malaysia&apos;s trusted cruise specialist for more than four decades.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 0.5)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Explore Cruises
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator - Conditionally rendered based on scroll position */}

      {/* Scroll down indicator */}
      {showScroll && (
        <motion.div
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        <div className="flex flex-col items-center bg-blue-600/40 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg">
          <span className="text-white font-bold text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1 bg-blue-500/30">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
      )}
    </section>
  );
};

export default Hero;
