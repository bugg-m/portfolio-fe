import React from 'react';

import { IRootFolderItemProps } from '@react_mfe/types/folder-types';

const RootFolderItem: React.FC<IRootFolderItemProps> = ({
  setIsOpen,
  folderName,
  handleShowInput,
}) => {
  return (
    <div className="flex gap-2 mb-3">
      <span
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        role="img"
        aria-label="folder"
        className="bg-secondary-300 border border-secondary-300 px-1 py-0.5 rounded-md text-sm cursor-pointer"
      >
        📂 {folderName}
      </span>
      <div className="flex gap-1">
        <button
          onClick={() => handleShowInput(true)}
          className="px-1 py-0.5 rounded-md bg-secondary-300"
        >
          <span
            role="img"
            aria-label="folder"
          >
            📂+
          </span>
        </button>
        <button
          onClick={() => handleShowInput(false)}
          className="px-1 py-0.5 rounded-md bg-secondary-300"
        >
          <span
            role="img"
            aria-label="folder"
          >
            📄+
          </span>
        </button>
      </div>
    </div>
  );
};

export { RootFolderItem };
