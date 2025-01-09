import logoIcon from '../../images/icons/Logo.svg';
import './Logo.scss';

export const Logo = () => (
  <a href="/">
    <img
      src={logoIcon}
      alt="Logo"
      className="Logo"
    />
  </a>
);
