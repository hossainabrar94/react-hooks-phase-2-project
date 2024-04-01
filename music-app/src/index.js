import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Library from './pages/Library';
import Playlists from './pages/Playlists';
import Artists from './pages/Artists';
import AddSongForm from './pages/AddSongForm';

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
        path: '/addsong',
        element: <AddSongForm />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={router}/>);
