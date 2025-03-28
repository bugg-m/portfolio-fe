import React from 'react';
import { Card, Icon } from '@bugg-m/bugg-ui';

import { NxCardProps } from './nx-card-lg';

const NxCardXl: React.FC<NxCardProps> = ({ icon, title, description }) => {
  return (
    <Card hoverAble>
      <div className="flex-center gap-3 mb-3">
        <Icon
          src={icon}
          size="md"
        />
        <h3 className="title text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-secondary-600 paragraph-sm">{description}</p>
    </Card>
  );
};

export { NxCardXl };
