
const ProjectSection = () => {
  const projects = [
    {
      name: 'Cult of the Reader',
      description: 'Proyecto final de desarrollo web con múltiples tecnologías',
      technologies: ['React', 'Node.js', 'MongoDB', 'MySQL', 'JWT', 'Swagger'],
      link: 'https://github.com/Cult-of-the-Reader'
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Proyectos
        </h2>
        {projects.map(project => (
          <div key={project.name} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="flex flex-wrap space-x-2 mt-4 gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;