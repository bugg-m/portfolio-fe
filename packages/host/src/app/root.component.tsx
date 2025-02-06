import GlobalLoader from '@host/components/loader/global-loader';
import { ErrorBoundary } from '@host/ErrorBoundary';
import { router } from '@host/routes/root.route';
import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

export default function Root() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<GlobalLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  );
}
