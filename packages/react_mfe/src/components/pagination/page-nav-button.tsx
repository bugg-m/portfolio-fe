import { IPageNavButtonProps } from '@react_mfe/types/pagination-types';
import React from 'react';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';

const PageNavButton: React.FC<IPageNavButtonProps> = ({
  disabled,
  value,
  selected,
  iconLeft = false,
  iconRight = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`flex min-w-8 items-center justify-center gap-1 rounded-md px-2 py-1 text-base font-normal hover:bg-gray-500 cursor-pointer ${
        selected ? 'bg-gray-500 text-white' : 'text-gray-900 bg-gray-400'
      }`}
      {...props}
    >
      {iconLeft && (
        <span>
          <RiArrowLeftDoubleFill size={20} />
        </span>
      )}
      <span>{value}</span>
      {iconRight && (
        <span>
          <RiArrowRightDoubleFill size={20} />
        </span>
      )}
    </button>
  );
};

export default PageNavButton;
