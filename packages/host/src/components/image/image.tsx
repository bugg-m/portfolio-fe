import React from 'react';

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  return (
    <img
      className={`${className}`}
      src={src}
      alt={alt.replace(' ', '-')}
      {...props}
    />
  );
};

export default Image;
