import { CartEmpty } from '../../components/CartEmpty';
import { CartCard } from '../../components/CartCard';
import { Product } from '../../types/Product';
import './CartPage.scss';
import { CartTotalPanel } from '../../components/CartTotalPanel/CartTotalPanel';
import { Breadcrumbs } from '../../components/Breadcrumbs';

const products: Product[] = [
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
  },
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
  },
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
  },
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
  },
];
export const CartPage = () => {
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
