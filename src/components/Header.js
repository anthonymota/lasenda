import React from 'react';
import { NavLink } from 'react-router-dom';
import company_image from '../images/la-senda-image.png';
import classes from './Layout.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={company_image} />
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clients'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clients/new'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              New Client
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
