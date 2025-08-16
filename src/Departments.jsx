import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity,
  Scissors, 
  Shield,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Stethoscope
} from 'lucide-react';

const Departments = () => {
  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('data-section');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <Heart className="w-12 h-12 text-red-500" />,
      description: 'Comprehensive cardiac care with state-of-the-art technology for heart diseases, heart attacks, and cardiovascular conditions.',
      features: ['ECG & Echo', 'Angiography', 'Angioplasty', 'Cardiac Surgery'],
      color: 'red',
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" // Doctor with stethoscope and heart monitor
    },
    {
      id: 'pulmonology',
      name: 'Pulmonology',
      icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
      description: 'Expert respiratory care and treatment for lung diseases, breathing disorders, and pulmonary conditions.',
      features: ['Lung Function Tests', 'Bronchoscopy', 'Sleep Studies', 'Respiratory Therapy'],
      color: 'blue',
      image: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 'vascular-surgery',
      name: 'Vascular Surgery',
      icon: <Shield className="w-12 h-12 text-green-500" />,
      description: 'Advanced vascular procedures and treatments for blood vessel disorders and circulatory problems.',
      features: ['Varicose Veins', 'Aneurysm Repair', 'Bypass Surgery', 'Endovascular Procedures'],
      color: 'green',
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 'icu',
      name: 'ICU Care',
      icon: <Users className="w-12 h-12 text-purple-500" />,
      description: '24/7 intensive care with expert medical staff.',
      features: ['Critical Care', 'Ventilator Support', 'Emergency Response', 'Continuous Monitoring'],
      color: 'purple',
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 'thoracic-surgery',
      name: 'Thoracic Surgery',
      icon: <Scissors className="w-12 h-12 text-green-500" />,
      description: 'Specialized chest surgery for lung cancer, chest wall deformities, and thoracic conditions.',
      features: ['Lung Cancer Surgery', 'Chest Wall Surgery', 'Minimally Invasive', 'Robotic Surgery'],
      color: 'green',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rehabilitation',
      name: 'Rehabilitation & Preventive Care',
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      description: 'Comprehensive rehabilitation programs and preventive care to maintain optimal heart and lung health.',
      features: ['Cardiac Rehabilitation', 'Pulmonary Rehabilitation', 'Lifestyle Counseling', 'Preventive Screenings'],
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const stats = [
    { number: "50+", label: "Expert Specialists" },
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Successful Procedures" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #2563eb 0%, #60a5fa 60%, #fff 100%), url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-8 text-center">Our Departments</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              At Hridaya Nilayam, we bring together expert specialists across multiple disciplines 
              to provide complete care for your heart, lungs, and vascular health.
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
                Emergency: 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-6 py-4">
            <button
              onClick={() => scrollToSection('all')}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeSection === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => scrollToSection(dept.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeSection === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section id="all" data-section="all" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Specialized Care Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each department is staffed with experienced specialists and equipped with 
              the latest medical technology to provide the best possible care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                id={dept.id}
                data-section={dept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Department Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20"></div>
                  <div className="absolute top-4 right-4">
                    {dept.icon}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-base md:text-xl font-semibold mb-2 text-blue-900">{dept.name}</h2>
                  </div>
                </div>

                {/* Department Content */}
                <div className="p-6">
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {dept.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                                         <div className="grid grid-cols-2 gap-2">
                       {dept.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                           <div className={`w-2 h-2 rounded-full ${
                             dept.color === 'red' ? 'bg-red-500' :
                             dept.color === 'blue' ? 'bg-blue-500' :
                             dept.color === 'purple' ? 'bg-purple-500' :
                             dept.color === 'green' ? 'bg-green-500' :
                             dept.color === 'indigo' ? 'bg-indigo-500' : 'bg-gray-500'
                           }`}></div>
                           {feature}
                         </div>
                       ))}
                     </div>
                  </div>

                  {/* View More Button */}
                  <Link
                    to={`/departments/${dept.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    View More Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Hridaya Nilayam?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience world-class healthcare with cutting-edge technology and compassionate care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Expert Team",
                description: "Experienced specialists with decades of combined expertise"
              },
              {
                icon: <Award className="w-8 h-8 text-green-600" />,
                title: "Advanced Technology",
                description: "State-of-the-art medical equipment and facilities"
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                title: "Patient-Centered",
                description: "Personalized care plans tailored to individual needs"
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-600" />,
                title: "Quality Care",
                description: "Highest standards of medical care and safety protocols"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards better health.
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

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Departments;
