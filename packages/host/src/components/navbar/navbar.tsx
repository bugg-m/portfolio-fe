import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import { CapitalizeAllLetter } from '@host/utils/core-utilities';
import icons from '@host/constants/icons';
import { Button, Icon } from '@bugg-m/bugg-ui';

const Navbar: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  const menuItems = [
    { title: 'home', id: 1, to: '' },
    { title: 'microservices', id: 3, to: 'microservices' },
    { title: 'contact me', id: 4, to: 'contact' },
  ];

  return (
    <nav
      className="bg-neutral-50 text-neutral-700 border-b border-neutral-100 shadow-sm"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex-content-between md:px-6 px-3 py-1 md:py-3 w-full md:w-4/5 mx-auto">
        <LogoIcon />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {menuItems.map(({ title, id, to }) => (
            <NavLink
              key={id}
              to={to}
              className={({ isActive }) =>
                `hover-scale-110 hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-neutral-700'
                }`
              }
            >
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            onClick={() => setShowMobileNavbar((prev) => !prev)}
            aria-label="Toggle navigation"
            className="cursor-pointer"
            colorScheme="secondary"
            variant="ghost"
          >
            {showMobileNavbar ? (
              <Icon src={icons.close} iconColor="secondary" size="md" />
            ) : (
              <Icon src={icons.menu} iconColor="secondary" size="md" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileNavbar && (
        <div className="md:hidden flex-center flex-col bg-neutral-50 border-t border-neutral-200">
          {menuItems.map(({ title, id, to }) => (
            <div className="bg-secondary-50 w-full h-10 py-2 flex-center">
              <NavLink
                key={id}
                to={to}
                onClick={() => setShowMobileNavbar(false)}
                className="transition-colors text-neutral-700"
              >
                {CapitalizeAllLetter(title)}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
