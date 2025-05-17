import React, { useEffect } from 'react';
import { Alert, Button, Card, Image } from '@bugg-m/bugg-ui';

import { fingerPrintLogin } from '@react_mfe/constants/illustrations';
import { passkeysBenefitsData } from '@react_mfe/data/user-authentication-data';
import { usePasskeysHook } from '@react_mfe/hooks/use-passkeys-hooks';

const CreatePasskey: React.FC = () => {
  const { isPasskeySupported, passkeyLoading, createUserPasskey, checkIfPasskeySupported } =
    usePasskeysHook();

  useEffect(() => {
    checkIfPasskeySupported();
  }, [checkIfPasskeySupported]);
  return (
    <div className="bg-secondary-50 min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 flex-center p-4 sm:p-6">
        <Image
          src={fingerPrintLogin}
          alt="Developer working on code"
          className="hover-scale-90 image-responsive object-contain"
        />
      </div>
      <Card
        variant="elevated"
        className="flex-start-center text-start flex-col col-span-1 p-5 space-y-4 max-w-4xl mx-auto my-16 h-auto"
      >
        <header className="title pb-2 text-xl border-b w-full text-secondary-700">Passkeys</header>
        <p className="paragraph-sm animate-paragraph text-neutral-600 px-2">
          Passkeys replace traditional passwords using public key cryptography. A private key stays
          on your device while a public key works with biometric or PIN verification for secure,
          user-friendly authentication.
        </p>
        <ul className="list-disc text-neutral-600 text-sm mb-4 text-start pl-5">
          {passkeysBenefitsData.map(({ title, subtitle }) => (
            <li key={title}>
              <strong>{title}:</strong> {subtitle}
            </li>
          ))}
        </ul>
        {isPasskeySupported ? (
          <div className="w-full">
            <Alert
              title="Device Compatible!"
              subtitle="Your device supports passkey creation. Tap the button to generate your passkey."
              colorScheme="success"
            />
          </div>
        ) : (
          <div className="w-full">
            <Alert
              title="Oops! Incompatible Device."
              subtitle="It looks like your device doesn't support passkey creation. Read more!"
              colorScheme="error"
            />
          </div>
        )}
        <div className="w-full flex-start-center">
          {isPasskeySupported ? (
            <Button
              onClick={createUserPasskey}
              isLoading={passkeyLoading}
              className="md:w-2/5 w-full hover-scale-90"
              rounded="full"
            >
              Create Passkey
            </Button>
          ) : (
            <Button
              href={process.env.NX_PUBLIC_PASSKEYS_SUPPORTED_DEVICE}
              target="_blank"
              className="md:w-2/5 w-full hover-scale-90"
              rounded="full"
            >
              Reade More
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export { CreatePasskey };
