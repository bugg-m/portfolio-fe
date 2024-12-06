import { LuServerCrash } from 'react-icons/lu';
import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <main className="w-full z-10 h-[80vh] flex items-center justify-center">
      <div className="flex flex-col gap-10 items-center bg-blue-500 rounded-md border border-gray-200 justify-center w-2/5 h-2/3">
        <span className="text-7xl">
          <LuServerCrash />
        </span>
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl font-semibold">Oh Snap!</span>
          <span className="text-xl font-light">Something went Wrong!!</span>
          <span className="text-lg font-light">
            Server lost!!
            <span role="img" aria-label="sad-emoji">
              🙁
            </span>
          </span>
        </div>
      </div>
    </main>
  );
};

const PageUnderDevelopment: React.FC = () => {
  return (
    <div className="flex z-10 flex-col gap-10 shadow-lg shadow-neutral-500 items-center bg-blue-500 rounded-md justify-center w-2/5 h-2/3">
      <span className="text-7xl">
        <LuServerCrash />
      </span>
      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-3xl font-semibold">Oh Snap!</span>
        <span className="text-xl font-light">
          Page Underdevelopment!!{' '}
          <span role="img" aria-label="sad-emoji">
            🙁
          </span>
        </span>
      </div>
    </div>
  );
};

export { ErrorPage, PageUnderDevelopment };
