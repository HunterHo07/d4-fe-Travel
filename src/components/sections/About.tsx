import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainer, fadeIn, slideIn } from '../animations/useAnimations';
import { FaAnchor, FaLifeRing, FaGlobe, FaAward } from 'react-icons/fa';

const About = () => {
  const { ref, controls } = useAnimateOnScroll();

  const features = [
    {
      icon: FaAnchor,
      title: 'Over 20 Years Experience',
      description: 'With two decades of excellence in the cruise industry, we bring unparalleled expertise to every voyage we plan.'
    },
    {
      icon: FaLifeRing,
      title: '24/7 Customer Support',
      description: 'Our dedicated team is always available to assist you before, during, and after your cruise journey.'
    },
    {
      icon: FaGlobe,
      title: 'Global Destinations',
      description: 'Explore over 100 destinations worldwide with our carefully curated cruise packages.'
    },
    {
      icon: FaAward,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer satisfaction and cruise travel planning.'
    },
  ];

  return (
    <section id="about" className="py-20 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn('up')}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-3">
              ABOUT US
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            Malaysia&apos;s Leading Cruise Specialist Since 1979
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.2)}
            className="max-w-2xl mx-auto text-gray-700 font-bold text-lg"
          >
            JEBSEN TRAVEL was founded in 1979 by a small group of experienced travel consultants who shared
            a common goal - providing unsurpassed service to discerning travelers across Malaysia and beyond.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Image with floating elements */}
          <motion.div
            className="relative"
            variants={slideIn('right')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                alt="Cruise ship sailing in the ocean"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute top-10 -left-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-10 flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <FaAnchor className="mr-2" />
                <span className="font-semibold">Est. 2005</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 -right-6 bg-white p-4 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-gray-800 font-bold">10,000+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </motion.div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={slideIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              We Create Memorable Ocean Adventures Since 2005
            </h3>
            
            <p className="text-gray-800 mb-6 text-base">
              Premier international cruise lines have appointed JEBSEN as their GSA (General Sales Agent), 
              ISR, and Preferred Agent in Malaysia. With over 40+ years of cruise travel experience, we have 
              become the Largest Cruise Consolidator in Asia with cruise businesses established in prime 
              cities across Asia and the Middle East.
            </p>
            
            <p className="text-gray-800 mb-8 text-base">
              Our dedicated team of cruise specialists have thousands of combined cruise nights and 
              unmatched expertise in the industry. We represent over 40 international cruise lines, 
              sailing every part of the world, allowing us to offer you the perfect cruise holiday 
              tailored to your preferences and budget.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Luxury Cruises', 'Family-Friendly Options', 'Adventure Expeditions', 'Romantic Getaways'].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-700 font-bold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              variants={fadeIn('up', index * 0.1)}
              whileHover={{ y: -10 }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <feature.icon className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-blue-50 p-8 rounded-xl"
            variants={slideIn('right')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To provide exceptional cruise experiences that inspire a love for ocean travel and create 
              lifelong memories for our customers. We strive to offer the highest level of service, expertise, 
              and value in every journey we plan.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Exceptional customer service
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Curated cruise experiences
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Sustainable travel practices
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-blue-900 text-white p-8 rounded-xl"
            variants={slideIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 mb-4">
              To be the world&apos;s most trusted cruise agency, recognized for our expertise, innovation, and 
              commitment to creating transformative travel experiences. We aim to make the joy of cruise travel 
              accessible to all, while promoting responsible tourism.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors mt-4"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
