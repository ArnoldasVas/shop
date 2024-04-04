import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

//components
// import User from '../User/User';
import AdminUser from '../AdminUser/AdminUser';

import './navbar.scss';

function Navbar() {
  const { token } = useAuth();
  return (
    <nav className="nav-container">
      <h1>My Shop</h1>
      <ul>
        <li>
          <NavLink to="/">All items</NavLink>
        </li>
        <li>
          <NavLink to="/my-card">My Card</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        )}
      </ul>
      {/* <User /> */}
      <AdminUser />
    </nav>
  );
}

export default Navbar;
