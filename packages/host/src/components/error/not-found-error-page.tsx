import { Button, Card, Image } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen flex-center px-5">
      <Card
        className="flex-center flex-col xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 h-auto"
        colorScheme="primary"
        variant="filled"
        tone={100}
        size="xl"
      >
        <div className="profile-responsive">
          <Image
            src={illustrations.notFound404}
            size="full"
            alt="404 not found"
          />
        </div>
        <div className="flex-center flex-col gap-2">
          <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-3xl text-neutral-700 font-semibold">
            Oh Snap!
          </span>
          <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 font-light">
            404 Not Found!!
          </span>
          <Button
            className="font-light mt-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl"
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

export default NotFoundErrorPage;
