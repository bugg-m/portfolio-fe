import React, { useEffect, useRef } from 'react';
import { Root } from 'react-dom/client';

import mountReactApp from 'react_mfe/Module';

const ReactMounter: React.FC = () => {
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

export default ReactMounter;
