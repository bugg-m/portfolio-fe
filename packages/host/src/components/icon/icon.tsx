import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Icon: React.FC<IconProps> = ({
  src,
  alt,
  className,
  size = 'md',
  ...props
}) => {
  const iconSizes = {
    sm: 'size-4',
    md: 'size-6',
    lg: 'size-10',
    xl: 'size-16',
  };
  return (
    <img
      className={`${iconSizes[size]} ${className}`}
      src={src}
      alt={alt.replace(' ', '-')}
      {...props}
    />
  );
};

export default Icon;
