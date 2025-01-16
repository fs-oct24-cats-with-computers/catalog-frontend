import { useSearchParams } from 'react-router-dom';
import { Product } from '../types/Product';
import { getSearchWith } from '../utils/searchHelper';
import { useMemo } from 'react';

export const useSortParams = (products: Product[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || '';
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 0;

  const handleSortBy = (sortOption: string) => {
    const updatedParams = getSearchWith(searchParams, { sortBy: sortOption });
    setSearchParams(updatedParams);
  };

  const handleItemsPerPage = (value: number) => {
    const updatedParams = getSearchWith(searchParams, {
      itemsPerPage: value.toString(),
    });
    setSearchParams(updatedParams);
  };

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    switch (sortBy) {
      case 'newest':
        return [...products].sort(
          (product1, product2) => product2.year - product1.year,
        );
      case 'alph-asc': // A -> Z
        return [...products].sort((product1, product2) =>
          product1.name.localeCompare(product2.name),
        );
      case 'alph-desc': // Z -> A
        return [...products].sort((product1, product2) =>
          product2.name.localeCompare(product1.name),
        );
      case 'price-asc': // 1 -> 10
        return [...products].sort(
          (product1, product2) => product1.price - product2.price,
        );
      case 'price-desc': // 10 -> 1
        return [...products].sort(
          (product1, product2) => product2.price - product1.price,
        );
      case 'none': // 10 -> 1
        return products;
      default:
        return products;
    }
  }, [products, sortBy]);

  return {
    sortedProducts,
    sortBy,
    handleSortBy,
    itemsPerPage,
    handleItemsPerPage,
  };
};
