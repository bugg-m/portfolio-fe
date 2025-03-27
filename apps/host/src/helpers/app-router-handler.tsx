import React, { Suspense } from 'react';
import GlobalLoader from '@components/loader/global-loader';

import { useSyncHostRouter } from '@host/hooks/use-sync-host-router';

const AppRouterHandler: React.FC<{ children: React.ReactNode; basename: string }> = ({
  children,
  basename,
}) => {
  useSyncHostRouter({ basename });
  return <Suspense fallback={<GlobalLoader />}>{children}</Suspense>;
};

export { AppRouterHandler };
