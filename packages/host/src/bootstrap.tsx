import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import GlobalLoader from '@host/components/loader/global-loader';
import { ErrorBoundary } from '@host/error-boundary';
import { router } from '@host/routes/root.route';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
