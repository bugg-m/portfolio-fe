import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootLayout from './root.layout';
import { ErrorPage } from '../components/error/ErrorPage';

const ReactMfe = React.lazy(() => import('react_micro_service'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/react_mfe" element={<ReactMfe />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
