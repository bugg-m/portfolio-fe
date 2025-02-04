import { useState } from 'react';
// import { PiBugDroidFill } from 'react-icons/pi';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import { CapitalizeAllLetter } from '@host/utils/core-utilities';

const Navbar: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  const menuItems = [
    {
      title: 'home',
      id: 1,
      to: '',
    },
    {
      title: 'React',
      id: 2,
      to: 'react_mfe',
    },
    // {
    //   title: 'experience',
    //   id: 3,
    //   to: 'experience',
    // },
    // {
    //   title: 'projects',
    //   id: 4,
    //   to: 'projects',
    // },
  ];

  return (
    <nav className="flex justify-center items-center border-b-2 border-gray-400 rounded font-mono box-border">
      <div className="flex justify-between items-center px-6 py-2 w-4/5">
        <LogoIcon />
        <div>
          <div className="text-base md:flex gap-8 hidden ">
            {menuItems?.map(({ title, id, to }) => (
              <NavLink key={id} className="hover:text-brand" to={to}>
                {CapitalizeAllLetter(title)}
              </NavLink>
            ))}
          </div>
          <div
            onClick={() => setShowMobileNavbar(!showMobileNavbar)}
            className="text-3xl block gap-5 md:hidden"
          >
            {/* <PiBugDroidFill /> */}PiBugDroidFill
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
