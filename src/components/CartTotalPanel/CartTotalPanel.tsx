import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import { useAppDispatch } from '../../app/hooks';
import { cartProductsSlice } from '../../features/cart';
import './CartTotalPanel.scss';

interface Props {
  products: ProductWithQuantity[];
  // deleteProducts: React.Dispatch<React.SetStateAction<ProductWithQuantity[]>>;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartTotalPanel: React.FC<Props> = ({
  products,
  // deleteProducts,
  openModal,
}) => {
  const dispatch = useAppDispatch();

  const applyOrder = () => {
    products.map((product) =>
      dispatch(cartProductsSlice.actions.removeProduct(product.id)),
    );
    // deleteProducts([]);
    openModal(true);
  };

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
        onClick={applyOrder}
      >
        Checkout
      </button>
    </div>
  );
};
