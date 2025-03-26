import React from 'react';

import ReactBenefits from './react-benefits';
import ReactFeatures from './react-features';
import ReactTechnologies from './react-technologies';

const ReactWelcomePage: React.FC = () => {
  return (
    <div className="bg-secondary-100 responsive-container min-h-screen">
      <section className="section bg-secondary-50 mx-auto border-x border-secondary-200 space-y-5">
        <main className="max-w-4xl mx-auto my-16">
          <header className="text-2xl sm:text-3xl md:text-4xl header text-neutral-800 mb-4">
            Welcome to our React Micro Microservice!
          </header>

          <h2 className="sm:text-lg title text-base md:text-xl text-secondary-700 mb-6">
            Modern Frontend Development with React
          </h2>

          <ReactTechnologies />
          <ReactFeatures />
          <ReactBenefits />

          <p className="paragraph-sm bg-primary-50 text-neutral-700 mb-6 italic border-x-4 border-primary-300 p-4">
            "Building scalable user interfaces requires both technical excellence and thoughtful
            design patterns."
          </p>

          <p className="paragraph-sm animate-paragraph text-neutral-600">
            Explore this microservice to see these concepts in action and discover how they can be
            applied to your own projects. Each component is designed to be easily reusable and
            adaptable to different use cases.
          </p>
        </main>
      </section>
    </div>
  );
};

export default ReactWelcomePage;
