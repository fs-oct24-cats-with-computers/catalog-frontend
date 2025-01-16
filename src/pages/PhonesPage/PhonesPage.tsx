import './PhonesPage.scss';
import { useEffect, useState } from 'react';

import { getProducts } from '../../api';
import { ProductsListWithPagination } from '../../components/ProductListWithPagination';
import { Product } from '../../types/Product';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts()
      .then((products) =>
        setPhones(products.filter((product) => product.category === 'phones')),
      )
      .catch(() => setError('Something went wrong'));
  }, []);

  if (error) {
    <p>{error}</p>;
  }

  return (
    <>
      <div className="page container">
        <Breadcrumbs />
        <h1 className="page__title">Mobile phones</h1>
        <p className="page__subtitle">{phones.length} models</p>
        <ProductsListWithPagination products={phones} />
      </div>
    </>
  );
};
