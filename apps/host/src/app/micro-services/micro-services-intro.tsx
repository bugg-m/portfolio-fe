import React from 'react';
import { Button, Icon } from '@bugg-m/bugg-ui';
import { NxCardLg } from '@components/cards/nx-card-lg';
import { NxCardXl } from '@components/cards/nx-card-xl';

import { monorepoBenefitsData, nxCardItemsData } from '@host/constants/core-contants';
import { stepNext } from '@host/constants/icons';

const MicroServicesIntro: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto my-16">
      <header className="text-2xl sm:text-3xl md:text-4xl header text-neutral-800 mb-4">
        NX Powered Micro-Frontend Architecture
      </header>

      <div className="sm:text-lg text-base md:text-xl text-secondary-700 mb-6 sm:px-5 md:px-20 py-4 border-x-8 rounded-md border-primary-500 border-y">
        <span className="block title text-start">One Workspace</span>
        <span className="block title text-center">Multiple Technologies</span>
        <span className="block title text-end">Endless Possibilities</span>
      </div>

      <p className="paragraph-sm mb-8">
        This monorepo uses
        <Button
          variant="link"
          href={process.env.NX_PUBLIC_NX_DOCS_URL}
          target="_blank"
          rel="noreferrer"
          className="px-1.5 font-semibold text-base hover:text-primary-500"
          colorScheme="secondary"
          size="sm"
        >
          NX
        </Button>
        to create a unified development experience across multiple frontend frameworks. The
        architecture brings together
        <Button
          variant="link"
          href={process.env.NX_PUBLIC_REACT_DOCS_URL}
          target="_blank"
          rel="noreferrer"
          className="px-1.5 font-semibold text-base hover:text-primary-500"
          colorScheme="secondary"
          size="sm"
        >
          React,
        </Button>
        <Button
          variant="link"
          href={process.env.NX_PUBLIC_NEXT_DOCS_URL}
          target="_blank"
          rel="noreferrer"
          className="px-1.5 font-semibold text-base hover:text-primary-500"
          colorScheme="secondary"
          size="sm"
        >
          Next,
        </Button>
        and
        <Button
          variant="link"
          href={process.env.NX_PUBLIC_VUE_DOCS_URL}
          target="_blank"
          rel="noreferrer"
          className="px-1.5 font-semibold text-base hover:text-primary-500"
          colorScheme="secondary"
          size="sm"
        >
          Vue js
        </Button>
        micro-frontends that work together seamlessly, all managed within a single workspace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {nxCardItemsData.map(nxCard => (
          <NxCardXl
            key={nxCard.title}
            icon={nxCard.icon}
            title={nxCard.title}
            description={nxCard.description}
          />
        ))}
      </div>

      <h3 className="title text-xl font-bold mb-6">NX Monorepo Benefits</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {monorepoBenefitsData.map(benefits => (
          <NxCardLg
            key={benefits.title}
            icon={benefits.icon}
            title={benefits.title}
            description={benefits.description}
          />
        ))}
      </div>

      <p className="paragraph-sm bg-primary-50 text-secondary-600 mb-6 italic border-x-4 border-primary-300 p-4">
        "Combining multiple frontend frameworks in a single NX workspace allows developers to
        leverage the strengths of different technologies across various project components."
      </p>

      <p className="paragraph-sm text-sm text-secondary-600 mb-10 px-10">
        The framework-specific micro-frontends below show how each contributes to this comprehensive
        architecture. Each solution can be deployed independently or combined for a seamless user
        experience.
      </p>

      <div className="flex items-center justify-center w-full">
        <Button
          size="icon"
          rounded="full"
          className="animate-bounce shadow-lg"
        >
          <Icon
            src={stepNext}
            className="rotate-90"
            iconColor="default"
            size="md"
          />
        </Button>
      </div>
    </main>
  );
};

export { MicroServicesIntro };
