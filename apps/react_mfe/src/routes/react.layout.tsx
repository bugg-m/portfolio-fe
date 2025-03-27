import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppRoutesEnum } from '@enums/app-routes-enum';

import SideNavbar from '@react_mfe/components/side-navbar/side-navbar';
import { useSyncRemoteRouter } from '@react_mfe/hooks/use-sync-remote-router';

const ReactMFELayout: React.FC = () => {
  useSyncRemoteRouter({ basename: AppRoutesEnum.REACT_MFE });
  return (
    <div className="font-mono min-w-full min-h-screen">
      <aside className="fixed top-0 left-0 h-screen z-50">
        <SideNavbar />
      </aside>

      <main className="w-full min-h-screen scroll-smooth">
        <Outlet />
      </main>
    </div>
  );
};

export default ReactMFELayout;
