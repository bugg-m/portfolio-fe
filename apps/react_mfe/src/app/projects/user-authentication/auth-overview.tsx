import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Image } from '@bugg-m/bugg-ui';
import { ReactRoutesEnum } from '@enums/app-routes-enum';

import { userLogin } from '@react_mfe/constants/illustrations';
import { overviewData } from '@react_mfe/data/user-authentication-data';

const AuthOverview: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 py-5">
        <div className="col-span-1 flex-center p-4 sm:p-6">
          <Image
            src={userLogin}
            alt="User logging in"
            className="hover-scale-90 image-responsive object-contain"
          />
        </div>
        <div className="flex-center flex-col col-span-1 p-4 space-y-4 max-w-4xl mx-auto my-16">
          <header className="text-2xl sm:text-3xl header md:text-4xl font-bold text-neutral-800 mb-4">
            Welcome to User Authentication!{' '}
            <span
              role="img"
              aria-label="security"
            >
              🔒
            </span>
          </header>
          <p className="paragraph-sm sm:text-lg text-base md:text-xl text-neutral-600 animate-paragraph text-center mb-6">
            Experience a robust, secure, and user-friendly authentication system built with React.js
            and Node.js. This demo highlights real-time validation, JWT-based session management,
            and responsive design.
          </p>
          <p className="paragraph-sm text-neutral-500 animate-paragraph text-center">
            Explore the interactive demo to see how modern security practices come together with
            intuitive design, ensuring that user data is safe while delivering a smooth and engaging
            experience.
          </p>
        </div>
      </div>

      <div className="py-10 px-4 md:px-8">
        <h2 className="title text-2xl font-bold mb-4 text-center">User Authentication System</h2>
        <p className="paragraph-sm text-neutral-600 mb-2">
          This project is a fully functional authentication system built with React, designed to
          demonstrate a secure and user-friendly way to manage user sessions.
        </p>
        <ul className="list-disc list-inside text-neutral-600 mb-4 text-start py-5">
          {overviewData.map(({ title, subtitle }) => (
            <li key={title}>
              <strong>{title}:</strong> {subtitle}
            </li>
          ))}
        </ul>
        <p className="paragraph-sm text-neutral-600 text-center">
          Explore the demo, check out the source code on GitHub, and see how this system can be
          integrated into any web application.
        </p>
      </div>
      <Button
        onClick={() => navigate(ReactRoutesEnum.LOG_IN)}
        title="Explore the Demo"
        className="md:w-2/5 w-full transition-transform duration-200 hover:scale-110"
        rounded="full"
      >
        Explore User Authentication
      </Button>
    </div>
  );
};

export default AuthOverview;
