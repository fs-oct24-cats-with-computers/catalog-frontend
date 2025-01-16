import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import './CartTotalPanel.scss';

interface Props {
  products: ProductWithQuantity[];
}

export const CartTotalPanel: React.FC<Props> = ({ products }) => {
  return (
    <div className="total-panel">
      <div className="total-panel__count">
        <h2 className="total-panel__count__price">
          $
          {products.reduce(
            (count, product) =>
              product.quantity ? count + product.price * product.quantity : 0,
            0,
          )}
        </h2>
        <p className="total-panel__count__text">
          Total for {products.length} items
        </p>
      </div>

      <button
        className="total-panel__button"
        onClick={() => {}}
      >
        Checkout
      </button>
    </div>
  );
};
