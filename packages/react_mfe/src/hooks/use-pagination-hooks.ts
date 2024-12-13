import { useEffect, useState } from 'react';

const usePaginationHook = () => {
  // render buttons based on length of data divided by size
  // handle next and prev fn
  const size = 10;

  // state for current page
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(10);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        'https://dummyjson.com/products?limit=10&skip=0'
      );
      const data = await response.json();
      console.log(data);

      setProducts(data?.products);
      setLimit(data?.limit);
      setSkip(data?.skip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { size, skip, limit, products, currentPage, setCurrentPage };
};

export default usePaginationHook;
