import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from './side-navbar';

interface NavItemsProps {
  menuItems: MenuItem[];
}

const NavItems: React.FC<NavItemsProps> = ({ menuItems }) => {
  return menuItems.map((item, index) => (
    <Link
      to={item.path}
      key={index}
      className="capitalize p-2 rounded hover:bg-secondary-50 text-neutral-800"
    >
      {item.name}
    </Link>
  ));
};

export { NavItems };
