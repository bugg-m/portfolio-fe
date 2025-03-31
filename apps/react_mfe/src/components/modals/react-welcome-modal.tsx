import React, { useEffect, useState } from 'react';
import { Button, Image, Modal } from '@bugg-m/bugg-ui';
import { StorageNamesEnum } from '@enums/storage-names-enum';
import { getLocalStorage, setLocalStorage } from '@utils/core-utilities';

import { developer2 } from '@react_mfe/constants/illustrations';

const ReactWelcomeModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const isWelcomeModalViewed = getLocalStorage<boolean>(
      StorageNamesEnum.IS_REACT_WELCOME_MODAL_VIEWED
    );

    if (isWelcomeModalViewed) {
      return;
    }

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const onClose = () => {
    setLocalStorage<boolean>({
      name: StorageNamesEnum.IS_REACT_WELCOME_MODAL_VIEWED,
      value: true,
      expiryTime: '2d',
    });

    setShowModal(false);
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
        <Button
          colorScheme="secondary"
          variant="outline"
          onClick={onClose}
          className="hover-scale-90"
          size="sm"
        >
          Close
        </Button>
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
          Welcome to React Micro Frontend
        </h2>

        <div className="px-3">
          <p className="mb-2 paragraph-xs animate-paragraph">
            Welcome to the React Micro Frontend of my portfolio! This section showcases a collection
            of mini React projects that highlight modern UI patterns and interactive design. Explore
            these projects to see how dynamic React components and innovative features come together
            in a micro-frontend architecture.
          </p>
        </div>
      </main>
    </Modal>
  );
};

export { ReactWelcomeModal };
