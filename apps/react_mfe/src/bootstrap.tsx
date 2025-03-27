import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@components/error/error-boundary';
import GlobalLoader from '@components/loader/global-loader';

import '@styles';

import { reactRouter } from './routes/react.route';

const mountReactApp = (container: HTMLElement) => {
  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <ErrorBoundary name="portfolio react">
        <Suspense fallback={<GlobalLoader />}>
          <RouterProvider router={reactRouter} />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  );

  return { unmount: () => root.unmount() };
};

export { mountReactApp };
