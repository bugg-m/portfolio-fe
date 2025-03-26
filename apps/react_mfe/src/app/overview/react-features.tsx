import React from 'react';
import { NxCardXl } from '@components/cards/nx-card-xl';

import { api, performance, sharing, state } from '@react_mfe/constants/icons';

const ReactFeatures: React.FC = () => {
  const features = [
    {
      icon: sharing,
      title: 'Component Library',
      description: 'Reusable UI components built with React and styled with Tailwind CSS',
    },
    {
      icon: state,
      title: 'State Management',
      description: "Efficient state management patterns using React's Context API and hooks",
    },
    {
      icon: api,
      title: 'API Integration',
      description: 'Modern data fetching with React Query and custom hooks',
    },
    {
      icon: performance,
      title: 'Performance Optimized',
      description: 'Code splitting, lazy loading, and memoization for optimal performance',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {features.map((feature, index) => (
        <NxCardXl
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default ReactFeatures;
