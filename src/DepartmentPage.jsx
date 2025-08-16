import React from "react";
import { useParams, Link } from "react-router-dom";
import departmentData from "./departmentData";
import { Calendar, Phone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const DepartmentPage = () => {
  const { dept } = useParams();
  const data = departmentData[dept];

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
        <h2 className="text-3xl font-bold text-red-700 mb-4">Department Not Found</h2>
        <p className="text-gray-600 mb-6">The department you are looking for does not exist or has been moved.</p>
        <Link to="/departments" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Departments
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section with animated background image */}
      <section
        className="relative bg-blue-900 text-white py-24 shadow-md flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-900/60"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Department Title */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {data.title} Department
          </motion.h1>
          {/* Department Description */}
          <motion.p
            className="text-base md:text-xl max-w-2xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {data.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Section Headings */}
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-blue-900 mb-4"
            variants={fadeIn}
          >
            About the {data.title} Department
          </motion.h2>
          <motion.p className="text-gray-700 mb-6" variants={fadeIn}>
            {data.title} at our hospital is dedicated to providing exceptional, patient-centered care using the latest medical advancements and a multidisciplinary approach. Our team of experienced doctors, nurses, and support staff work together to ensure the best possible outcomes for every patient.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div variants={fadeIn}>
              <h3 className="text-base md:text-xl font-semibold text-blue-800 mb-2">Key Services</h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-1">
                {data.services.map((service, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.05, color: "#1e40af" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-sm md:text-base text-gray-700"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-base md:text-xl font-semibold text-blue-800 mb-2">Our Specialists</h3>
              <ul className="list-none pl-0 text-gray-800 space-y-1">
                {data.specialists.map((specialist, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center"
                    whileHover={{ scale: 1.05, color: "#1e40af" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {specialist}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div className="bg-blue-50 rounded-lg p-6 mb-6" variants={fadeIn}>
            <h4 className="text-base md:text-lg font-semibold text-blue-900 mb-2">Why Choose Us?</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li className="text-sm md:text-base text-gray-700">State-of-the-art facilities and equipment</li>
              <li className="text-sm md:text-base text-gray-700">Personalized treatment plans</li>
              <li className="text-sm md:text-base text-gray-700">24/7 emergency and critical care support</li>
              <li className="text-sm md:text-base text-gray-700">Compassionate, multilingual staff</li>
              <li className="text-sm md:text-base text-gray-700">Focus on patient education and preventive care</li>
            </ul>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row gap-4 justify-center mt-8" variants={fadeIn}>
            <Link
              to="/book-appointment"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href={`tel:${data.emergency}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <Phone className="w-5 h-5" />
              Emergency: {data.emergency}
            </a>
          </motion.div>
        </motion.div>
        <div className="text-center mt-10">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-blue-700 hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Departments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;