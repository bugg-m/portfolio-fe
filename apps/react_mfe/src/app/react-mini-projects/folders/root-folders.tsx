import React, { useState } from 'react';

import useFolderHook from '@react_mfe/hooks/use-folder-hooks';
import { IFolderData } from '@react_mfe/types/folder-types';

import { RootFolderItem } from './root-folder-item';

const RootFolder: React.FC<{ folderItems: IFolderData }> = ({ folderItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { folderData, showInput, setShowInput, handleOnKeyDown, setName, handleShowInput } =
    useFolderHook({
      folderItems,
      setIsOpen,
    });

  return folderData.isFolder ? (
    <div className="ml-10">
      <RootFolderItem
        folderName={folderData.name}
        setIsOpen={setIsOpen}
        handleShowInput={handleShowInput}
      />
      {showInput?.isVisible && (
        <div className="flex gap-1 mb-2">
          <span
            role="img"
            aria-label="folder"
          >
            {showInput?.isFolder ? '📂' : '📄'}
          </span>
          <input
            type="text"
            autoFocus
            onKeyDown={handleOnKeyDown}
            onChange={e => setName(e.target.value)}
            onBlur={() => setShowInput({ ...showInput, isVisible: false })}
            className="px-1 py-0.5"
          />
        </div>
      )}
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        {folderData.subFolders.map(file => (
          <RootFolder
            key={file.id}
            folderItems={file}
          />
        ))}
      </div>
    </div>
  ) : (
    <div
      key={folderData.id}
      className="text-sm ml-10 text-start mb-3"
    >
      <span
        role="img"
        aria-label="file"
      >
        📄 {folderData.name}
      </span>
    </div>
  );
};

export { RootFolder };
