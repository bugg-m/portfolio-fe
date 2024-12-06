import { useState } from 'react';

const usePagination = (
  currentPage: number,
  pageSize: number,
  getCurrentPage: (page: number) => void
) => {
  const [selectedPage, setSelected] = useState(currentPage);

  const handleClick = (page: number) => {
    if (isNaN(page)) {
      return;
    }
    setSelected(page);
  };

  const handleNavigate = (btn: 'next' | 'prev') => {
    if (
      (selectedPage === 1 && btn === 'prev') ||
      (selectedPage === pageSize && btn === 'next')
    ) {
      return;
    }
    if (btn === 'next') {
      setSelected((prev) => {
        const newPage = Math.min(prev + 1, pageSize);
        getCurrentPage(newPage);
        return newPage;
      });
    } else {
      setSelected((prev) => {
        const newPage = Math.max(prev - 1, 0);
        getCurrentPage(newPage);
        return newPage;
      });
    }
  };

  return { selectedPage, handleClick, handleNavigate };
};

export default usePagination;
