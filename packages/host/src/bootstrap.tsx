import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import GlobalLoader from '@host/components/loader/global-loader';
import { ErrorBoundary } from '@host/error-boundary';
import { router } from '@host/routes/root.route';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ErrorBoundary
      name="Portfolio"
      fallback={error => (
        <div>
          <h3>Portfolio Error</h3>
          <p>{error.message}</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      )}>
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
