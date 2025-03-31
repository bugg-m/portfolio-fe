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
        className={`md:size-28 sm:size-20 size-16 ${
          cell === 1
            ? `border border-secondary-500 cursor-pointer ${
                selectedDiv.includes(index) ? 'bg-primary-400' : 'bg-white'
              } rounded-md`
            : ''
        }`}
      />
    ));
  }, [cells, selectedDiv, handleColorCube, isCubeClearing]);
  return (
    <div className="w-full h-screen flex-center flex-col">
      <div className="md:px-10 py-10">
        <span className="header">Omit Cells Game</span>
        <p className="paragraph-sm animate-paragraph bg-primary-50 text-neutral-700 mb-6 border-x-4 border-primary-300 p-4">
          "Omit Cells" is an interactive React game where you click on grid cells to color them with
          a primary background. The game tracks the order in which you color each cell, and once all
          cells are filled, it automatically clears the colors in the same sequence. It's a fun
          twist on a memory game that challenges you to follow the order of your actions.
        </p>
      </div>
      <div
        className={`lg:w-2/5 md:w-3/5 sm:w-4/5 w-full h-auto bg-secondary-200 border border-secondary-300 rounded-md p-5 gap-5 grid grid-cols-3 place-items-center`}
      >
        {renderCubes}
      </div>
    </div>
  );
};

export default OmitCells;
