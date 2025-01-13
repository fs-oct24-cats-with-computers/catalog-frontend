import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import React from 'react';

interface Props {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  isBurgerMenuOpen,
  setIsBurgerMenu,
}) => {
  const chooseActivePage = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'burger__nav_link burger__is-active' : 'burger__nav_link';

  const chooseActivePageButton = ({ isActive }: { isActive: boolean }) =>
    isActive ?
      'burger__buttons_element burger__is-active'
    : 'burger__buttons_element';

  const onClickNavButton = () => {
    setIsBurgerMenu(true);
  };

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
          <img
            src="img/header_components/Favourites.png"
            alt="Favourites"
          />
        </NavLink>
        <NavLink
          to="/cart"
          className={chooseActivePageButton}
          onClick={onClickNavButton}
        >
          <img
            src="img/header_components/Shopping bag.png"
            alt="Shopping bag"
          />
        </NavLink>
      </div>
    </section>
  );
};
