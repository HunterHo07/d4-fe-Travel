import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainer, fadeIn } from '../animations/useAnimations';
import { FaCalendarAlt, FaMapMarkerAlt, FaShip, FaStar } from 'react-icons/fa';

interface CruiseCardProps {
  image: string;
  title: string;
  duration: string;
  destinations: string[];
  price: string;
  rating: number;
  index: number;
}

const CruiseCard = ({ image, title, duration, destinations, price, rating, index }: CruiseCardProps) => {
  const { ref, controls } = useAnimateOnScroll();
  
  return (
    <motion.div
      ref={ref}
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      animate={controls}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
          {price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-600 ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            <span>{destinations.join(' • ')}</span>
          </div>
          <div className="flex items-center">
            <FaShip className="text-blue-500 mr-2" />
            <span>Luxury Voyage</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg transition-all w-full font-bold text-lg shadow-lg relative overflow-hidden group"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></span>
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const FeaturedCruises = () => {
  const { ref, controls } = useAnimateOnScroll();
  
  const cruises = [
    {
      image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Mediterranean Odyssey',
      duration: '10 Nights',
      destinations: ['Barcelona', 'Rome', 'Athens'],
      price: 'From $1,999',
      rating: 4.8
    },
    {
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Caribbean Dream',
      duration: '7 Nights',
      destinations: ['Miami', 'Jamaica', 'Bahamas'],
      price: 'From $1,299',
      rating: 4.7
    },
    {
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Alaskan Frontier',
      duration: '12 Nights',
      destinations: ['Anchorage', 'Juneau', 'Ketchikan'],
      price: 'From $2,499',
      rating: 4.9
    },
    {
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Asian Explorer',
      duration: '14 Nights',
      destinations: ['Singapore', 'Hong Kong', 'Tokyo'],
      price: 'From $3,299',
      rating: 4.6
    },
  ];

  return (
    <section id="cruises" className="py-20 bg-gray-50">
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
              OUR CRUISE PACKAGES
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Featured Cruise Voyages
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.2)}
            className="max-w-2xl mx-auto text-gray-800 font-medium"
          >
            Explore our handpicked selection of the world&apos;s most breathtaking cruise experiences, 
            each promising adventure, luxury, and memories to last a lifetime.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cruises.map((cruise, index) => (
            <CruiseCard
              key={index}
              image={cruise.image}
              title={cruise.title}
              duration={cruise.duration}
              destinations={cruise.destinations}
              price={cruise.price}
              rating={cruise.rating}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full inline-flex items-center transition-all shadow-lg relative overflow-hidden group text-lg"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></span>
            <span>View All Cruises</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCruises;
