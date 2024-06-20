import ClientsNavigation from '../components/ClientsNavigation';
import { Outlet } from 'react-router-dom';

export default function ClientsRootLayout() {
  return (
    <div>
      <ClientsNavigation />
      <Outlet />
    </div>
  );
}
