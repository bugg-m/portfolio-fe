import React from 'react';
import { createMemoryRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AppRoutesEnum, ReactRoutesEnum } from '@enums/app-routes-enum';

import ReactWelcomePage from '@react_mfe/app/home/react-welcome-page';

import ReactMFELayout from './react.layout';

const ErrorPage = React.lazy(() => import('@components/error/error-page'));

export const reactRouter = createMemoryRouter(
  createRoutesFromElements(
    <Route
      path={ReactRoutesEnum.HOME}
      element={<ReactMFELayout />}
    >
      <Route
        path={ReactRoutesEnum.HOME}
        element={<ReactWelcomePage />}
      />
      <Route
        path={AppRoutesEnum.OTHER}
        element={<ErrorPage type="notFound" />}
      />
    </Route>
  ),
  {
    initialEntries: [window.location.pathname.replace(AppRoutesEnum.REACT_MFE, '') || '/'],
  }
);
