import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import '@styles';

import MicroserviceWelcome from './app/home/welcome-page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <MicroserviceWelcome />
  </StrictMode>
);
