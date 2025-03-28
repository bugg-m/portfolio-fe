import React, { useMemo } from 'react';

import useOmitCellsHook from '@react_mfe/hooks/use-omit-cells-hooks';

const OmitCells: React.FC = () => {
  const cells = useMemo(
    () => [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    []
  );

  const { isCubeClearing, handleColorCube, selectedDiv } = useOmitCellsHook({
    cells,
  });

  const renderCubes = useMemo(() => {
    return cells.flat(1).map((cell, index) => (
      <button
        key={index}
        disabled={cell === 0 || selectedDiv.includes(index) || isCubeClearing}
        onClick={() => handleColorCube(index)}
        className={`size-32 ${
          cell === 1
            ? `border border-secondary-500 cursor-pointer ${
                selectedDiv.includes(index) ? 'bg-primary-400' : 'bg-white'
              } rounded-md`
            : ''
        }`}
      />
    ));
  }, [cells, selectedDiv, handleColorCube, isCubeClearing]);
  const cols = cells[0].length;
  return (
    <div
      className={`w-1/2 h-4/5 bg-secondary-200 border border-secondary-300 rounded-md p-5 gap-5 grid grid-cols-${cols} place-items-center`}
    >
      {renderCubes}
    </div>
  );
};

export default OmitCells;
