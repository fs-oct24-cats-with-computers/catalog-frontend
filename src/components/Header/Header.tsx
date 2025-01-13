import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';
import { BurgerMenu } from '../BurgerMenu';
// import classnames from 'classnames';

export const Header = () => {
  const mobileScreen: number = 640;
  const [isMobile, checkIsMobile] = useState(false);
  const [isBurgerClose, checkIsBurgerClose] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < mobileScreen) {
      checkIsMobile(true);
    } else {
      checkIsMobile(false);
      checkIsBurgerClose(true);
    }
  };

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
    <>
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img
              src="img/header_components/Logo.png"
              alt="Nice gadgets logo"
              onClick={() => {
                checkIsBurgerClose(true);
              }}
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
        )}

        <div className="header__buttons">
          {!isMobile ?
            <>
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
            </>
          : isBurgerClose ?
            <NavLink
              to="#"
              className="header__buttons_element"
              onClick={() => {
                checkIsBurgerClose(false);
              }}
            >
              <img
                src="img/header_components/Menu.png"
                alt="Burger menu"
              />
            </NavLink>
          : <NavLink
              to="#"
              className="header__buttons_element"
              onClick={() => {
                checkIsBurgerClose(true);
              }}
            >
              <img
                src="img/header_components/Close.png"
                alt="Close burger menu"
              />
            </NavLink>
          }
        </div>
      </header>
      {!isBurgerClose && <BurgerMenu />}
    </>
  );
};
