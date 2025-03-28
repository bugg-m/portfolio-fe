import React, { useEffect } from 'react';
import { Carousel } from '@bugg-m/bugg-ui';

import ProjectCardItems from '@host/app/home/project-card-items';
import { useWindowDimensions } from '@host/hooks/use-window-dimensions';
import { IGitHubRepos } from '@host/types/core-portfolio-types';

import { useGetDataHook } from '@api/hooks/use-get-data-hook';
import { PortfolioApiRoutes } from '@api/routes/portfolio-api-routes';

const Projects: React.FC = () => {
  const { data: gitHubRepos, isLoading, getData } = useGetDataHook<IGitHubRepos[]>();
  const { width } = useWindowDimensions();

  useEffect(() => {
    getData({ url: PortfolioApiRoutes.GITHUB_PROJECTS });
  }, [getData]);

  return (
    <section className="section px-2 bg-secondary-50 border-x border-secondary-300">
      <Carousel
        title="Projects"
        headerStyles="header"
        translateZ={width > 820 ? '25rem' : '15rem'}
        carouselSliderStyles="md:mt-32 mt-10"
        carouselContainerStyles="md:h-[80vh] h-[45vh]"
        animationDuration={50}
        isLoading={isLoading || !gitHubRepos}>
        {gitHubRepos &&
          gitHubRepos.map((project, index) => (
            <ProjectCardItems
              key={index}
              projects={project}
            />
          ))}
      </Carousel>
      <div className="text-center md:px-10 px-2">
        <p className="paragraph-sm text-neutral-500 animate-paragraph">
          My portfolio showcases a diverse range of full-stack development work, from modular React
          applications using Nx workspace and micro-frontend architecture to custom UI component
          libraries documented with Storybook. These projects demonstrate my expertise in modern
          JavaScript frameworks, responsive design implementation with Tailwind CSS, and backend
          development using Node.js with Express and MongoDB. Each project reflects my commitment to
          creating maintainable, scalable, and user-centric applications while implementing best
          practices in state management, authentication, and API integration.
        </p>
      </div>
    </section>
  );
};

export default Projects;
