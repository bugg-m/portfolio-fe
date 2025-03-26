import React from 'react';
import { Outlet } from 'react-router-dom';

import SideNavbar from '@react_mfe/components/side-navbar/side-navbar';

const ReactMFELayout: React.FC = () => {
  return (
    <div className="font-mono min-w-full min-h-screen">
      <aside className="fixed top-0 left-0 h-screen z-40">
        <SideNavbar />
      </aside>

      <main className="w-full min-h-screen scroll-smooth">
        <Outlet />
      </main>
    </div>
  );
};

export default ReactMFELayout;
