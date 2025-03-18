import React from 'react';
import { MonorepoBenefitsCardProps as NxCardItemsProps } from './monorepo-benefits-cards';
import { Icon } from '@bugg-m/bugg-ui';

const NxCardItems: React.FC<NxCardItemsProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="flex-center gap-3 mb-3">
        <Icon
          src={icon}
          size="lg"
        />
        <h3 className="title text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-secondary-600 paragraph-sm">{description}</p>
    </div>
  );
};

export { NxCardItems };
