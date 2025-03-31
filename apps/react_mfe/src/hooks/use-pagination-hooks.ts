import { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from '@hooks/use-window-dimensions';
const usePaginationHook = () => {
  const { width } = useWindowDimensions();
  const size = width > 640 ? 10 : 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const skipData = (currentPage - 1) * 10;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skipData}`
      );
      const data = await response.json();

      setProducts(data?.products);
      setLimit(data?.limit);
    } catch (error) {
      console.error(error);
    }
  }, [limit, currentPage]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return { size, limit, products, currentPage, setCurrentPage };
};

export default usePaginationHook;
