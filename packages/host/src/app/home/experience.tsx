import { Card, Image } from '@bugg-m/bugg-ui';
import images from '@host/constants/images';
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Company A',
      role: 'Frontend Developer',
      duration: 'Jan 2024 - Present',
      description:
        'Developed interactive web interfaces with React and Tailwind CSS, improving performance and user engagement.',
    },
    {
      company: 'Tech Company B',
      role: 'Full-Stack Developer Intern',
      duration: 'Jun 2023 - Dec 2023',
      description:
        'Built end-to-end features for e-commerce platforms using Node.js and MongoDB, collaborating closely with cross-functional teams.',
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-500 text-center mb-8">
          Experience
        </h2>
        {/* <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card variant="elevated" key={index}>
              <h3 className="text-xl font-semibold text-neutral-800">
                {exp.role} at {exp.company}
              </h3>
              <p className="text-sm text-neutral-600">{exp.duration}</p>
              <p className="mt-2 text-base text-neutral-700">
                {exp.description}
              </p>
            </Card>
          ))}
        </div> */}

        <div className="banner">
          <div className="slider">
            <div className="item">
              <Image src={images.profile} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
