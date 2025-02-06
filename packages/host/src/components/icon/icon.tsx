import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className, ...props }) => {
  return (
    <img
      className={`md:size-6 size-4 ${className}`}
      src={src}
      alt={alt.replace(' ', '-')}
      {...props}
    />
  );
};

export default Icon;
