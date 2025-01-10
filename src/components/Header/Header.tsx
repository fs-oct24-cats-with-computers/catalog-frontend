import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';
// import classnames from 'classnames';

export const Header = () => {
  const mobileScreen: number = 640;
  const [isMobile, checkIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < mobileScreen) {
      checkIsMobile(true);
    } else {
      checkIsMobile(false);
    }
    console.log(window.innerWidth);
  };

  //add to the hedder for all NawLink when Route is work
  const chooseActivePage = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'header__nav_link header__is-active' : 'header__nav_link';

  const chooseActivePageButton = ({ isActive }: { isActive: boolean }) =>
    isActive ?
      'header__buttons_element header__is-active'
    : 'header__buttons_element';

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/home">
          <img
            src="img/header_components/Logo.png"
            alt="Nice gadgets logo"
          />
        </NavLink>
      </div>
      {!isMobile && (
        <nav className="header__nav">
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
            to="/tablets"
            className={chooseActivePage}
          >
            <div>TABLETS</div>
          </NavLink>
          <NavLink
            to="/accessories"
            className={chooseActivePage}
          >
            <div>ACCESSORIES</div>
          </NavLink>
        </nav>
      )}

      <div className="header__buttons header-right">
        {!isMobile ?
          <>
            <NavLink
              to="/favorites"
              className={chooseActivePageButton}
            >
              <img
                src="img/header_components/Favourites.png"
                alt="Favourites"
              />
            </NavLink>
            <NavLink
              to="/cart"
              className={chooseActivePageButton}
            >
              <img
                src="img/header_components/Shopping bag.png"
                alt="Shopping bag"
              />
            </NavLink>
          </>
        : <NavLink
            to="."
            className="header__buttons_element"
          >
            <img
              src="img/header_components/Menu.png"
              alt="Burger menu"
            />
          </NavLink>
        }
      </div>
    </header>
  );
};
