import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.Sc Computer Science',
      institution: 'Bhaktavatsalam Memorial College for Women',
      year: '2023 - 2026',
      university: 'University of Madras'
    },
    {
      degree: 'HSC',
      institution: 'Singaram Pillai Girls Hr. Sec. School',
      year: '2022 - 2023'
    },
    {
      degree: 'SSLC',
      institution: 'Singaram Pillai Girls Hr. Sec. School',
      year: '2020 - 2021'
    }
  ];

  return (
    <section className="py-16 px-6 bg-slate-600" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-300">
              <h3 className="text-xl font-bold text-slate-600">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
              {edu.university && <p className="text-gray-500 text-sm">{edu.university}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;