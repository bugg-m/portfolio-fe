import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesEnum } from '@enums/app-routes-enum';

import Home from '@host/app/home/home';
import Footer from '@host/components/footer/footer';
import GlobalLoader from '@host/components/loader/global-loader';
import Navbar from '@host/components/navbar/navbar';

import { ErrorBoundary } from './error-boundary';

const ErrorPage = React.lazy(() => import('@host/components/error/error-page'));
const MicroServices = React.lazy(() => import('@host/app/micro-services/micro-services'));
// micro services
const ReactMfe = React.lazy(() => import('react_mfe/Module'));
const NextMfe = React.lazy(() => import('next_mfe/Module'));
const VueMfe = React.lazy(() => import('./VueWrapper'));

function RootLayout() {
  return (
    <div className="font-mono min-w-full min-h-screen overflow-y-auto">
      <header className="fixed top-0 w-full bg-white z-50">
        <Navbar />
      </header>
      <main className="w-full min-h-screen">
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route
              path={AppRoutesEnum.HOME}
              element={<Home />}
            />

            <Route
              path={`${AppRoutesEnum.REACT_MFE}/*`}
              element={
                <ErrorBoundary name="react micro frontend">
                  <ReactMfe />
                </ErrorBoundary>
              }
            />

            <Route
              path="/next_mfe"
              element={
                <ErrorBoundary name="next micro frontend">
                  <NextMfe />
                </ErrorBoundary>
              }
            />
            <Route
              path="/vue_mfe"
              element={
                <ErrorBoundary name="vue micro frontend">
                  <VueMfe />
                </ErrorBoundary>
              }
            />

            <Route
              path={AppRoutesEnum.MICROSERVICES}
              element={<MicroServices />}
            />
            <Route
              path={AppRoutesEnum.ERROR}
              element={<ErrorPage type="notFound" />}
            />
          </Routes>
        </Suspense>
      </main>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
