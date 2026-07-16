import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Golden Nest Care',
      description: 'MERN-based old age home management system with marketplace, donations, and emergency SOS system. Role-based dashboards for residents, staff, and public users.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/brindha257/Golden-Nest-Care-Old-Age-Home-Project-'
    },
    {
      title: 'Student Management Portal',
      description: 'CRUD operations for managing student records using Node.js, Express.js, HTML, CSS, and JavaScript.',
      tech: ['Node.js', 'Express', 'HTML', 'CSS', 'JS'],
      link: 'https://github.com/brindha257/Student-Management-without-MongoDB'
    },
    {
      title: 'ShopZone – E-Commerce Website',
      description: 'Modern, responsive e-commerce site with product search, category filters, and a dynamic shopping cart with real-time updates.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/brindha257/ShopZone-Modern-E-Commerce-Website'
    },
    {
      title: 'Petal Paradise – Flower Shop',
      description: 'Flower shop website with category browsing, live search, and a shopping cart using localStorage for persistence.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/brindha257/flower-Shop-website'
    },
    {
      title: 'Chess Board Project',
      description: 'An 8x8 chessboard built with pure HTML and CSS, using Unicode symbols to represent chess pieces.',
      tech: ['HTML', 'CSS'],
      link: 'https://github.com/brindha257/Chess-Board-Project-'
    },
    {
      title: 'Message App',
      description: 'Chat application with responsive UI built using Flutter and Dart during internship.',
      tech: ['Flutter', 'Dart'],
      link: ''
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
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs bg-purple-200 text-slate-900 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-purple-700 hover:text-purple-900 hover:underline"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Projects;
