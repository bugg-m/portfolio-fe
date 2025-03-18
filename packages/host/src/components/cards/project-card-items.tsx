import React from 'react';
import { Button, Card, Image } from '@bugg-m/bugg-ui';

import { developer2 } from '@host/constants/illustrations';
import { IProjectCardItems } from '@host/types/core-portfolio-types';

const ProjectCardItems: React.FC<IProjectCardItems> = ({ projects }) => {
  const handleLinkClick = (url: string) => {
    if (url) window.open(url, '_blank');
  };
  return (
    <Card
      className="group w-24 h-36 md:h-48 md:w-32 md:p-3 p-2"
      variant="outlined"
      colorScheme="secondary"
      tone={200}>
      <div className="flex w-full h-1/3 justify-center items-center md:mb-2">
        <Image
          size="full"
          src={developer2}
          alt={projects.name}
        />
      </div>
      <div className="h-2/3">
        <span className="text-3xs block capitalize md:text-2xs font-semibold text-neutral-700 transition-all group-hover:text-primary-800 group-hover:scale-110 duration-300">
          {projects.name}
        </span>
        <div className="flex-between-center gap-2 md:mb-2">
          <Button
            onClick={() => handleLinkClick(projects.githubUrl)}
            className="w-full h-1 px-2 py-1 md:h-3"
            rounded="sm"
            tone={700}>
            <span className="text-4xs md:text-2xs">Code</span>
          </Button>
          <Button
            variant="outline"
            colorScheme="secondary"
            tone={400}
            onClick={() => handleLinkClick(projects.homepage)}
            className="w-full h-1 px-2 py-1 md:h-3"
            rounded="sm"
            disabled={projects.homepage === ''}>
            <span className="text-4xs md:text-2xs">Live</span>
          </Button>
        </div>
        <div className="flex-between-start flex-col h-3/5 pb-1">
          <p className="text-4xs md:text-3xs leading-snug text-pretty text-left text-neutral-700">
            {projects.description ? `${projects.description.slice(0, 150)}...` : ''}
          </p>
          <div className="text-5xs md:text-4xs tracking-wider text-left leading-snug">
            <div className="space-x-1">
              <span className="font-light text-neutral-600">Language:</span>
              <span className="font-extralight text-neutral-700">{projects.language}</span>
            </div>
            <div className="space-x-1">
              <span className="font-light text-neutral-600">Created at:</span>
              <span className="text-neutral-700 font-extralight">
                {projects.created_at?.slice(0, 10)?.replaceAll('-', '/')}
              </span>
            </div>
            <div className="space-x-1">
              <span className="font-light text-neutral-600">Last Updated:</span>
              <span className="font-extralight text-neutral-700">
                {projects.updated_at?.slice(0, 10)?.replaceAll('-', '/')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCardItems;
