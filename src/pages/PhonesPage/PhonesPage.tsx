import './PhonesPage.scss';
import { useEffect, useState } from 'react';

import { getProducts } from '../../api';
import { Product } from '../../types/Product';

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
        <h1 className="page__title">Mobile phones</h1>
        <p className="page__subtitle">{phones.length} models</p>
      </div>
    </>
  );
};
