import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type RouteNavigated = CustomEvent<string>;

export function useSyncRemoteRouter({ basename }: { basename: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lastDispatchedRef = useRef<string>('');
  const isSyncingRef = useRef<boolean>(false);

  const cleanBasename = basename.endsWith('/') ? basename.slice(0, -1) : basename;
  const cleanPath = '/' + location.pathname.replace(/^\/+/, '');
  const newPath = (cleanBasename + cleanPath).replace(/\/+/g, '/');

  useEffect(() => {
    if (isSyncingRef.current) return;
    if (lastDispatchedRef.current === newPath) return;
    lastDispatchedRef.current = newPath;
    window.dispatchEvent(new CustomEvent('syncRemotePath', { detail: newPath }));
  }, [newPath]);

  useEffect(() => {
    const remoteNavigated = ({ detail }: RouteNavigated) => {
      if (detail === location.pathname) return;
      isSyncingRef.current = true;
      navigate(detail);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 0);
    };

    window.addEventListener('syncHostPath', remoteNavigated as EventListener);
    return () => window.removeEventListener('syncHostPath', remoteNavigated as EventListener);
  }, [location, navigate]);
}
