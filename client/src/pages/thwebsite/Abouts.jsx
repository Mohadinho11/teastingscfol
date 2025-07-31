import React from 'react';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaAward, 
  FaLightbulb,
  FaUniversity,
  FaGlobeAmericas
} from 'react-icons/fa';
import { 
  FiArrowRight, 
  FiChevronDown,
  FiPlay
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Abouts = () => {
  // Unsplash image URLs
  const team1 = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  const team2 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  const team3 = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  const campus = "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";
  const students = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  const stats = [
    { value: '10,000+', label: 'Students Enrolled', icon: <FaGraduationCap className="text-2xl" /> },
    { value: '95%', label: 'Graduation Rate', icon: <FaChartLine className="text-2xl" /> },
    { value: '150+', label: 'Expert Faculty', icon: <FaUsers className="text-2xl" /> },
    { value: '25', label: 'Years of Excellence', icon: <FaAward className="text-2xl" /> }
  ];

  const teamMembers = [
    { 
      name: 'Dr. Sarah Johnson', 
      role: 'Founder & Chancellor', 
      bio: 'Education visionary with 30+ years experience in academic leadership',
      image: team1,
      social: ['twitter', 'linkedin']
    },
    { 
      name: 'Prof. Michael Chen', 
      role: 'Vice Chancellor', 
      bio: 'Innovator in digital education and learning technologies',
      image: team2,
      social: ['linkedin', 'github']
    },
    { 
      name: 'Dr. Emily Wilson', 
      role: 'Dean of Students', 
      bio: 'Passionate advocate for student success and wellbeing',
      image: team3,
      social: ['twitter', 'instagram']
    }
  ];

  const milestones = [
    { year: '1998', event: 'University founded with 3 programs', icon: <FaUniversity /> },
    { year: '2005', event: 'First international accreditation received', icon: <FaGlobeAmericas /> },
    { year: '2012', event: 'Opened new 50-acre campus', icon: <FaUniversity /> },
    { year: '2020', event: 'Launched fully online degree programs', icon: <FaGlobeAmericas /> }
  ];

  return (
    <div className="bg-gray-50">
      {/* Modern Hero Section */}
      {/* Simplified Hero Section */}
      <section className="relative bg-gray-100 text-gray-900 overflow-hidden">
        {/* Background with subtle texture */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-2xl">
            {/* Minimal badge */}
            <span className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm border border-gray-200">
              Since 1998
            </span>
            
            {/* Clean typography */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Transforming Lives</span> <br />
              <span className="text-gray-700">Through Education</span>
            </h1>
            
            {/* Simple description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our institution has been shaping futures with innovative learning approaches and a commitment to student success.
            </p>
            
            {/* Minimal buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/programs" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
              >
                Explore Programs <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section - Floating Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story - Split Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative">
            <img 
              src={campus} 
              alt="University campus" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600">25+</div>
              <div className="text-gray-700">Years of Excellence</div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story & Heritage</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1998 with just three programs and a handful of students, we've grown into a nationally recognized institution with a reputation for academic rigor and student success. Our journey has been guided by a singular vision: to make world-class education accessible.
            </p>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    {milestone.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{milestone.year}</h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Card Grid */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of academic excellence and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.map((platform, i) => (
                      <button 
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                      >
                        <span className="sr-only">{platform}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values - Icon Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at our institution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We embrace new ideas and technologies to enhance learning and solve real-world challenges.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              We foster an inclusive environment where every voice is valued and diversity is celebrated.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
              <FaAward />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              We pursue the highest standards in teaching, research, and student support.
            </p>
          </div>
        </div>
      </section>

      {/* Video CTA Section */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Campus Virtually</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take a 360° tour of our state-of-the-art facilities and see what makes our campus special.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white transition-colors group">
              <FiPlay className="mr-3 text-xl" />
              Start Virtual Tour
              <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-blue-100 max-w-xl">
                Our admissions team is standing by to help you take the first step toward your future.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/apply" 
                className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Apply Now
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;