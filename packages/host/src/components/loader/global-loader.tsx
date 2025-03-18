import React from 'react';
import { Loader } from '@bugg-m/bugg-ui';

const GlobalLoader: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex-center">
      <Loader />
    </div>
  );
};
GlobalLoader.displayName = 'GlobalLoader';

export default GlobalLoader;
