/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotifyError } from '@components/notify/notify';
import { ReactRoutesEnum } from '@enums/app-routes-enum';
import { startAuthentication, startRegistration } from '@simplewebauthn/browser';

import { useGetDataHook } from '@api/hooks/use-get-data-hook';
import { usePostDataHook } from '@api/hooks/use-post-data-hook';
import { ReactMFEApiRoutes } from '@api/routes/react-mfe-api-routes';
import { ApiError } from '@api/utils/core-api-classes';

const usePasskeysHook = () => {
  const [isPasskeySupported, setIsPasskeySupported] = useState<boolean>(false);
  const navigate = useNavigate();
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

  const { getData, isLoading } = useGetDataHook();
  const { postData, isLoading: loading } = usePostDataHook();

  const createUserPasskey = useCallback(async () => {
    try {
      const registerPasskeyChallenge = await getData({
        url: ReactMFEApiRoutes.GET_REGISTER_CHALLENGE,
        notify: true,
      });

      if (!registerPasskeyChallenge.status) return;

      const registrationResponse = await startRegistration(registerPasskeyChallenge.data);

      if (!registrationResponse) return;

      const verifyRegistrationResponse = await postData({
        url: ReactMFEApiRoutes.CREATE_PASSKEY,
        data: { registrationResponse },
        notify: true,
      });

      if (!verifyRegistrationResponse.status) return;

      navigate(ReactRoutesEnum.USER_PROFILE);
    } catch (err) {
      const apiError = new ApiError({
        statusCode: 500,
        message: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: false,
      });
      NotifyError(apiError.message);
      return apiError;
    }
  }, [getData, postData, navigate]);

  const verifyUserWithPasskey = useCallback(async () => {
    try {
      const loginPasskeyChallenge = await getData({
        url: ReactMFEApiRoutes.GET_LOGIN_CHALLENGE,
        notify: true,
      });

      if (!loginPasskeyChallenge.status) return;

      const authenticationResponse = await startAuthentication(loginPasskeyChallenge.data);

      if (!authenticationResponse) return;

      const verifyRegistrationResponse = await postData({
        url: ReactMFEApiRoutes.LOGIN_WITH_PASSKEY,
        data: { authenticationResponse },
        notify: true,
      });

      if (!verifyRegistrationResponse.status) return;

      navigate(ReactRoutesEnum.USER_PROFILE);
    } catch (err) {
      const apiError = new ApiError({
        statusCode: 500,
        message: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: false,
      });
      NotifyError(apiError.message);
      return apiError;
    }
  }, [getData, postData, navigate]);

  return {
    isPasskeySupported,
    passkeyLoading: isLoading || loading,
    createUserPasskey,
    verifyUserWithPasskey,
    checkIfPasskeySupported,
  };
};

export { usePasskeysHook };
