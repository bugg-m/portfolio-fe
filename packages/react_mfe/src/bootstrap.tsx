import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import ReactMFERoute from './remote-entry';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ReactMFERoute />
  </StrictMode>
);
