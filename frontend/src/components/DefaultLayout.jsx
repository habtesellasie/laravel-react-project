import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Defaultlayout = () => {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to='login' />;
  }

  return (
    <div>
      <h1>Default layout</h1>
      <Outlet />
    </div>
  );
};

export default Defaultlayout;
