import { Link } from 'react-router-dom';
import logoIcon from '../../images/icons/Logo.svg';
import './Logo.scss';

export const Logo = () => (
  <Link to="/home">
    <img
      src={logoIcon}
      alt="Logo"
      className="Logo"
    />
  </Link>
);
