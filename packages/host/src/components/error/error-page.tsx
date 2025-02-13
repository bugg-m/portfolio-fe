import React from 'react';
import Icon from '../icon/icon';
import icons from '@host/constants/icons';

const ErrorPage: React.FC = () => {
  return (
    <main className="w-full z-10 h-[80vh] flex-center">
      <div className="flex-center flex-col gap-10 bg-blue-500 rounded-md border border-gray-200 w-2/5 h-2/3">
        <Icon src={icons.serverCrash} alt="server crash icon" size="xl" />
        <div className="flex-center flex-col gap-2">
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
