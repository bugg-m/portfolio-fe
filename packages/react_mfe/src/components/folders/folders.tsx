import useFolderHook from '@react_mfe/hooks/use-folder-hooks';
import { IFolderData } from '@react_mfe/types/folder-types';
import React, { useState } from 'react';
import RootFolderItem from './root-folder-item';
import FolderInput from './folder-input';

const Folder: React.FC<{ folderItems: IFolderData }> = ({ folderItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    setName,
    showInput,
    folderData,
    setShowInput,
    handleShowInput,
    handleOnKeyDown,
  } = useFolderHook({
    folderItems,
    setIsOpen,
  });
  if (folderData.isFolder) {
    return (
      <div className="ml-10">
        <RootFolderItem
          folderName={folderData.name}
          setIsOpen={setIsOpen}
          handleShowInput={handleShowInput}
        />
        {showInput?.isVisible && <FolderInput />}
        <div className={`${isOpen ? 'block' : 'hidden'}`}>
          {folderData.subFolders.map((file) => (
            <div key={file.id}>
              <Folder folderItems={file} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div key={folderData.id} className="text-sm ml-10 mb-3">
        <span role="img" aria-label="folder">
          📉 {folderData.name}
        </span>
      </div>
    );
  }
};

export default Folder;
