import { useEffect, useRef } from 'react';
import { Root } from 'react-dom/client';

import mountReactApp from 'react_mfe/Module';

const VueAppWrapper = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<Root | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      appRef.current = mountReactApp(containerRef.current);
    }

    return () => {
      if (appRef.current) {
        appRef.current.unmount();
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default VueAppWrapper;
