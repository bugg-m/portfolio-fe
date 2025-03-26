import React from 'react';

const ReactTechnologies: React.FC = () => {
  const technologies = ['React', 'JavaScript', 'Tailwind CSS'];
  return (
    <p className="text-gray-600 mb-8 paragraph-sm animate-paragraph ">
      This microservice showcases various features built with{' '}
      {technologies.map((tech, index) => (
        <React.Fragment key={tech}>
          {index > 0 && index === technologies.length - 1 ? ' and ' : ''}
          {index > 0 && index < technologies.length - 1 ? ', ' : ''}
          <span className="font-semibold text-gray-700">{tech}</span>
        </React.Fragment>
      ))}
      . It demonstrates modern development patterns and best practices for building scalable
      frontend applications.
    </p>
  );
};

export default ReactTechnologies;
