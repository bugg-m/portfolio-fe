import React from 'react';
import { Icon } from '@bugg-m/bugg-ui';

import { step } from '@react_mfe/constants/icons';
import { IPageNavButtonProps } from '@react_mfe/types/pagination-types';
// import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';

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
      className={`flex-center min-w-8 gap-1 rounded-md px-2 py-1 text-base font-normal hover:bg-secondary-500 cursor-pointer ${
        selected ? 'bg-secondary-500 text-white' : 'text-neutral-900 bg-secondary-400'
      }`}
      {...props}
    >
      {iconLeft && (
        <span>
          <Icon src={step} />
        </span>
      )}
      <span>{value}</span>
      {iconRight && (
        <span>
          <Icon
            src={step}
            className="rotate-180"
          />
        </span>
      )}
    </button>
  );
};

export default PageNavButton;
