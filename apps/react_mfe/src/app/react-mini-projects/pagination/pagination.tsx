import React from 'react';
import { Button, Icon } from '@bugg-m/bugg-ui';

import { step } from '@react_mfe/constants/icons';
import usePaginationHook from '@react_mfe/hooks/use-pagination-hooks';

import Products, { IProductCardProps } from './products';

const Pagination: React.FC = () => {
  const { size, products, currentPage, setCurrentPage } = usePaginationHook();

  return (
    <div className="w-full flex-center gap-5 flex-col py-10">
      <div className="md:px-20 py-10">
        <span className="header">Pagination Component</span>
        <p className="paragraph-sm animate-paragraph bg-primary-50 text-neutral-700 mb-6 border-x-4 border-primary-300 p-4">
          A lightweight, performance-optimized React component that efficiently divides large data
          sets into pages. Enjoy smooth transitions and easy navigation through pages, making
          content browsing a breeze.
        </p>
      </div>
      <div className="w-full md:w-4/5 grid sm:grid-cols-3 grid-cols-2 md:grid-cols-5 gap-2 place-content-around mb-6">
        {products.map((product: IProductCardProps) => (
          <Products
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="w-full md:w-4/5 bg-secondary-200 h-20 flex-center gap-2 md:gap-5 rounded-md">
        {currentPage > 1 && (
          <Button
            size="icon"
            colorScheme="secondary"
            tone={400}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            <Icon src={step} />
          </Button>
        )}
        {Array.from({ length: size }).map((_, index) => (
          <Button
            key={index}
            size="sm"
            onClick={() => setCurrentPage(index + 1)}
            colorScheme="secondary"
            tone={400}
            className={
              currentPage === index + 1
                ? 'bg-secondary-500 text-white'
                : 'text-neutral-50 bg-secondary-400'
            }
          >
            {index + 1}
          </Button>
        ))}
        {currentPage < size && (
          <Button
            size="icon"
            colorScheme="secondary"
            tone={400}
            onClick={() => setCurrentPage(prev => (prev < size ? prev + 1 : prev))}
          >
            <Icon
              src={step}
              className="rotate-180"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
