import { NavLink, Outlet } from 'react-router-dom';
import settingIcon from '../assets/settings.png';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <header className="">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="">
            <NavLink
              to="/"
              className="nav-title"
            >
              &lt;
            </NavLink>
          </li>
          <li>
            <p className="nav-title">Stock Market Most Gainers</p>
          </li>
          <li className="">
            <img src={settingIcon} alt="back-icon" width="24" height="24" />
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
