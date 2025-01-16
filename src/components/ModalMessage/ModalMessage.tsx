import './ModalMessage.scss';

interface Props {
  closeMessage: () => void;
}

export const ModalMessage: React.FC<Props> = ({ closeMessage }) => {
  return (
    <div className="message">
      <div className="message__content">
        <h2 className="message__content__text">
          Your order has been accepted!
        </h2>
        <button
          className="message__content__button"
          onClick={closeMessage}
        >
          OK
        </button>
      </div>
    </div>
  );
};
