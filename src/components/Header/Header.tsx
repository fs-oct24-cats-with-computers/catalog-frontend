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
  // const chooseActivePage = (isActive: boolean) => {
  //   return (classnames({'header_is-active': isActive}))
  // }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <header className="header">
      <div className="header_logo">
        <NavLink to="#/">
          <img
            src="img/header_components/Logo.png"
            alt="Nice gadgets logo"
          />
        </NavLink>
      </div>
      {!isMobile && (
        <nav className="header_nav">
          <NavLink
            to="#/"
            className={'header_nav_link header_is-active'}
          >
            <div>HOME</div>
          </NavLink>
          <NavLink
            to="#/phones"
            className={'header_nav_link'}
          >
            <div>PHONES</div>
          </NavLink>
          <NavLink
            to="#/talbets"
            className={'header_nav_link'}
          >
            <div>TALBETS</div>
          </NavLink>
          <NavLink
            to="#/accessories"
            className={'header_nav_link'}
          >
            <div>ACCESSORIES</div>
          </NavLink>
        </nav>
      )}

      <div className="header_buttons header-right">
        {!isMobile ?
          <>
            <NavLink
              to="#/likes"
              className="header_buttons_element header_is-active"
            >
              <img
                src="img/header_components/Favourites.png"
                alt="Favourites"
              />
            </NavLink>
            <NavLink
              to="#/shopbag"
              className="header_buttons_element"
            >
              <img
                src="img/header_components/Shopping bag.png"
                alt="Shopping bag"
              />
            </NavLink>
          </>
        : <NavLink
            to="."
            className="header_buttons_element"
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
