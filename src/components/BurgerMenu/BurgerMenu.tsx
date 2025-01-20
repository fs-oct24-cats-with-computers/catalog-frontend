import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import React from 'react';
<<<<<<< HEAD
import { useAppSelector } from '../../app/hooks';
import Favorites from '../../../public/img/header_components/Favourites.svg?react';
import ShoppingBag from '../../../public/img/header_components/Shopping bag.svg?react';
||||||| parent of 5af9c42 (implemented dark mode for empty pages, burger menu, productDetails, Back)
=======
import Favorites from '../../../public/img/header_components/Favourites.svg?react';
import ShoppingBag from '../../../public/img/header_components/Shopping bag.svg?react';
>>>>>>> 5af9c42 (implemented dark mode for empty pages, burger menu, productDetails, Back)

interface Props {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  isBurgerMenuOpen,
  setIsBurgerMenu,
}) => {
  const favoriteProducts = useAppSelector((state) => state.favoriteProducts);
  const cartProducts = useAppSelector((state) => state.cartProducts);

  const chooseActivePage = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'burger__nav_link burger__is-active' : 'burger__nav_link';

  const chooseActivePageButton = ({ isActive }: { isActive: boolean }) =>
    isActive ?
      'burger__buttons_element burger__is-active'
    : 'burger__buttons_element';

  const onClickNavButton = () => {
    setIsBurgerMenu(true);
  };

  if (isBurgerMenuOpen) {
    document.body.classList.add('set-overflow');
  } else {
    document.body.classList.remove('set-overflow');
  }

  return (
    <section className={`burger ${isBurgerMenuOpen && 'burger__is-open'}`}>
      <nav className="burger__nav">
        <NavLink
          to="/"
          className={chooseActivePage}
          onClick={onClickNavButton}
        >
          <div>HOME</div>
        </NavLink>
        <NavLink
          to="/phones"
          className={chooseActivePage}
          onClick={onClickNavButton}
        >
          <div>PHONES</div>
        </NavLink>
        <NavLink
          to="/tablets"
          className={chooseActivePage}
          onClick={onClickNavButton}
        >
          <div>TABLETS</div>
        </NavLink>
        <NavLink
          to="/accessories"
          className={chooseActivePage}
          onClick={onClickNavButton}
        >
          <div>ACCESSORIES</div>
        </NavLink>
      </nav>
      <div className="burger__buttons">
        <NavLink
          to="/favorites"
          className={chooseActivePageButton}
          onClick={onClickNavButton}
        >
          <Favorites />
          {/* <img
            src="img/header_components/Favourites.svg"
            alt="Favourites"
<<<<<<< HEAD
          /> */}
          {!!favoriteProducts.length && (
            <span className="header__buttons_element--state">
              {favoriteProducts.length}
            </span>
          )}
||||||| parent of 5af9c42 (implemented dark mode for empty pages, burger menu, productDetails, Back)
          />
=======
          /> */}
>>>>>>> 5af9c42 (implemented dark mode for empty pages, burger menu, productDetails, Back)
        </NavLink>
        <NavLink
          to="/cart"
          className={chooseActivePageButton}
          onClick={onClickNavButton}
        >
          <ShoppingBag />
          {/* <img
            src="img/header_components/Shopping bag.svg"
            alt="Shopping bag"
<<<<<<< HEAD
          /> */}
          {!!cartProducts.length && (
            <span className="header__buttons_element--state">
              {cartProducts.length}
            </span>
          )}
||||||| parent of 5af9c42 (implemented dark mode for empty pages, burger menu, productDetails, Back)
          />
=======
          /> */}
>>>>>>> 5af9c42 (implemented dark mode for empty pages, burger menu, productDetails, Back)
        </NavLink>
      </div>
    </section>
  );
};
