import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ClientPage from './components/ClientPage';
import ClientList from './components/ClientList';
import NewClientPage from './components/NewClientPage';
import EditClientPage from './components/EditClientPage';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App />, errorElement: <ErrorPage /> },
      { path: '/clients/:clientId', element: <ClientPage /> },
      { path: '/clients/new', element: <NewClientPage /> },
      { path: '/clients/:clientId/edit', element: <EditClientPage /> },
      { path: '/clients', element: <ClientList /> },
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
