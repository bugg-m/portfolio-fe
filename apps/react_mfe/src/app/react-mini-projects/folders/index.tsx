import React from 'react';

import { folderData } from '@react_mfe/data/folderData';

import { RootFolder } from './root-folders';

const Folders: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-start gap-5 md:p-10">
      <div className="md:px-20 py-10">
        <span className="header">File Explorer</span>
        <p className="paragraph-sm animate-paragraph bg-primary-50 text-neutral-700 mb-6 border-x-4 border-primary-300 p-4">
          An intuitive React application that recursively displays nested folder structures. Users
          can expand or collapse folders, add new subfolders, and easily navigate through a dynamic
          directory hierarchy—all with a clean, responsive UI.
        </p>
      </div>
      <RootFolder folderItems={folderData} />
    </div>
  );
};

export { Folders };
