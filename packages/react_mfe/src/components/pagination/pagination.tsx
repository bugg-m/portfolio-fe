import React from 'react';
import PageNavButton from './page-nav-button';
import usePaginationHook from '@react_mfe/hooks/use-pagination-hooks';
import Products, { IProductCardProps } from './products';

const Pagination: React.FC = () => {
  const { size, skip, limit, products, currentPage, setCurrentPage } =
    usePaginationHook();
  console.log({ skip, limit, currentPage });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-4/5 h-screen grid grid-cols-5 gap-2 place-content-around">
        {products.map((product: IProductCardProps) => (
          <Products product={product} />
        ))}
      </div>
      <div className="w-4/5 bg-gray-200 h-20  flex justify-center items-center gap-5 rounded-md">
        {currentPage > 1 && (
          <PageNavButton
            onClick={() => setCurrentPage((prev) => prev - 1)}
            value="prev"
            iconLeft
          />
        )}
        {Array.from({ length: size }).map((_, index) => (
          <PageNavButton
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            value={`${index + 1}`}
            selected={currentPage === index + 1}
          />
        ))}
        {currentPage < size && (
          <PageNavButton
            onClick={() =>
              setCurrentPage((prev) => (prev < size ? prev + 1 : prev))
            }
            value="Next"
            iconRight
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;
