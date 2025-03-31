import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Image, Modal } from '@bugg-m/bugg-ui';
import { AppRoutesEnum } from '@enums/app-routes-enum';
import { StorageNamesEnum } from '@enums/storage-names-enum';
import { getLocalStorage, setLocalStorage } from '@utils/core-utilities';

import { developer2 } from '@host/constants/illustrations';

const WelcomeModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const isWelcomeModalViewed = getLocalStorage<boolean>(StorageNamesEnum.IS_WELCOME_MODAL_VIEWED);

    if (isWelcomeModalViewed) {
      return;
    }

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  const navigate = useNavigate();

  const onClose = () => {
    setLocalStorage<boolean>({
      name: StorageNamesEnum.IS_WELCOME_MODAL_VIEWED,
      value: true,
      expiryTime: '2d',
    });

    setShowModal(false);
  };

  const exploreWithMe = () => {
    navigate(AppRoutesEnum.MICROSERVICES);
    onClose();
  };

  if (!showModal) return null;

  return (
    <Modal
      isOpen={showModal}
      onClose={onClose}
      header="Manish Kumar"
      headerClassName="text-primary-700"
      animation="slideTop"
      backdrop="blur"
      backdropAnimation="fade"
      position="center"
      closeOnBackdropClick={false}
      closeOnEsc={false}
      footer={
        <div className="flex gap-5 pt-2">
          <Button
            colorScheme="primary"
            onClick={exploreWithMe}
            className="hover-scale-90"
            size="sm"
          >
            Explore with me
          </Button>
          <Button
            colorScheme="secondary"
            variant="outline"
            onClick={onClose}
            className="hover-scale-90"
            size="sm"
          >
            Explore on your own
          </Button>
        </div>
      }
      className="max-h-[90vh] overflow-y-auto"
    >
      <main className="text-center">
        <div className="flex-center">
          <Image
            src={developer2}
            alt="Welcome"
            className="object-contain hover-scale-90 w-52 h-auto"
          />
        </div>

        <h2 className="text-lg inline-block hover:text-primary-800 mb-2 md:text-xl font-bold text-primary-700 tracking-tight leading-snug transition-all hover:scale-90 duration-300">
          Welcome to My Portfolio
        </h2>

        <div className="px-3">
          <p className="mb-2 paragraph-xs animate-paragraph">
            Welcome to my portfolio! I have built this using a micro-frontend architecture with Nx,
            where you are currently viewing the React.js host application that seamlessly integrates
            with Next.js, Vue.js, and additional React.js applications.
          </p>
          <p className="mb-2 paragraph-xs animate-paragraph">
            Each project is crafted using the power of React and enhanced with my custom-built&nbsp;
            <Button
              variant="link"
              href={process.env.NX_PUBLIC_BUGG_UI_URL}
              target="_blank"
              rel="noreferrer"
              className="px-1.5 font-semibold"
              colorScheme="secondary"
              size="sm"
            >
              BUGG-UI library.
            </Button>
            Feel free to explore and see how these different frameworks work together while
            maintaining their unique capabilities.
          </p>
        </div>
      </main>
    </Modal>
  );
};

export { WelcomeModal };
