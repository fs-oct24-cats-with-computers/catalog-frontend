import { Link } from 'react-router-dom';
import './ShopByCategory.scss';
// import { getProductsQuantityByCategory } from '///';
// import { useEffect, useState } from 'react';

const phonesImg = 'public/img/categories/phones-category.png';

const tabletsImg = 'public/img/categories/tablets-category.png';
const accessoriesImg = 'public/img/categories/accessories-category.png';

export const Categories = () => {
  // const [phonesQuantity, setPhonesQuantity] = useState<number>(0);
  // const [tabletsQuantity, setTabletsQuantity] = useState<number>(0);
  // const [accessoriesQuantity, setAccessoriesQuantity] = useState<number>(0);

  // useEffect(() => {
  //   const getProductQuantities = async () => {
  //     const { phones, tablets, accessories } =
  //       await getProductsQuantityByCategory();

  //     setPhonesQuantity(phones);
  //     setTabletsQuantity(tablets);
  //     setAccessoriesQuantity(accessories);
  //   };

  //   getProductQuantities();
  // });

  const categories = [
    {
      name: 'phones',
      img: phonesImg,
      title: 'Mobile phones',
      quantity: 1, //phonesQuantity,
    },
    {
      name: 'tablets',
      img: tabletsImg,
      title: 'Tablets',
      quantity: 1, //tabletsQuantity,
    },
    {
      name: 'accessories',
      img: accessoriesImg,
      title: 'Accessories',
      quantity: 1, //accessoriesQuantity,
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
            <h4>{category.title}</h4>
            <p className="body-text categories__text">
              {category.quantity} models
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
