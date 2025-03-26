import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from '@bugg-m/bugg-ui';

import { stepBack, stepNext } from '@host/constants/icons';

type MenuItem = {
  name: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    name: 'overview',
    path: '/',
  },
];

const SideNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`bg-secondary-200 relative flex flex-col text-light shadow-lg transition-all duration-300 h-screen px-5 py-5 pt-20 ${
        isOpen ? 'w-36' : 'w-0 -translate-x-10'
      } space-y-2`}
    >
      <Button
        onClick={() => setIsOpen(prev => !prev)}
        rounded="none"
        tone={200}
        colorScheme="secondary"
        className={`h-16 w-6 rounded-none rounded-r-xl absolute transition-all duration-300 ${
          isOpen ? 'left-36' : 'left-10'
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
      {menuItems.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`capitalize p-2 rounded hover:bg-secondary-50 transition-all duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-20'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default SideNavbar;
