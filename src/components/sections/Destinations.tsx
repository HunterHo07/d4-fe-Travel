import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainer, fadeIn, slideIn } from '../animations/useAnimations';
import { useState } from 'react';

const destinations = [
  {
    id: 'caribbean',
    name: 'Caribbean',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80',
    description: 'Crystal clear waters, white sandy beaches, and vibrant island culture await in the tropical paradise of the Caribbean.',
    highlights: ['Bahamas', 'Jamaica', 'Aruba', 'St. Lucia', 'Barbados']
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    description: 'Explore ancient civilizations, stunning coastal towns, and savor the flavors of Mediterranean cuisine.',
    highlights: ['Barcelona', 'Rome', 'Athens', 'Santorini', 'Venice']
  },
  {
    id: 'alaska',
    name: 'Alaska',
    image: 'https://images.unsplash.com/photo-1531176175280-33e81422832a?auto=format&fit=crop&w=1200&q=80',
    description: 'Witness breathtaking glaciers, pristine wilderness, and abundant wildlife in America\'s last frontier.',
    highlights: ['Juneau', 'Ketchikan', 'Skagway', 'Glacier Bay', 'Denali']
  },
  {
    id: 'asia',
    name: 'Asia',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    description: 'Immerse yourself in ancient traditions, vibrant cities, and exotic landscapes across the Asian continent.',
    highlights: ['Tokyo', 'Singapore', 'Hong Kong', 'Bangkok', 'Shanghai']
  },
  {
    id: 'scandinavia',
    name: 'Scandinavia & Northern Europe',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Discover majestic fjords, charming medieval towns, and the breathtaking beauty of the northern lights.',
    highlights: ['Oslo', 'Copenhagen', 'Stockholm', 'St. Petersburg', 'Tallinn']
  },
];

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0].id);
  const { ref, controls } = useAnimateOnScroll();
  
  const selectedDestination = destinations.find(d => d.id === activeDestination) || destinations[0];

  return (
    <section id="destinations" className="py-20 bg-blue-50 overflow-hidden">
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
              DREAM DESTINATIONS
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Explore Our Popular Destinations
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.2)}
            className="max-w-2xl mx-auto text-gray-600"
          >
            From tropical paradises to icy wonderlands, our cruises take you to the most breathtaking 
            destinations around the globe.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {destinations.map((destination, index) => (
            <motion.button
              key={destination.id}
              onClick={() => setActiveDestination(destination.id)}
              className={`py-2 px-4 m-2 rounded-full transition-all font-medium text-sm sm:text-base ${
                activeDestination === destination.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              variants={fadeIn('down', 0.1 + index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {destination.name}
            </motion.button>
          ))}
        </div>

        {/* Active Destination Display */}
        <motion.div
          layout
          key={activeDestination}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Image */}
          <motion.div 
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            variants={slideIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={selectedDestination.image}
              alt={selectedDestination.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedDestination.name}</h3>
              <div className="flex flex-wrap gap-2">
                {selectedDestination.highlights.map((highlight, index) => (
                  <motion.span 
                    key={index}
                    className="bg-blue-500/70 backdrop-blur-sm text-xs py-1 px-2 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideIn('right')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Discover {selectedDestination.name}</h3>
            <p className="text-gray-600 mb-6">{selectedDestination.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Featured Cruises</h4>
                <ul className="space-y-3">
                  {[1, 2, 3].map((_, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">
                          {index === 0 ? `${selectedDestination.name} Explorer` : 
                           index === 1 ? `${selectedDestination.name} Adventure` : 
                           `${selectedDestination.name} Discovery`}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {index === 0 ? '7 Nights' : index === 1 ? '10 Nights' : '14 Nights'} | 
                          From ${index === 0 ? '1,299' : index === 1 ? '1,899' : '2,499'}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition-colors w-full font-medium mt-4"
              >
                View All {selectedDestination.name} Cruises
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white text-center shadow-xl"
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore the World?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Start planning your dream cruise vacation today. Our travel specialists are ready to help you
            create unforgettable memories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full inline-flex items-center transition-all"
          >
            <span>Browse All Destinations</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
