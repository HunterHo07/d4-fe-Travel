import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainer, fadeIn } from '../animations/useAnimations';
import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Frequent Traveler',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    testimonial: 'Our Mediterranean cruise with OceanVoyages was a dream come true. The service was impeccable, the destinations were breathtaking, and the onboard experience exceeded all our expectations. Truly a five-star experience!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Adventure Seeker',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    testimonial: 'As an adventure traveler, I was looking for something beyond the ordinary. The Alaskan frontier cruise delivered on every front - from wildlife sightings to glacier explorations. The staff was amazing.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah and David Chen',
    role: 'Honeymoon Couple',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    testimonial: 'We chose OceanVoyages for our honeymoon and couldn\'t be happier. The romantic sunset dinners, couple\'s spa treatments, and personalized attention made our trip unforgettable. We\'re already planning our anniversary cruise!',
    rating: 5
  },
  {
    id: 4,
    name: 'Robert Williams',
    role: 'Retiree',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    testimonial: 'After 40 years of working, my wife and I decided to treat ourselves to a Caribbean cruise. The accessibility accommodations were excellent, and the staff went above and beyond to ensure our comfort. This was the relaxing experience we were hoping for.',
    rating: 4
  },
  {
    id: 5,
    name: 'Jessica Thompson',
    role: 'Family Vacation',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    testimonial: 'Traveling with three kids can be challenging, but OceanVoyages made it easy and enjoyable. The children\'s programs kept our kids entertained while my husband and I got some much-needed relaxation time. The family-friendly excursions were perfect for all ages.',
    rating: 5
  },
];

const TestimonialCard = ({ 
  testimonial, 
  isActive 
}: { 
  testimonial: typeof testimonials[0]; 
  isActive: boolean;
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.5, y: 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-blue-600 text-sm">{testimonial.role}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                size={14}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 relative">
        <FaQuoteLeft className="text-blue-100 absolute top-0 left-0 transform -translate-x-2 -translate-y-2" size={30} />
        <p className="text-gray-600 relative z-10 pl-2">{testimonial.testimonial}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, controls } = useAnimateOnScroll();

  const handleNext = () => {
    console.log('🚀 Moving to next testimonial');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    console.log('🚀 Moving to previous testimonial');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50 overflow-hidden">
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
              TESTIMONIALS
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied customers about their 
            unforgettable experiences with OceanVoyages.
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Navigation Controls */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-full flex justify-between pointer-events-none">
            <motion.button
              onClick={handlePrev}
              className="bg-white/90 backdrop-blur-sm text-blue-600 rounded-full p-3 shadow-lg pointer-events-auto focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="bg-white/90 backdrop-blur-sm text-blue-600 rounded-full p-3 shadow-lg pointer-events-auto focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-4xl mx-auto">
            <TestimonialCard 
              testimonial={testimonials[activeIndex]} 
              isActive={true}
            />
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { label: 'Happy Customers', value: '10,000+' },
            { label: 'Cruises Completed', value: '500+' },
            { label: 'Destinations', value: '120+' },
            { label: 'Years Experience', value: '20+' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-md"
              variants={fadeIn('up', index * 0.1)}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
