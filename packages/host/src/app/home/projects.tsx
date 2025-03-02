import React from 'react';
import { Carousel } from '@bugg-m/bugg-ui';
import useGitHubRepos from '@host/hooks/useGitHubRepos';
import ProjectCardItems from '@host/components/cards/project-card-items';
import { useWindowDimensions } from '@host/hooks/useWindowDimensions';

const Projects: React.FC = () => {
  const { gitHubRepos, loading } = useGitHubRepos();
  const { width } = useWindowDimensions();

  return (
    <section className="section px-2 bg-secondary-50 border-x border-secondary-300">
      <Carousel
        title="Projects"
        headerStyles="header"
        translateZ={width > 820 ? '25rem' : '15rem'}
        carouselSliderStyles="md:mt-32 mt-10"
        carouselContainerStyles="md:h-[80vh] h-[45vh]"
        animationDuration={50}
        isLoading={loading}
      >
        {gitHubRepos.map((project, index) => (
          <ProjectCardItems key={index} projects={project} />
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
