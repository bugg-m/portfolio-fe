import { Image } from '@bugg-m/bugg-ui';
import images from '@host/constants/images';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section bg-primary-100 border-x border-b border-primary-500 md:rounded-rl-full rounded-rl-default">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="header">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex-center col-span-1">
            <Image
              src={images.profile}
              alt="Manish Kumar"
              className="w-48 h-auto object-cover hover-scale-110 hover:bg-black/10 "
              shape="lg"
            />
          </div>
          <div className="col-span-2 text-left space-y-4">
            <p className="paragraph">
              I’m a full-stack developer with a passion for creating dynamic and
              scalable web experiences. With a strong foundation in modern
              frameworks and a custom-built UI component library, I bridge
              front-end finesse with back-end power.
            </p>
            <p className="paragraph">
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
