import React from 'react';

const Skills = () => {
  const frontend = ['HTML', 'CSS', 'React'];
  const backend = ['Node.js', 'Express.js'];
  const database = ['MongoDB', 'MySQL'];

  return (
    <section className="py-16 px-6 bg-slate-600" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-center mb-4 text-slate-600">Frontend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {frontend.map(skill => (
                <span key={skill} className="bg-purple-100 text-slate-600 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-center mb-4 text-slate-600">Backend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {backend.map(skill => (
                <span key={skill} className="bg-purple-100 text-slate-600 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-center mb-4 text-slate-600">Database</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {database.map(skill => (
                <span key={skill} className="bg-purple-100 text-slate-600 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;