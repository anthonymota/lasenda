import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Client from './components/Client';
import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/clients/:clientId',
    element: <Client />,
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
