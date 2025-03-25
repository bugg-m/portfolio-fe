import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorBoundary } from '@components/error/error-boundary';
import GlobalLoader from '@components/loader/global-loader';
import { AppRoutesEnum } from '@enums/app-routes-enum';

import Home from '../app/home/home';

import HostRootLayout from './root.layout';

const ErrorPage = React.lazy(() => import('@components/error/error-page'));
const MicroServices = React.lazy(() => import('@host/app/micro-services/micro-services'));
// micro services
const ReactMfe = React.lazy(() => import('react_mfe/Module'));
const NextMfe = React.lazy(() => import('next_mfe/Module'));
const VueMfe = React.lazy(() => import('../VueWrapper'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={AppRoutesEnum.HOME}
      element={<HostRootLayout />}
    >
      <Route
        path={AppRoutesEnum.HOME}
        element={<Home />}
      />
      <Route
        path={AppRoutesEnum.MICROSERVICES}
        element={<MicroServices />}
      />

      <Route
        path={`${AppRoutesEnum.REACT_MFE}/*`}
        element={
          <ErrorBoundary name="react micro frontend">
            <Suspense fallback={<GlobalLoader />}>
              <ReactMfe />
            </Suspense>
          </ErrorBoundary>
        }
      />

      <Route
        path={`${AppRoutesEnum.NEXT_MFE}/*`}
        element={
          <ErrorBoundary
            name="next micro frontend"
            mfeWIP={true}
          >
            <NextMfe />
          </ErrorBoundary>
        }
      />
      <Route
        path={`${AppRoutesEnum.VUE_MFE}/*`}
        element={
          <ErrorBoundary name="vue micro frontend">
            <VueMfe />
          </ErrorBoundary>
        }
      />

      <Route
        path={AppRoutesEnum.OTHER}
        element={<ErrorPage type="notFound" />}
      />
    </Route>
  )
);
