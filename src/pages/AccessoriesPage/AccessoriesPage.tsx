import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../api';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductsListWithPagination } from '../../components/ProductListWithPagination';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts()
      .then((products) =>
        setAccessories(
          products.filter((product) => product.category === 'accessories'),
        ),
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
        <h1 className="page__title">Accessories</h1>
        <p className="page__subtitle">{accessories.length} models</p>
        <ProductsListWithPagination products={accessories} />
      </div>
    </>
  );
};
