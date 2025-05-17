import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from '@bugg-m/bugg-ui';
import { ReactRoutesEnum } from '@enums/app-routes-enum';

import { userCircle } from '@react_mfe/constants/icons';
import { userProfile } from '@react_mfe/constants/illustrations';

import { useGetDataHook } from '@api/hooks/use-get-data-hook';
import { ReactMFEApiRoutes } from '@api/routes/react-mfe-api-routes';

interface UserDetailsProps {
  username: string;
  email: string;
  displayName: string;
}

const UserProfile: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsProps | null>(null);
  const navigate = useNavigate();
  const { isLoading, getData } = useGetDataHook<UserDetailsProps>();

  const getUserDetails = useCallback(async () => {
    const user = await getData({ url: ReactMFEApiRoutes.GET_USER_DETAILS, notify: true });

    if (!user.status) return;

    setUserDetails(user.data);
  }, [getData]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const logoutUser = useCallback(async () => {
    const logout = await getData({ url: ReactMFEApiRoutes.LOGOUT, notify: true });

    if (!logout.status) return;

    setUserDetails(null);
  }, [getData]);

  return (
    <main className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 py-5">
      <section className="flex-center order-2 md:order-1 col-span-1">
        <Card
          loading={isLoading}
          className="h-auto w-full flex items-start justify-start gap-5 flex-col"
        >
          <div className="flex-center space-x-4">
            <Image
              src={userCircle}
              alt="user avatar"
              className="w-20 h-auto rounded-full object-cover"
            />
            <div className="text-start">
              <h2 className="text-xl font-bold text-neutral-600">{userDetails?.username}</h2>
              <p className="text-neutral-400">{userDetails?.email}</p>
            </div>
          </div>
          <div className="flex-between-center gap-4">
            <Button
              size="sm"
              disabled
              title="Working on this feature"
              onClick={() => navigate(ReactRoutesEnum.CREATE_PASSKEY)}
            >
              Explore Passkey
            </Button>
            {!userDetails ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(ReactRoutesEnum.LOG_IN)}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="outline"
                colorScheme="error"
                size="sm"
                onClick={logoutUser}
              >
                Logout
              </Button>
            )}
          </div>
          {userDetails?.displayName ? (
            <div className="mt-6 w-full p-4 border rounded-md">
              <h3 className="text-lg font-semibold text-neutral-500">Passkey</h3>
              <p className="text-neutral-400 break-all">{userDetails?.displayName}</p>
            </div>
          ) : (
            <p className="paragraph-sm text-neutral-500">No! Passkeys Found.</p>
          )}
        </Card>
      </section>

      <div className="col-span-1 order-1 md:order-2 flex-center sm:p-6">
        <Image
          src={userProfile}
          alt="user profile"
          className="hover-scale-90 image-responsive object-contain"
        />
      </div>
    </main>
  );
};

export { UserProfile };
