import React from 'react';
import PageButton from './PageButton';
import usePagination from './usePagination';

interface IPageButtonGroup {
  pageSize: number;
  currentPage: number;
  getCurrentPage: (page: number) => void;
}

const PageButtonGroup: React.FC<IPageButtonGroup> = ({
  pageSize,
  getCurrentPage,
  currentPage = 1,
}) => {
  const { selectedPage, handleClick, handleNavigate } = usePagination(
    currentPage,
    pageSize,
    getCurrentPage
  );
  return (
    <div className="flex gap-2">
      <PageButton
        disabled={selectedPage === 1}
        onClick={() => handleNavigate('prev')}
        color="primary"
        label={'Prev'}
      />
      {Array.from({ length: pageSize }).map((_, ind) => (
        <PageButton
          key={ind}
          onClick={handleClick}
          label={ind + 1}
          selected={ind + 1 === selectedPage}
        />
      ))}
      <PageButton
        onClick={() => handleNavigate('next')}
        color="primary"
        label={'Next'}
        disabled={selectedPage === pageSize}
      />
    </div>
  );
};

export default PageButtonGroup;
