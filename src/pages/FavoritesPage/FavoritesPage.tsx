import { FavoritesEmpty } from '../../components/FavoritesEmpty';

export const FavoritesPage = () => {
  return (
    <>
      <div className="page container">
        <h1 className="page__title">Favorites</h1>
        <FavoritesEmpty />
      </div>
    </>
  );
};
