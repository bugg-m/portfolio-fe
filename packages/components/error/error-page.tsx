import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from '@bugg-m/bugg-ui';

import {
  comingSoon,
  notFound404,
  serviceUnavailable,
} from '../../../apps/host/src/constants/illustrations';

interface ErrorPageProps {
  type: 'unAvailable' | 'underDevelopment' | 'notFound';
}

interface ErrorType {
  src: string;
  subtitle: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ type = 'notFound' }) => {
  const navigate = useNavigate();
  const [errorType, setErrorType] = useState<ErrorType>({
    src: notFound404,
    subtitle: '404 Not Found!!',
  });

  useEffect(() => {
    if (type === 'unAvailable') {
      setErrorType({
        src: serviceUnavailable,
        subtitle: 'Something went Wrong!!',
      });
    } else if (type === 'underDevelopment') {
      setErrorType({
        src: comingSoon,
        subtitle: 'Page Under Development!!',
      });
    } else {
      setErrorType({
        src: notFound404,
        subtitle: '404 Not Found!!',
      });
    }
  }, [type]);

  return (
    <main className="w-full h-screen flex-center px-10 md:pt-10">
      <Card
        className="flex-center flex-col xs:w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 gap-5"
        colorScheme="primary"
        variant="filled"
        tone={100}
        size="xl"
      >
        <div className="flex-center p-5">
          <Image
            src={errorType?.src}
            alt={errorType?.subtitle}
            className="profile-responsive"
          />
        </div>
        <div className="flex-center flex-col gap-5">
          <span className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-700 font-semibold">
            Oh Snap!
          </span>
          <span className="text-xs xs:text-sm sm:text-base md:text-lg text-neutral-600 font-light">
            {errorType?.subtitle}
          </span>
          <Button
            className="font-light mt-5 text-xs xs:text-sm"
            onClick={() => navigate('/', { replace: true })}
            colorScheme="secondary"
          >
            Go to Homepage
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default ErrorPage;
