import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@components/error/error-boundary';

import '@styles';

import { reactRouter } from './routes/react.route';

const mountReactApp = (container: HTMLElement) => {
  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <ErrorBoundary name="portfolio react">
        <RouterProvider router={reactRouter} />
      </ErrorBoundary>
    </StrictMode>
  );

  return { unmount: () => root.unmount() };
};

export { mountReactApp };
