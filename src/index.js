import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ClientPage, { loader as clientDetailLoader } from './pages/ClientPage';
import ClientList, { loader as clientsLoader } from './pages/ClientList';
import { action as manipulateClientAction } from './components/ClientForm';
import ClientsRootLayout, {
  action as deleteClientAction,
} from './pages/ClientsRootLayout';
import Authentication,{action as authAction } from './pages/Authentication';
import UserProfile from './pages/UserProfile';
import NewClientPage from './pages/NewClientPage';
import EditClientPage from './pages/EditClientPage';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';

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
            ],
          },
          {
            path: 'new',
            element: <NewClientPage />,
            action: manipulateClientAction,
          },
        ],
      },
      {path:'auth', element: <Authentication Page />, action:authAction},
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
