import React from 'react';

import { folderData } from '@react_mfe/data/folderData';

import { RootFolder } from './root-folders';

const Folders = () => {
  return (
    <div className="w-full h-screen flex items-start py-20">
      <RootFolder folderItems={folderData} />
    </div>
  );
};

export { Folders };
