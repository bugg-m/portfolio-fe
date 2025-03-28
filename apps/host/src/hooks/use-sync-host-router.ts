import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type RouteNavigated = CustomEvent<string>;

export function useSyncHostRouter({ basename }: { basename: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lastDispatchedRef = useRef<string>('');
  const isSyncingRef = useRef<boolean>(false);

  useEffect(() => {
    const hostNavigated = ({ detail }: RouteNavigated) => {
      if (detail === location.pathname) return;
      isSyncingRef.current = true;
      navigate(detail);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 0);
    };

    window.addEventListener('syncRemotePath', hostNavigated as EventListener);
    return () => window.removeEventListener('syncRemotePath', hostNavigated as EventListener);
  }, [location, navigate]);

  useEffect(() => {
    if (!location.pathname.startsWith(basename)) return;
    const rawPath = location.pathname.replace(basename, '') || '/';
    const normalizedPath = rawPath.replace(/\/+/g, '/');
    if (isSyncingRef.current) return;
    if (lastDispatchedRef.current === normalizedPath) return;
    lastDispatchedRef.current = normalizedPath;
    window.dispatchEvent(new CustomEvent('syncHostPath', { detail: normalizedPath }));
  }, [location, basename]);
}
