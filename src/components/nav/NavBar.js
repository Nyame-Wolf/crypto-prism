import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import prism from '../../assets/coin.png';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <ul className="navigation-ul">
          <li className="NavLink">
            <NavLink to="/" className="logo">
              {location.pathname === '/' ? 'COINS' : '<BACK'}
            </NavLink>
          </li>
        </ul>
      </div>
      <img src={prism} alt="prism logo" className="prism" />
      <p>Crypto Prism</p>
    </nav>
  );
};

export default Navbar;
