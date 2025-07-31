import React from 'react';
import { 
  FiBook, FiUsers, FiCalendar, FiAward, 
  FiCode, FiChevronRight, FiDownload, FiBookOpen,
  FiBriefcase, FiHelpCircle, FiExternalLink 
} from 'react-icons/fi';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Program = () => {
  const programData = {
    title: "Computer Science",
    degree: "Bachelor of Science",
    code: "CS-BSC",
    duration: "4 Years",
    credits: "120 ECTS",
    description: "Our cutting-edge program blends theoretical foundations with practical skills to prepare students for the digital age. Gain hands-on experience with industry-standard tools and real-world projects.",
    overview: "The Computer Science program provides comprehensive training in software development, algorithms, and system design. Students will master programming languages, data structures, and modern computing paradigms while working on collaborative projects that solve real-world problems.",
    highlights: [
      {
        title: "Industry-Aligned Curriculum",
        description: "Updated annually with tech leaders to ensure relevance",
        icon: <FiCode className="text-indigo-600" />
      },
      {
        title: "Silicon Valley Partnerships",
        description: "Exclusive internship opportunities with top tech firms",
        icon: <FiBriefcase className="text-indigo-600" />
      },
      {
        title: "Capstone Projects",
        description: "Solve real problems for actual clients in final year",
        icon: <FaChalkboardTeacher className="text-indigo-600" />
      },
      {
        title: "AI Specialization",
        description: "Deep focus on machine learning and neural networks",
        icon: <FiAward className="text-indigo-600" />
      }
    ],
    courses: [
      { 
        name: "Advanced Algorithms", 
        code: "CS401", 
        credits: 6,
        description: "Analysis of complex algorithms and their optimization"
      },
      { 
        name: "Cloud Architecture", 
        code: "CS402", 
        credits: 4,
        description: "Designing scalable cloud-based systems"
      },
      { 
        name: "Neural Networks", 
        code: "CS403", 
        credits: 6,
        description: "Deep learning architectures and applications"
      },
      { 
        name: "Secure Systems", 
        code: "CS404", 
        credits: 4,
        description: "Cybersecurity principles and ethical hacking"
      },
      { 
        name: "Data Visualization", 
        code: "CS405", 
        credits: 4,
        description: "Transforming data into actionable insights"
      },
      { 
        name: "Quantum Computing", 
        code: "CS406", 
        credits: 6,
        description: "Fundamentals of quantum information processing"
      }
    ],
    faculty: [
      { 
        name: "Dr. Elena Rodriguez", 
        title: "Professor of Artificial Intelligence", 
        bio: "Leading researcher in neural networks with 15+ years experience",
        image: "/faculty/elena.jpg" 
      },
      { 
        name: "Prof. James Chen", 
        title: "Head of Cybersecurity", 
        bio: "Former security architect at Fortune 500 companies",
        image: "/faculty/james.jpg" 
      },
      { 
        name: "Dr. Priya Patel", 
        title: "Data Science Lead", 
        bio: "Specialist in big data analytics and machine learning",
        image: "/faculty/priya.jpg" 
      }
    ],
    stats: [
      { value: "94%", label: "Graduate employment within 6 months" },
      { value: "8:1", label: "Student to faculty ratio" },
      { value: "$92k", label: "Average starting salary" },
      { value: "100+", label: "Industry partners" }
    ],
    deadlines: [
      { term: "Fall 2023", date: "April 15, 2023", status: "Closed" },
      { term: "Spring 2024", date: "November 1, 2023", status: "Open" },
      { term: "Fall 2024", date: "April 15, 2024", status: "Upcoming" }
    ]
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-6"
              >
                {programData.code}
              </motion.span>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              >
                {programData.title}
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-8"
              >
                {programData.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <FaGraduationCap className="mr-2 text-indigo-300" />
                  <span>{programData.degree}</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <FiCalendar className="mr-2 text-indigo-300" />
                  <span>{programData.duration}</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <FiAward className="mr-2 text-indigo-300" />
                  <span>{programData.credits}</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/apply" 
                  className="bg-white text-indigo-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                >
                  Apply Now <FiExternalLink className="ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-white/10"
                >
                  Contact Advisor
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 w-full max-w-md"
            >
              <h3 className="text-xl font-semibold mb-4">Application Deadlines</h3>
              <ul className="space-y-4">
                {programData.deadlines.map((deadline, index) => (
                  <li key={index} className="flex justify-between items-center pb-2 border-b border-white/10">
                    <div>
                      <p className="font-medium">{deadline.term}</p>
                      <p className="text-sm text-white/80">{deadline.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      deadline.status === 'Open' ? 'bg-green-500/20 text-green-300' :
                      deadline.status === 'Closed' ? 'bg-red-500/20 text-red-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {deadline.status}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Program Highlights */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose This Program?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{programData.overview}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course List */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-2xl font-semibold flex items-center">
                  <FiBook className="mr-3 text-indigo-600" /> 
                  Curriculum Overview
                </h2>
                <p className="text-gray-600 mt-2">Explore our comprehensive course offerings</p>
              </div>
              <div className="divide-y divide-gray-100">
                {programData.courses.map((course, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors group">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg group-hover:text-indigo-600 transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {course.code} • {course.credits} credits
                        </p>
                        <p className="text-gray-600 mt-2">{course.description}</p>
                      </div>
                      <button className="text-gray-400 group-hover:text-indigo-600 transition-colors">
                        <FiChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {programData.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Faculty */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-2xl font-semibold flex items-center">
                  <FiUsers className="mr-3 text-indigo-600" /> 
                  Distinguished Faculty
                </h2>
                <p className="text-gray-600 mt-2">Learn from industry experts and researchers</p>
              </div>
              <div className="divide-y divide-gray-100">
                {programData.faculty.map((person, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden flex-shrink-0">
                        <img 
                          src={person.image} 
                          alt={person.name} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://ui-avatars.com/api/?name=" + person.name.replace(/\s+/g, '+');
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{person.name}</h3>
                        <p className="text-indigo-600 text-sm">{person.title}</p>
                        <p className="text-gray-600 text-sm mt-2">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              variants={fadeIn}
              className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-4 text-indigo-800">Program Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/syllabus" 
                    className="flex items-center text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-colors"
                  >
                    <FiDownload className="mr-3" /> 
                    <div>
                      <p className="font-medium">Download Syllabus</p>
                      <p className="text-sm text-indigo-600">PDF, 1.2MB</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/handbook" 
                    className="flex items-center text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-colors"
                  >
                    <FiBookOpen className="mr-3" />
                    <div>
                      <p className="font-medium">Student Handbook</p>
                      <p className="text-sm text-indigo-600">Program policies</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/internships" 
                    className="flex items-center text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-colors"
                  >
                    <FiBriefcase className="mr-3" />
                    <div>
                      <p className="font-medium">Internship Opportunities</p>
                      <p className="text-sm text-indigo-600">100+ partners</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="flex items-center text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-colors"
                  >
                    <FiHelpCircle className="mr-3" />
                    <div>
                      <p className="font-medium">Program FAQ</p>
                      <p className="text-sm text-indigo-600">Common questions</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Program;