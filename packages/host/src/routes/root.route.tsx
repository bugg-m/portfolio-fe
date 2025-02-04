import { AppRoutesEnum } from '@host/enums/app-routes-enum';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const RootLayout = React.lazy(() => import('./root.layout'));
const ErrorPage = React.lazy(() => import('../components/error/error-page'));
const ReactMfe = React.lazy(() => import('react_mfe/Module'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={AppRoutesEnum.HOST} element={<RootLayout />}>
      <Route path={AppRoutesEnum.REACT_MFE} element={<ReactMfe />} />
      <Route path={AppRoutesEnum.ERROR} element={<ErrorPage />} />
    </Route>
  )
);
