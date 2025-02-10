import * as ReactDOM from 'react-dom/client';
import GlobalLoader from '@host/components/loader/global-loader';
import { ErrorBoundary } from '@host/ErrorBoundary';
import { router } from '@host/routes/root.route';
import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
