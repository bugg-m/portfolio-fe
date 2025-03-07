import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import icons from '@host/constants/icons';
import { Icon } from '@bugg-m/bugg-ui';
// import ToggleTheme from '../toggle-theme/toggle-theme';
// import images from '@host/constants/images';

const Navbar: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  const menuItems = [
    { title: 'home', id: 1, to: '' },
    { title: 'microservices', id: 3, to: 'microservices' },
  ];

  return (
    <nav
      className="bg-neutral-50 text-neutral-700 border-b border-neutral-100 shadow-sm"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex-between-center md:px-6 px-3 py-1 md:py-3 w-full md:w-4/5 mx-auto">
        <LogoIcon />

        <div className="flex-center gap-1 md:gap-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex-center gap-8 text-sm font-medium">
            {menuItems.map(({ title, id, to }) => (
              <NavLink
                key={id}
                to={to}
                className={({ isActive }) =>
                  `hover-scale-110 hover:text-primary-500 uppercase ${
                    isActive ? 'text-primary-500' : 'text-neutral-700'
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </div>
          {/* <ToggleTheme /> */}
          {/* <Avatar
            src={images.profile}
            status={false}
            size="sm"
            shape="circle"
            className="hover-scale-110 md:block hidden"
          /> */}
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Icon
              onClick={() => setShowMobileNavbar((prev) => !prev)}
              src={showMobileNavbar ? icons.close : icons.menu}
              iconColor="secondary"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileNavbar && (
        <div className="md:hidden flex-center flex-col bg-neutral-50 border-t border-neutral-200">
          {menuItems.map(({ title, id, to }) => (
            <div
              key={id}
              className="bg-secondary-50 w-full h-10 py-2 flex-center"
            >
              <NavLink
                to={to}
                onClick={() => setShowMobileNavbar(false)}
                className="transition-colors uppercase text-neutral-700"
              >
                {title}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
