import React from 'react';
import { Card, Icon } from '@bugg-m/bugg-ui';

export interface NxCardProps {
  icon: string;
  title: string;
  description: string;
}

const NxCardLg: React.FC<NxCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      hoverAble
      variant="flat"
      className="flex-center flex-col p-4 nx-card-lg rounded-lg border border-primary-100 hover:shadow-md transition duration-300"
    >
      <Icon
        src={icon}
        className="mb-2"
        size="lg"
      />
      <span className="font-semibold text-secondary-800 mb-1">{title}</span>
      <p className="text-sm text-secondary-600">{description}</p>
    </Card>
  );
};

export { NxCardLg };
