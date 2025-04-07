import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from '@bugg-m/bugg-ui';
import { ReactRoutesEnum } from '@enums/app-routes-enum';
import { StorageNamesEnum } from '@enums/storage-names-enum';
import { getLocalStorage } from '@utils/core-utilities';

import { userCircle } from '@react_mfe/constants/icons';
import { userProfile } from '@react_mfe/constants/illustrations';

interface UserDetailsProps {
  username: string;
  email: string;
  passkey?: string;
}

const UserProfile: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsProps>();
  const navigate = useNavigate();
  useEffect(() => {
    const userData = getLocalStorage<UserDetailsProps>(StorageNamesEnum.USER_DETAILS);
    if (!userData) return;
    setUserDetails(userData);
  }, []);

  return (
    <main className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 py-5">
      <section className="flex-center order-2 md:order-1 col-span-1">
        <Card className="h-auto w-full flex items-start justify-start gap-5 flex-col">
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
          <Button
            size="sm"
            onClick={() => navigate(ReactRoutesEnum.CREATE_PASSKEY)}
          >
            Create Passkey
          </Button>
          {userDetails?.passkey ? (
            <div className="mt-6 p-4 border rounded-md">
              <h3 className="text-lg font-semibold text-neutral-500">Passkey</h3>
              <p className="text-neutral-400 break-all">{userDetails?.passkey}</p>
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
