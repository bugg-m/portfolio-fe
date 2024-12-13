import React from 'react';

const Products: React.FC<{ product: IProductCardProps }> = ({ product }) => {
  return (
    <div>
      <div className="mb-2 rounded-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="size-full object-cover"
        />
      </div>
      <p className="text-nowrap text-sm font-medium text-gray-500">
        {product.title.length > 25
          ? `${product.title.slice(0, 25)}...`
          : product.title}
      </p>
    </div>
  );
};

export default Products;

export interface IProductCardProps {
  id: number;
  title: string;
  thumbnail: string;
}
