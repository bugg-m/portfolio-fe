import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Root from './app/root.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
