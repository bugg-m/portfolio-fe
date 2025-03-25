import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLoader from '@components/loader/global-loader';
import { AppRoutesEnum, ReactRoutesEnum } from '@enums/app-routes-enum';

import ReactWelcomePage from '@react_mfe/app/home/react-welcome-page';

import SideNavbar from './components/side-navbar/side-navbar';
const ErrorPage = React.lazy(() => import('@components/error/error-page'));

function ReactMFELayout({
  ReactRoutes,
  ReactRoute,
}: {
  ReactRoutes: typeof Routes;
  ReactRoute: typeof Route;
}) {
  return (
    <div className="font-mono min-w-full min-h-screen overflow-y-auto">
      <aside className="fixed left-0 top-0 bg-secondary-400 h-screen z-40">
        <SideNavbar />
      </aside>
      <main className="w-full min-h-screen">
        <Suspense fallback={<GlobalLoader />}>
          <ReactRoutes>
            <ReactRoute
              path={ReactRoutesEnum.HOME}
              element={<ReactWelcomePage />}
            />
            <ReactRoute
              path={AppRoutesEnum.OTHER}
              element={<ErrorPage type="notFound" />}
            />
          </ReactRoutes>
        </Suspense>
      </main>
    </div>
  );
}

export default ReactMFELayout;
