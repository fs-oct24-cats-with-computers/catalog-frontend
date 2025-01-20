import { Link } from 'react-router-dom';
import './ShopByCategory.scss';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api';
import { Product } from '../../types/Product';

const phonesImg = '/img/categories/phones-category.png';
const tabletsImg = '/img/categories/tablets-category.png';
const accessoriesImg = '/img/categories/accessories-category.png';

export const Categories = () => {
  const [phonesQuantity, setPhonesQuantity] = useState<number>(0);
  const [tabletsQuantity, setTabletsQuantity] = useState<number>(0);
  const [accessoriesQuantity, setAccessoriesQuantity] = useState<number>(0);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts()
      .then((products: Product[]) => {
        setPhonesQuantity(
          products.filter((product) => product.category === 'phones').length,
        );
        setTabletsQuantity(
          products.filter((product) => product.category === 'tablets').length,
        );
        setAccessoriesQuantity(
          products.filter((product) => product.category === 'accessories')
            .length,
        );
      })
      .catch(() => setError('Something went wrong'));
  }, []);

  if (error) {
    <p>{error}</p>;
  }

  const categories = [
    {
      name: 'phones',
      img: phonesImg,
      title: 'Mobile phones',
      quantity: phonesQuantity,
    },
    {
      name: 'tablets',
      img: tabletsImg,
      title: 'Tablets',
      quantity: tabletsQuantity,
    },
    {
      name: 'accessories',
      img: accessoriesImg,
      title: 'Accessories',
      quantity: accessoriesQuantity,
    },
  ];

  return (
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>
      <div className="categories__wrapper">
        {categories.map((category) => (
          <Link
            to={`/${category.name}`}
            key={category.name}
            className="categories__link"
          >
            <img
              src={category.img}
              alt={category.name}
              className="categories__img"
            />
            <h4 className="categories__link-title">{category.title}</h4>
            <p className="categories__link-text">{category.quantity} models</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
