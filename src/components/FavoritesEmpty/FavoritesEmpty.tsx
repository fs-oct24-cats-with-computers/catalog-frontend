import './FavoritesEmpty.scss';

export const FavoritesEmpty = () => {
  return (
    <>
      <div className="empty">
        <img
          className="empty__image"
          src="../../../img/product-not-found.png"
          alt="No favorites image"
        />
        <h2 className="empty__title">No favorites yet</h2>
        <p className="empty__description">
          Press #heart# to add item to favorites
        </p>
      </div>
    </>
  );
};
