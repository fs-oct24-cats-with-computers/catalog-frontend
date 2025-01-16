import './CartCard.scss';
import CloseIcon from '../../../public/icons/Close.svg?react';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import { useAppDispatch } from '../../app/hooks';
import { cartProductsSlice } from '../../features/cart';
import cn from 'classnames';

type Props = {
  product: ProductWithQuantity;
  products: ProductWithQuantity[];
  setProducts: React.Dispatch<React.SetStateAction<ProductWithQuantity[]>>;
};

export const CartCard: React.FC<Props> = ({
  product,
  products,
  setProducts,
}) => {
  const dispatch = useAppDispatch();
  const isQuantityMinimal = product.quantity === 1;

  const handleRemove = () => {
    setProducts(products.filter((tempProduct) => tempProduct.id != product.id));
    dispatch(cartProductsSlice.actions.removeProduct(product.id));
  };

  const handleDecrease = () => {
    if (product.quantity !== undefined) product.quantity--;
    setProducts([
      ...products.filter((tempProduct) => tempProduct.id < product.id),
      product,
      ...products.filter((tempProduct) => tempProduct.id > product.id),
    ]);
    dispatch(cartProductsSlice.actions.decreaseQuantity(product.id));
  };

  const handleIncrease = () => {
    if (product.quantity !== undefined) product.quantity++;
    setProducts([
      ...products.filter((tempProduct) => tempProduct.id < product.id),
      product,
      ...products.filter((tempProduct) => tempProduct.id > product.id),
    ]);
    dispatch(cartProductsSlice.actions.increaseQuantity(product.id));
  };

  return (
    <div className="card">
      <div className="card__firstRow">
        <div
          className="card__firstRow--close"
          onClick={handleRemove}
        >
          <CloseIcon className="card__firstRow--close--img" />
        </div>
        <div className="card__firstRow--phone">
          <img
            src={product.image}
            alt={product.name}
            className="card__firstRow--phone--img"
          />
        </div>
        <div className="card__firstRow--info">{product.name}</div>
      </div>

      <div className="card__secondRow">
        <div className="card__secondRow--control">
          <button
            className={cn('card__secondRow--control--minus', {
              disabled: isQuantityMinimal,
            })}
            disabled={isQuantityMinimal}
            onClick={handleDecrease}
          >
            —
          </button>
          <div className="card__secondRow--control--quantity">
            {product.quantity}
          </div>
          <button
            className="card__secondRow--control--plus"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <div className="card__secondRow--price">${product.price}</div>
      </div>
    </div>
  );
};
