import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../api';

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
      <h1>Phones Page</h1>
      <p>{phones.length}</p>
    </>
  );
};
