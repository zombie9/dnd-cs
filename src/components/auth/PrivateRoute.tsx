import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../constants';
import { useAuth } from '../../context/authContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate(routes.LOGIN);
    }
  }, []);
  return <>{children}</>;
};

export default PrivateRoute;
