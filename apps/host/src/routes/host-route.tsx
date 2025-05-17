import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorBoundary } from '@components/error/error-boundary';
import GlobalLoader from '@components/loader/global-loader';
import { AppRoutesEnum } from '@enums/app-routes-enum';

import Home from '@host/app/home/home';
import { AppRouterHandler } from '@host/helpers/app-router-handler';

import HostLayout from './host-layout';

const ErrorPage = React.lazy(() => import('@components/error/error-page'));
const MicroServices = React.lazy(() => import('@host/app/micro-services/micro-services'));
// micro services
const ReactMfe = React.lazy(() => import('@host/helpers/react-mounter'));
const NextMfe = React.lazy(() => import('next_mfe/Module'));
const VueMfe = React.lazy(() => import('@host/helpers/vue-mounter'));

export const hostRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={AppRoutesEnum.HOME}
      element={<HostLayout />}
    >
      <Route
        path={AppRoutesEnum.HOME}
        element={<Home />}
      />
      <Route
        path={AppRoutesEnum.MICROFRONTENDS}
        element={<MicroServices />}
      />

      <Route
        path={`${AppRoutesEnum.REACT_MFE}/*`}
        element={
          <ErrorBoundary name="react micro frontend">
            <AppRouterHandler basename={AppRoutesEnum.REACT_MFE}>
              <ReactMfe />
            </AppRouterHandler>
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
            <Suspense fallback={<GlobalLoader />}>
              <NextMfe />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path={`${AppRoutesEnum.VUE_MFE}/*`}
        element={
          <ErrorBoundary name="vue micro frontend">
            <Suspense fallback={<GlobalLoader />}>
              <VueMfe />
            </Suspense>
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
