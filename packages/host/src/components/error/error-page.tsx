import React from 'react';
import Icon from '../icon/icon';
import icons from '@host/constants/icons';

const ErrorPage: React.FC = () => {
  return (
    <main className="w-full z-10 h-[80vh] flex items-center justify-center">
      <div className="flex flex-col gap-10 items-center bg-blue-500 rounded-md border border-gray-200 justify-center w-2/5 h-2/3">
        <Icon src={icons.serverCrash} alt="server crash icon" size="xl" />
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

export default ErrorPage;
