import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useAuth } from '../../context/authContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate(ROUTES.LOGIN);
    }
  }, []);
  return <>{children}</>;
};

export default PrivateRoute;
