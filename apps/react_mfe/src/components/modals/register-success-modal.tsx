import React from 'react';
import { Button, Icon, Modal } from '@bugg-m/bugg-ui';

import { circleCheck } from '@react_mfe/constants/icons';

interface RegisterSuccessModalProps {
  showModal: boolean;
  onClose: () => void;
  onLogIn: () => void;
}

const RegisterSuccessModal: React.FC<RegisterSuccessModalProps> = ({
  showModal,
  onClose,
  onLogIn,
}) => {
  if (!showModal) return null;

  return (
    <Modal
      isOpen={showModal}
      onClose={onClose}
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
            onClick={onLogIn}
            className="hover-scale-90"
            size="sm"
          >
            Log In
          </Button>
          <Button
            colorScheme="secondary"
            variant="outline"
            onClick={onClose}
            className="hover-scale-90"
            size="sm"
          >
            Close
          </Button>
        </div>
      }
      className="max-h-[90vh] overflow-y-auto"
    >
      <main className="text-center">
        <div className="flex-center mb-6">
          <Icon
            src={circleCheck}
            className="hover-scale-90 w-20 h-auto"
            iconColor="success"
          />
        </div>

        <h2 className="text-lg inline-block hover:text-primary-800 mb-2 md:text-xl font-bold text-primary-700 tracking-tight leading-snug transition-all hover:scale-90 duration-300">
          User Created Successfully
        </h2>

        <p className="mb-2 px-3 paragraph-xs animate-paragraph">
          You have successfully created an account. Now try to log in...
        </p>
      </main>
    </Modal>
  );
};

export { RegisterSuccessModal };
