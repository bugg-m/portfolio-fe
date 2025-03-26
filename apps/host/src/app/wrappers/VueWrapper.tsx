/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { App } from 'vue';
import mountVueApp from 'vue_mfe/Module';

const VueAppWrapper = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<App<any> | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      appRef.current = mountVueApp(containerRef.current);
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
