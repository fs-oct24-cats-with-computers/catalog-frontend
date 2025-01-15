import { CartEmpty } from '../../components/CartEmpty';
import { Product } from '../../types/Product';
import './CartPage.scss';

interface Props {
  products: Product[];
}

export const CartPage: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products !== undefined && products.length > 0 ?
        <section className="cart-page container">
          <h1 className="cart-page__title">Cart</h1>

          <section className="cart-page__card-holder">
            {/* <div className='cart-page__temp-price'>212</div>
          <div className='cart-page__temp-price'>545</div>
          <div className='cart-page__temp-price'>413</div> */}
            {products.map((product) => (
              <div
                className="cart-page__temp-price"
                key={product.id}
              >
                {product.price}
              </div>
            ))}
          </section>

          <div className="cart-page__total-panel">
            <div className="cart-page__total-panel__count">
              <h2 className="cart-page__total-panel__count__price">
                ${products.reduce((count, product) => count + product.price, 0)}
              </h2>
              {/* {products.reduce(
              (count, product) => (
                count + product.price
              ) countPrice = 0,
            )} */}
              <p className="cart-page__total-panel__count__text">
                Total for {products.length} items
              </p>
            </div>

            <button className="cart-page__total-panel__button">Checkout</button>
          </div>
        </section>
      : <CartEmpty />}
    </>
  );
  //<CartEmpty />;
};
