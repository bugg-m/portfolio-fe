import React, { useEffect, useState } from 'react';
import { Card, Image } from '@bugg-m/bugg-ui';
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

  useEffect(() => {
    const userData = getLocalStorage<UserDetailsProps>(StorageNamesEnum.USER_DETAILS);
    if (!userData) return;
    setUserDetails(userData);
  }, []);

  return (
    <main className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 py-5">
      <section className="flex-center order-2 md:order-1 flex-col col-span-1 p-4 space-y-4 max-w-4xl mx-auto my-16">
        <Card>
          <div className="flex-center space-x-4">
            <Image
              src={userCircle}
              alt="user avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-start">
              <h2 className="text-xl font-bold text-gray-800">{userDetails?.username}</h2>
              <p className="text-gray-600">{userDetails?.email}</p>
            </div>
          </div>
          {userDetails?.passkey && (
            <div className="mt-6 p-4 border rounded-md bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Passkey</h3>
              <p className="text-gray-700 break-all">{userDetails?.passkey}</p>
            </div>
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
