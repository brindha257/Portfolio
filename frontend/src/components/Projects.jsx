import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Golden Nest Care',
      description: 'MERN-based old age home management system with marketplace, donations, and emergency SOS system. Role-based dashboards for residents, staff, and public users.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'Student Management Portal',
      description: 'CRUD operations for managing student records using Node.js, Express.js, HTML, CSS, and JavaScript.',
      tech: ['Node.js', 'Express', 'HTML', 'CSS', 'JS']
    },
    {
      title: 'Message App',
      description: 'Chat application with responsive UI built using Flutter and Dart during internship.',
      tech: ['Flutter', 'Dart']
    }
  ];

  return (
    <section className="py-16 px-6 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-600">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-slate-600">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs bg-purple-200 text-slate-900 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;