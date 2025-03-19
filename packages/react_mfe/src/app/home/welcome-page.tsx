import React from 'react';

const MicroserviceWelcome = ({
  title = 'React Microservice',
  subtitle = 'Modern Frontend Development with React',
  technologies = ['React', 'JavaScript', 'Tailwind CSS'],
  features = [
    {
      icon: '📦',
      title: 'Component Library',
      description: 'Reusable UI components built with React and styled with Tailwind CSS',
    },
    {
      icon: '🔄',
      title: 'State Management',
      description: "Efficient state management patterns using React's Context API and hooks",
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Modern data fetching with React Query and custom hooks',
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description: 'Code splitting, lazy loading, and memoization for optimal performance',
    },
  ],
  benefits = [
    {
      icon: '🛠️',
      title: 'Modularity',
      description: 'Independent components that can be composed to build complex interfaces',
    },
    {
      icon: '🚀',
      title: 'Developer Experience',
      description: 'Fast refresh, TypeScript support, and comprehensive tooling',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring great experiences on all devices',
    },
  ],
  quote = 'Building scalable user interfaces requires both technical excellence and thoughtful design patterns.',
  onContinue = () => {},
}) => {
  return (
    <main className="max-w-4xl mx-auto my-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h1>

      <h2 className="text-xl text-blue-600 mb-6">{subtitle}</h2>

      <p className="text-gray-600 mb-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start">
              <span className="text-2xl mr-4">{feature.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-6 text-gray-800">Key Benefits</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <div className="text-xl mb-2">{benefit.icon}</div>
            <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
            <p className="text-xs text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <p className="bg-blue-50 text-gray-700 mb-4 italic border-l-4 border-blue-300 pl-4 py-4">
        "{quote}"
      </p>

      <p className="text-gray-600 mb-10">
        Explore this microservice to see these concepts in action and discover how they can be
        applied to your own projects. Each component is designed to be easily reusable and adaptable
        to different use cases.
      </p>

      <div className="flex items-center justify-center w-full">
        <button
          onClick={onContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-colors duration-200 flex items-center">
          Explore projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default MicroserviceWelcome;
