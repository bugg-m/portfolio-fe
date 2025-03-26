import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@bugg-m/bugg-ui';

import SideNavbar from '@react_mfe/components/side-navbar/side-navbar';

const ReactMFELayout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="font-mono min-w-full min-h-screen">
      <aside
        className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300 ${
          isNavOpen ? 'w-52 translate-x-52' : 'w-0 -translate-x-20'
        }`}
      >
        <SideNavbar />
      </aside>
      <main className="w-full min-h-screen flex items-center justify-end">
        <Button onClick={() => setIsNavOpen(prev => !prev)}>setIsNavOpen</Button>
        <div className="h-auto w-5/6 scroll-smooth">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ReactMFELayout;
