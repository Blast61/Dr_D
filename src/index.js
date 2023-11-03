import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
