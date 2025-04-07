/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useState } from 'react';
import { NotifyError } from '@components/notify/notify';
import { startRegistration } from '@simplewebauthn/browser';

import { useGetDataHook } from '@api/hooks/use-get-data-hook';
import { usePostDataHook } from '@api/hooks/use-post-data-hook';
import { ReactMFEApiRoutes } from '@api/routes/react-mfe-api-routes';

const usePasskeysHook = () => {
  const [isPasskeySupported, setIsPasskeySupported] = useState<boolean>(false);

  const checkIfPasskeySupported = useCallback(async () => {
    try {
      const response = await Promise.all([
        PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
        PublicKeyCredential.isConditionalMediationAvailable(),
      ]);
      if (response.every(r => r === true)) {
        setIsPasskeySupported(true);
      } else {
        setIsPasskeySupported(false);
      }
    } catch (error: any) {
      NotifyError(error?.message?.slice(0, 30) || 'Error verifying platform authenticator');
      return;
    }
  }, []);

  useEffect(() => {
    checkIfPasskeySupported();
  }, [checkIfPasskeySupported]);

  const { getData, isLoading } = useGetDataHook();
  const { postData, isLoading: loading } = usePostDataHook();

  const verifyUserWithPasskey = useCallback(async () => {
    const passkeyResponse = await getData({
      url: ReactMFEApiRoutes.GET_PASSKEY_CHALLENGE,
      notify: true,
    });

    if (!passkeyResponse.status) return;

    const { challengeResponse } = passkeyResponse.data;

    const authenticationResult = await startRegistration(challengeResponse);

    if (!authenticationResult) return;

    const verifyRegistrationResponse = await postData({
      url: ReactMFEApiRoutes.VERIFY_USER,
      data: authenticationResult,
      notify: true,
    });

    if (!verifyRegistrationResponse.status) return;
  }, [getData, postData]);

  return { isPasskeySupported, isProcessing: isLoading || loading, verifyUserWithPasskey };
};

export { usePasskeysHook };
