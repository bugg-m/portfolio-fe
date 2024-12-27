import React from 'react';
import Loader from './loader';

const GlobalLoader = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <Loader />
    </div>
  );
};
GlobalLoader.displayName = 'GlobalLoader';

export default GlobalLoader;
