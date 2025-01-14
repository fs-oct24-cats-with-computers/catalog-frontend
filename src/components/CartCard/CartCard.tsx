import { Product } from '../../types/Product';
import './CartCard.scss';

type Props = {
  product: Product;
};

export const CartCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="card">
      <div className="card__firstRow">
        <div className="card__firstRow--close">
          <img
            src="../../../public/icons/Close.svg"
            alt="close icon"
            className="card__firstRow--close--img"
          />
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
          <img
            className="card__secondRow--control--minus"
            src="../../../public/icons/Minus.svg"
            alt="delete an item"
          />
          <div className="card__secondRow--control--quantity">1</div>
          <img
            className="card__secondRow--control--minus"
            src="../../../public/icons/Plus.svg"
            alt="add an item"
          />
        </div>
        <div className="card__secondRow--price">$999</div>
      </div>
    </div>
  );
};
