import './ProductsPage.scss';
import { useEffect, useState } from 'react';

import { getProducts } from '../../api';
import { ProductsListWithPagination } from '../../components/ProductListWithPagination';
import { Product } from '../../types/Product';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Dropdown } from '../../components/Dropdown';
import { useSortParams } from '../../hooks/useSortParams';
import { itemsPerPageOptions, sortByOptions } from '../../utils/sortingArrays';
import { Category } from '../../types/Category';
import { pageTitle } from '../../utils/titleHelper';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  type: Category;
};

export const ProductsPage: React.FC<Props> = ({ type }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  const { theme, setTheme } = useTheme();

  const title = pageTitle(type);

  const {
    sortBy,
    handleSortBy,
    sortedProducts,
    itemsPerPage,
    handleItemsPerPage,
  } = useSortParams(products);

  useEffect(() => {
    getProducts()
      .then((allProducts) =>
        setProducts(allProducts.filter((product) => product.category === type)),
      )
      .catch(() => setError('Something went wrong'));
  }, [type]);

  const handleThemeClick = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="page container">
        <Breadcrumbs />
        <div onClick={handleThemeClick}>
          {theme === 'light-mode' ? '🌃' : '🌅'}
        </div>
        <h1 className="page__title">{title}</h1>
        <p className="page__subtitle">{products.length} models</p>
        <div className="page__dropdown">
          <div className="page__dropdown--sortBy">
            <p className="page__dropdown--sortBy--label">Sort by</p>
            <Dropdown
              sort={sortBy}
              handleSortBy={handleSortBy}
              options={sortByOptions}
            />
          </div>
          <div className="page__dropdown--items">
            <p className="page__dropdown--items--label">Items on page</p>
            <Dropdown
              sort={itemsPerPage}
              options={itemsPerPageOptions}
              handleItemsPerPage={handleItemsPerPage}
            />
          </div>
        </div>
        <ProductsListWithPagination
          itemsPerPage={itemsPerPage}
          products={sortedProducts}
        />
      </div>
    </>
  );
};
