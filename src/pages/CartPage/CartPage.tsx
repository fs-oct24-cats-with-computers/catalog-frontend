import { CartEmpty } from '../../components/CartEmpty';
import { CartCard } from '../../components/CartCard';
import { Product } from '../../types/Product';
import './CartPage.scss';

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
];
export const CartPage = () => {
  return (
    <>
      {products !== undefined && products.length > 0 ?
        <section className="cart-page container">
          <h1 className="page__title">Cart</h1>

          <div className="cart-page__content">
            <section className="cart-page__card-holder">
              {/* <div className='cart-page__temp-price'>212</div>
          <div className='cart-page__temp-price'>545</div>
          <div className='cart-page__temp-price'>413</div> */}
              {products.map((product) => (
                <CartCard
                  product={product}
                  key={product.id}
                />
              ))}
            </section>

            <div className="cart-page__total-panel">
              <div className="cart-page__total-panel__count">
                <h2 className="cart-page__total-panel__count__price">
                  $
                  {products.reduce(
                    (count, product) => count + product.price,
                    0,
                  )}
                </h2>
                <p className="cart-page__total-panel__count__text">
                  Total for {products.length} items
                </p>
              </div>

              <button
                className="cart-page__total-panel__button"
                onClick={() => {}}
              >
                Checkout
              </button>
            </div>
          </div>
        </section>
      : <CartEmpty />}
    </>
  );
};
