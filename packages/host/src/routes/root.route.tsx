import Home from '@host/app/home/home';
import { AppRoutesEnum } from '@host/enums/app-routes-enum';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const RootLayout = React.lazy(() => import('./root.layout'));
const ErrorPage = React.lazy(() => import('@host/components/error/error-page'));
// const NotFoundErrorPage = React.lazy(
//   () => import('@host/components/error/not-found-error-page')
// );
const UnderDevelopment = React.lazy(
  () => import('@host/components/error/under-development-page')
);

// micro services
const ReactMfe = React.lazy(() => import('react_mfe/Module'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={AppRoutesEnum.HOME}
      element={<RootLayout />}
      // errorElement={<NotFoundErrorPage />}
    >
      {/* host routes */}
      <Route path={AppRoutesEnum.HOME} element={<Home />} />
      <Route path={AppRoutesEnum.REACT_MFE} element={<ReactMfe />} />
      <Route
        path={AppRoutesEnum.MICROSERVICES}
        element={<UnderDevelopment />}
      />
      <Route path={AppRoutesEnum.ERROR} element={<ErrorPage />} />
    </Route>
  )
);
