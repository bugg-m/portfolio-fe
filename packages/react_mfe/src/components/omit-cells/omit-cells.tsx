import useOmitCellsHook from '@react_mfe/hooks/use-omit-cells-hooks';
import React, { useMemo } from 'react';

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
    return cells
      .flat(1)
      .map((cell, index) => (
        <button
          key={index}
          disabled={cell === 0 || selectedDiv.includes(index) || isCubeClearing}
          onClick={() => handleColorCube(index)}
          className={`size-5 ${
            cell === 1
              ? `border border-gray-500 cursor-pointer ${
                  selectedDiv.includes(index) ? 'bg-green-400' : 'bg-white'
                } rounded-md`
              : ''
          }`}
        />
      ));
  }, [cells, selectedDiv, handleColorCube, isCubeClearing]);

  return (
    <div className="w-full h-screen mx-auto place-items-center">
      <div
        className={`w-1/2 h-4/5 bg-gray-200 border border-gray-300 rounded-md p-5 gap-5 grid grid-cols-${cells[0].length} place-content-center`}
      >
        {renderCubes}
      </div>
    </div>
  );
};

export default OmitCells;
