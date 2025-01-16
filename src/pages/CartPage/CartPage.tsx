import { CartEmpty } from '../../components/CartEmpty';
import { CartCard } from '../../components/CartCard';
import { CartTotalPanel } from '../../components/CartTotalPanel/CartTotalPanel';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import { useState } from 'react';
// import { cartProductsSlice } from '../../features/cart';
import './CartPage.scss';

// use when we can add here information
// const prdcs: ProductWithQuantity[] = cartProductsSlice.getInitialState();

const productsFromRedux: ProductWithQuantity[] = [
  {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
    quantity: 2,
  },
  {
    id: 2,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
    quantity: 1,
  },
  {
    id: 3,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
    quantity: 1,
  },
  {
    id: 4,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
    quantity: 1,
  },
];

export const CartPage = () => {
  const [products, setProducts] =
    useState<ProductWithQuantity[]>(productsFromRedux);

  return (
    <>
      {products !== undefined && products.length > 0 ?
        <section className="cart-page container">
          <Breadcrumbs />
          <h1 className="page__title">Cart</h1>

          <div className="cart-page__content">
            <section className="cart-page__card-holder">
              {products.map((product) => (
                <CartCard
                  product={product}
                  products={products}
                  setProducts={setProducts}
                  key={product.id}
                />
              ))}
            </section>

            <CartTotalPanel products={products} />
          </div>
        </section>
      : <CartEmpty />}
    </>
  );
};
