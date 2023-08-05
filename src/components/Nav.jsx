import { NavLink, Outlet } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="container p-3 border-bottom shadow fixed-top text-bg-success mt-2 rounded">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <h2>Stock Market Most Gainers</h2>
        </div>
        <div className="btn-group">
          <NavLink
            to="/"
            className="btn btn-outline-light"
          >
            Back Home
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
