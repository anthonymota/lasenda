import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
)

/*root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/