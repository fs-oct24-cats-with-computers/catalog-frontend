import { Logo } from '../Logo/Logo';
import './Footer.scss';
export const Footer = () => {
  const goToTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__content">
          <div className="Footer__logo">
            <Logo />
          </div>
          <nav className="Footer__nav">
            <ul className="Footer__nav-list">
              <li className="Footer__nav-item">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="Footer__nav-link"
                >
                  Github
                </a>
              </li>
              <li className="Footer__nav-item">
                <a
                  href="/contacts"
                  className="Footer__nav-link"
                >
                  Contacts
                </a>
              </li>
              <li className="Footer__nav-item">
                <a
                  href="/rigths"
                  className="Footer__nav-link"
                >
                  Rights
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#/"
            className="footer__button"
            onClick={goToTop}
          >
            <p className="smallText footer__back-to-top--text">Back to top</p>
            <img
              className="smallIcon footer__back-to-top--icon"
              src=""
              alt="Arrow top"
            />
          </a>

          {/* <div className="Footer__button">
            <p className="Footer__button-text">Back to top</p>
            <button
              type="button"
              className="button button--back-to-top"
              onClick={goToTop}
              aria-label="Back to top"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
