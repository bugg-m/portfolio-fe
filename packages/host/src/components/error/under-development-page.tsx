import { Button, Image } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageUnderDevelopment: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen flex-center">
      <div className="flex-center flex-col p-5 bg-primary-100 rounded-md border border-secondary-200 w-2/5 h-auto">
        <div className="w-3/5">
          <Image
            src={illustrations.comingSoon}
            size="full"
            alt="Page Under Development"
          />
        </div>
        <div className="flex-center flex-col gap-2">
          <span className="text-3xl text-neutral-700 font-semibold">
            Oh Snap!
          </span>
          <span className="text-xl text-neutral-600 font-light">
            Page Under Development!!
          </span>
          <span className="text-lg font-light mt-5">
            <Button
              onClick={() => navigate('/', { replace: true })}
              colorScheme="secondary"
            >
              Go to Homepage
            </Button>
          </span>
        </div>
      </div>
    </main>
  );
};

export default PageUnderDevelopment;
