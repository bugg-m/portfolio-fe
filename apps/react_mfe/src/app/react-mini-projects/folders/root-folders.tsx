import React, { useState } from 'react';

import useFolderHook from '@react_mfe/hooks/use-folder-hooks';
import { IFolderData } from '@react_mfe/types/folder-types';

import { RootFolderItem } from './root-folder-item';
// import FolderInput from './folder-input';

const RootFolder: React.FC<{ folderItems: IFolderData }> = ({ folderItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { folderData, handleShowInput } = useFolderHook({
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
      {/* {showInput?.isVisible && <FolderInput />} */}
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        {folderData.subFolders.map(file => (
          <div key={file.id}>
            <RootFolder folderItems={file} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div
      key={folderData.id}
      className="text-sm ml-10 mb-3"
    >
      <span
        role="img"
        aria-label="folder"
      >
        📉 {folderData.name}
      </span>
    </div>
  );
};

export { RootFolder };
