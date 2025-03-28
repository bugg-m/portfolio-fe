import React from 'react';
import { NxCardLg } from '@components/cards/nx-card-lg';

import { responsive, rocket, settingsConfiguration } from '@react_mfe/constants/icons';

const ReactBenefits: React.FC = () => {
  const benefits = [
    {
      icon: settingsConfiguration,
      title: 'Modularity',
      description: 'Independent components that can be composed to build complex interfaces',
    },
    {
      icon: rocket,
      title: 'Developer Experience',
      description: 'Fast refresh, TypeScript support, and comprehensive tooling',
    },
    {
      icon: responsive,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring great experiences on all devices',
    },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-neutral-800">Key Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {benefits.map((benefit, index) => (
          <NxCardLg
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactBenefits;
