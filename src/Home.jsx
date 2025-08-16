import React from 'react';
import useCountUp from './useCountUp';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  Stethoscope,
  Shield,
  Users,
  Award,
  Calendar,
  MessageCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cardiology",
      description: "Comprehensive cardiac care with state-of-the-art technology",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" // Doctor with stethoscope and heart monitor
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      title: "Pulmonology",
      description: "Expert respiratory care and lung disease treatment",
      image: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Vascular Surgery",
      description: "Advanced vascular procedures and treatments",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "ICU Care",
      description: "24/7 intensive care with expert medical staff",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Patients" },
    { number: "50+", label: "Expert Doctors" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(37, 99, 235, 0.7) 0%, rgba(96, 165, 250, 0.7) 60%, rgba(255, 255, 255, 0.3) 100%), url('/hero-bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}

      >
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                Hridaya Nilayam
                <span className="block text-base md:text-2xl lg:text-3xl font-light mt-2">
                  Heart, Lung & Vascular Institute
                </span>
              </h1>
              <p className="text-sm md:text-xl mb-8 text-blue-100">
                Providing world-class cardiac, pulmonary, and vascular care with compassion and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919876543210"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency: 98765 43210
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Heart className="w-32 h-32 mx-auto mb-6 text-red-400" />
                <h3 className="text-2xl font-semibold mb-4">Your Heart, Our Priority</h3>
                <p className="text-blue-100">
                  Trusted by thousands of patients for comprehensive cardiac care
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3 bg-red-50 p-4 rounded-lg">
              <Phone className="w-6 h-6 text-red-600" />
              <div>
                <p className="font-semibold text-red-600">Emergency</p>
                <p className="text-sm text-gray-600">24/7 Available</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-blue-50 p-4 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-600">OPD Hours</p>
                <p className="text-sm text-gray-600">Mon-Sat: 9AM-6PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-green-50 p-4 rounded-lg">
              <MapPin className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-green-600">Location</p>
                <p className="text-sm text-gray-600">Find Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Welcome to Hridaya Nilayam
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mb-6">
                We are a premier healthcare institution dedicated to providing exceptional cardiac,
                pulmonary, and vascular care. Our state-of-the-art facilities and experienced
                medical professionals ensure the highest quality of treatment for our patients.
              </p>
              <p className="text-sm md:text-lg text-gray-600 mb-8">
                With over 15 years of experience, we have successfully treated thousands of patients
                and established ourselves as a trusted name in cardiovascular healthcare.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                // Only animate the first three stats
                if (index < 3) {
                  let num = stat.number;
                  let suffix = '';
                  if (typeof num === 'string') {
                    const match = num.match(/(\d+)(\+)?/);
                    if (match) {
                      num = parseInt(match[1]);
                      suffix = stat.number.replace(match[1], '');
                    }
                  }
                  const animatedNum = typeof num === 'number' && !isNaN(num)
                    ? useCountUp(num, 1200, suffix)
                    : stat.number;
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="text-xl md:text-3xl font-bold text-blue-600 mb-2">{animatedNum}</div>
                      <div className="text-xs md:text-base text-gray-600">{stat.label}</div>
                    </div>
                  );
                } else {
                  // For '24/7 Emergency Care', show as is
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="text-xl md:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-xs md:text-base text-gray-600">{stat.label}</div>
                    </div>
                  );
                }
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Our Specialties
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive medical services across multiple specialties with
              cutting-edge technology and expert care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden bg-white flex flex-col"
              >
                {/* Image with icon overlay */}
                <div className="relative h-40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 rounded-full p-2 shadow flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                {/* Content below image */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-2 flex-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Departments
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Find Us
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Visit our state-of-the-art facility for the best medical care
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.236255388935!2d76.6276198!3d28.881518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8598deadc91d%3A0x360549d905d4faac!2sHridaya%20Nilayam%20Heart%2CLung%20%26%20Vascular%20Institute!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hridaya Nilayam Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Take Care of Your Health?
            </h2>
            <p className="text-sm md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Book your appointment today and experience world-class healthcare at Hridaya Nilayam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;