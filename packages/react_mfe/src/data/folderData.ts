import { IFolderData } from '@react_mfe/types/folder-types';

export const folderData: IFolderData = {
  id: 1,
  name: 'root',
  isFolder: true,
  subFolders: [
    {
      id: 2,
      name: 'folder1',
      isFolder: true,
      subFolders: [
        {
          id: 3,
          name: 'subfolder1',
          isFolder: true,
          subFolders: [],
        },
        {
          id: 4,
          name: 'subfolder2',
          isFolder: true,
          subFolders: [],
        },
      ],
    },
    {
      id: 5,
      name: 'folder2',
      isFolder: true,
      subFolders: [
        {
          id: 6,
          name: 'subfolder1',
          isFolder: false,
          subFolders: [],
        },
        {
          id: 7,
          name: 'subfolder2',
          isFolder: false,
          subFolders: [],
        },
      ],
    },
    {
      id: 8,
      name: 'package.json',
      isFolder: false,
      subFolders: [],
    },
  ],
};
