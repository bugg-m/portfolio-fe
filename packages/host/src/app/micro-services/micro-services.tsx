import MicroServicesCardItems from '@host/app/micro-services/micro-services-card-items';
import { microservicesData } from '@host/constants/core-contants';
import React from 'react';
import { MicroServicesIntro } from './micro-services-intro';

const MicroServices: React.FC = () => {
  return (
    <div className="bg-secondary-100 responsive-container min-h-screen">
      <section className="section mx-auto border-x border-secondary-200">
        <MicroServicesIntro />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {microservicesData.map(microservice => (
            <MicroServicesCardItems
              services={microservice}
              key={microservice.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MicroServices;
