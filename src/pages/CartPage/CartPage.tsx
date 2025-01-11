import { CartEmpty } from '../../components/CartEmpty';

export const CartPage = () => {
  return (
    <>
      <div className="page container">
        <h1 className="page__title">Cart</h1>
        <CartEmpty />
      </div>
    </>
  );
};
