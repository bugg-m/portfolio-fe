import React from 'react';
import { Card, Image } from '@bugg-m/bugg-ui';

const Products: React.FC<{ product: IProductCardProps }> = ({ product }) => {
  return (
    <Card
      hoverAble
      className="flex-center flex-col"
    >
      <div className="mb-2 md:w-3/5 w-1/2 h-auto rounded-md">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="size-full object-cover"
        />
      </div>
      <p className="text-ellipsis text-sm font-medium text-neutral-500">
        {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
      </p>
    </Card>
  );
};

export default Products;

export interface IProductCardProps {
  id: number;
  title: string;
  thumbnail: string;
}
