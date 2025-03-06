import React, { useEffect } from 'react';
import { Carousel } from '@bugg-m/bugg-ui';
import ProjectCardItems from '@host/components/cards/project-card-items';
import { useWindowDimensions } from '@host/hooks/use-window-dimensions';
import { useGetDataHook } from '@host/api/hooks/use-get-data-hook';
import { PortfolioRoutes } from '@host/api/routes/portfolio-api-routes';
import { IGitHubRepos } from '@host/types/core-portfolio-types';

const Projects: React.FC = () => {
  const {
    data: gitHubRepos,
    isLoading,
    getData,
  } = useGetDataHook<IGitHubRepos[]>();
  const { width } = useWindowDimensions();

  useEffect(() => {
    getData({ url: PortfolioRoutes.GITHUB_PROJECTS });
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
        isLoading={isLoading || !gitHubRepos}
      >
        {gitHubRepos &&
          gitHubRepos.map((project, index) => (
            <ProjectCardItems key={index} projects={project} />
          ))}
      </Carousel>
    </section>
  );
};

export default Projects;
