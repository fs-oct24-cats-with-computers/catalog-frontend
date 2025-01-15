import { Product } from '../../types/Product';
import './CartTotalPanel.scss';

interface Props {
  products: Product[];
}

export const CartTotalPanel: React.FC<Props> = ({ products }) => {
  return (
    <div className="total-panel">
      <div className="total-panel__count">
        <h2 className="total-panel__count__price">
          ${products.reduce((count, product) => count + product.price, 0)}
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
