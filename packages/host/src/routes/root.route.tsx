import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Home from '@host/app/home/home';
import { AppRoutesEnum } from '@host/enums/app-routes-enum';
import { ErrorBoundary } from '@host/error-boundary';

const RootLayout = React.lazy(() => import('./root.layout'));
const ErrorPage = React.lazy(() => import('@host/components/error/error-page'));
const MicroServices = React.lazy(() => import('@host/app/micro-services/micro-services'));

// micro services
const ReactMfe = React.lazy(() => import('react_mfe/Module'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={AppRoutesEnum.HOME}
      element={<RootLayout />}
      errorElement={<ErrorPage type="unAvailable" />}>
      {/* host routes */}
      <Route
        path={AppRoutesEnum.HOME}
        element={<Home />}
      />
      <ErrorBoundary
        name="react micro frontend"
        fallback={error => (
          <div>
            <h3>React Micro Frontend Error</h3>
            <p>{error.message}</p>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        )}>
        <Route
          path={AppRoutesEnum.REACT_MFE}
          element={<ReactMfe />}
        />
      </ErrorBoundary>
      <Route
        path={AppRoutesEnum.MICROSERVICES}
        element={<MicroServices />}
      />
      <Route
        path={AppRoutesEnum.ERROR}
        element={<ErrorPage type="notFound" />}
      />
    </Route>
  )
);
