import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Library from './pages/Library';
import Playlists from './pages/Playlists';
import Artists from './pages/Artists';
import Genres from './pages/Genres';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Library />
      },
      {
        path: '/playlists',
        element: <Playlists />
      },
      {
        path: '/artists',
        element: <Artists />
      },
      {
        path: '/genre',
        element: <Genres />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={router}/>);
