import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useAnimateOnScroll, staggerContainer, fadeIn } from '../animations/useAnimations';
import { FaCalendarAlt, FaShip, FaUsers, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

type BookingFormData = {
  cruiseType: string;
  destination: string;
  departureDate: Date | null;
  duration: string;
  passengers: string;
};

const BookingSystem = () => {
  const { ref, controls } = useAnimateOnScroll();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    cruiseType: '',
    destination: '',
    departureDate: null,
    duration: '',
    passengers: '2',
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: formData
  });

  const destinations = [
    'Caribbean',
    'Mediterranean',
    'Alaska',
    'Asia',
    'Scandinavia',
    'South Pacific',
    'South America',
    'Antarctica'
  ];

  const cruiseTypes = [
    'All Cruises',
    'Luxury',
    'Family',
    'Adventure',
    'Romantic',
    'Senior',
  ];

  const durations = [
    'Any',
    '2-5 Nights',
    '6-9 Nights',
    '10-13 Nights',
    '14+ Nights'
  ];

  const onSubmit = (data: BookingFormData) => {
    console.log('🚀 Form submitted:', data);
    setFormData(data);
    setStep(2);
  };

  return (
    <section id="booking" className="py-20 relative overflow-hidden bg-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-800" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn('up')}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-3">
              EASY BOOKING
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          >
            Book Your Dream Cruise
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.2)}
            className="max-w-2xl mx-auto text-gray-800 font-medium text-base"
          >
            Find and book your perfect cruise voyage in just a few simple steps.
            Our easy-to-use booking system ensures a seamless reservation experience.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate={controls}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Booking Steps Indicator */}
            <div className="bg-blue-600 p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mr-3"
                    animate={{ scale: step === 1 ? [1, 1.1, 1] : 1 }}
                    transition={{ repeat: step === 1 ? Infinity : 0, duration: 2 }}
                  >
                    1
                  </motion.div>
                  <span className="text-white font-semibold text-base">Search</span>
                </div>
                <div className="h-0.5 bg-blue-400 flex-grow mx-4"></div>
                <div className="flex items-center">
                  <motion.div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3
                    ${step >= 2 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}
                    animate={{ scale: step === 2 ? [1, 1.1, 1] : 1 }}
                    transition={{ repeat: step === 2 ? Infinity : 0, duration: 2 }}
                  >
                    2
                  </motion.div>
                  <span className="text-white font-semibold text-base">Results</span>
                </div>
                <div className="h-0.5 bg-blue-400 flex-grow mx-4"></div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3
                    ${step >= 3 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}>
                    3
                  </div>
                  <span className="text-white font-semibold text-base">Checkout</span>
                </div>
              </div>
            </div>

            {/* Step 1: Search Form */}
            {step === 1 && (
              <motion.div 
                className="p-6 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cruise Type */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaShip className="mr-2 text-blue-500" />
                        Cruise Type
                      </label>
                      <select
                        {...register('cruiseType', { required: 'Please select a cruise type' })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select Cruise Type</option>
                        {cruiseTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.cruiseType && (
                        <p className="text-red-500 text-sm mt-1">{errors.cruiseType.message}</p>
                      )}
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-blue-500" />
                        Destination
                      </label>
                      <select
                        {...register('destination', { required: 'Please select a destination' })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select Destination</option>
                        {destinations.map((destination) => (
                          <option key={destination} value={destination}>{destination}</option>
                        ))}
                      </select>
                      {errors.destination && (
                        <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                      )}
                    </div>

                    {/* Departure Date */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        Departure Date
                      </label>
                      <Controller
                        control={control}
                        name="departureDate"
                        rules={{ required: 'Please select a departure date' }}
                        render={({ field }) => (
                          <DatePicker
                            selected={field.value}
                            onChange={(date) => field.onChange(date)}
                            minDate={new Date()}
                            placeholderText="Select date"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                        )}
                      />
                      {errors.departureDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.departureDate.message}</p>
                      )}
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        Duration
                      </label>
                      <select
                        {...register('duration')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        {durations.map((duration) => (
                          <option key={duration} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>

                    {/* Passengers */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaUsers className="mr-2 text-blue-500" />
                        Passengers
                      </label>
                      <select
                        {...register('passengers')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button - Full Width */}
                    <div className="md:col-span-2">
                      <motion.button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-lg flex items-center justify-center transition-all text-lg shadow-lg relative overflow-hidden group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></span>
                        <FaSearch className="mr-2" />
                        Search Cruises
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 2: Results */}
            {step === 2 && (
              <motion.div 
                className="p-6 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Search Results</h3>
                  <motion.button
                    onClick={() => setStep(1)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    whileHover={{ x: -3 }}
                  >
                    ← Modify Search
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01, x: 3 }}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0 md:mr-4">
                          <div className="bg-gray-200 h-24 md:h-full rounded-lg"></div>
                        </div>
                        <div className="md:w-2/4">
                          <h4 className="font-bold text-gray-800">
                            {formData.destination} {index === 0 ? 'Explorer' : index === 1 ? 'Adventure' : 'Discovery'} Cruise
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {index === 0 ? '7' : index === 1 ? '10' : '14'} Nights | Departing: {formData.departureDate?.toLocaleDateString()}
                          </p>
                          <div className="flex items-center text-yellow-500 text-sm mb-2">
                            {Array(5).fill(0).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                            <span className="ml-1 text-gray-600">(120+ reviews)</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Ports: Miami, Nassau, Cozumel, Georgetown
                          </p>
                        </div>
                        <div className="md:w-1/4 mt-4 md:mt-0 flex flex-col items-end justify-between">
                          <div className="text-right">
                            <p className="text-gray-500 text-sm">From</p>
                            <p className="text-2xl font-bold text-blue-600">
                              ${index === 0 ? '1,299' : index === 1 ? '1,899' : '2,499'}
                            </p>
                            <p className="text-gray-500 text-xs">per person</p>
                          </div>
                          <motion.button
                            onClick={() => setStep(3)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg mt-2 w-full md:w-auto shadow-lg relative overflow-hidden group"
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></span>
                            Select
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Checkout Form Placeholder */}
            {step === 3 && (
              <motion.div 
                className="p-6 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Complete Your Booking</h3>
                  <motion.button
                    onClick={() => setStep(2)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    whileHover={{ x: -3 }}
                  >
                    ← Back to Results
                  </motion.button>
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">{formData.destination} Explorer Cruise</h4>
                  <p className="text-gray-600">7 Nights | Departing: {formData.departureDate?.toLocaleDateString()}</p>
                  <p className="text-gray-600">{formData.passengers} Passengers | {formData.cruiseType}</p>
                  <div className="mt-2 pt-2 border-t border-blue-100 flex justify-between">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold text-blue-600">$1,299 x {formData.passengers} = ${1299 * parseInt(formData.passengers || '1')}</span>
                  </div>
                </div>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-gray-800 mb-4">Personal Information</h4>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Payment Section */}
                    <div className="md:col-span-2 mt-4">
                      <h4 className="font-bold text-gray-800 mb-4">Payment Information</h4>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-medium">Card Number</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Expiration Date</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">CVV</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="123"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                      <motion.button
                        type="button"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-lg flex items-center justify-center transition-all text-lg shadow-lg relative overflow-hidden group"
                        whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => alert('🚀 Booking successful! Your confirmation details would be sent to your email.')}
                      >
                        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></span>
                        Complete Booking
                      </motion.button>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        By completing this booking, you agree to our Terms and Conditions.
                      </p>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSystem;
