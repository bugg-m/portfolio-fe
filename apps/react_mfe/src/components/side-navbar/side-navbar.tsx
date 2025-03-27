import React, { useState } from 'react';
import { Button, Icon } from '@bugg-m/bugg-ui';

import { stepBack, stepNext } from '@host/constants/icons';

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
    path: 'mini-projects',
    hasChildren: true,
    children: [],
  },
];

const SideNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <nav
      className={`navbar-bg relative text-light shadow-lg transition-all duration-300 h-screen px-5 py-5 pt-20 ${
        isOpen ? 'w-44' : 'w-0 -translate-x-10'
      } space-y-2`}
    >
      <Button
        onClick={() => setIsOpen(prev => !prev)}
        rounded="none"
        tone={300}
        colorScheme="secondary"
        className={`h-16 w-6 rounded-none rounded-r-xl absolute z-50 transition-all duration-300 ${
          isOpen ? 'left-44' : 'left-10'
        }`}
      >
        {isOpen ? (
          <Icon
            src={stepBack}
            size="md"
          />
        ) : (
          <Icon
            src={stepNext}
            size="md"
          />
        )}
      </Button>
      <main
        className={`flex flex-col transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-32'
        }`}
      >
        <NavItems menuItems={menuItems} />
      </main>
    </nav>
  );
};

export default SideNavbar;
