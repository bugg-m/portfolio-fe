import { Image } from '@bugg-m/bugg-ui';
import { profile } from '@host/constants/images';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section animate-appear-br bg-primary-100 border-x border-b border-primary-500 rounded-rl-4xl sm:rounded-rl-5xl md:rounded-rl-7xl lg:rounded-rl-full">
      <div className="max-w-4xl mx-auto responsive-container">
        <h3 className="header">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          <div className="flex-center col-span-1">
            <Image
              src={profile}
              alt="Manish Kumar"
              className="profile-responsive hover-scale-110 hover:bg-secondary-50 animate-appear-bl"
              rounded="md"
            />
          </div>
          <div className="md:col-span-2 text-left space-y-4">
            <p className="paragraph-sm animate-paragraph">
              I'm a Full-Stack Developer specialized in creating responsive,
              user-centric web applications. With experience at Fibonacci
              Innovations, I've developed dynamic interfaces using React,
              Vue.js, and Next.js while implementing backend solutions with
              Node.js and Express.
            </p>
            <p className="paragraph-sm animate-paragraph">
              My expertise includes building scalable design systems with
              dark-light theme support, integrating secure authentication
              mechanisms, and developing reusable UI components for
              microservice-based architectures. I've engineered front-end
              solutions from scratch, ensuring seamless API integration and
              responsive layouts across platforms.
            </p>
            <p className="paragraph-sm animate-paragraph md:pr-6 lg:pr-10">
              Beyond technical skills, I'm passionate about solving complex
              problems through clean, efficient code. With 150+ coding
              challenges solved across platforms like LeetCode and CodeForces, I
              continuously sharpen my algorithmic thinking. My approach combines
              strong technical foundations with a focus on creating intuitive
              experiences that balance functionality, performance, and visual
              appeal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
