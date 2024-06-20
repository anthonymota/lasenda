import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ClientPage from './pages/ClientPage';
import ClientList, { loader as clientsLoader } from './pages/ClientList';
import ClientsRootLayout from './pages/ClientsRootLayout';
import NewClientPage from './pages/NewClientPage';
import EditClientPage from './pages/EditClientPage';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App />, errorElement: <ErrorPage /> },
      {
        path: 'clients',
        element: <ClientsRootLayout />,
        children: [
          {
            index: true,
            element: <ClientList />,
            loader: clientsLoader,
          },
          { path: ':clientId', element: <ClientPage /> },
          { path: 'new', element: <NewClientPage /> },
          { path: ':clientId/edit', element: <EditClientPage /> },
        ],
      },
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
