import React from 'react';
import { Image } from '@bugg-m/bugg-ui';

import { experience } from '@host/constants/illustrations';
import { myExperiencesData } from '@host/constants/core-contants';

const Experience: React.FC = () => {
  return (
    <section className="section rounded-tr-4xl sm:rounded-tr-5xl md:rounded-tr-7xl lg:rounded-tr-full border-x border-secondary-300 bg-secondary-50">
      <main className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="header">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12 items-center justify-center">
          <div className="flex-center col-span-1">
            <Image
              src={experience}
              alt="experience"
              className="hover-scale-110 hover:bg-secondary-100 md:w-full w-3/5 h-auto"
              rounded="md"
              size="full"
            />
          </div>
          <div className="h-auto md:p-5 rounded-md md:col-span-2 text-left space-y-4 w-full md:border-l-2 border-secondary-300">
            <title className="flex-col flex-center-start">
              <div className="title flex-col flex-center-start mb-2">
                <span className="md:text-3xl text-2xl">{myExperiencesData.role}</span>
                <span className="text-sm md:text-lg text-neutral-500">
                  at {myExperiencesData.company}
                </span>
              </div>

              <p className="text-xs text-neutral-400">{myExperiencesData.duration}</p>
            </title>

            <p className="mt-2 paragraph-sm animate-paragraph text-neutral-600">
              {myExperiencesData.description}
            </p>
            <div>
              <h2 className="title inline-block mb-2">Skills</h2>
              <ul className="flex-start-center flex-wrap md:gap-x-8 md:gap-y-3 gap-y-1 gap-x-5 list-disc">
                {myExperiencesData.skills.map(title => (
                  <li
                    key={title}
                    className="text-xs sm:text-sm text-neutral-400 hover-scale-110 hover:text-neutral-600">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Experience;
