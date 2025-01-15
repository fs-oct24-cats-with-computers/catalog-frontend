import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import '../TabletsPage/TabletsPage.scss';
import { Product } from '../../types/Product';
import { getProducts } from '../../api';
import { ProductsListWithPagination } from '../../components/ProductListWithPagination';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts()
      .then((products) =>
        setTablets(
          products.filter((product) => product.category === 'tablets'),
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
        <h1 className="page__title">Tablets</h1>
        <p className="page__subtitle">{tablets.length} models</p>
        <ProductsListWithPagination products={tablets} />
      </div>
    </>
  );
};
