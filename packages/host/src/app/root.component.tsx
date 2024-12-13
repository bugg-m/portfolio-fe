import Spinner from '@host/components/spinner/spinner';
import { router } from '@host/routes/root.route';
import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

export default function Root() {
  return (
    <StrictMode>
      <Suspense
        fallback={
          <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}
