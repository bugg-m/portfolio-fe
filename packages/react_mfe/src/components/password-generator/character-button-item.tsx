import React from 'react';
import { ICharacterButtonProps } from '@react_mfe/types/password-generator-types';

const CharacterButtonItem: React.FC<ICharacterButtonProps> = ({
  label,
  isChecked,
  handleCheck,
}) => {
  const name = label.replace(' ', '-');
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        onChange={handleCheck}
        checked={isChecked}
        type="checkbox"
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CharacterButtonItem;
