import React, { useState } from 'react';
import { Button, Icon } from '@bugg-m/bugg-ui';
import { ReactRoutesEnum } from '@enums/app-routes-enum';

import { step } from '@host/constants/icons';

import { NavItems } from './nav-items';

export interface MenuItem {
  name: string;
  path: string;
  hasChildren?: boolean | false;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: 'overview',
    path: '/',
  },
  {
    name: 'mini projects',
    path: ReactRoutesEnum.MINI_PROJECTS,
    hasChildren: true,
    children: [
      {
        name: 'folders',
        path: ReactRoutesEnum.FOLDERS,
      },
      {
        name: 'omit cells',
        path: ReactRoutesEnum.OMIT_CELLS,
      },
      {
        name: 'pagination',
        path: ReactRoutesEnum.PAGINATION,
      },
      {
        name: 'password generator',
        path: ReactRoutesEnum.PASSWORD_GENERATOR,
      },
      {
        name: 'progress bar',
        path: ReactRoutesEnum.PROGRESS_BAR,
      },
    ],
  },
  {
    name: 'projects',
    path: ReactRoutesEnum.PROJECTS,
  },
];

const SideNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <nav
      className={`navbar-bg relative text-light shadow-lg transition-all duration-300 h-screen px-2 py-5 pt-20 ${
        isOpen ? 'w-48' : 'w-0 -translate-x-10'
      } space-y-2`}
    >
      <Button
        onClick={() => setIsOpen(prev => !prev)}
        rounded="none"
        tone={600}
        colorScheme="secondary"
        className={`h-16 w-6 rounded-none rounded-r-xl absolute z-50 transition-all duration-300 ${
          isOpen ? 'left-48' : 'left-10'
        }`}
      >
        <Icon
          src={step}
          size="md"
          className={`${
            isOpen ? '' : 'rotate-180'
          } text-neutral-200 transition-transform duration-300`}
        />
      </Button>
      <main className={`${isOpen ? 'translate-x-0' : '-translate-x-32'}`}>
        <NavItems menuItems={menuItems} />
      </main>
    </nav>
  );
};

export default SideNavbar;
