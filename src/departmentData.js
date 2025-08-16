const departmentData = {
  cardiology: {
    title: "Cardiology",
    description: "Comprehensive cardiac care with state-of-the-art technology for heart diseases, heart attacks, and cardiovascular conditions.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", // Doctor holding heart model
    services: [
      "ECG & Echo",
      "Angiography",
      "Angioplasty",
      "Cardiac Surgery",
      "Heart Failure Management",
      "Preventive Cardiology"
    ],
    specialists: [
      "Dr. Rajesh Kumar – Interventional Cardiologist",
      "Dr. Sunita Verma – Cardiac Electrophysiologist",
      "Dr. Amit Singh – Cardiothoracic Surgeon"
    ],
    emergency: "98765 43210"
  },
  pulmonology: {
    title: "Pulmonology",
    description: "Expert care for respiratory and lung diseases, including asthma, COPD, and sleep disorders.",
    image: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&w=1200&q=80",
    services: [
      "Pulmonary Function Test",
      "Bronchoscopy",
      "Sleep Study",
      "Asthma & Allergy Clinic"
    ],
    specialists: [
      "Dr. Neha Sharma – Pulmonologist",
      "Dr. Anil Gupta – Respiratory Therapist"
    ],
    emergency: "98765 43210"
  },
  "vascular-surgery": {
    title: "Vascular Surgery",
    description: "Advanced surgical care for diseases of the vascular system, including arteries, veins, and lymphatic circulation.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80", // Surgery scene
    services: [
      "Peripheral Bypass Surgery",
      "Varicose Vein Treatment",
      "Aneurysm Repair",
      "Vascular Access Surgery"
    ],
    specialists: [
      "Dr. Priya Mehta – Vascular Surgeon",
      "Dr. Suresh Rathi – Endovascular Specialist"
    ],
    emergency: "98765 43210"
  },
  icu: {
    title: "ICU",
    description: "24x7 intensive care for critically ill patients with advanced monitoring and life support systems.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80", // ICU/monitoring
    services: [
      "Critical Care Monitoring",
      "Ventilator Support",
      "Sepsis Management",
      "Post-operative Care"
    ],
    specialists: [
      "Dr. Ankit Joshi – Intensivist",
      "Dr. Meera Kapoor – Critical Care Specialist"
    ],
    emergency: "98765 43210"
  },
  emergency: {
    title: "Emergency Services",
    description: "Round-the-clock emergency care for trauma, cardiac, and medical emergencies.",
    image: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&w=1200&q=80",
    services: [
      "Trauma Care",
      "Cardiac Emergency",
      "Poisoning & Burns",
      "Ambulance Services"
    ],
    specialists: [
      "Dr. Rohan Singh – Emergency Physician",
      "Dr. Kavita Rao – Trauma Specialist"
    ],
    emergency: "98765 43210"
  },
  radiology: {
    title: "Radiology",
    description: "Comprehensive diagnostic imaging services using the latest technology.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
    services: [
      "X-Ray",
      "Ultrasound",
      "CT Scan",
      "MRI",
      "Mammography"
    ],
    specialists: [
      "Dr. Pankaj Jain – Radiologist",
      "Dr. Shalini Desai – Imaging Specialist"
    ],
    emergency: "98765 43210"
  },
  pathology: {
    title: "Pathology",
    description: "Accurate laboratory diagnostics for all your health needs.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80", // Lab technician with microscope
    services: [
      "Blood Tests",
      "Biopsy",
      "Cytology",
      "Microbiology",
      "Histopathology"
    ],
    specialists: [
      "Dr. Alok Verma – Pathologist",
      "Dr. Ritu Sharma – Lab Director"
    ],
    emergency: "98765 43210"
  },
  physiotherapy: {
    title: "Physiotherapy",
    description: "Personalized rehabilitation and pain management for faster recovery.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80", // Physiotherapist with patient
    services: [
      "Musculoskeletal Rehabilitation",
      "Neuro Rehabilitation",
      "Sports Injury Management",
      "Electrotherapy"
    ],
    specialists: [
      "Dr. Sneha Patel – Physiotherapist",
      "Dr. Manish Gupta – Rehab Specialist"
    ],
    emergency: "98765 43210"
  }
};

export default departmentData;