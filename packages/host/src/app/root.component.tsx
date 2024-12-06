import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/root.route';

export default function Root() {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}
