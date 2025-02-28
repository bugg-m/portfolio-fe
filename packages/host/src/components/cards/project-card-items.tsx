import { Button, Card, Image } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';
import { IProjectCardItems } from '@host/types/core-portfolio-types';
import { CapitalizeFirstLetter } from '@host/utils/core-utilities';
import React from 'react';

const ProjectCardItems: React.FC<IProjectCardItems> = ({ projects }) => {
  const handleLinkClick = (url: string) => {
    if (url) window.open(url, '_blank');
  };
  return (
    <Card className="group w-32 h-52 md:h-64 md:w-40" size="sm">
      <div className="flex w-full h-1/3 rounded-lg justify-center items-center border border-neutral-300 md:mb-2">
        <Image size="full" src={illustrations.developer3} alt={projects.name} />
      </div>
      <div className="h-2/3 space-y-1.5 md:space-y-2">
        <span className="text-xxs md:text-xs inline-block font-semibold text-neutral-700 transition-all group-hover:text-neutral-800">
          {CapitalizeFirstLetter(projects.name)}
        </span>
        <div className="flex justify-between items-center gap-2">
          <Button
            onClick={() => handleLinkClick(projects.githubUrl)}
            className="w-full h-2 md:h-3"
            tone={700}
          >
            <span className="text-xxxs md:text-xxs">Code</span>
          </Button>
          <Button
            variant="outline"
            colorScheme="secondary"
            onClick={() => handleLinkClick(projects.homepage)}
            className="w-full h-2 md:h-3"
            disabled={projects.homepage === ''}
          >
            <span className="text-xxxs md:text-xxs">Live</span>
          </Button>
        </div>
        <p className="text-xxxs md:text-xxs leading-snug text-left text-neutral-700">
          {projects.description
            ? `${projects.description.slice(0, 130)}...`
            : ''}
        </p>
        <div className="text-xxxs md:text-xxs tracking-wider text-left leading-snug">
          <div className="space-x-1">
            <span className="font-light text-neutral-600">Language:</span>
            <span className="font-extralight text-neutral-700">
              {projects.language}
            </span>
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
    </Card>
  );
};

export default ProjectCardItems;
