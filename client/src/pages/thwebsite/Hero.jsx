import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-32 bg-gradient-to-br from-blue-500 to-indigo-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white mix-blend-overlay -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white mix-blend-overlay translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ${Math.random() * 5}s ease-in-out alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Shaping Future Leaders Through <span className="text-yellow-300">Excellence</span> in Education
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-lg">
            Our innovative learning approach prepares students for success in a
            rapidly changing world with cutting-edge programs and world-class faculty.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="relative overflow-hidden group bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="relative z-10">Explore Programs</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
            <button className="relative overflow-hidden group border-2 border-white text-white px-8 py-3.5 rounded-lg text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-md">
              <span className="relative z-10">Virtual Tour</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+20}.jpg`}
                  alt="Student"
                />
              ))}
            </div>
            <div className="text-blue-100">
              <p className="font-medium">Trusted by 10,000+ students</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2">5.0 (2,500 reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md">
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 bg-opacity-50 backdrop-blur-sm w-full h-96 flex items-center justify-center">
                <svg className="w-20 h-20 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-white bg-opacity-80 group-hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-10">
              <div className="text-4xl font-bold text-indigo-600">98%</div>
              <div className="text-gray-600 font-medium">Graduation Rate</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-yellow-400 p-5 rounded-xl shadow-xl z-10">
              <div className="text-3xl font-bold text-indigo-900">#1</div>
              <div className="text-indigo-900 font-medium">In Region</div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-10 right-10 w-24 h-24 rounded-full bg-yellow-300 bg-opacity-20 blur-xl"></div>
            <div className="absolute top-1/4 -left-10 w-20 h-20 rounded-full bg-white bg-opacity-10 blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Animation keyframes (add to your global CSS) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;