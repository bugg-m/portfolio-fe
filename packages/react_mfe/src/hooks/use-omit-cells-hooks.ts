import { useCallback, useState } from 'react';

const useOmitCellsHook = ({ cells }: IOmitCellsHookProps) => {
  const [selectedDiv, setSelectedDiv] = useState<number[]>([]);
  const [isCubeClearing, setIsCubeClearing] = useState<boolean>(false);

  const handleClearCube = () => {
    setIsCubeClearing(true);
    const timer: NodeJS.Timeout = setInterval(() => {
      setSelectedDiv((prev) => {
        const newPrev = prev.slice();
        newPrev.pop();

        if (newPrev.length === 0) {
          clearInterval(timer);
          setIsCubeClearing(false);
        }

        return newPrev;
      });
    }, 300);
  };

  const handleColorCube = useCallback(
    (index: number) => {
      const newCube = [...selectedDiv, index];
      setSelectedDiv(newCube);

      if (newCube.length === cells.flat(1).filter(Boolean).length) {
        handleClearCube();
      }
    },
    [selectedDiv, cells]
  );
  return { isCubeClearing, selectedDiv, handleColorCube };
};

export default useOmitCellsHook;

interface IOmitCellsHookProps {
  cells: number[][];
}
