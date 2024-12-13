import React from 'react';

export interface IPageNavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  selected?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
}
