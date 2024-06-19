import React from 'react';
import { NavLink } from 'react';
import company_image from '../images/la-senda-image.png';

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
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              {' '}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clients'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clients/new'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Client
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
