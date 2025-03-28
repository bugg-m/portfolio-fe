import React from 'react';
import { createMemoryRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AppRoutesEnum, ReactRoutesEnum } from '@enums/app-routes-enum';

import ReactWelcomePage from '@react_mfe/app/overview/react-welcome-page';
import Projects from '@react_mfe/app/projects';
import ReactMiniProjects from '@react_mfe/app/react-mini-projects';
import { Folders } from '@react_mfe/app/react-mini-projects/folders';
import OmitCells from '@react_mfe/app/react-mini-projects/omit-cells/omit-cells';
import Pagination from '@react_mfe/app/react-mini-projects/pagination/pagination';
import PasswordGenerator from '@react_mfe/app/react-mini-projects/password-generator/password-generator';
import ProgressBar from '@react_mfe/app/react-mini-projects/progess-bar/progress-bar';

import ReactMFELayout from './react.layout';

const ErrorPage = React.lazy(() => import('@components/error/error-page'));

export const reactRouter = createMemoryRouter(
  createRoutesFromElements(
    <Route
      path={ReactRoutesEnum.OVERVIEW}
      element={<ReactMFELayout />}
    >
      <Route
        path={ReactRoutesEnum.OVERVIEW}
        element={<ReactWelcomePage />}
      />

      <Route
        path={`${ReactRoutesEnum.MINI_PROJECTS}/*`}
        element={<ReactMiniProjects />}
      />
      <Route
        path={ReactRoutesEnum.FOLDERS}
        element={<Folders />}
      />
      <Route
        path={ReactRoutesEnum.OMIT_CELLS}
        element={<OmitCells />}
      />
      <Route
        path={ReactRoutesEnum.PASSWORD_GENERATOR}
        element={<PasswordGenerator />}
      />
      <Route
        path={ReactRoutesEnum.PROGRESS_BAR}
        element={<ProgressBar />}
      />
      <Route
        path={ReactRoutesEnum.PAGINATION}
        element={<Pagination />}
      />
      <Route
        path={ReactRoutesEnum.PROJECTS}
        element={<Projects />}
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
