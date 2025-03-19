import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesEnum } from '@enums/app-routes-enum';
import WelcomePage from './app/home/welcome-page';

function ReactMFERoute() {
  return (
    <Suspense>
      <Routes>
        <Route
          path={AppRoutesEnum.HOME}
          element={<WelcomePage />}
        />
      </Routes>
    </Suspense>
  );
}

export default ReactMFERoute;
