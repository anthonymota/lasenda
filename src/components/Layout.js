import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
