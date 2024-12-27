import GlobalLoader from '@host/components/loader/global-loader';
import { router } from '@host/routes/root.route';
import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

export default function Root() {
  return (
    <StrictMode>
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}
