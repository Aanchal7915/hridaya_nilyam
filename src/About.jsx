import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <-- Add this line

const About = () => {
  const achievements = [
    { year: "2008", title: "Institution Founded", description: "Started with a vision to provide world-class cardiac care" },
    { year: "2012", title: "First Heart Transplant", description: "Successfully performed our first heart transplant surgery" },
    { year: "2015", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2018", title: "5000+ Patients", description: "Milestone of treating over 5000 patients successfully" },
    { year: "2020", title: "COVID-19 Response", description: "Established dedicated COVID-19 care unit" },
    { year: "2023", title: "State-of-the-art ICU", description: "Inaugurated advanced 20-bed ICU facility" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compassion",
      description: "We treat every patient with empathy and understanding"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Excellence",
      description: "Committed to the highest standards of medical care"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Teamwork",
      description: "Collaborative approach for better patient outcomes"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Innovation",
      description: "Embracing latest medical technologies and techniques"
    }
  ];

  const founders = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Medical Director & Chief Cardiologist",
      qualifications: "MBBS, MD (Cardiology), DM (Cardiology)",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Director & Chief Pulmonologist",
      qualifications: "MBBS, MD (Pulmonology), Fellowship in Critical Care",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Amit Patel",
      position: "Chief Vascular Surgeon",
      qualifications: "MBBS, MS (General Surgery), MCh (Vascular Surgery)",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const navigate = useNavigate(); // <-- Add this line

  // Helper to get route based on founder position
  const getFounderRoute = (position) => {
    if (position.toLowerCase().includes('cardiologist')) return '/cardiologist';
    if (position.toLowerCase().includes('pulmonologist')) return '/pulmonologist';
    if (position.toLowerCase().includes('vascular')) return '/vascular-surgeon';
    return '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #2563eb 0%, #60a5fa 60%, #fff 100%), url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              A premier healthcare institution dedicated to providing exceptional cardiac, 
              pulmonary, and vascular care with compassion and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading healthcare institution in cardiac, pulmonary, and vascular care, 
                recognized for clinical excellence, patient-centered care, and innovative medical 
                solutions that improve the quality of life for our patients and their families.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide world-class medical care with compassion, utilizing cutting-edge 
                technology and evidence-based practices. We are committed to excellence in 
                patient care, medical education, and research while maintaining the highest 
                ethical standards and patient safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our every action and decision in providing healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who established Hridaya Nilayam with a mission to 
              provide exceptional healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 cursor-pointer hover:shadow-2xl transition" // <-- Add cursor-pointer and hover
                onClick={() => navigate(getFounderRoute(founder.position))} // <-- Add this line
              >
                <div className="h-64 bg-gray-200">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{founder.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{founder.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{founder.qualifications}</p>
                  <p className="text-sm text-gray-500">Experience: {founder.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of our achievements and milestones over the years
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100">
              Ready to experience world-class healthcare? Contact us today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">
                Hridaya Nilayam Heart, Lung & Vascular Institute<br />
                [Address Line 1]<br />
                [City, State - PIN]
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">
                Emergency: 98765 43210<br />
                OPD: 98765 43211<br />
                Admin: 98765 43212
              </p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">
                info@hridayanilayam.com<br />
                appointments@hridayanilayam.com<br />
                emergency@hridayanilayam.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;