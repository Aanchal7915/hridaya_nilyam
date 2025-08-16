import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Book Appointment', path: '/book-appointment' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const departments = [
    { name: 'Cardiology', path: '/departments/cardiology' },
    { name: 'Pulmonology', path: '/departments/pulmonology' },
    { name: 'Vascular Surgery', path: '/departments/vascular-surgery' },
    { name: 'ICU', path: '/departments/icu' },
    { name: 'Emergency Services', path: '/departments/emergency' },
    { name: 'Radiology', path: '/departments/radiology' }
  ];

  const patientServices = [
    { name: 'OPD Timings', path: '/patient-services#opd' },
    { name: 'Inpatient Rooms', path: '/patient-services#rooms' },
    { name: 'Insurance', path: '/patient-services#insurance' },
    { name: 'Health Packages', path: '/patient-services#packages' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', name: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, url: '#', name: 'YouTube' }
  ];

  const handleWhatsApp = () => {
    const message = `Hello, I have a query about Hridaya Nilayam. Please contact me.`;
    const whatsappUrl = `https://wa.me/+911262298330?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hridaya Nilayam</h3>
                <p className="text-sm text-gray-400">Heart, Lung & Vascular Institute</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing world-class cardiac, pulmonary, and vascular care with compassion 
              and excellence. Your health is our priority.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Emergency: 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@hridayanilayam.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">24/7 Emergency Care</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <li key={index}>
                  <Link
                    to={dept.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Patient Services</h4>
            <ul className="space-y-3">
              {patientServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">Emergency Services Available 24/7</p>
                <p className="text-sm opacity-90">Call: 98765 43210</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+911262298330"
                className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Hridaya Nilayam Heart, Lung & Vascular Institute. 
                All rights reserved.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Links */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 text-sm">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm">
                  Sitemap
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                Made with ❤️ for better healthcare
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 