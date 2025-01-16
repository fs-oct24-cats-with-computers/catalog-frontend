import './PhonesPage.scss';
import { useEffect, useState } from 'react';

import { getProducts } from '../../api';
import { ProductsListWithPagination } from '../../components/ProductListWithPagination';
import { Product } from '../../types/Product';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { Dropdown } from '../../components/Dropdown';
// import { useSortParams } from '../../hooks/useSortParams';

// const sortByOptions = [
//   { label: 'newest', value: 'newest' },
//   { label: 'price ⬇️', value: 'price-desc' },
//   { label: 'price ⬆️', value: 'price-asc' },
//   { label: 'alphabet ⬇️', value: 'alph-desc' },
//   { label: 'alphabet ⬆️', value: 'alph-asc' },
// ];

// const itemsPerPageOptions = [
//   { label: '16', value: '16' },
//   { label: '32', value: '32' },
//   { label: '64', value: '64' },
// ];

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [error, setError] = useState('');

  // const { sortedProducts, sortBy, handleSortBy } = useSortParams(phones);
  // const { sortedProducts, sortBy, handleSortBy, itemsPerPage } = useSortParams(phones);

  useEffect(() => {
    getProducts()
      .then((products) =>
        setPhones(products.filter((product) => product.category === 'phones')),
      )
      .catch(() => setError('Something went wrong'));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="page container">
        <Breadcrumbs />
        <h1 className="page__title">Mobile phones</h1>
        <p className="page__subtitle">{phones.length} models</p>
        <div className="page__dropdown--wrapper">
          <div className="page__dropdown--wrapper--first">
            <label
              className="page__dropdown--wrapper--first--label"
              htmlFor="dropdown"
            >
              Sort by
            </label>
            {/* <Dropdown
              options={sortByOptions}
              sortBy={sortBy}
              handleSortBy={handleSortBy}
            /> */}
          </div>
        </div>
        <ProductsListWithPagination
          products={phones}
          // products={sortedProducts}
        />
      </div>
    </>
  );
};
