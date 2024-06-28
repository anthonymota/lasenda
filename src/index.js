import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ClientPage, { loader as clientDetailLoader } from './pages/ClientPage';
import UserProfile from './pages/UserProfile';
import Bookkeeping from './pages/Bookkeeping';
import Trucking from './pages/Trucking';
import Corporation from './pages/Corporation';
import ClientList, { loader as clientsLoader } from './pages/ClientList';
import ClientsRootLayout, {
  action as deleteClientAction,
} from './pages/ClientsRootLayout';
import NewClientPage from './pages/NewClientPage';
import EditClientPage from './pages/EditClientPage';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { action as manipulateClientAction } from './components/ClientForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'clients',

        children: [
          {
            index: true,
            element: <ClientList />,
            loader: clientsLoader,
          },
          {
            path: ':clientId',
            loader: clientDetailLoader,
            element: <ClientsRootLayout />,
            action: deleteClientAction,
            id: 'client-detail',
            children: [
              {
                index: true,
                element: <ClientPage />,
              },
              {
                path: 'edit',
                element: <EditClientPage />,
                action: manipulateClientAction,
              },
              { path: 'bookkeeping', element: <Bookkeeping /> },
              { path: 'corporation', element: <Corporation /> },
              { path: 'trucking', element: <Trucking /> },
            ],
          },
          {
            path: 'new',
            element: <NewClientPage />,
            action: manipulateClientAction,
          },
        ],
      },
      { path: 'profile', element: <UserProfile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);

/*root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/
