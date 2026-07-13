import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-600 text-white px-6 pt-16">
      <div className="text-center">
        {/* Profile Image - Add your photo here */}
        <div className="flex justify-center mb-6">
          <img 
            src="/profile.jpg"  /* Change this to your image path */
            alt="Brindha K"
            className="w-30 h-30 md:w-40 md:h-40 rounded-full object-cover border-2 border-white shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Brindha K</h1>
        <p className="text-xl md:text-2xl mb-6">Computer Science Student | MERN Stack Developer</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Fresher</p>
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="bg-white text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Me</a>
          <a href="#projects" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-400 transition">View Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
