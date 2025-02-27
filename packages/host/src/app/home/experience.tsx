import React from 'react';
import { Image } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';

const Experience: React.FC = () => {
  const experience = {
    company: 'Fibonacci Innovations',
    role: 'Full-Stack Developer',
    duration: 'July 2023 - Dec 2024',
    description:
      'Developed interactive web interfaces with React and Tailwind CSS, enhancing performance and user engagement over my 1.5 years of experience.',
  };

  return (
    <section className="section md:rounded-tr-full rounded-tr-default border-x border-secondary-300 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="header">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-12 items-center justify-center">
          <div className="flex-center col-span-1">
            <Image
              src={illustrations.experience}
              alt="experience"
              className="hover-scale-110 hover:bg-secondary-100"
              rounded="md"
              size="full"
            />
          </div>
          <div className="h-3/4 p-5 rounded-md col-span-2 text-left space-y-2 w-3/4 border-l-2 border-secondary-300">
            <div className="title flex-col flex-items-start">
              <span className="text-3xl">{experience.role}</span>
              <span className="text-lg">at {experience.company}</span>
            </div>

            <p className="text-sm text-neutral-600">{experience.duration}</p>
            <p className="mt-2 s-paragraph">{experience.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
