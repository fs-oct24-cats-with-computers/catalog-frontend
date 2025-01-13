import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const chooseActivePage = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'burger__nav_link burger__is-active' : 'burger__nav_link';

  const chooseActivePageButton = ({ isActive }: { isActive: boolean }) =>
    isActive ?
      'burger__buttons_element burger__is-active'
    : 'burger__buttons_element';

  return (
    <section className="burger">
      <nav className="burger__nav">
        <NavLink
          to="/"
          className={chooseActivePage}
        >
          <div>HOME</div>
        </NavLink>
        <NavLink
          to="/phones"
          className={chooseActivePage}
        >
          <div>PHONES</div>
        </NavLink>
        <NavLink
          to="/talbets"
          className={chooseActivePage}
        >
          <div>TALBETS</div>
        </NavLink>
        <NavLink
          to="/accessories"
          className={chooseActivePage}
        >
          <div>ACCESSORIES</div>
        </NavLink>
      </nav>
      <div className="burger__buttons">
        <NavLink
          to="/likes"
          className={chooseActivePageButton}
        >
          <img
            src="img/header_components/Favourites.png"
            alt="Favourites"
          />
        </NavLink>
        <NavLink
          to="/shopbag"
          className={chooseActivePageButton}
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
