import { Button, Icon } from '@bugg-m/bugg-ui';

import MonorepoBenefitsCard from '@host/app/micro-services/monorepo-benefits-cards';
import { monorepoBenefitsData, nxCardItemsData } from '@host/constants/core-contants';
import { stepNext } from '@host/constants/icons';

import { NxCardItems } from './nx-card-items';

const MicroServicesIntro = () => {
  return (
    <main className="max-w-4xl mx-auto my-16">
      <title className="text-3xl md:text-4xl header mb-4">
        NX Powered Micro-Frontend Architecture
      </title>

      <header className="title text-xl text-secondary-700 mb-6">
        One Workspace, Multiple Technologies, Endless Possibilities
      </header>

      <p className="paragraph-sm mb-8">
        This monorepo solution uses
        <Button
          variant="link"
          href={process.env.NX_PUBLIC_NX_DOCS_URL}
          target="_blank"
          rel="noreferrer"
          className="px-1.5 font-semibold text-base hover:text-primary-500"
          colorScheme="secondary"
          size="sm">
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
          size="sm">
          React,
        </Button>
        <Button
          variant="link"
          href={process.env.NX_PUBLIC_NEXT_DOCS_URL}
          target="_blank"
          rel="noreferrer"
          className="px-1.5 font-semibold text-base hover:text-primary-500"
          colorScheme="secondary"
          size="sm">
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
          size="sm">
          Vue js
        </Button>
        micro-frontends that work together seamlessly, all managed within a single workspace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {nxCardItemsData.map(nxCard => (
          <NxCardItems
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
          <MonorepoBenefitsCard
            key={benefits.title}
            icon={benefits.icon}
            title={benefits.title}
            description={benefits.description}
          />
        ))}
      </div>

      <p className="paragraph-sm bg-primary-50 text-secondary-600 mb-4 italic border-x-4 border-primary-300 pl-4 py-4">
        "Combining multiple frontend frameworks in a single NX workspace creates a
        best-of-all-worlds solution where each technology can shine in its ideal use case."
      </p>

      <p className="paragraph-sm text-secondary-600 mb-10">
        The framework-specific micro-frontends below show how each contributes to this comprehensive
        architecture. Each solution can be deployed independently or combined for a seamless user
        experience.
      </p>

      <div className="flex items-center justify-center w-full">
        <Button
          size="icon"
          rounded="full"
          className="animate-bounce shadow-lg">
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
