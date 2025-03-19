import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from '@bugg-m/bugg-ui';

import { comingSoon, notFound404, serviceUnavailable } from '@host/constants/illustrations';

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
    <main className="w-full h-screen flex-center px-5 md:pt-10">
      <Card
        className="flex-center flex-col xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3"
        colorScheme="primary"
        variant="filled"
        tone={100}
        size="xl">
        <div className="profile-responsive">
          <Image
            src={errorType?.src}
            size="full"
            alt={errorType?.subtitle}
          />
        </div>
        <div className="flex-center flex-col gap-2">
          <span className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-700 font-semibold">
            Oh Snap!
          </span>
          <span className="text-xs xs:text-sm sm:text-base md:text-lg text-neutral-600 font-light">
            {errorType?.subtitle}
          </span>
          <Button
            className="font-light mt-5 text-xs xs:text-sm"
            onClick={() => navigate('/', { replace: true })}
            colorScheme="secondary">
            Go to Homepage
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default ErrorPage;
