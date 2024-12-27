import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div
      className="flex space-x-1 scale-100 [&>div]:bg-brand"
      role="status"
      aria-label="Loading"
    >
      <div className="w-2 h-2 rounded-full animate-pulse animate-delay-0"></div>
      <div className="w-2 h-2 rounded-full animate-pulse animate-delay-150"></div>
      <div className="w-2 h-2 rounded-full animate-pulse animate-delay-300"></div>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
