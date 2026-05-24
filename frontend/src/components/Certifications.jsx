import React from 'react';

const Certifications = () => {
  return (
    <section className="py-16 px-6 bg-white" id="certifications">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-600">Certifications & Internship</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate-600">MERN Stack Certification</h3>
            <p className="text-gray-600">QUEST Technologies</p>
            <p className="text-gray-500 text-sm mt-2">Trained in MongoDB, Express, React, and Node.js. Built simple full-stack applications using MERN Stack.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate-600">Mobile App Development Internship</h3>
            <p className="text-gray-600">QUEST TECHNOLOGIES INSTITUTE</p>
            <p className="text-gray-500 text-sm">May 26 - July 4 (30 days)</p>
            <p className="text-gray-600 mt-2">Used Flutter and Dart to build and test the app. Worked on "Message App" with chat features and responsive UI.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;