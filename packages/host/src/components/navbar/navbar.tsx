import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import { CapitalizeAllLetter } from '@host/utils/core-utilities';
import Icon from '../icon/icon';
import icons from '@host/constants/icons';

const Navbar: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  const menuItems = [
    { title: 'home', id: 1, to: '' },
    { title: 'react', id: 1, to: '/react_mfe' },
    { title: 'experience', id: 2, to: 'experience' },
    { title: 'projects', id: 3, to: 'projects' },
    { title: 'contact me', id: 4, to: 'contact' },
  ];

  return (
    <nav className="bg-neutral-50 text-secondary-500 border-b border-neutral-200 shadow-sm">
      <div className="flex justify-between items-center px-6 py-3 w-full md:w-4/5 mx-auto">
        <LogoIcon />

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {menuItems.map(({ title, id, to }) => (
            <NavLink
              key={id}
              to={to}
              className="hover:text-primary-500 transition-colors"
            >
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden text-2xl cursor-pointer text-secondary-700">
          {showMobileNavbar ? (
            <Icon
              src={icons.close}
              alt="close icon"
              onClick={() => setShowMobileNavbar(false)}
            />
          ) : (
            <Icon
              src={icons.menu}
              alt="menu icon"
              onClick={() => setShowMobileNavbar(true)}
            />
          )}
        </div>
      </div>

      {showMobileNavbar && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-neutral-50 border-t border-neutral-200">
          {menuItems.map(({ title, id, to }) => (
            <NavLink
              key={id}
              to={to}
              className="text-secondary-500 hover:text-primary-500 transition-colors"
              onClick={() => setShowMobileNavbar(false)}
            >
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
