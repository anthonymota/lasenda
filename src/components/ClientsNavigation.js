import { NavLink } from 'react-router-dom';
import './ClientsNavigation.css';

export default function ClientNavigation() {
  return (
    <header>
      <nav>
        <ul className='client-header'>
          <li>
            <NavLink
              to='/clients'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              All Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clients/new'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              New Client
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
