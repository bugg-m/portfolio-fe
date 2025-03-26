import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@components/error/error-boundary';
import GlobalLoader from '@components/loader/global-loader';

import '@styles';

import { hostRouter } from './routes/host.route';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ErrorBoundary name="portfolio">
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={hostRouter} />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
