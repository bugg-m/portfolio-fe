import { IMicroServicesCardProps } from '@host/types/core-portfolio-types';
import React from 'react';

const MicroServicesCardItems: React.FC<IMicroServicesCardProps> = ({ services }) => {
  return (
    <main
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
      onClick={() =>
        (window.location.href = `/micro-frontend/${services.title.toLowerCase().replace(' ', '-')}`)
      }>
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-center items-center h-48">
        <img
          src={services.image}
          alt={services.title}
          className="h-24 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{services.title}</h3>
        <p className="text-gray-600 mb-4">{services.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2">
            Key Features
          </h4>
          <ul className="space-y-1">
            {services.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">Tech Stack: {services.techStack}</p>
        </div>

        <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md w-full transition-colors duration-300">
          Explore Solution
        </button>
      </div>
    </main>
  );
};

export default MicroServicesCardItems;
