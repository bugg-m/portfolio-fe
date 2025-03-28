import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@bugg-m/bugg-ui';

import { arrow } from '@react_mfe/constants/icons';

import { MenuItem } from './side-navbar';

interface NavItemsProps {
  menuItems: MenuItem[];
  isChild?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ menuItems, isChild }) => {
  const [isMenuItemOpen, setIsMenuItemOpen] = useState<boolean>(false);
  return (
    <section className="flex flex-col space-y-1">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${isChild ? 'text-xs text-neutral-300' : 'text-neutral-100'}`}
        >
          <Link
            to={item.path}
            className="flex gap-1 group items-center capitalize px-2 py-1 rounded hover:text-neutral-800 hover:bg-secondary-100"
          >
            <span>{item.name}</span>
            {item.hasChildren && (
              <Icon
                className={`cursor-pointer group-hover:text-neutral-700 text-neutral-50 transition-transform duration-300 hover:bg-secondary-100 rounded-md ${
                  isMenuItemOpen ? '' : '-rotate-90'
                }`}
                src={arrow}
                onClick={() => setIsMenuItemOpen(prev => !prev)}
              />
            )}
          </Link>
          <div
            className={`transition-opacity ml-3 pl-1 duration-300 border-l border-secondary-100 ${
              isMenuItemOpen && item.hasChildren && item.children ? 'opacity-100 my-1' : 'opacity-0'
            }`}
          >
            {isMenuItemOpen && item.hasChildren && item.children && (
              <NavItems
                menuItems={item.children}
                isChild={item.hasChildren}
              />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export { NavItems };
