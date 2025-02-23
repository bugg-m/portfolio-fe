import { Image } from '@bugg-m/bugg-ui';
import images from '@host/constants/images';
import React from 'react';
const About: React.FC = () => {
  return (
    <section className="w-full space-y-3 py-10 text-center shadow-md bg-primary-100 border-y border-primary-200 md:rounded-rl-full rounded-rl-default">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-neutral-700 text-center mb-6">
          About Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex-center col-span-1">
            <Image
              src={images.profile}
              alt="Manish Kumar"
              className="w-48 h-auto object-cover"
              shape="lg"
            />
          </div>
          {/* Textual Content */}
          <div className="col-span-2 text-left">
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
              I’m a full-stack developer with a passion for creating dynamic and
              scalable web experiences. With a strong foundation in modern
              frameworks and a custom-built UI component library, I bridge
              front-end finesse with back-end power.
            </p>
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed mt-4">
              My journey in development has been driven by a commitment to
              continuous learning and innovation. Whether working on complex
              applications or refining my design process, I thrive on
              transforming challenges into elegant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
