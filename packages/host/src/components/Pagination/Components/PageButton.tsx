import React from 'react';

export interface IPageButton {
  label: string | number;
  onClick: (pageNode: number) => void;
  color?: 'primary' | 'secondary';
  selected?: boolean;
  disabled?: boolean;
}

const PageButton: React.FC<IPageButton> = ({
  label,
  color = 'secondary',
  onClick,
  selected = false,
  disabled = false,
}) => {
  const btnClass = {
    primary: 'bg-blue-700 text-white',
    secondary: 'bg-gray-500 text-white',
    selected: 'bg-gray-800 text-white',
  };

  return (
    <button
      disabled={disabled}
      onClick={() => onClick(Number(label))}
      className={`${
        selected ? btnClass.selected : btnClass[color]
      } py-1 px-2 min-w-10 rounded-md bg-gray-500 text-white`}
    >
      {label}
    </button>
  );
};

export default PageButton;
