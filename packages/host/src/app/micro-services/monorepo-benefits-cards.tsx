import { Icon } from '@bugg-m/bugg-ui';
import React from 'react';

export interface MonorepoBenefitsCardProps {
  icon: string;
  title: string;
  description: string;
}

const MonorepoBenefitsCard: React.FC<MonorepoBenefitsCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex-center flex-col p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-100 hover:shadow-md transition duration-300">
      <Icon
        src={icon}
        className="mb-2"
        size="lg"
      />
      <span className="font-semibold text-secondary-800 mb-1">{title}</span>
      <p className="text-sm text-secondary-600">{description}</p>
    </div>
  );
};

MonorepoBenefitsCard.propTypes = {};

export default MonorepoBenefitsCard;
