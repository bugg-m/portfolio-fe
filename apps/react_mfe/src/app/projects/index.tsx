import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Image } from '@bugg-m/bugg-ui';
import { ReactRoutesEnum } from '@enums/app-routes-enum';

import { developer3 } from '@react_mfe/constants/illustrations';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary-50 min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 flex-center p-4 sm:p-6">
        <Image
          src={developer3}
          alt="Developer working on code"
          className="hover-scale-90 image-responsive object-contain"
        />
      </div>
      <div className="flex-center flex-col col-span-1 p-4 space-y-4 max-w-4xl mx-auto my-16">
        <header className="text-2xl sm:text-3xl md:text-4xl header text-neutral-800 mb-4">
          Hello!{' '}
          <span
            role="img"
            aria-label="emoji"
          >
            👋🏻
          </span>
        </header>
        <p className="sm:text-lg title text-base md:text-xl text-secondary-700 mb-6">
          This section features a collection of React projects I created during my coding journey.
        </p>
        <p className="paragraph-sm animate-paragraph text-neutral-600">
          Dive in to explore these projects and see how each one reflects a unique approach to
          building scalable and interactive user interfaces. I hope these projects inspire you and
          offer practical insights for your own development journey.
        </p>
        <Button
          onClick={() => navigate(ReactRoutesEnum.USER_AUTHENTICATION)}
          title="This feature is Under Development"
          className="md:w-2/5 w-full hover-scale-110"
          rounded="full"
        >
          Explore react projects
        </Button>
      </div>
    </div>
  );
};

export default Projects;
