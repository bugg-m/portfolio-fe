import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from '@bugg-m/bugg-ui';

import { IMicroServicesCardProps } from '@host/types/core-portfolio-types';

const MicroServicesCardItems: React.FC<IMicroServicesCardProps> = ({ services }) => {
  const navigate = useNavigate();
  return (
    <Card
      variant="outlined"
      className="group"
      hoverAble
      clickable
      onClick={() => navigate(services.link)}>
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-center items-center md:h-48 h-32">
        <Image
          src={services.image}
          alt={services.title}
          className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xl"
          size="xl"
        />
      </div>
      <div className="px-2 py-3">
        <span className="title group-hover:text-primary-500 mb-2">{services.title}</span>
        <p className="paragraph-xs mb-4">{services.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-neutral-500 group-hover:text-primary-500 uppercase tracking-wider mb-2">
            Key Features
          </h4>
          <ul className="space-y-1">
            {services.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-xs text-neutral-600">
                <span className="text-neutral-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-secondary-100">
          <p className="text-xs text-neutral-500">Tech Stack: {services.techStack}</p>
        </div>

        <Button
          size="md"
          className="mt-4 w-full group-hover:bg-primary-700 hover-scale-90"
          colorScheme="secondary">
          Explore Solution
        </Button>
      </div>
    </Card>
  );
};

export default MicroServicesCardItems;
