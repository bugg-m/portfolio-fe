import {
  IFolderData,
  IShowInputProps,
  IUseFolderProps,
} from '@react_mfe/types/folder-types';
import { useState } from 'react';

const useFolderHook = ({ folderItems, setIsOpen }: IUseFolderProps) => {
  const [folderData, setFolderData] = useState<IFolderData>({
    ...folderItems,
  });
  const [name, setName] = useState<string | null>(null);
  const [showInput, setShowInput] = useState<IShowInputProps | null>(null);

  const handleShowInput = (isFolder: boolean) => {
    setIsOpen(true);
    setShowInput({ isFolder, isVisible: true });
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === 'Enter' && name && showInput) {
      const data: IFolderData = {
        id: new Date().getTime(),
        name,
        isFolder: showInput?.isFolder,
        subFolders: [],
      };
      setFolderData((prev: IFolderData) => ({
        ...prev,
        subFolders: [...prev.subFolders, data],
      }));
      setName(null);
      setShowInput({ isFolder: showInput?.isFolder, isVisible: false });
    }
  };

  return {
    folderData,
    handleShowInput,
    handleOnKeyDown,
    name,
    setName,
    showInput,
    setShowInput,
  };
};

export default useFolderHook;
