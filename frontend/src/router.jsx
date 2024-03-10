import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';

import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';

import Dashboard from './views/Dashboard';
import NotFound from './views/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/users' />,
      },
      {
        path: '/dashbaord',
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
