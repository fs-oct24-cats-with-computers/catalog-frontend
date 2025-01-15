import { Product } from '../../types/Product';
import './CartCard.scss';
import CloseIcon from '../../../public/icons/Close.svg?react';

type Props = {
  product: Product;
};

export const CartCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="card">
      <div className="card__firstRow">
        <div className="card__firstRow--close">
          <CloseIcon className="card__firstRow--close--img" />
          {/* <img
            src="../icons/Close.svg"
            alt="close icon"
            className="card__firstRow--close--img"
          /> */}
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
          {/* add 'disabled' class for disabled buttons */}
          <button className="card__secondRow--control--minus disabled">
            —
          </button>
          <div className="card__secondRow--control--quantity">1</div>
          <button className="card__secondRow--control--plus">+</button>
        </div>
        <div className="card__secondRow--price">${product.price}</div>
      </div>
    </div>
  );
};
