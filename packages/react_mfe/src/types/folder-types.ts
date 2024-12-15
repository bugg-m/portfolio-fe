export interface IShowInputProps {
  isFolder: boolean;
  isVisible: boolean;
}

export interface IUseFolderProps {
  folderItems: IFolderData;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFolderData {
  id: number;
  name: string;
  isFolder: boolean;
  subFolders: IFolderData[];
}

export interface IRootFolderItemProps {
  handleShowInput: (isFolder: boolean) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  folderName: string;
}
