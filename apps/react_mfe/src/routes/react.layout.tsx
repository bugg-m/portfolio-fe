import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppRoutesEnum } from '@enums/app-routes-enum';

import SideNavbar from '@react_mfe/components/side-navbar/side-navbar';
import { useSyncRemoteRouter } from '@react_mfe/hooks/use-sync-remote-router';

const ReactMFELayout: React.FC = () => {
  useSyncRemoteRouter({ basename: AppRoutesEnum.REACT_MFE });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="font-mono min-w-full min-h-screen relative">
      <aside className="fixed top-0 left-0 h-screen z-50">
        <SideNavbar />
      </aside>

      <main className="w-full min-h-screen scroll-smooth bg-secondary-100 responsive-container">
        <section className="section h-full flex-center bg-secondary-50 mx-auto border-x border-secondary-200 space-y-5 z-0">
          <Outlet />
        </section>
      </main>
    </main>
  );
};

export default ReactMFELayout;
